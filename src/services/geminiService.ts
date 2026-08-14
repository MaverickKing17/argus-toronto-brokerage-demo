import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are ARGUS AI Assistant, the ultra-elite private AI Concierge for "The Yorkville Luxury Group", premier luxury real estate brokerage in Toronto, Ontario.

Brokerage & Flagship Residence Context:
- Flagship Listing: "The Yorkville Penthouse Collection" at 188 Bay Street / Yorkville Ave, Toronto, ON.
- Specs: $4,500,000 CAD | 3 Bedrooms | 4 Bathrooms | 3,850 sq. ft. interior + 1,200 sq. ft. heated wraparound terrace with CN Tower & skyline views.
- Key Amenities: Private keycard elevator into personal foyer, 200-bottle glass wine room, Gaggenau chef's kitchen, custom Italian millwork, automated Lutron system, 3 EV-ready parking stalls, 24/7 white-glove concierge.
- Senior Managing Partner: Victoria Sterling.
- Off-Market / Private Collection: $10M–$25M+ ultra-prime estates in The Bridle Path, Forest Hill, Rosedale, and private full-floor penthouses in Yorkville.
- Privacy & NDA Policy: For all off-market trophy assets, digital or physical mutual NDAs are executed via secure DocuSign within 15 minutes before floor plans or dossiers are released.
- Top Toronto Private Schools: Upper Canada College (UCC), Bishop Strachan School (BSS), Havergal College, Branksome Hall, Crescent School.
- Investment & Tax: Ontario & Toronto Municipal Land Transfer Tax (MLTT), non-resident speculation tax, Canadian wealth preservation.

Tone & Guidelines:
- Polished, intelligent, discreet, and concierge-level.
- Directly answer complex relocation, pricing, neighborhood comparison, NDA protocols, and school proximity questions with accurate Toronto real estate insights.
- Offer to coordinate private VIP viewings or prepare custom confidential property dossiers.`;

// Dynamic intelligent fallback generator when running in offline preview without API credentials
export function generateContextualConciergeResponse(userPrompt: string, history: ChatMessage[] = []): string {
  const query = userPrompt.toLowerCase();

  // NDA & High-profile discretion inquiries ($10M-$15M+ Bridle Path / Yorkville)
  if (query.includes("nda") || query.includes("non-disclosure") || query.includes("privacy") || query.includes("discretion") || query.includes("executive")) {
    return "Absolute discretion is the cornerstone of The Yorkville Luxury Group. For our off-market $10M–$15M+ estates in The Bridle Path and private full-floor Yorkville penthouses, we execute a bilateral digital Non-Disclosure Agreement (NDA) via encrypted DocuSign prior to transmitting architectural dossiers, security specs, or floor plans. Our Managing Partner Victoria Sterling can transmit the NDA to your counsel immediately—would you prefer we direct this to your office or representative?";
  }

  // Bridle Path vs Yorkville or relocation inquiries
  if (query.includes("bridle path") || query.includes("forest hill") || query.includes("relocat") || query.includes("vancouver") || query.includes("neighborhood")) {
    return "For an executive relocation targeting $4M–$15M, we often balance the sprawling 2+ acre gated privacy of The Bridle Path with the turnkey vertical luxury of Yorkville. In Yorkville, our 188 Bay Street Penthouse ($4.5M CAD) provides direct private elevator access and 24/7 white-glove concierge minutes from Bloor Street. In The Bridle Path and Forest Hill, we currently represent three off-market gated estates with private grounds. Would you like a comparative neighborhood briefing prepared?";
  }

  // Schools (Upper Canada College, Bishop Strachan, Havergal, etc.)
  if (query.includes("school") || query.includes("upper canada") || query.includes("bishop") || query.includes("ucc") || query.includes("bss") || query.includes("kids") || query.includes("family")) {
    return "Upper Canada College (UCC) and The Bishop Strachan School (BSS) are located in Forest Hill, approximately 10 to 12 minutes from our Yorkville penthouse collection and 15 minutes from The Bridle Path. We routinely curate residences specifically tailored to school proximity and private busing routes. We can coordinate viewings for properties near Avenue Road and Forest Hill alongside our Yorkville portfolio.";
  }

  // Pricing, maintenance fees, carry costs
  if (query.includes("hoa") || query.includes("maintenance") || query.includes("fee") || query.includes("carry") || query.includes("tax") || query.includes("mortgage") || query.includes("4.5m")) {
    return "For Suite 5200 at 188 Bay Street ($4,500,000 CAD), monthly maintenance fees are $3,450 CAD, covering 24/7 concierge, private elevator maintenance, dedicated valet, building insurance, and full access to private spa amenities. Estimated monthly property taxes are approximately $3,875 CAD. We have comprehensive financial carry sheets and land transfer tax schedules available for your review.";
  }

  // Viewing & Scheduling requests
  if (query.includes("viewing") || query.includes("tour") || query.includes("saturday") || query.includes("appointment") || query.includes("schedule") || query.includes("visit") || query.includes("see")) {
    return "We would be delighted to host a private walkthrough of The Yorkville Penthouse Collection. We have exclusive private viewing slots available this Saturday at 2:00 PM and 4:30 PM. We will arrange dedicated valet at the private 188 Bay Street motor court. Shall we reserve Saturday at 2:00 PM for your party?";
  }

  // Features (Elevator, wine vault, terrace, parking)
  if (query.includes("elevator") || query.includes("terrace") || query.includes("wine") || query.includes("parking") || query.includes("ev") || query.includes("specs")) {
    return "The penthouse residence features a biometric keycard elevator opening directly into your private foyer, a 200-bottle temperature-controlled glass wine showcase, Gaggenau kitchen suite, a 1,200 sq. ft. heated wraparound terrace with CN Tower panoramic views, and 3 reserved subterranean EV parking stalls.";
  }

  // Default dynamic response
  return "Thank you for reaching out to The Yorkville Luxury Group. I am ARGUS, your dedicated AI Concierge. We represent both on-market trophy residences like Suite 5200 ($4.5M CAD) and confidential off-market estates across Yorkville, Forest Hill, and The Bridle Path. How may I best assist your portfolio requirements today?";
}

export async function askArgusAI(
  messages: ChatMessage[],
  userPrompt: string,
  sessionId?: string
): Promise<string> {
  const apiKey = 
    (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
    (typeof process !== 'undefined' && process.env?.GOOGLE_GENAI_API_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY) ||
    '';

  // 1. Try Client-side direct call if API key is present in client environment
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const formattedContents = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const res = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: formattedContents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          maxOutputTokens: 2048
        }
      });

      if (res.text) {
        return res.text;
      }
    } catch (clientErr) {
      console.warn('[ARGUS AI] Client-side Gemini invocation note, trying backend /api/chat:', clientErr);
    }
  }

  // 2. Call the server proxy endpoint /api/chat
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages.map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          content: m.content
        })),
        userIntent: userPrompt,
        sessionId
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.reply) {
        return data.reply;
      }
    } else {
      const errData = await response.json().catch(() => ({}));
      console.warn('[ARGUS AI] Backend API responded with status', response.status, errData);
    }
  } catch (serverErr) {
    console.warn('[ARGUS AI] Backend fetch error:', serverErr);
  }

  // 3. Graceful intelligent real estate concierge fallback (prevents UI disconnect in preview)
  console.info('[ARGUS AI] Generating dynamic luxury brokerage response.');
  return generateContextualConciergeResponse(userPrompt, messages);
}
