# The Yorkville Luxury Group — Luxury Real Estate Web Prototype

A modern, high-end responsive real estate web prototype crafted for **The Yorkville Luxury Group**, a premier brokerage in Toronto, Ontario. Designed with luxury aesthetic guidelines ("Professional Polish" theme), this application showcases a $4.5M CAD trophy sky estate — **The Yorkville Penthouse Collection** (Suite 5200, 188 Bay Street) — alongside an embedded 24/7 live AI brokerage concierge (**ARGUS AI Assistant**).

---

## 🌟 Key Features

### 1. Hero & Property Overview
- **Dark-Themed Luxury Hero**: High-impact Toronto skyline image background with architectural vignette overlays, live brokerage status, and direct private viewing CTAs.
- **Verified Property Specs**: Instant view of core parameters ($4,500,000 CAD asking price, 3 Beds, 4 Baths, 3,850 sq. ft. interior + 1,200 sq. ft. heated terrace, private direct elevator access, and 3 EV parking bays).
- **Senior Broker Profile**: Direct desk contact card for Senior Managing Partner Victoria Sterling with instant schedule requests and official PDF brochure downloads.

### 2. Embedded ARGUS AI Assistant (24/7 Live Concierge)
- **Floating Chat Widget**: Styled dark-mode AI assistant interface positioned in the bottom-right corner.
- **Pre-Loaded Video Demo Replay**: Integrated step-by-step conversation replay tool for product demonstrations.
- **AI-Powered & Fallback Logic**: Connected to server-side Gemini 2.5 Flash API (`@google/genai`) to answer buyer questions regarding specs, private showings, and HOA maintenance fees.
- **Calendar Synchronization**: Automated slot reservation and Google Calendar invite generation.

### 3. Interactive Architectural Modules
- **High-Resolution Gallery & 3D Walkthrough**: Category-filtered photography (*Interiors*, *Terrace*, *Amenities*) with full-screen lightbox and an interactive 360° virtual tour engine.
- **52nd Floor Architectural Floorplan**: Room-by-room blueprint schematic inspector with dimensions, exposures, and architectural callouts.
- **Yorkville Lifestyle & Map Guide**: Proximity metrics to Bloor Street "Mink Mile" flagships, Michelin dining, and cultural landmarks.
- **Financial Investment Calculator**: Real-time monthly carry simulator accounting for down payment allocations, interest rates, Toronto Land Transfer Taxes, and building maintenance fees.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React Icons.
- **Backend / API**: Express.js server bundled with `esbuild`.
- **AI Integration**: `@google/genai` TypeScript SDK (server-side Gemini 2.5 Flash model).
- **Styling Theme**: "Professional Polish" dark theme with `#c5a367` gold accents, Cormorant Garamond display typography, and Plus Jakarta Sans body text.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Environment Setup
Create a `.env` file or export the following environment variables (refer to `.env.example`):

```env
# Optional: GEMINI_API_KEY enables live AI responses for ARGUS AI Assistant.
GEMINI_API_KEY="your-gemini-api-key-here"

# APP_URL: Self-referential service host URL
APP_URL="http://localhost:3000"
```

### Installation & Execution

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The application will launch on `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 📡 API Endpoints

- `GET /api/health` — Returns service status and API timestamp.
- `POST /api/chat` — Accepts user messages and returns ARGUS AI concierge responses powered by Gemini.
- `POST /api/book-viewing` — Processes private viewing slot requests and returns synced calendar confirmation data.

---

## 📄 License & RECO Compliance

Registered under the Real Estate Council of Ontario (RECO #4892011). Designed for demonstration purposes representing **The Yorkville Luxury Group**. All rights reserved.
