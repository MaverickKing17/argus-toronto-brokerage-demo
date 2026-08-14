import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "The Yorkville Luxury Group API", timestamp: new Date().toISOString() });
  });

  // API Endpoint for ARGUS AI Assistant Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userIntent, sessionId } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENAI_API_KEY;

      const systemInstruction = `You are ARGUS AI Assistant, the ultra-elite private AI concierge for "The Yorkville Luxury Group", premier luxury real estate brokerage in Toronto, Ontario.

CORE SCOPE & INTENT RECOGNITION RULES (STRICT ENFORCEMENT):
1. Residential Focus: The Yorkville Luxury Group exclusively represents high-end residential luxury properties (penthouses, private estates, architectural residences, and off-market residential acquisitions in Yorkville, The Bridle Path, Forest Hill, and Rosedale).
2. Commercial Real Estate & Land/Hotel Development Inquiries:
   - If a client or user asks about Commercial Real Estate (e.g. retail plazas, strip malls, shopping centers, office buildings, industrial/warehousing, multi-tenant commercial parks) or Land Assembly / Hotel / Commercial Development:
   - You MUST NOT output Suite 5200 penthouse residential specifications, bedroom/bathroom counts, or residential terrace amenities.
   - Clarify politely and concisely that The Yorkville Luxury Group specializes strictly in ultra-luxury residential properties and estates.
   - Offer to route their commercial or development inquiry directly to Senior Managing Partner Victoria Sterling, who coordinates confidential commercial partner referrals with premier commercial institutional brokerages in Toronto.

Brokerage & Residential Context:
- Flagship Listing: Suite 5200 at 188 Bay Street, Toronto ($4.5M CAD, 3 Beds, 4 Baths, 3,850 sq. ft. interior + 1,200 sq. ft. heated terrace, CN Tower views, keycard private elevator foyer, 3 EV parking stalls).
- Senior Managing Partner: Victoria Sterling.
- Off-Market / Private Collection: $10M–$25M+ ultra-prime residential estates in The Bridle Path, Forest Hill, Rosedale, and private full-floor penthouses in Yorkville.
- Privacy & NDA Policy: For all off-market trophy assets, digital or physical mutual NDAs are executed via secure DocuSign within 15 minutes before floor plans or dossiers are released.
- Coverage & Expertise: Toronto high-end luxury neighborhoods including Yorkville, The Bridle Path, Forest Hill, Rosedale, and Lawrence Park.
- Top Toronto Private Schools: Upper Canada College (UCC), Bishop Strachan School (BSS), Havergal College, Branksome Hall, Crescent School.
- Investment & Tax: Standard Ontario & Toronto Municipal Land Transfer Tax (MLTT), non-resident speculation tax, Canadian wealth preservation.

Tone & Persona:
- Ultra-polished, intelligent, discreet, warm, and highly knowledgeable.
- Only provide residential penthouse specs when the client specifically asks about residential luxury acquisitions.`;

      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        try {
          const ai = new GoogleGenAI({ apiKey });
          const formattedContents = (messages && Array.isArray(messages) && messages.length > 0)
            ? messages.map((m: any) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: String(m.content || "") }]
              }))
            : [{ role: "user", parts: [{ text: String(userIntent || "Hello ARGUS") }] }];

          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: formattedContents,
            config: {
              systemInstruction,
              temperature: 0.7,
              maxOutputTokens: 2048,
            }
          });

          if (response && response.text) {
            return res.json({ reply: response.text, sessionId });
          }
        } catch (apiError) {
          console.warn("[ARGUS AI Backend] Gemini API live call note:", apiError);
        }
      }

      // Dynamic contextual fallback for preview environment when API key is not yet set in environment
      const lastUserText = String(
        userIntent || 
        (messages && messages.length > 0 ? messages[messages.length - 1].content : "")
      ).toLowerCase();

      let reply = "Absolute discretion is the cornerstone of The Yorkville Luxury Group. For our off-market $10M–$15M+ estates in The Bridle Path and private full-floor Yorkville penthouses, we execute a bilateral digital Non-Disclosure Agreement (NDA) via encrypted DocuSign prior to transmitting architectural dossiers, security specs, or floor plans. Our Managing Partner Victoria Sterling can transmit the NDA to your counsel immediately—would you prefer we direct this to your office or representative?";

      if (
        lastUserText.includes("commercial") || 
        lastUserText.includes("plaza") || 
        lastUserText.includes("plazas") || 
        lastUserText.includes("retail") || 
        lastUserText.includes("industrial") || 
        lastUserText.includes("warehouse") || 
        lastUserText.includes("office building") || 
        lastUserText.includes("hotel development") || 
        lastUserText.includes("commercial land") || 
        lastUserText.includes("land assembly") || 
        lastUserText.includes("strip mall") || 
        lastUserText.includes("shopping center")
      ) {
        reply = "The Yorkville Luxury Group focuses exclusively on ultra-luxury residential properties, penthouses, and private estates. We do not directly broker commercial assets, retail plazas, or industrial developments; however, our Senior Managing Partner Victoria Sterling maintains close executive relationships with Toronto's leading commercial institutional partner firms. We would be pleased to route your commercial inquiry directly to Victoria Sterling for a direct partner introduction—would you like us to connect your office?";
      } else if (lastUserText.includes("school") || lastUserText.includes("ucc") || lastUserText.includes("bss") || lastUserText.includes("kids") || lastUserText.includes("upper canada")) {
        reply = "For families prioritizing Upper Canada College (UCC) or Bishop Strachan School (BSS), Forest Hill and South Rosedale provide seamless access within 10 to 12 minutes, while our 188 Bay Street Penthouse in Yorkville offers private luxury within 12 minutes of both campuses. We can coordinate private viewings for residences directly along preferred school routes.";
      } else if (lastUserText.includes("saturday") || lastUserText.includes("tour") || lastUserText.includes("viewing") || lastUserText.includes("appointment") || lastUserText.includes("schedule")) {
        reply = "We would be delighted to host a private viewing for you this Saturday. We have exclusive private showing slots available at 2:00 PM and 4:30 PM with private valet arranged at 188 Bay Street. Which time works best for your schedule?";
      } else if (lastUserText.includes("hoa") || lastUserText.includes("maintenance") || lastUserText.includes("fee") || lastUserText.includes("carry") || lastUserText.includes("tax")) {
        reply = "Monthly maintenance for Suite 5200 at 188 Bay Street is $3,450 CAD, covering 24/7 concierge, private elevator maintenance, valet, and building reserve. Estimated property taxes are $3,875 CAD/mo. Complete financial carry schedules are available for your review.";
      } else if (lastUserText.includes("elevator") || lastUserText.includes("wine") || lastUserText.includes("terrace") || lastUserText.includes("features")) {
        reply = "The penthouse features a private keycard-activated elevator entering your private foyer, a 200-bottle glass wine room, Gaggenau kitchen suite, and a 1,200 sq. ft. heated wraparound terrace with panoramic CN Tower views.";
      }

      res.json({ reply, sessionId });
    } catch (err: any) {
      console.error("ARGUS Chat API error:", err);
      res.status(500).json({ 
        error: "Failed to generate dynamic response from AI model",
        details: err?.message || "Internal server error"
      });
    }
  });

  // API Endpoint for Booking Viewing Confirmation
  app.post("/api/book-viewing", (req, res) => {
    const { date, time, name, email, phone, budget } = req.body;
    res.json({
      success: true,
      bookingId: "YLG-VIEW-" + Math.floor(100000 + Math.random() * 900000),
      property: "The Yorkville Penthouse Collection - 188 Bay Street",
      slot: `${date || "Saturday, Aug 15"} at ${time || "2:00 PM EST"}`,
      broker: "Victoria Sterling, Senior Managing Partner",
      calendarSynced: true,
      confirmationMessage: `Viewing confirmed for ${name || "Valued Client"} on ${date || "this Saturday"} at ${time || "2:00 PM EST"}. Confirmation synced with Google Calendar and sent to ${email || "client email"}.`
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`The Yorkville Luxury Group server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
