import React from 'react';
import { NEIGHBORHOOD_SPOTS } from '../data/propertyData';
import { MapPin, Navigation, Compass, Utensils, ShoppingBag, Landmark, Building } from 'lucide-react';

export const NeighborhoodSection: React.FC = () => {
  return (
    <section id="neighborhood" className="relative py-20 bg-[#F4F5F7] text-slate-900 border-b border-slate-200/90 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            LOCATION & PREMIER LIFESTYLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mt-1">
            Yorkville · Toronto's Golden Mile
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal max-w-2xl leading-relaxed">
            Steps from Michelin-star gastronomy, haute couture flagships on Bloor Street, and private cultural institutions.
          </p>
        </div>

        {/* Spots Grid + Location Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Neighborhood Highlights List */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {NEIGHBORHOOD_SPOTS.map((spot, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 space-y-3.5 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-800 uppercase tracking-wider px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 font-bold">
                    {spot.category}
                  </span>
                  <span className="text-xs text-slate-600 font-mono flex items-center gap-1 font-bold bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/90">
                    <Navigation className="w-3.5 h-3.5 text-amber-600" />
                    {spot.distance}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-slate-900 font-bold group-hover:text-amber-800 transition-colors">
                  {spot.name}
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>

          {/* Location Map Elevation Preview Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold mb-1">
                MAP LOCATION & WALKABILITY
              </span>
              <h3 className="font-serif text-xl text-slate-900 font-bold">
                188 Bay Street / Yorkville Ave
              </h3>
              <p className="text-xs text-emerald-700 font-bold mt-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Walk Score: 99/100 · Transit Score: 100/100
              </p>
            </div>

            {/* Map Preview Graphic */}
            <div className="relative h-48 w-full rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden flex items-center justify-center shadow-inner">
              <div className="relative z-10 text-center p-4">
                <div className="p-3 rounded-full bg-amber-100 border border-amber-400 text-amber-800 inline-block mb-2 shadow-sm animate-bounce">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <span className="block text-xs font-bold text-slate-900 tracking-wide">THE YORKVILLE PENTHOUSE</span>
                <span className="block text-[10px] font-mono text-slate-500 font-medium mt-0.5">188 Bay Street, Suite 5200</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-700 border-b border-slate-200/90 pb-2 font-medium">
                <span className="text-slate-500">Pearson Int'l Airport (YYZ):</span>
                <span className="font-mono text-slate-900 font-bold">25 min chauffeur</span>
              </div>
              <div className="flex justify-between text-slate-700 border-b border-slate-200/90 pb-2 font-medium">
                <span className="text-slate-500">Billy Bishop Airport (YTZ):</span>
                <span className="font-mono text-slate-900 font-bold">12 min helicopter/cab</span>
              </div>
              <div className="flex justify-between text-slate-700 pt-0.5 font-medium">
                <span className="text-slate-500">Financial District / Bay St:</span>
                <span className="font-mono text-amber-800 font-bold">5 min drive</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
