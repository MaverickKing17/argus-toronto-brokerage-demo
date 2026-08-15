import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  X,
  ChevronRight,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export interface TourHotspot {
  id: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  title: string;
  category: string;
  description: string;
  spec: string;
}

export interface TourRoom {
  id: string;
  name: string;
  floorArea: string;
  elevation: string;
  image: string;
  hotspots: TourHotspot[];
}

export const TOUR_ROOMS: TourRoom[] = [
  {
    id: 'grand-salon',
    name: 'Grand Salon & Living Vista',
    floorArea: '1,450 sq. ft.',
    elevation: '52nd Floor · South & West Skyline',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    hotspots: [
      {
        id: 'glass-wall',
        xPercent: 32,
        yPercent: 44,
        title: '270° Thermal Glass Curtain',
        category: 'Acoustic Engineering',
        description: 'Triple-pane acoustic insulated glazing with automated Lutron Palladiom motorized solar shades.',
        spec: '10ft Floor-to-Ceiling Clear Span'
      },
      {
        id: 'fireplace',
        xPercent: 68,
        yPercent: 54,
        title: 'Bookmatched Calacatta Fireplace',
        category: 'Interior Architecture',
        description: '14ft bespoke slab of Italian Calacatta Oro marble with an integrated clean-burning linear vapor fireplace.',
        spec: 'Imported Carrara Italian Marble'
      }
    ]
  },
  {
    id: 'chef-kitchen',
    name: 'Poliform Chef & Wine Gallery',
    floorArea: '780 sq. ft.',
    elevation: '52nd Floor · East Morning Light',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    hotspots: [
      {
        id: 'marble-island',
        xPercent: 42,
        yPercent: 58,
        title: 'Calacatta Marble Waterfall Island',
        category: 'Bespoke Stone Craft',
        description: 'Continuous 12-foot monolithic Italian Calacatta marble island with flush integrated bar seating and hidden outlets.',
        spec: 'Hand-Selected Italian Quarried Calacatta'
      },
      {
        id: 'gaggenau-suite',
        xPercent: 74,
        yPercent: 46,
        title: 'Gaggenau 400 Series Induction Cooktop',
        category: 'Culinary Specifications',
        description: 'Full culinary suite with frameless full-surface induction, combi-steam oven, teppanyaki, and integrated sommelier wine vault.',
        spec: 'Gaggenau Germany · Integrated Panel Design'
      }
    ]
  },
  {
    id: 'primary-suite',
    name: 'Primary Wing & Spa Bath',
    floorArea: '1,120 sq. ft.',
    elevation: '52nd Floor · West Sunset Vista',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=80',
    hotspots: [
      {
        id: 'boffi-tub',
        xPercent: 48,
        yPercent: 62,
        title: 'Freestanding Boffi Soaking Tub',
        category: 'Ensuite Wellness',
        description: 'Sculpted solid-surface soaking tub positioned overlooking the western skyline with Dornbracht platinum matte fixtures.',
        spec: 'Heated Marble Floors & Steam Shower'
      },
      {
        id: 'rimadesio-wardrobe',
        xPercent: 82,
        yPercent: 48,
        title: 'Rimadesio Dressing Suite',
        category: 'Wardrobe Systems',
        description: 'Custom smoked-glass and back-lit walnut cabinetry with integrated biometric jewelry vault.',
        spec: 'Italian Millwork · Motion-Sensing LED'
      }
    ]
  },
  {
    id: 'sky-terrace',
    name: '1,200 Sq. Ft. Private Heated Terrace',
    floorArea: '1,200 sq. ft.',
    elevation: '52nd Floor · 360° Open Air',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80',
    hotspots: [
      {
        id: 'terrace-heaters',
        xPercent: 35,
        yPercent: 42,
        title: 'Flush Infrared Radiant Heaters',
        category: 'All-Season Comfort',
        description: 'Flush-mounted ceiling heaters and linear gas fire table engineered for comfortable 4-season Toronto entertaining.',
        spec: 'Automated Snow-Melt Subfloor'
      },
      {
        id: 'alfresco-hestan',
        xPercent: 72,
        yPercent: 56,
        title: 'Alfresco Kitchen & Hestan Grill',
        category: 'Outdoor Entertaining',
        description: 'Marine-grade stainless steel cabinetry with natural stone prep bar and sub-zero outdoor refrigerator.',
        spec: 'Hestan 42-inch Built-in Gas Grill'
      }
    ]
  }
];

