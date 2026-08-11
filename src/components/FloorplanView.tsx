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
    <section id="floorplan" className="py-16 bg-neutral-950 text-neutral-100 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            // ARCHITECTURAL LAYOUT & SCHEMATICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
            52nd Floor Full-Floorplate Floorplan
          </h2>
          <p className="text-neutral-400 text-sm mt-1 font-light max-w-2xl">
            3,850 sq. ft. interior residence + 1,200 sq. ft. private heated terrace. Select a room below to view exact dimensions and architectural specifications.
          </p>
        </div>

        {/* Main Floorplan Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Architectural Layout Diagram Graphic */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span className="font-serif text-lg text-white font-medium">Suite 5200 Architectural Blueprint</span>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-3 py-1 rounded border border-neutral-800">
                SCALE 1:50 · 270° PANORAMIC
              </span>
            </div>

            {/* Simulated Interactive Blueprint Diagram */}
            <div className="relative w-full aspect-16/10 rounded-xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* Private Elevator Foyer Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2 font-mono">
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  DIRECT PRIVATE ELEVATOR LIFT
                </div>
                <div className="text-right font-mono text-[11px] text-neutral-400">
                  NORTH ↑ (BLOOR ST)
                </div>
              </div>

              {/* Blueprint Rooms Interactive Zone Map */}
              <div className="relative z-10 my-4 grid grid-cols-12 gap-3 h-48 sm:h-56">
                
                {/* Room 1: Foyer & Entry */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[0])}
                  className={`col-span-3 rounded-lg p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedRoom.id === 'foyer' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200' 
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase">ELEVATOR FOYER</span>
                  <span className="text-xs font-bold text-white">178 SQ FT</span>
                </div>

                {/* Room 2: Grand Salon */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[1])}
                  className={`col-span-5 rounded-lg p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedRoom.id === 'living' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200' 
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase">GRAND SALON & DINING</span>
                  <span className="text-xs font-bold text-white">775 SQ FT</span>
                </div>

                {/* Room 3: Kitchen & Wine */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[2])}
                  className={`col-span-4 rounded-lg p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedRoom.id === 'kitchen' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200' 
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase">CHEF'S KITCHEN & WINE</span>
                  <span className="text-xs font-bold text-white">350 SQ FT</span>
                </div>

                {/* Room 4: Primary Suite */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[3])}
                  className={`col-span-6 rounded-lg p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedRoom.id === 'primary' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200' 
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase">PRIMARY MASTER SUITE</span>
                  <span className="text-xs font-bold text-white">515 SQ FT</span>
                </div>

                {/* Room 5: Private Terrace */}
                <div 
                  onClick={() => setSelectedRoom(ROOM_DATA[4])}
                  className={`col-span-6 rounded-lg p-3 border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedRoom.id === 'terrace' 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200' 
                      : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase text-amber-400">HEATED PRIVATE TERRACE</span>
                  <span className="text-xs font-bold text-amber-300">1,200 SQ FT</span>
                </div>

              </div>

              {/* Blueprint Footer note */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                <span>TOTAL SUITE FOOTPRINT: 5,050 SQ. FT.</span>
                <span className="text-amber-400">CLICK ROOM ZONES TO INSPECT DIMENSIONS</span>
              </div>
            </div>
          </div>

          {/* Selected Room Specifications Inspector */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-amber-500/30 space-y-6">
            <div className="pb-4 border-b border-neutral-800">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                ROOM SPECIFICATION INSPECTOR
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold mt-1">
                {selectedRoom.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Dimensions:</span>
                <span className="font-mono text-amber-300 font-semibold">{selectedRoom.dimensions}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Square Footage:</span>
                <span className="font-mono text-white font-semibold">{selectedRoom.area}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800">
                <span className="text-neutral-400">Exposure & Views:</span>
                <span className="text-neutral-200 text-right font-medium">{selectedRoom.exposure}</span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-white block mb-3">Architectural Callouts:</span>
                <div className="space-y-2">
                  {selectedRoom.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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
