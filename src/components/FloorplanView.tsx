import React, { useState } from 'react';
import { Layers, ArrowUpRight, Maximize2, Shield, Compass, CheckCircle2 } from 'lucide-react';

interface RoomDetail {
  id: string;
  name: string;
  dimensions: string;
  area: string;
  exposure: string;
  highlights: string[];
}

const ROOM_DATA: RoomDetail[] = [
  {
    id: "foyer",
    name: "Private Elevator Foyer & Vestibule",
    dimensions: "14' 2\" × 12' 6\"",
    area: "178 sq. ft.",
    exposure: "East / Direct Lift Access",
    highlights: ["Biometric Keycard Entry", "Custom Italian Millwork", "Integrated Powder Room Access"]
  },
  {
    id: "living",
    name: "Grand Salon & Dining Hall",
    dimensions: "34' 8\" × 22' 4\"",
    area: "775 sq. ft.",
    exposure: "South-West (CN Tower View)",
    highlights: ["10-ft Floor-to-Ceiling Glass", "Fireplace with Calacatta Hearth", "Direct Terrace Sliding Doors"]
  },
  {
    id: "kitchen",
    name: "Gaggenau Chef's Kitchen & Wine Vault",
    dimensions: "21' 0\" × 16' 8\"",
    area: "350 sq. ft.",
    exposure: "West / Sunset",
    highlights: ["200-Bottle Glass Wine Vault", "Marble Island with Waterfall Edge", "Butler's Pantry & Secondary Prep Sink"]
  },
  {
    id: "primary",
    name: "Primary Master Suite & Spa Ensuite",
    dimensions: "28' 4\" × 18' 2\"",
    area: "515 sq. ft.",
    exposure: "South / Skyline & Lake",
    highlights: ["Dual Boutique Walk-In Closets", "Freestanding Soaking Tub", "Private Balcony Entrance"]
  },
  {
    id: "terrace",
    name: "Private Heated Wraparound Terrace",
    dimensions: "60' 0\" × 20' 0\" (Irregular)",
    area: "1,200 sq. ft.",
    exposure: "270° South / West / North",
    highlights: ["Infrared Ceiling Heaters", "Outdoor Summer Kitchen Grill", "Gas Fire Table Lounge Zone"]
  }
];

export const FloorplanView: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomDetail>(ROOM_DATA[0]);

  return (
    <section id="floorplan" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            ARCHITECTURAL LAYOUT & SCHEMATICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold mt-1 tracking-tight">
            52nd Floor Full-Floorplate Floorplan
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal max-w-2xl leading-relaxed">
            3,850 sq. ft. interior residence + 1,200 sq. ft. private heated terrace. Select a room below to view exact dimensions and architectural specifications.
          </p>
        </div>

        {/* Main Floorplan Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Architectural Layout Diagram Graphic */}
          <div className="lg:col-span-2 p-7 sm:p-9 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] transition-all duration-300 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 text-amber-700 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-serif text-xl text-slate-950 font-bold">Suite 5200 Architectural Blueprint</span>
              </div>
              <span className="text-[11px] font-mono text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-lg border border-amber-300 font-bold tracking-wide shadow-xs">
                SCALE 1:50 · 270° PANORAMIC
              </span>
            </div>

            {/* Simulated Interactive Blueprint Diagram */}
            <div className="relative w-full aspect-16/10 rounded-xl bg-slate-100 border-2 border-slate-200 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Private Elevator Foyer Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white border-2 border-amber-400 text-amber-950 text-xs flex items-center gap-2 font-mono font-bold shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                  DIRECT PRIVATE ELEVATOR LIFT
                </div>
                <div className="text-right font-mono text-[11px] text-slate-900 font-bold bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm">
                  NORTH ↑ (BLOOR ST)
                </div>
              </div>

              {/* Blueprint Rooms Interactive Zone Map */}
              <div className="relative z-10 my-4 grid grid-cols-12 gap-3.5 h-48 sm:h-56">
                
                {/* Room 1: Foyer & Entry */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[0])}
                  className={`col-span-3 rounded-xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                    selectedRoom.id === 'foyer' 
                      ? 'bg-amber-100/90 border-amber-500 text-amber-950 scale-[1.02] shadow-md font-bold ring-2 ring-amber-400/30' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-800">ELEVATOR FOYER</span>
                  <span className="text-xs font-bold text-slate-950 font-mono">178 SQ FT</span>
                </div>

                {/* Room 2: Grand Salon */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[1])}
                  className={`col-span-5 rounded-xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                    selectedRoom.id === 'living' 
                      ? 'bg-amber-100/90 border-amber-500 text-amber-950 scale-[1.02] shadow-md font-bold ring-2 ring-amber-400/30' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-800">GRAND SALON & DINING</span>
                  <span className="text-xs font-bold text-slate-950 font-mono">775 SQ FT</span>
                </div>

                {/* Room 3: Kitchen & Wine */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[2])}
                  className={`col-span-4 rounded-xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                    selectedRoom.id === 'kitchen' 
                      ? 'bg-amber-100/90 border-amber-500 text-amber-950 scale-[1.02] shadow-md font-bold ring-2 ring-amber-400/30' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-800">CHEF'S KITCHEN & WINE</span>
                  <span className="text-xs font-bold text-slate-950 font-mono">350 SQ FT</span>
                </div>

                {/* Room 4: Primary Suite */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[3])}
                  className={`col-span-6 rounded-xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                    selectedRoom.id === 'primary' 
                      ? 'bg-amber-100/90 border-amber-500 text-amber-950 scale-[1.02] shadow-md font-bold ring-2 ring-amber-400/30' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-800">PRIMARY MASTER SUITE</span>
                  <span className="text-xs font-bold text-slate-950 font-mono">515 SQ FT</span>
                </div>

                {/* Room 5: Private Terrace */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[4])}
                  className={`col-span-6 rounded-xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                    selectedRoom.id === 'terrace' 
                      ? 'bg-amber-100/90 border-amber-500 text-amber-950 scale-[1.02] shadow-md font-bold ring-2 ring-amber-400/30' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-amber-800 font-bold">HEATED PRIVATE TERRACE</span>
                  <span className="text-xs font-bold text-slate-950 font-mono">1,200 SQ FT</span>
                </div>

              </div>

              {/* Blueprint Footer note */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-700 pt-3.5 border-t border-slate-300 font-semibold">
                <span className="font-bold text-slate-950">TOTAL SUITE FOOTPRINT: 5,050 SQ. FT.</span>
                <span className="text-amber-800 font-bold">CLICK ROOM ZONES TO INSPECT DIMENSIONS</span>
              </div>
            </div>
          </div>

          {/* Selected Room Specifications Inspector */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] transition-all duration-300 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            <div className="pb-4 border-b border-slate-200">
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold mb-1">
                ROOM SPECIFICATION INSPECTOR
              </span>
              <h3 className="font-serif text-2xl text-slate-950 font-bold">
                {selectedRoom.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs py-2.5 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Dimensions:</span>
                <span className="font-mono text-slate-950 font-bold text-sm">{selectedRoom.dimensions}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2.5 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Square Footage:</span>
                <span className="font-mono text-amber-800 font-bold text-sm">{selectedRoom.area}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2.5 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Exposure & Views:</span>
                <span className="text-slate-950 text-right font-semibold">{selectedRoom.exposure}</span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-950 block mb-3 uppercase font-mono tracking-wider">Architectural Callouts:</span>
                <div className="space-y-2.5">
                  {selectedRoom.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 font-medium p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
