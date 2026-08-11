import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded border border-amber-500/40 bg-neutral-900 flex items-center justify-center font-serif text-amber-400 font-bold">
                Y
              </div>
              <span className="font-serif text-lg text-white font-semibold tracking-wider">
                THE YORKVILLE LUXURY GROUP
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Toronto's premier real estate brokerage specializing in trophy sky estates, historic Yorkville manors, and private off-market collections.
            </p>
          </div>

          {/* Contact & Desk */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm text-white font-semibold uppercase tracking-wider">
              YORKVILLE HEADQUARTERS
            </h4>
            <p className="flex items-center gap-2 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              100 Bloor Street West, Suite 400, Toronto, ON
            </p>
            <p className="flex items-center gap-2 text-neutral-300">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              +1 (416) 928-8800
            </p>
            <p className="flex items-center gap-2 text-neutral-300">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              concierge@yorkvilleluxury.com
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm text-white font-semibold uppercase tracking-wider">
              THE COLLECTION
            </h4>
            <ul className="space-y-1 text-neutral-300">
              <li><a href="#overview" className="hover:text-amber-400 transition-colors">Penthouse Specifications</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">High-Res Gallery</a></li>
              <li><a href="#floorplan" className="hover:text-amber-400 transition-colors">Architectural Floorplans</a></li>
              <li><a href="#neighborhood" className="hover:text-amber-400 transition-colors">Yorkville Lifestyle</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Financial Modeling</a></li>
            </ul>
          </div>

          {/* Disclosures */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm text-white font-semibold uppercase tracking-wider">
              RECO COMPLIANCE
            </h4>
            <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
              Registered Real Estate Brokerage in Ontario (RECO #4892011). Equal Housing Opportunity. All square footage and specifications subject to independent buyer verification.
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              VERIFIED DISCREET BROKERAGE
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div>
            © 2026 The Yorkville Luxury Group. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Representation</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Discreet Client Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
