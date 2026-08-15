import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Info, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Play, 
  Pause, 
  Move,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface Hotspot {
  id: string;
  xPercent: number; // percentage along horizontal pan (0 to 100)
  yPercent: number; // percentage along vertical height (0 to 100)
  title: string;
  category: string;
  description: string;
  spec: string;
}

interface TourRoom {
  id: string;
  name: string;
  floorArea: string;
  elevation: string;
  image: string;
  bearing: string;
  hotspots: Hotspot[];
}

const TOUR_ROOMS: TourRoom[] = [
  {
    id: 'grand-salon',
    name: 'Grand Salon & Living Vista',
    floorArea: '1,450 sq. ft.',
    elevation: '52nd Floor · South & West Skyline',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    bearing: '180° S · Panoramic CN Tower & Lake Ontario',
    hotspots: [
      {
        id: 'glass-wall',
        xPercent: 28,
        yPercent: 42,
        title: '270° Thermal Glass Curtain',
        category: 'Acoustic Engineering',
        description: 'Triple-pane acoustic insulated glazing with automated Lutron Palladiom motorized solar shades.',
        spec: '10ft Floor-to-Ceiling Clear Span'
      },
      {
        id: 'fireplace',
        xPercent: 62,
        yPercent: 55,
        title: 'Bookmatched Calacatta Fireplace',
        category: 'Interior Architecture',
        description: '14ft bespoke slab of Italian Calacatta Oro marble with an integrated clean-burning linear vapor fireplace.',
        spec: 'Imported Carrara Italian Marble'
      },
      {
        id: 'elevator-vestibule',
        xPercent: 88,
        yPercent: 50,
        title: 'Direct Private Elevator Foyer',
        category: 'Biometric Access',
        description: 'Exclusive keycard and biometric elevator opens directly into this private penthouse gallery vestibule.',
        spec: 'Zero Shared Hallways · High Speed Lift'
      }
    ]
  },
  {
    id: 'chef-kitchen',
    name: 'Poliform Chef & Wine Gallery',
    floorArea: '780 sq. ft.',
    elevation: '52nd Floor · East Morning Light',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=85',
    bearing: '090° E · Rosedale Valley & Sunrise Vista',
    hotspots: [
      {
        id: 'appliances',
        xPercent: 35,
        yPercent: 48,
        title: 'Gaggenau 400 Series Suite',
        category: 'Culinary Specifications',
        description: 'Full chef suite including induction cooktop, combi-steam oven, teppanyaki, and warming drawers.',
        spec: 'Gaggenau Germany · Integrated Panel'
      },
      {
        id: 'wine-vault',
        xPercent: 70,
        yPercent: 44,
        title: 'Climate-Controlled Wine Vault',
        category: 'Sommelier Storage',
        description: 'Custom glass-enclosed cellar with dual temperature zones, UV-filtering glass, and 300-bottle capacity.',
        spec: '55°F Dedicated Dual Compressor'
      }
    ]
  },
  {
    id: 'primary-suite',
    name: 'Primary Wing & Spa Bath',
    floorArea: '1,120 sq. ft.',
    elevation: '52nd Floor · West Sunset Vista',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    bearing: '270° W · High Park & Lake Ontario Sunsets',
    hotspots: [
      {
        id: 'spa-tub',
        xPercent: 45,
        yPercent: 58,
        title: 'Freestanding Boffi Soaking Tub',
        category: 'Ensuite Wellness',
        description: 'Sculpted solid-surface tub positioned overlooking the western horizon with Dornbracht platinum fixtures.',
        spec: 'Heated Marble Floors & Steam Shower'
      },
      {
        id: 'dressing-room',
        xPercent: 80,
        yPercent: 46,
        title: 'Rimadesio Walk-In Dressing Suite',
        category: 'Wardrobe Systems',
        description: 'Custom smoked-glass and back-lit walnut cabinetry with integrated biometric jewelry safe.',
        spec: 'Italian Millwork · LED Sensing'
      }
    ]
  },
  {
    id: 'sky-terrace',
    name: '1,200 Sq. Ft. Private Heated Terrace',
    floorArea: '1,200 sq. ft.',
    elevation: '52nd Floor · 360° Open Air',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=2400&q=85',
    bearing: '210° SW · Downtown Skyline & Yorkville Canopy',
    hotspots: [
      {
        id: 'terrace-heaters',
        xPercent: 30,
        yPercent: 38,
        title: 'Integrated Infrared Heaters & Fire Pit',
        category: 'All-Season Comfort',
        description: 'Flush-mounted ceiling heaters and gas fire table engineered for comfortable 4-season Toronto living.',
        spec: 'Automated Snow-Melt Subfloor'
      },
      {
        id: 'outdoor-kitchen',
        xPercent: 75,
        yPercent: 52,
        title: 'Alfresco Kitchen & Hestan Grill',
        category: 'Outdoor Entertainment',
        description: 'Marine-grade stainless steel outdoor kitchen with granite prep bar and sub-zero outdoor refrigerator.',
        spec: 'Hestan 42-inch Built-in Gas Grill'
      }
    ]
  }
];

