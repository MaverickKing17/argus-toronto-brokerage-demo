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
    <section id="floorplan" className="relative py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800/80 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            ARCHITECTURAL LAYOUT & SCHEMATICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mt-1">
            52nd Floor Full-Floorplate Floorplan
          </h2>
          <p className="text-zinc-300 text-sm mt-2 font-normal max-w-2xl leading-relaxed">
            3,850 sq. ft. interior residence + 1,200 sq. ft. private heated terrace. Select a room below to view exact dimensions and architectural specifications.
          </p>
        </div>

        {/* Main Floorplan Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Architectural Layout Diagram Graphic */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-900 to-zinc-950 border border-zinc-700/80 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-serif text-lg text-white font-bold">Suite 5200 Architectural Blueprint</span>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 font-bold tracking-wide">
                SCALE 1:50 · 270° PANORAMIC
              </span>
            </div>

            {/* Simulated Interactive Blueprint Diagram */}
            <div className="relative w-full aspect-16/10 rounded-xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* Private Elevator Foyer Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="p-3 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2 font-mono font-bold shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  DIRECT PRIVATE ELEVATOR LIFT
                </div>
                <div className="text-right font-mono text-[11px] text-zinc-300 font-bold bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800">
                  NORTH ↑ (BLOOR ST)
                </div>
              </div>

              {/* Blueprint Rooms Interactive Zone Map */}
              <div className="relative z-10 my-4 grid grid-cols-12 gap-3 h-48 sm:h-56">
                
                {/* Room 1: Foyer & Entry */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[0])}
                  className={`col-span-3 rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between shadow-md ${
                    selectedRoom.id === 'foyer' 
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-300 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300">ELEVATOR FOYER</span>
                  <span className="text-xs font-bold text-white font-mono">178 SQ FT</span>
                </div>

                {/* Room 2: Grand Salon */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[1])}
                  className={`col-span-5 rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between shadow-md ${
                    selectedRoom.id === 'living' 
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-300 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300">GRAND SALON & DINING</span>
                  <span className="text-xs font-bold text-white font-mono">775 SQ FT</span>
                </div>

                {/* Room 3: Kitchen & Wine */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[2])}
                  className={`col-span-4 rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between shadow-md ${
                    selectedRoom.id === 'kitchen' 
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-300 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300">CHEF'S KITCHEN & WINE</span>
                  <span className="text-xs font-bold text-white font-mono">350 SQ FT</span>
                </div>

                {/* Room 4: Primary Suite */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[3])}
                  className={`col-span-6 rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between shadow-md ${
                    selectedRoom.id === 'primary' 
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-300 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300">PRIMARY MASTER SUITE</span>
                  <span className="text-xs font-bold text-white font-mono">515 SQ FT</span>
                </div>

                {/* Room 5: Private Terrace */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[4])}
                  className={`col-span-6 rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between shadow-md ${
                    selectedRoom.id === 'terrace' 
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-amber-500/10 scale-[1.02]' 
                      : 'bg-zinc-900/90 border-zinc-700/80 text-zinc-300 hover:border-amber-500/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-amber-300 font-bold">HEATED PRIVATE TERRACE</span>
                  <span className="text-xs font-bold text-white font-mono">1,200 SQ FT</span>
                </div>

              </div>

              {/* Blueprint Footer note */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-300 pt-3 border-t border-zinc-800 font-medium">
                <span className="font-bold">TOTAL SUITE FOOTPRINT: 5,050 SQ. FT.</span>
                <span className="text-amber-400 font-bold animate-pulse">CLICK ROOM ZONES TO INSPECT DIMENSIONS</span>
              </div>
            </div>
          </div>

          {/* Selected Room Specifications Inspector */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-700/80 shadow-2xl space-y-6">
            <div className="pb-4 border-b border-zinc-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold mb-1">
                ROOM SPECIFICATION INSPECTOR
              </span>
              <h3 className="font-serif text-2xl text-white font-bold">
                {selectedRoom.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-800/80">
                <span className="text-zinc-300 font-medium">Dimensions:</span>
                <span className="font-mono text-white font-bold text-sm">{selectedRoom.dimensions}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-800/80">
                <span className="text-zinc-300 font-medium">Square Footage:</span>
                <span className="font-mono text-amber-300 font-bold text-sm">{selectedRoom.area}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-800/80">
                <span className="text-zinc-300 font-medium">Exposure & Views:</span>
                <span className="text-zinc-100 text-right font-semibold">{selectedRoom.exposure}</span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-white block mb-3">Architectural Callouts:</span>
                <div className="space-y-2.5">
                  {selectedRoom.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200 font-medium p-2 rounded-lg bg-zinc-950/80 border border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
