import React from 'react';
import { NEIGHBORHOOD_SPOTS } from '../data/propertyData';
import { MapPin, Navigation, Compass, Sparkles, Building2 } from 'lucide-react';

export const NeighborhoodSection: React.FC = () => {
  return (
    <section id="neighborhood" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            LOCATION & PREMIER LIFESTYLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold mt-1 tracking-tight">
            Yorkville · Toronto's Golden Mile
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal max-w-2xl leading-relaxed">
            Steps from Michelin-star gastronomy, haute couture flagships on Bloor Street, and private cultural institutions.
          </p>
        </div>

        {/* Spots Grid + Location Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Neighborhood Highlights List (Image-Backed Cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {NEIGHBORHOOD_SPOTS.map((spot, index) => (
              <div 
                key={index} 
                className="relative min-h-[300px] sm:min-h-[320px] rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-amber-400 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.22)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between p-6 sm:p-7"
              >
                {/* Full Background Image */}
                {spot.imageUrl && (
                  <img 
                    src={spot.imageUrl} 
                    alt={spot.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Dark Vignette & Gradient Overlay for pristine legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/40 group-hover:via-slate-950/60 transition-colors duration-500"></div>

                {/* Metallic Gold Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 group-hover:h-[4px] transition-all z-20"></div>

                {/* Top Badges */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-amber-300 uppercase tracking-wider px-3 py-1 rounded-lg bg-slate-950/80 border border-amber-400/50 font-bold backdrop-blur-md shadow-md">
                    {spot.category}
                  </span>
                  <span className="text-xs text-white font-mono flex items-center gap-1.5 font-bold bg-slate-950/80 px-3 py-1 rounded-lg border border-white/20 backdrop-blur-md shadow-md">
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    {spot.distance}
                  </span>
                </div>

                {/* Bottom Content with Crisp White Text */}
                <div className="relative z-10 space-y-2 pt-16">
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight drop-shadow-md group-hover:text-amber-300 transition-colors">
                    {spot.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed drop-shadow-sm line-clamp-3">
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Location Map Elevation Preview Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            <div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold mb-1">
                MAP LOCATION & WALKABILITY
              </span>
              <h3 className="font-serif text-2xl text-slate-950 font-bold">
                188 Bay Street / Yorkville Ave
              </h3>
              <p className="text-xs text-emerald-800 font-bold mt-2 flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-flex">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Walk Score: 99/100 · Transit Score: 100/100
              </p>
            </div>

            {/* Map Preview Graphic */}
            <div className="relative h-52 w-full rounded-xl bg-slate-900 border-2 border-slate-700 overflow-hidden flex items-center justify-center shadow-inner group">
              <img 
                src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=800&q=80" 
                alt="Toronto Downtown Skyline & Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]"></div>
              
              <div className="relative z-10 text-center p-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-300 text-zinc-950 inline-block mb-2 shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6 text-zinc-950 stroke-[2.5]" />
                </div>
                <span className="block text-xs font-bold text-white tracking-wider">THE YORKVILLE PENTHOUSE</span>
                <span className="block text-[11px] font-mono text-amber-400 font-bold mt-0.5">188 Bay Street, Suite 5200</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-700 border-b border-slate-200 pb-2.5 font-medium">
                <span className="text-slate-600">Pearson Int'l Airport (YYZ):</span>
                <span className="font-mono text-slate-950 font-bold">25 min chauffeur</span>
              </div>
              <div className="flex justify-between text-slate-700 border-b border-slate-200 pb-2.5 font-medium">
                <span className="text-slate-600">Billy Bishop Airport (YTZ):</span>
                <span className="font-mono text-slate-950 font-bold">12 min helicopter/cab</span>
              </div>
              <div className="flex justify-between text-slate-700 pt-0.5 font-medium">
                <span className="text-slate-600">Financial District / Bay St:</span>
                <span className="font-mono text-amber-800 font-bold">5 min drive</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
