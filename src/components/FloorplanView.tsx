import React, { useState } from 'react';
import { 
  Layers, 
  ArrowUpRight, 
  Maximize2, 
  Shield, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  Sun, 
  Eye, 
  FileDown, 
  MessageSquare, 
  Info,
  Calendar,
  Grid,
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export interface RoomDetail {
  id: string;
  name: string;
  shortName: string;
  dimensions: string;
  metricDimensions: string;
  area: string;
  ceilingHeight: string;
  exposure: string;
  imageUrl: string;
  materials: string[];
  highlights: string[];
  aiPromptSnippet: string;
}

const ROOM_DATA: RoomDetail[] = [
  {
    id: "foyer",
    name: "Private Elevator Foyer & Vestibule",
    shortName: "ELEVATOR FOYER",
    dimensions: "14' 2\" × 12' 6\"",
    metricDimensions: "4.32m × 3.81m",
    area: "178 sq. ft.",
    ceilingHeight: "10' 4\" Finished Plaster",
    exposure: "East / Direct High-Speed Lift",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    materials: ["Italian Smoked Walnut Millwork", "Honed Pietra Grey Marble Slab", "Integrated LED Reveal Lighting"],
    highlights: [
      "Keycard & Biometric Direct-to-Suite Elevator",
      "Concealed Private Powder Room Access",
      "Discreet Security Cam & Double-Gasket Soundproofing"
    ],
    aiPromptSnippet: "Tell me about the private elevator access and security in the foyer."
  },
  {
    id: "living",
    name: "Grand Salon & Dining Gallery",
    shortName: "GRAND SALON",
    dimensions: "34' 8\" × 22' 4\"",
    metricDimensions: "10.56m × 6.80m",
    area: "775 sq. ft.",
    ceilingHeight: "10' 8\" Clear Span",
    exposure: "South-West (Panoramic CN Tower & Lake)",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    materials: ["14ft Bookmatched Calacatta Oro Hearth", "Wide-Plank White Oak Flooring", "Lutron Palladiom Motorized Solar Glass"],
    highlights: [
      "270° Floor-to-Ceiling Thermal Acoustic Glazing",
      "Clean-Burning Linear Gas & Vapor Fireplace",
      "Motorized Sliding Pocket Glass to Heated Terrace"
    ],
    aiPromptSnippet: "What are the finishes and ceiling heights in the Grand Salon?"
  },
  {
    id: "kitchen",
    name: "Gaggenau Chef's Kitchen & Wine Vault",
    shortName: "CHEF'S KITCHEN",
    dimensions: "21' 0\" × 16' 8\"",
    metricDimensions: "6.40m × 5.08m",
    area: "350 sq. ft.",
    ceilingHeight: "10' 4\" Finished Reveal",
    exposure: "West / Afternoon Golden Hour",
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    materials: ["Poliform Varenna Matte Lacquer Cabinets", "Continuous Waterfall Marble Island", "UV-Filtered Temperature Glass Vault"],
    highlights: [
      "Full Gaggenau 400 Series Appliance Suite & Steam Oven",
      "200-Bottle Dedicated Dual-Zone Wine Vault",
      "Butler's Prep Scullery with Sub-Zero Refrigerator"
    ],
    aiPromptSnippet: "How is the kitchen equipped for private chef catering and wine storage?"
  },
  {
    id: "primary",
    name: "Primary Master Wing & Spa Ensuite",
    shortName: "PRIMARY SUITE",
    dimensions: "28' 4\" × 18' 2\"",
    metricDimensions: "8.63m × 5.54m",
    area: "515 sq. ft.",
    ceilingHeight: "10' 6\" Coffered Detail",
    exposure: "South / Skyline & Waterfront",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    materials: ["Boffi Sculpted Soaking Tub", "Dornbracht Platinum Matte Fixtures", "Rimadesio Glass Dressing Closets"],
    highlights: [
      "Dual Walk-In Dressing Rooms with Biometric Safe",
      "Heated Bookmatched Marble Radiant Floors",
      "Integrated Aromatherapy & Steam Shower Suite"
    ],
    aiPromptSnippet: "What are the primary suite luxury finishes and closet specifications?"
  },
  {
    id: "terrace",
    name: "Private Heated Wraparound Sky Terrace",
    shortName: "SKY TERRACE",
    dimensions: "60' 0\" × 20' 0\" (Irregular)",
    metricDimensions: "18.28m × 6.10m",
    area: "1,200 sq. ft.",
    ceilingHeight: "Open Sky (Frameless Glass Railing)",
    exposure: "270° South / West / North Sky Vista",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    materials: ["Architectural Porcelain Pavers", "Marine-Grade Teak Louver Accents", "Automated Snow-Melt Subfloor"],
    highlights: [
      "Flush-Mounted Infrared Radiant Ceiling Heaters",
      "Bespoke Linear Gas Fire Table & Lounge Zone",
      "Hestan 42\" Built-In Outdoor Grill & Prep Bar"
    ],
    aiPromptSnippet: "Can the terrace be used year-round in Toronto winters?"
  }
];

type BlueprintLayer = 'cad' | 'interior' | 'solar';

interface FloorplanViewProps {
  onOpenChatWithQuery?: (query: string) => void;
  onOpenScheduleModal?: () => void;
}

export const FloorplanView: React.FC<FloorplanViewProps> = ({
  onOpenChatWithQuery,
  onOpenScheduleModal
}) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomDetail>(ROOM_DATA[1]); // Default to Grand Salon
  const [activeLayer, setActiveLayer] = useState<BlueprintLayer>('cad');
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null);
  const [downloadingPdf, setDownloadingPdf] = useState<boolean>(false);

  const handleDownloadCadPdf = () => {
    setDownloadingPdf(true);
    setTimeout(() => {
      setDownloadingPdf(false);
      // Trigger browser download simulation
      const element = document.createElement("a");
      const file = new Blob([
        `THE YORKVILLE LUXURY GROUP - SUITE 5200 ARCHITECTURAL CAD DOSSIER\n` +
        `Total Residence: 3,850 sq. ft. Interior + 1,200 sq. ft. Terrace\n` +
        `Selected Zone: ${selectedRoom.name} (${selectedRoom.dimensions} / ${selectedRoom.area})\n` +
        `Exposure: ${selectedRoom.exposure}\n` +
        `Ceiling Height: ${selectedRoom.ceilingHeight}\n` +
        `Architectural Finishes:\n- ${selectedRoom.materials.join('\n- ')}\n` +
        `RECO Brokerage Registration #4892011 · Generated: ${new Date().toISOString()}`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `Suite-5200-${selectedRoom.id}-CAD-Blueprint.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 600);
  };

  const handleAskArgus = () => {
    if (onOpenChatWithQuery) {
      onOpenChatWithQuery(selectedRoom.aiPromptSnippet);
    } else {
      // Fallback custom event for floating widget
      window.dispatchEvent(new CustomEvent('argus:send_query', { detail: { text: selectedRoom.aiPromptSnippet } }));
    }
  };

  return (
    <section id="floorplan" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Subtle Ambient Blueprint Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              ARCHITECTURAL CAD & SPATIAL BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold tracking-tight">
              52nd Floor Full-Floorplate Floorplan
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal max-w-2xl leading-relaxed">
              3,850 sq. ft. interior residence + 1,200 sq. ft. private heated terrace (5,050 sq. ft. total footprint). Click any architectural zone to inspect laser measurements, structural partitions, and premium finishes.
            </p>
          </div>

          {/* Blueprint Layer Switcher Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveLayer('cad')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeLayer === 'cad'
                  ? 'bg-slate-950 text-amber-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>2D CAD Blueprint</span>
            </button>

            <button
              onClick={() => setActiveLayer('interior')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeLayer === 'interior'
                  ? 'bg-slate-950 text-amber-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Furnished Layout</span>
            </button>

            <button
              onClick={() => setActiveLayer('solar')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeLayer === 'solar'
                  ? 'bg-slate-950 text-amber-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Solar & 270° Views</span>
            </button>
          </div>
        </div>

        {/* Main Floorplan Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Architectural Layout Blueprint Canvas (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] transition-all duration-300 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            {/* Blueprint Title Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-zinc-950 shadow-md">
                  <Grid className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    Suite 5200 Architectural CAD Schematic
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Full 52nd Floor Penthouse Plate · 188 Bay St / Yorkville Elevation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 font-bold">
                  SCALE: 1:50 METRIC
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  SURVEYED 2026
                </span>
              </div>
            </div>

            {/* Interactive SVG Blueprint Canvas */}
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl bg-[#0b1320] border-2 border-slate-700 overflow-hidden shadow-inner select-none">
              
              {/* Architectural Blueprint Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #38bdf8 1px, transparent 1px),
                    linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px'
                }}
              ></div>

              {/* Blueprint Compass & Telemetry Rose */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="p-3 rounded-2xl bg-slate-950/90 border border-amber-400/60 text-white backdrop-blur-md shadow-xl flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-zinc-950 flex items-center justify-center font-bold font-mono text-xs">
                    N↑
                  </div>
                  <div className="text-[10px] font-mono leading-tight">
                    <span className="text-amber-400 font-bold block">BLOOR ST (NORTH)</span>
                    <span className="text-slate-400 block">Bay St Elevation (East)</span>
                  </div>
                </div>
              </div>

              {/* Private Elevator Lift Indicator Badge (Top Left) */}
              <div className="absolute top-4 left-4 z-20">
                <button
                  onClick={() => setSelectedRoom(ROOM_DATA[0])}
                  className={`p-2.5 sm:px-3.5 sm:py-2 rounded-2xl border backdrop-blur-md text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                    selectedRoom.id === 'foyer'
                      ? 'bg-amber-400 text-zinc-950 border-amber-300 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                      : 'bg-slate-950/85 text-amber-300 border-amber-500/40 hover:bg-slate-900'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4 text-amber-500 stroke-[3]" />
                  <span>DIRECT PRIVATE LIFT</span>
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </button>
              </div>

              {/* Interactive Blueprint SVG Graphic Map */}
              <svg 
                viewBox="0 0 1000 620" 
                className="w-full h-full relative z-10"
              >
                <defs>
                  {/* Glowing Filter for Selected Zone */}
                  <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Wood Decking Pattern for Terrace */}
                  <pattern id="terrace-deck" width="20" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3" />
                  </pattern>

                  {/* Tile Grid Pattern for Bath & Kitchen */}
                  <pattern id="tile-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <rect width="16" height="16" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.25" />
                  </pattern>
                </defs>

                {/* 1. PERIMETER THERMAL GLASS CURTAIN WALL (CYAN ACCENT) */}
                <path 
                  d="M 60 80 L 940 80 L 940 560 L 60 560 Z" 
                  fill="none" 
                  stroke="#0284c7" 
                  strokeWidth="3" 
                  strokeDasharray="6,4"
                  opacity="0.6"
                />

                {/* 2. ROOM REGIONS (INTERACTIVE PATHS) */}

                {/* ZONE 1: PRIVATE ELEVATOR FOYER (Top Left) */}
                <g 
                  onClick={() => setSelectedRoom(ROOM_DATA[0])}
                  onMouseEnter={() => setHoveredRoomId('foyer')}
                  onMouseLeave={() => setHoveredRoomId(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <rect 
                    x="80" 
                    y="100" 
                    width="230" 
                    height="190" 
                    rx="12"
                    fill={selectedRoom.id === 'foyer' ? '#d97706' : (hoveredRoomId === 'foyer' ? '#0369a1' : '#0f172a')}
                    fillOpacity={selectedRoom.id === 'foyer' ? '0.45' : '0.75'}
                    stroke={selectedRoom.id === 'foyer' ? '#fbbf24' : '#0284c7'}
                    strokeWidth={selectedRoom.id === 'foyer' ? '3.5' : '2'}
                    filter={selectedRoom.id === 'foyer' ? 'url(#gold-glow)' : undefined}
                  />

                  {/* Elevator Cab Graphic Inside Foyer */}
                  <rect x="105" y="125" width="80" height="75" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M 120 162 L 145 137 L 170 162 M 145 140 L 145 185" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                  <text x="105" y="222" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="bold">LIFT SHAFT #1</text>

                  {/* Foyer Door Swing Arc */}
                  <path d="M 310 190 A 45 45 0 0 1 265 235" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
                  <line x1="310" y1="190" x2="265" y2="190" stroke="#38bdf8" strokeWidth="2" />

                  {/* Room Label */}
                  <text x="195" y="255" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    ELEVATOR FOYER
                  </text>
                  <text x="195" y="275" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    178 SQ FT · 14'2" × 12'6"
                  </text>
                </g>

                {/* ZONE 2: GRAND SALON & DINING (Center / Panoramic View) */}
                <g 
                  onClick={() => setSelectedRoom(ROOM_DATA[1])}
                  onMouseEnter={() => setHoveredRoomId('living')}
                  onMouseLeave={() => setHoveredRoomId(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <rect 
                    x="330" 
                    y="100" 
                    width="370" 
                    height="270" 
                    rx="12"
                    fill={selectedRoom.id === 'living' ? '#d97706' : (hoveredRoomId === 'living' ? '#0369a1' : '#0f172a')}
                    fillOpacity={selectedRoom.id === 'living' ? '0.45' : '0.75'}
                    stroke={selectedRoom.id === 'living' ? '#fbbf24' : '#0284c7'}
                    strokeWidth={selectedRoom.id === 'living' ? '3.5' : '2'}
                    filter={selectedRoom.id === 'living' ? 'url(#gold-glow)' : undefined}
                  />

                  {/* Calacatta Fireplace Hearth Illustration */}
                  <rect x="440" y="105" width="150" height="20" rx="4" fill="#f59e0b" opacity="0.8" />
                  <text x="515" y="119" textAnchor="middle" fill="#020617" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    CALACATTA HEARTH
                  </text>

                  {/* Furnished Sectional / Dining Table representation */}
                  {activeLayer === 'interior' && (
                    <g opacity="0.75">
                      {/* Dining Table */}
                      <rect x="360" y="150" width="100" height="60" rx="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
                      <circle cx="380" cy="140" r="6" fill="#94a3b8" />
                      <circle cx="410" cy="140" r="6" fill="#94a3b8" />
                      <circle cx="440" cy="140" r="6" fill="#94a3b8" />
                      <circle cx="380" cy="220" r="6" fill="#94a3b8" />
                      <circle cx="410" cy="220" r="6" fill="#94a3b8" />
                      <circle cx="440" cy="220" r="6" fill="#94a3b8" />

                      {/* Living Lounge Sectional */}
                      <path d="M 500 160 L 660 160 L 660 250 L 630 250 L 630 190 L 500 190 Z" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
                      <rect x="530" y="210" width="70" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                    </g>
                  )}

                  {/* Room Label */}
                  <text x="515" y="295" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">
                    GRAND SALON & DINING
                  </text>
                  <text x="515" y="320" textAnchor="middle" fill="#fbbf24" fontSize="13" fontFamily="monospace" fontWeight="bold">
                    775 SQ FT · 34'8" × 22'4"
                  </text>
                  <text x="515" y="340" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace">
                    270° CN TOWER & WATERFRONT VIEW
                  </text>
                </g>

                {/* ZONE 3: CHEF'S KITCHEN & WINE VAULT (Top Right) */}
                <g 
                  onClick={() => setSelectedRoom(ROOM_DATA[2])}
                  onMouseEnter={() => setHoveredRoomId('kitchen')}
                  onMouseLeave={() => setHoveredRoomId(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <rect 
                    x="720" 
                    y="100" 
                    width="200" 
                    height="270" 
                    rx="12"
                    fill={selectedRoom.id === 'kitchen' ? '#d97706' : (hoveredRoomId === 'kitchen' ? '#0369a1' : '#0f172a')}
                    fillOpacity={selectedRoom.id === 'kitchen' ? '0.45' : '0.75'}
                    stroke={selectedRoom.id === 'kitchen' ? '#fbbf24' : '#0284c7'}
                    strokeWidth={selectedRoom.id === 'kitchen' ? '3.5' : '2'}
                    filter={selectedRoom.id === 'kitchen' ? 'url(#gold-glow)' : undefined}
                  />

                  {/* Kitchen Island */}
                  <rect x="750" y="140" width="140" height="50" rx="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="820" y="170" textAnchor="middle" fill="#f8fafc" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    WATERFALL ISLAND
                  </text>

                  {/* Wine Vault Chamber */}
                  <rect x="750" y="210" width="140" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="820" y="235" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                    🍷 200-BOTTLE VAULT
                  </text>

                  {/* Room Label */}
                  <text x="820" y="295" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    CHEF'S KITCHEN
                  </text>
                  <text x="820" y="320" textAnchor="middle" fill="#fbbf24" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    350 SQ FT · 21'0" × 16'8"
                  </text>
                </g>

                {/* ZONE 4: PRIMARY MASTER SUITE & SPA (Bottom Left) */}
                <g 
                  onClick={() => setSelectedRoom(ROOM_DATA[3])}
                  onMouseEnter={() => setHoveredRoomId('primary')}
                  onMouseLeave={() => setHoveredRoomId(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <rect 
                    x="80" 
                    y="310" 
                    width="370" 
                    height="230" 
                    rx="12"
                    fill={selectedRoom.id === 'primary' ? '#d97706' : (hoveredRoomId === 'primary' ? '#0369a1' : '#0f172a')}
                    fillOpacity={selectedRoom.id === 'primary' ? '0.45' : '0.75'}
                    stroke={selectedRoom.id === 'primary' ? '#fbbf24' : '#0284c7'}
                    strokeWidth={selectedRoom.id === 'primary' ? '3.5' : '2'}
                    filter={selectedRoom.id === 'primary' ? 'url(#gold-glow)' : undefined}
                  />

                  {/* King Bed Illustration */}
                  {activeLayer === 'interior' && (
                    <g opacity="0.8">
                      <rect x="110" y="340" width="110" height="90" rx="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
                      <rect x="125" y="345" width="35" height="20" rx="3" fill="#cbd5e1" />
                      <rect x="170" y="345" width="35" height="20" rx="3" fill="#cbd5e1" />
                      
                      {/* Spa Bath Tub */}
                      <ellipse cx="380" cy="370" rx="30" ry="20" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="380" y="374" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">BOFFI TUB</text>
                    </g>
                  )}

                  {/* Room Label */}
                  <text x="265" y="475" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    PRIMARY MASTER SUITE & SPA
                  </text>
                  <text x="265" y="500" textAnchor="middle" fill="#fbbf24" fontSize="13" fontFamily="monospace" fontWeight="bold">
                    515 SQ FT · 28'4" × 18'2"
                  </text>
                </g>

                {/* ZONE 5: PRIVATE HEATED SKY TERRACE (Bottom Right) */}
                <g 
                  onClick={() => setSelectedRoom(ROOM_DATA[4])}
                  onMouseEnter={() => setHoveredRoomId('terrace')}
                  onMouseLeave={() => setHoveredRoomId(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <rect 
                    x="470" 
                    y="390" 
                    width="450" 
                    height="150" 
                    rx="12"
                    fill="url(#terrace-deck)"
                  />
                  <rect 
                    x="470" 
                    y="390" 
                    width="450" 
                    height="150" 
                    rx="12"
                    fill={selectedRoom.id === 'terrace' ? '#d97706' : (hoveredRoomId === 'terrace' ? '#0369a1' : '#0f172a')}
                    fillOpacity={selectedRoom.id === 'terrace' ? '0.45' : '0.65'}
                    stroke={selectedRoom.id === 'terrace' ? '#fbbf24' : '#f59e0b'}
                    strokeWidth={selectedRoom.id === 'terrace' ? '3.5' : '2'}
                    strokeDasharray="8,4"
                    filter={selectedRoom.id === 'terrace' ? 'url(#gold-glow)' : undefined}
                  />

                  {/* Outdoor Grill & Fire Table Callout */}
                  <circle cx="550" cy="450" r="22" fill="#d97706" opacity="0.8" />
                  <text x="550" y="454" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">🔥 FIRE PIT</text>

                  <rect x="800" y="420" width="90" height="30" rx="4" fill="#334155" stroke="#f59e0b" strokeWidth="1" />
                  <text x="845" y="440" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="bold">HESTAN GRILL</text>

                  {/* Room Label */}
                  <text x="695" y="495" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    HEATED WRAPAROUND SKY TERRACE
                  </text>
                  <text x="695" y="520" textAnchor="middle" fill="#fbbf24" fontSize="13" fontFamily="monospace" fontWeight="bold">
                    1,200 SQ FT · 60'0" × 20'0" (HEATED)
                  </text>
                </g>

                {/* 3. SOLAR TRAJECTORY & SIGHTLINE OVERLAY (When Solar Layer Active) */}
                {activeLayer === 'solar' && (
                  <g className="animate-fade-in pointer-events-none">
                    {/* Solar Arc Path */}
                    <path 
                      d="M 920 150 Q 500 50 80 500" 
                      fill="none" 
                      stroke="#f59e0b" 
                      strokeWidth="3" 
                      strokeDasharray="8,6" 
                      opacity="0.9"
                    />
                    <circle cx="880" cy="110" r="14" fill="#f59e0b" />
                    <text x="880" y="90" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      EAST SUNRISE (07:00)
                    </text>

                    <circle cx="500" cy="65" r="18" fill="#fbbf24" />
                    <text x="500" y="42" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      SOUTH NOON SUN (12:30)
                    </text>

                    <circle cx="120" cy="480" r="14" fill="#f97316" />
                    <text x="120" y="520" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      WEST SUNSET (20:30)
                    </text>
                  </g>
                )}

                {/* 4. STRUCTURAL PILLARS & HEAVY LOAD BEARING WALL TICKS */}
                <rect x="75" y="95" width="12" height="12" fill="#ffffff" />
                <rect x="305" y="95" width="12" height="12" fill="#ffffff" />
                <rect x="705" y="95" width="12" height="12" fill="#ffffff" />
                <rect x="915" y="95" width="12" height="12" fill="#ffffff" />
                <rect x="75" y="295" width="12" height="12" fill="#ffffff" />
                <rect x="705" y="365" width="12" height="12" fill="#ffffff" />
                <rect x="75" y="535" width="12" height="12" fill="#ffffff" />
                <rect x="915" y="535" width="12" height="12" fill="#ffffff" />
              </svg>

              {/* Bottom Canvas Interactive Status */}
              <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between px-4 py-2 rounded-xl bg-slate-950/90 border border-slate-700 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="text-white font-bold">TOTAL FOOTPRINT:</span>
                  <span className="text-amber-400 font-bold">5,050 SQ. FT. (3,850 INT + 1,200 EXT)</span>
                </span>
                <span className="hidden sm:inline text-slate-400">
                  Click any zone to inspect full architectural specs
                </span>
              </div>

            </div>

            {/* Quick Room Select Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider shrink-0 pr-1">
                JUMP TO:
              </span>
              {ROOM_DATA.map((room) => {
                const isActive = selectedRoom.id === room.id;
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm scale-[1.02]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {room.shortName}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Selected Room Specification Inspector (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] transition-all duration-300 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            {/* Header with Photo Thumbnail */}
            <div className="space-y-4">
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <img 
                  src={selectedRoom.imageUrl} 
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-amber-300 font-mono text-[10px] font-bold border border-amber-400/40 backdrop-blur-md">
                  {selectedRoom.shortName}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                    ARCHITECTURAL ZONE INSPECTION
                  </span>
                  <h4 className="text-base font-bold text-white leading-tight mt-0.5">
                    {selectedRoom.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Key Specs Table */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 font-medium">Dimensions (Imp / Met):</span>
                <span className="font-mono text-slate-950 font-bold">{selectedRoom.dimensions} ({selectedRoom.metricDimensions})</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 font-medium">Floor Area:</span>
                <span className="font-mono text-amber-800 font-bold text-sm">{selectedRoom.area}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 font-medium">Finished Ceiling Height:</span>
                <span className="font-mono text-slate-950 font-bold">{selectedRoom.ceilingHeight}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-600 font-medium">Exposure & Sightline:</span>
                <span className="text-slate-900 font-semibold text-right max-w-[170px] truncate">{selectedRoom.exposure}</span>
              </div>
            </div>

            {/* Premium Materials & Finishes */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-900 uppercase font-mono tracking-wider block">
                Finishes & Millwork:
              </span>
              <div className="space-y-1.5">
                {selectedRoom.materials.map((mat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2 rounded-lg bg-amber-50/50 border border-amber-200/80">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-900 uppercase font-mono tracking-wider block">
                Key Features:
              </span>
              <div className="space-y-1.5">
                {selectedRoom.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Ask ARGUS & Download CAD PDF */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleAskArgus}
                className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                id="ask-argus-floorplan-btn"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Ask ARGUS AI About This Room</span>
              </button>

              <button
                onClick={handleDownloadCadPdf}
                disabled={downloadingPdf}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                id="download-cad-pdf-btn"
              >
                <FileDown className="w-4 h-4 text-slate-600" />
                <span>{downloadingPdf ? 'Exporting CAD Blueprint...' : 'Download CAD Blueprint Spec'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
