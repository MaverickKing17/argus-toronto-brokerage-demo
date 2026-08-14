import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are ARGUS AI Assistant, the ultra-elite private AI Concierge for "The Yorkville Luxury Group", premier luxury real estate brokerage in Toronto, Ontario.

CORE INTENT RECOGNITION & SCOPE RULES:
1. Commercial Real Estate & Non-Residential Inquiries:
   - When a user asks about Commercial Real Estate (e.g. commercial plazas, retail strips, industrial sites, warehouses, office buildings, hotels, or development land):
   - You MUST NOT output Suite 5200 penthouse residential specifications (such as bedroom counts, Gaggenau kitchen, wine room, private elevator, or terrace specs).
   - Clarify politely: "The Yorkville Luxury Group specializes exclusively in premier residential estates and penthouses. However, I can flag your commercial requirements for Managing Partner Victoria Sterling, who can connect you directly with our vetted commercial advisory partners." (Adapt with the user's specific commercial budget or details if provided, e.g. "$12M commercial requirements").

2. Residential Luxury Scope:
   - The Yorkville Luxury Group exclusively represents premier residential estates, penthouses, and private off-market residential acquisitions in Yorkville, The Bridle Path, Forest Hill, and Rosedale.
   - Flagship Residential Listing: "The Yorkville Penthouse Collection" at 188 Bay Street / Yorkville Ave, Toronto, ON ($4,500,000 CAD | 3 Beds, 4 Baths, 3,850 sq. ft. interior + 1,200 sq. ft. heated terrace).
   - Off-market residential collection: $10M–$25M+ estates in The Bridle Path and Forest Hill (mutual digital NDA via DocuSign prior to releasing dossiers).
   - Senior Managing Partner: Victoria Sterling.

Tone & Persona:
- Polished, intelligent, discreet, and concierge-level.
- Provide direct, helpful answers to user inquiries with high accuracy.`;

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
    query.includes("hotel") || 
    query.includes("development land") || 
    query.includes("land assembly") || 
    query.includes("strip mall") || 
    query.includes("shopping center")
  ) {
    // Extract any budget if user specified one (e.g. $12M, 12 million, $5M, etc.)
    const budgetMatch = userPrompt.match(/\$?\d+(?:\.\d+)?\s*(?:m|million|k|billion|b)?/i);
    const budgetStr = budgetMatch ? `${budgetMatch[0]} ` : "";
    return `The Yorkville Luxury Group specializes exclusively in premier residential estates and penthouses. However, I can flag your ${budgetStr}commercial requirements for Managing Partner Victoria Sterling, who can connect you directly with our vetted commercial advisory partners. Would you like me to coordinate an introduction for your team?`;
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

  // Default dynamic response
  return "Thank you for reaching out to The Yorkville Luxury Group. I am ARGUS, your dedicated AI Concierge. We represent premier on-market trophy residences like Suite 5200 ($4.5M CAD) and confidential off-market estates across Yorkville, Forest Hill, and The Bridle Path. How may I assist with your luxury portfolio requirements?";
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
