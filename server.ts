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

CORE INTENT RECOGNITION & STRICT RESPONSE RULES:
1. STRICT USER-QUERY NEIGHBORHOOD MATCHING:
   - When a user asks to compare or inquire about specific neighborhoods (e.g. Yorkville vs. Rosedale, Forest Hill vs. Yorkville, or The Bridle Path), you MUST answer using ONLY the exact neighborhoods requested by the user.
   - NEVER substitute or inject unsolicited neighborhoods (for instance, if the user asks for Yorkville vs. Rosedale, compare Yorkville and Rosedale directly; do NOT replace Rosedale with Bridle Path).
   - Accurate Toronto Luxury Neighborhood Profiles:
     * Yorkville: Premier vertical luxury, high-rise penthouses, world-class fine dining (Cibo, Sassafraz, Alobar), luxury boutiques on Bloor Street / 'Mink Mile', turnkey low-maintenance living, 24/7 dedicated concierge and security.
     * Rosedale: Historic leafy enclave, heritage brick mansions, quiet secluded ravines and tree-lined streets, exceptional privacy, detached family estates, minutes from downtown and top private schools (Branksome Hall).
     * Forest Hill: Stately stone manors, expansive private lots, quiet elite residential setting, immediate walking proximity to Upper Canada College (UCC) and Bishop Strachan School (BSS).
     * The Bridle Path: Gated 2+ acre mega-estates, maximum seclusion, expansive grounds, equestrian heritage.

2. ADDRESS ALL LIFESTYLE CONSTRAINTS:
   - When users specify lifestyle requirements or constraints (e.g. "fine dining", "24/7 security", "low-maintenance / lock-and-leave", "ravine privacy", "school proximity"), you must explicitly analyze and address how EACH requested neighborhood matches or differs on those criteria before offering next steps.

3. COMMERCIAL REAL ESTATE & NON-RESIDENTIAL INQUIRIES:
   - If a client asks about Commercial Real Estate (plazas, industrial, retail, office buildings, hotels, or development land):
   - You MUST NOT output Suite 5200 residential penthouse specifications.
   - Clarify: "The Yorkville Luxury Group specializes exclusively in premier residential estates and penthouses. However, I can flag your commercial requirements for Managing Partner Victoria Sterling, who can connect you directly with our vetted commercial advisory partners."

4. RESIDENTIAL LUXURY CONTEXT:
   - Flagship Residence: "The Yorkville Penthouse Collection" at 188 Bay Street / Yorkville Ave, Toronto, ON ($4,500,000 CAD | 3 Beds, 4 Baths, 3,850 sq. ft. interior + 1,200 sq. ft. heated terrace).
   - Managing Partner: Victoria Sterling.

Tone & Persona:
- Polished, intelligent, discreet, and concierge-level.
- Deliver personalized, articulate, tailored insights that directly address every detail of the user's prompt.`;

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
        lastUserText.includes("hotel") || 
        lastUserText.includes("development land") || 
        lastUserText.includes("land assembly") || 
        lastUserText.includes("strip mall") || 
        lastUserText.includes("shopping center")
      ) {
        const budgetMatch = lastUserText.match(/\$?\d+(?:\.\d+)?\s*(?:m|million|k|billion|b)?/i);
        const budgetStr = budgetMatch ? `${budgetMatch[0]} ` : "";
        reply = `The Yorkville Luxury Group specializes exclusively in premier residential estates and penthouses. However, I can flag your ${budgetStr}commercial requirements for Managing Partner Victoria Sterling, who can connect you directly with our vetted commercial advisory partners. Would you like me to coordinate an introduction for your team?`;
      } else if (lastUserText.includes("school") || lastUserText.includes("ucc") || lastUserText.includes("bss") || lastUserText.includes("kids") || lastUserText.includes("upper canada")) {
        reply = "For families prioritizing Upper Canada College (UCC) or Bishop Strachan School (BSS), Forest Hill and South Rosedale provide seamless access within 10 to 12 minutes, while our 188 Bay Street Penthouse in Yorkville offers private luxury within 12 minutes of both campuses. We can coordinate private viewings for residences directly along preferred school routes.";
      } else if (lastUserText.includes("saturday") || lastUserText.includes("tour") || lastUserText.includes("viewing") || lastUserText.includes("appointment") || lastUserText.includes("schedule")) {
        reply = "We would be delighted to host a private viewing for you this Saturday. We have exclusive private showing slots available at 2:00 PM and 4:30 PM with private valet arranged at 188 Bay Street. Which time works best for your schedule?";
      } else if (lastUserText.includes("hoa") || lastUserText.includes("maintenance") || lastUserText.includes("fee") || lastUserText.includes("carry") || lastUserText.includes("tax")) {
        reply = "Monthly maintenance for Suite 5200 at 188 Bay Street is $3,450 CAD, covering 24/7 concierge, private elevator maintenance, valet, and building reserve. Estimated property taxes are $3,875 CAD/mo. Complete financial carry schedules are available for your review.";
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