export const Spatial3DTour: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const [selectedHotspot, setSelectedHotspot] = useState<TourHotspot | null>(null);

  const currentRoom = TOUR_ROOMS[activeRoomIndex];

  const handleRoomChange = (idx: number) => {
    setActiveRoomIndex(idx);
    setSelectedHotspot(null);
  };

  return (
    <div 
      className="relative w-full rounded-3xl bg-slate-950 border-2 border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden select-none transition-all duration-300 h-[520px] sm:h-[600px] flex flex-col justify-between"
      id="virtual-suite-tour"
    >
      {/* Top Ambient Gold Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 z-30"></div>

      {/* Top Floating Badge Bar */}
      <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between gap-3 pointer-events-none">
        
        {/* Clean Luxury Title Badge */}
        <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-950/90 border border-amber-400/50 backdrop-blur-md text-white shadow-xl flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 shrink-0 shadow-md">
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider block">
              HIGH-DEFINITION SUITE TOUR
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {currentRoom.name}
            </h4>
          </div>
        </div>

        {/* Room Elevation & Area Badge */}
        <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
          <div className="px-4 py-2.5 rounded-2xl bg-slate-950/90 border border-white/20 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2.5 shadow-lg">
            <span className="text-amber-300 font-bold">{currentRoom.elevation}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-semibold">{currentRoom.floorArea}</span>
          </div>
        </div>
      </div>

      {/* Image Viewport with Smooth CSS Crossfade */}
      <div className="relative w-full h-full overflow-hidden">
        {TOUR_ROOMS.map((room, idx) => {
          const isActive = idx === activeRoomIndex;
          return (
            <div
              key={room.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
                referrerPolicy="no-referrer"
              />

              {/* Dark subtle bottom vignette for contrast with tabs */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none"></div>

              {/* Interactive Gold Pulse Hotspots */}
              {isActive && room.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{
                    left: `${spot.xPercent}%`,
                    top: `${spot.yPercent}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHotspot(spot);
                    }}
                    className="relative group cursor-pointer focus:outline-none"
                    aria-label={`View finish details for ${spot.title}`}
                  >
                    {/* Luminous Pulsing Outer Rings */}
                    <span className="absolute -inset-3 rounded-full bg-amber-400/30 animate-ping"></span>
                    <span className="absolute -inset-1.5 rounded-full bg-amber-400/50"></span>
                    
                    {/* Center Core Badge */}
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white text-zinc-950 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform">
                      <Sparkles className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                    </div>

                    {/* Hotspot Floating Label Tooltip */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-amber-400/60 backdrop-blur-md text-white whitespace-nowrap shadow-xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all pointer-events-none">
                      <span className="text-[10px] font-mono text-amber-300 font-bold block leading-none mb-0.5">
                        {spot.category}
                      </span>
                      <span className="text-xs font-bold text-white block">
                        {spot.title}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Selected Hotspot Architectural Finish Modal Card */}
      {selectedHotspot && (
        <div className="absolute bottom-20 right-4 sm:right-6 z-40 max-w-sm w-full bg-slate-950/95 border-2 border-amber-400 rounded-2xl p-5 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in text-white space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                {selectedHotspot.category}
              </span>
              <h5 className="text-base font-bold text-white mt-0.5">
                {selectedHotspot.title}
              </h5>
            </div>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {selectedHotspot.description}
          </p>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-2 text-[11px] font-mono text-amber-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{selectedHotspot.spec}</span>
          </div>
        </div>
      )}

      {/* Bottom Room Switcher Navigation Ribbon */}
      <div className="absolute bottom-3 inset-x-3 z-30 p-2 rounded-2xl bg-slate-950/90 border border-white/20 backdrop-blur-md flex items-center gap-2 overflow-x-auto scrollbar-none shadow-2xl">
        <span className="hidden sm:flex items-center gap-1.5 px-3 text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider shrink-0">
          <Layers className="w-3.5 h-3.5" />
          SUITE ROOMS:
        </span>

        {TOUR_ROOMS.map((room, idx) => {
          const isActive = idx === activeRoomIndex;
          return (
            <button
              key={room.id}
              onClick={() => handleRoomChange(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold shadow-lg border border-amber-300 scale-[1.02]'
                  : 'bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-zinc-950' : 'bg-amber-400'}`}></span>
              <span>{room.name}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
};
