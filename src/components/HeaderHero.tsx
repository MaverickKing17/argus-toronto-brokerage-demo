import React from 'react';
import { PROPERTY_DETAILS } from '../data/propertyData';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Compass, 
  ArrowUpRight, 
  PhoneCall, 
  Download, 
  Share2, 
  Eye,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface HeaderHeroProps {
  onOpenScheduleModal: () => void;
  onOpenChat: () => void;
  onOpenGallery: (photoIndex?: number) => void;
  onShare: () => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({
  onOpenScheduleModal,
  onOpenChat,
  onOpenGallery,
  onShare
}) => {
  return (
    <header className="relative w-full bg-[#121212] border-b border-zinc-800">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-200 border border-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              TROPHY RESIDENCE
            </span>
            <span className="text-zinc-300 font-medium">Yorkville, Toronto, ON · Private Collection</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-300 font-medium">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer" onClick={onOpenChat}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              ARGUS AI Concierge Online
            </span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <a href="tel:+14169288800" className="hidden md:flex items-center gap-1 hover:text-white transition-colors text-zinc-300">
              <PhoneCall className="w-3 h-3 text-zinc-300" />
              +1 (416) 928-8800
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center shadow-lg group-hover:border-zinc-500 transition-colors">
            <span className="font-serif text-xl font-bold text-white tracking-tighter">Y</span>
          </div>
          <div>
            <span className="block font-serif text-lg tracking-wider text-zinc-100 font-bold group-hover:text-amber-300 transition-colors uppercase">
              The Yorkville Luxury Group
            </span>
            <span className="block text-[10px] tracking-widest text-zinc-400 uppercase font-mono font-medium">
              Premier Toronto Brokerage
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-200">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#specs" className="hover:text-white transition-colors">Specifications</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#floorplan" className="hover:text-white transition-colors">Floorplan</a>
          <a href="#neighborhood" className="hover:text-white transition-colors">Yorkville</a>
          <a href="#calculator" className="hover:text-white transition-colors">Investment</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onShare}
            className="p-2.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-600 transition-all"
            title="Share Dossier"
            id="share-button"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onOpenScheduleModal}
            className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            id="schedule-tour-header-btn"
          >
            <Calendar className="w-4 h-4 text-zinc-950" />
            <span className="hidden sm:inline">Schedule Tour</span>
          </button>
        </div>
      </nav>

      {/* Hero Container with Clear Vivid Background */}
      <div className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
        {/* Luminous Background Image with Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/yorkville_hero_penthouse_1786469850313.jpg" 
            alt="The Yorkville Penthouse Collection"
            className="w-full h-full object-cover object-center transform scale-100 filter brightness-105 contrast-105 saturate-110"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional gradient scrim for high left-side text contrast while leaving the right side & CN Tower view ultra-clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent w-full md:w-[75%] lg:w-[65%]"></div>
          {/* Bottom transition gradient to seamlessly blend into page section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
          {/* Top subtle nav shadow */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-zinc-950/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full flex flex-col justify-end">
          {/* Listing Badge & Address */}
          <div className="space-y-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                OFFERED AT $4,500,000 CAD
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-zinc-700/90 text-zinc-100 text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                188 Bay Street · Yorkville, Toronto
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Private Elevator Direct
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              The Yorkville Penthouse Collection
            </h1>

            <p className="text-zinc-100 text-base sm:text-lg max-w-2xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              An extraordinary 3,850 sq. ft. full-floor sky residence featuring a 1,200 sq. ft. heated wraparound terrace, 270° CN Tower panoramic skyline views, and bespoke interior architecture.
            </p>

            {/* Quick Specs Highlight Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
              <div className="p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 shadow-2xl">
                <span className="block text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-bold">Bedrooms</span>
                <span className="font-serif text-xl text-white font-bold mt-0.5 block">3 Suite Beds</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 shadow-2xl">
                <span className="block text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-bold">Bathrooms</span>
                <span className="font-serif text-xl text-white font-bold mt-0.5 block">4 Luxury Baths</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 shadow-2xl">
                <span className="block text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-bold">Living Space</span>
                <span className="font-serif text-xl text-white font-bold mt-0.5 block">5,050 sq. ft.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 shadow-2xl">
                <span className="block text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-bold">Elevator</span>
                <span className="font-serif text-xl text-white font-bold mt-0.5 block">Private Foyer</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenScheduleModal}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2 hover:scale-[1.02]"
                id="hero-schedule-btn"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                Schedule Private Viewing
              </button>

              <button
                onClick={() => onOpenGallery(0)}
                className="px-6 py-3.5 rounded-xl bg-zinc-950/90 hover:bg-zinc-800 border border-zinc-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-md shadow-xl hover:border-amber-500/40"
                id="hero-gallery-btn"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                View Gallery & Virtual Tour
              </button>

              <button
                onClick={onOpenChat}
                className="px-5 py-3.5 rounded-xl bg-zinc-950/90 hover:bg-zinc-800 border border-amber-500/50 text-amber-300 font-bold text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 backdrop-blur-md shadow-xl"
                id="hero-argus-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                Ask ARGUS AI 24/7
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
