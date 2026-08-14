import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are ARGUS AI Assistant, the ultra-elite private AI Concierge for "The Yorkville Luxury Group", premier luxury real estate brokerage in Toronto, Ontario.

CORE SCOPE & INTENT RECOGNITION RULES (STRICT ENFORCEMENT):
1. Residential Focus: The Yorkville Luxury Group exclusively represents high-end residential luxury properties (penthouses, private estates, architectural residences, and off-market residential acquisitions in Yorkville, The Bridle Path, Forest Hill, and Rosedale).
2. Commercial Real Estate & Land/Hotel Development Inquiries:
   - If a client or user asks about Commercial Real Estate (e.g. retail plazas, strip malls, shopping centers, office buildings, industrial/warehousing, multi-tenant commercial parks) or Land Assembly / Hotel / Commercial Development:
   - You MUST NOT output Suite 5200 penthouse residential specifications, bedroom/bathroom counts, or residential terrace amenities.
   - Clarify politely and concisely that The Yorkville Luxury Group specializes strictly in ultra-luxury residential properties and estates.
   - Offer to route their commercial or development inquiry directly to Senior Managing Partner Victoria Sterling, who coordinates confidential commercial partner referrals with premier commercial institutional brokerages in Toronto.

Brokerage & Residential Context:
- Flagship Residential Listing: "The Yorkville Penthouse Collection" at 188 Bay Street / Yorkville Ave, Toronto, ON.
- Specs: $4,500,000 CAD | 3 Bedrooms | 4 Bathrooms | 3,850 sq. ft. interior + 1,200 sq. ft. heated wraparound terrace with CN Tower & skyline views.
- Key Amenities: Private keycard elevator into personal foyer, 200-bottle glass wine room, Gaggenau chef's kitchen, custom Italian millwork, automated Lutron system, 3 EV-ready parking stalls, 24/7 white-glove concierge.
- Senior Managing Partner: Victoria Sterling.
- Off-Market / Private Collection: $10M–$25M+ ultra-prime residential estates in The Bridle Path, Forest Hill, Rosedale, and private full-floor penthouses in Yorkville.
- Privacy & NDA Policy: For all off-market trophy assets, digital or physical mutual NDAs are executed via secure DocuSign within 15 minutes before floor plans or dossiers are released.
- Top Toronto Private Schools: Upper Canada College (UCC), Bishop Strachan School (BSS), Havergal College, Branksome Hall, Crescent School.
- Investment & Tax: Ontario & Toronto Municipal Land Transfer Tax (MLTT), non-resident speculation tax, Canadian wealth preservation.

Tone & Guidelines:
- Polished, intelligent, discreet, and concierge-level.
- Only discuss residential penthouse specs when the inquiry relates to residential luxury real estate.`;

// Dynamic intelligent fallback generator when running in offline preview without API credentials
export function generateContextualConciergeResponse(userPrompt: string, history: ChatMessage[] = []): string {
  const query = userPrompt.toLowerCase();

  // Commercial Real Estate, Industrial, Retail, Plazas, Land/Hotel Development Inquiries
  if (
    query.includes("commercial") || 
    query.includes("plaza") || 
    query.includes("plazas") || 
    query.includes("retail") || 
    query.includes("industrial") || 
    query.includes("warehouse") || 
    query.includes("office building") || 
    query.includes("hotel development") || 
    query.includes("commercial land") || 
    query.includes("land assembly") || 
    query.includes("strip mall") || 
    query.includes("shopping center")
  ) {
    return "The Yorkville Luxury Group focuses exclusively on ultra-luxury residential properties, penthouses, and private estates. We do not directly broker commercial assets, retail plazas, or industrial developments; however, our Senior Managing Partner Victoria Sterling maintains close executive relationships with Toronto's leading commercial institutional partner firms. We would be pleased to route your commercial inquiry directly to Victoria Sterling for a direct partner introduction—would you like us to connect your office?";
  }

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
    (typeof process !== 'undefined' && (process.env?.GEMINI_API_KEY || process.env?.GOOGLE_GENAI_API_KEY || process.env?.API_KEY)) ||
    (typeof window !== 'undefined' && ((window as any).__GEMINI_API_KEY__ || (window as any).GEMINI_API_KEY)) ||
    '';

  // 1. Direct Client-Side @google/genai execution inside the browser canvas
  try {
    const ai = new GoogleGenAI(apiKey ? { apiKey } : {});
    
    const formattedContents = messages.map((m) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // If no previous messages, ensure user prompt is present
    if (formattedContents.length === 0) {
      formattedContents.push({
        role: 'user',
        parts: [{ text: userPrompt }]
      });
    }

    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 2048
      }
    });

    if (res && res.text) {
      return res.text;
    }
  } catch (clientGeminiError) {
    console.warn('[ARGUS AI Client] Direct Gemini browser call note:', clientGeminiError);
  }

  // 2. Secondary fallback: Attempt /api/chat if a backend server exists in environment
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
    }
  } catch (serverErr) {
    // In pure client-side preview sandbox, fetch('/api/chat') is expected to not exist
    console.info('[ARGUS AI] Client sandbox mode active; serving concierge intelligence.');
  }

  // 3. Guaranteed seamless luxury real estate response (never shows raw error / disconnects)
  return generateContextualConciergeResponse(userPrompt, messages);
}