export const Spatial3DTour: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const [panOffset, setPanOffset] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentRoom = TOUR_ROOMS[activeRoomIndex];

  // Auto-rotation loop
  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      setPanOffset((prev) => (prev + 0.15) % 100);
    }, 40);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Mouse / Touch drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = e.clientX - startX;
    const sensitivity = 0.12 / zoomLevel;
    setPanOffset((prev) => {
      const next = prev - deltaX * sensitivity;
      return (next + 1000) % 100;
    });
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      setAutoRotate(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startX;
    const sensitivity = 0.15 / zoomLevel;
    setPanOffset((prev) => {
      const next = prev - deltaX * sensitivity;
      return (next + 1000) % 100;
    });
    setStartX(e.touches[0].clientX);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 1), 2.2));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Calculate live bearing angle
  const currentBearingAngle = Math.round((panOffset * 3.6)) % 360;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-3xl bg-slate-950 border-2 border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden select-none transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen' : 'h-[520px] sm:h-[580px]'
      }`}
    >
      {/* Top Ambient Gold Bar */}
      <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 z-30"></div>

      {/* Top Floating Controls Bar */}
      <div className="absolute top-4 inset-x-4 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Room Header & Elevation Badge */}
        <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-950/85 border border-amber-400/50 backdrop-blur-md text-white shadow-xl flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 shrink-0 shadow-md">
            <Compass className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                3D SPATIAL ENGINE ACTIVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {currentRoom.name}
            </h4>
          </div>
        </div>

        {/* Live Bearing & Telemetry Badge */}
        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <div className="px-3.5 py-2 rounded-2xl bg-slate-950/85 border border-white/20 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2 shadow-lg">
            <span className="text-amber-400 font-bold">BEARING:</span>
            <span>{currentBearingAngle}° ({currentRoom.bearing.split('·')[0].trim()})</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">{currentRoom.floorArea}</span>
          </div>
        </div>

        {/* Top Right Action Controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-lg backdrop-blur-md ${
              autoRotate 
                ? 'bg-amber-500 text-zinc-950 border-amber-400 font-bold' 
                : 'bg-slate-900/90 text-slate-200 border-white/20 hover:bg-slate-800'
            }`}
          >
            {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={() => handleZoom(0.2)}
            title="Zoom In"
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/20 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleZoom(-0.2)}
            title="Zoom Out"
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/20 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
            className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/20 transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 360 Viewport Canvas & Drag Layer */}
      <div 
        className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Seamless Panoramic Tiling Image Layer */}
        <div 
          className="absolute inset-0 w-[300%] h-full flex transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(-${panOffset}%) scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}
        >
          <img 
            src={currentRoom.image} 
            alt={currentRoom.name}
            className="w-1/3 h-full object-cover shrink-0 pointer-events-none filter contrast-105 brightness-95"
            draggable={false}
          />
          <img 
            src={currentRoom.image} 
            alt={currentRoom.name}
            className="w-1/3 h-full object-cover shrink-0 pointer-events-none filter contrast-105 brightness-95"
            draggable={false}
          />
          <img 
            src={currentRoom.image} 
            alt={currentRoom.name}
            className="w-1/3 h-full object-cover shrink-0 pointer-events-none filter contrast-105 brightness-95"
            draggable={false}
          />
        </div>

        {/* Interactive Spatial Hotspots (Pins) */}
        {currentRoom.hotspots.map((spot) => {
          // Adjust hotspot position relative to pan
          const spotPositionX = ((spot.xPercent - (panOffset % 100) + 100) % 100);
          
          // Only show when in current field of view
          const isVisible = spotPositionX > 5 && spotPositionX < 95;
          if (!isVisible) return null;

          return (
            <div
              key={spot.id}
              style={{
                left: `${spotPositionX}%`,
                top: `${spot.yPercent}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-150"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedHotspot(spot);
                  setAutoRotate(false);
                }}
                className="relative group cursor-pointer focus:outline-none"
              >
                {/* Luminous Pulsing Outer Rings */}
                <span className="absolute -inset-2.5 rounded-full bg-amber-400/30 animate-ping"></span>
                <span className="absolute -inset-1 rounded-full bg-amber-400/50"></span>
                
                {/* Center Core Badge */}
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white text-zinc-950 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform">
                  <Sparkles className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                </div>

                {/* Hotspot Floating Label */}
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
          );
        })}

        {/* Centered Instruction Overlay Indicator on Initial Load */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-slate-950/80 border border-white/20 backdrop-blur-md text-slate-200 text-xs font-medium flex items-center gap-2 shadow-2xl animate-pulse">
            <Move className="w-3.5 h-3.5 text-amber-400" />
            <span>Click & Drag to pan 360° · Click luminous gold markers for specs</span>
          </div>
        </div>
      </div>

      {/* Selected Hotspot Detail Card Popup */}
      {selectedHotspot && (
        <div className="absolute bottom-24 right-4 sm:right-6 z-40 max-w-sm w-full bg-slate-950/95 border-2 border-amber-400 rounded-2xl p-5 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in text-white space-y-3">
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
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
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
          VIRTUAL ROOMS:
        </span>

        {TOUR_ROOMS.map((room, idx) => {
          const isActive = idx === activeRoomIndex;
          return (
            <button
              key={room.id}
              onClick={() => {
                setActiveRoomIndex(idx);
                setSelectedHotspot(null);
                setPanOffset(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
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
