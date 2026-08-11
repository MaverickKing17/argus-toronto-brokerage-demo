import React from 'react';
import { NEIGHBORHOOD_SPOTS } from '../data/propertyData';
import { MapPin, Navigation, Compass, Utensils, ShoppingBag, Landmark, Building } from 'lucide-react';

export const NeighborhoodSection: React.FC = () => {
  return (
    <section id="neighborhood" className="py-16 bg-neutral-950 text-neutral-100 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            // LOCATION & PREMIER LIFESTYLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
            Yorkville · Toronto's Golden Mile
          </h2>
          <p className="text-neutral-400 text-sm mt-1 font-light max-w-2xl">
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
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-amber-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {spot.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-amber-400" />
                    {spot.distance}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-white font-semibold">
                  {spot.name}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {spot.description}
                </p>
              </div>
            ))}
          </div>

          {/* Location Map Elevation Preview Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                MAP LOCATION & WALKABILITY
              </span>
              <h3 className="font-serif text-xl text-white font-semibold mt-1">
                188 Bay Street / Yorkville Ave
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Walk Score: 99/100 · Transit Score: 100/100
              </p>
            </div>

            {/* Map Preview Graphic */}
            <div className="relative h-48 w-full rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
              
              <div className="relative z-10 text-center p-4">
                <div className="p-3 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 inline-block mb-2 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="block text-xs font-semibold text-white">THE YORKVILLE PENTHOUSE</span>
                <span className="block text-[10px] font-mono text-neutral-400">188 Bay Street, Suite 5200</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-neutral-300 border-b border-neutral-800 py-1.5">
                <span>Pearson Int'l Airport (YYZ):</span>
                <span className="font-mono text-amber-300">25 min chauffeur</span>
              </div>
              <div className="flex justify-between text-neutral-300 border-b border-neutral-800 py-1.5">
                <span>Billy Bishop Airport (YTZ):</span>
                <span className="font-mono text-amber-300">12 min helicopter/cab</span>
              </div>
              <div className="flex justify-between text-neutral-300 py-1.5">
                <span>Financial District / Bay St:</span>
                <span className="font-mono text-amber-300">5 min drive</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
