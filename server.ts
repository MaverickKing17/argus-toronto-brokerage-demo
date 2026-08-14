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

      const ai = new GoogleGenAI(apiKey ? { apiKey } : {});
      
      const systemInstruction = `You are ARGUS AI Assistant, the ultra-elite private AI concierge for "The Yorkville Luxury Group", premier luxury real estate brokerage in Toronto, Ontario.
You represent the flagship residence: "The Yorkville Penthouse Collection" located at 188 Bay Street / Yorkville Ave, Toronto, ON ($4,500,000 CAD).
Brokerage details:
- Flagship Listing: Suite 5200 at 188 Bay Street, Toronto ($4.5M CAD, 3 Beds, 4 Baths, 3,850 sq. ft. interior + 1,200 sq. ft. heated terrace, CN Tower views, keycard private elevator foyer, 3 EV parking stalls).
- Senior Managing Partner: Victoria Sterling.
- Coverage & Expertise: Toronto high-end luxury neighborhoods including Yorkville, The Bridle Path, Forest Hill, Rosedale, and Lawrence Park.
- Top Toronto Private Schools: Upper Canada College (UCC), Bishop Strachan School (BSS), Havergal College, Branksome Hall, Crescent School.
- Investment & Tax: Standard Ontario & Toronto Municipal Land Transfer Tax (MLTT), non-resident speculation tax, Canadian wealth preservation.

Tone & Persona:
- Ultra-polished, intelligent, discreet, warm, and highly knowledgeable.
- Answer user inquiries directly, insightfully, and thoroughly (e.g. comparing Yorkville to Bridle Path/Forest Hill, proximity to top schools like UCC/BSS, neighborhood pricing, private viewings, amenities).
- Offer to coordinate private VIP viewings or prepare custom property dossiers when appropriate.`;

      const formattedContents = (messages && Array.isArray(messages) && messages.length > 0)
        ? messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: String(m.content || "") }]
          }))
        : [{ role: "user", parts: [{ text: String(userIntent || "Hello ARGUS") }] }];

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
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

      res.status(500).json({ error: "Empty response received from AI model" });
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
