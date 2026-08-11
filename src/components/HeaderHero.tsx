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
    <header className="relative w-full bg-neutral-950 border-b border-neutral-800/80">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-neutral-900/90 border-b border-amber-500/20 px-4 py-2 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              TROPHY RESIDENCE
            </span>
            <span className="text-neutral-400 font-light">Yorkville, Toronto, ON · Private Collection</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer" onClick={onOpenChat}>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              ARGUS AI Concierge Online
            </span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <a href="tel:+14169288800" className="hidden md:flex items-center gap-1 hover:text-white transition-colors">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              +1 (416) 928-8800
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded border border-amber-500/40 bg-neutral-900 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors">
            <span className="font-serif text-xl font-bold text-amber-400 tracking-tighter">Y</span>
          </div>
          <div>
            <span className="block font-serif text-lg tracking-wider text-neutral-100 font-semibold group-hover:text-amber-200 transition-colors uppercase">
              The Yorkville Luxury Group
            </span>
            <span className="block text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
              Premier Toronto Brokerage
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-neutral-300">
          <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
          <a href="#specs" className="hover:text-amber-400 transition-colors">Specifications</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
          <a href="#floorplan" className="hover:text-amber-400 transition-colors">Floorplan</a>
          <a href="#neighborhood" className="hover:text-amber-400 transition-colors">Yorkville</a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">Investment</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onShare}
            className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all"
            title="Share Dossier"
            id="share-button"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onOpenScheduleModal}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            id="schedule-tour-header-btn"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Schedule Tour</span>
          </button>
        </div>
      </nav>

      {/* Hero Container with Sleek Background */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/yorkville_hero_penthouse_1786469850313.jpg" 
            alt="The Yorkville Penthouse Collection"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>
          <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/30 to-neutral-950/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col justify-end min-h-[560px]">
          {/* Listing Badge & Address */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                OFFERED AT $4,500,000 CAD
              </span>
              <span className="px-3 py-1 rounded bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 text-neutral-300 text-xs font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                188 Bay Street · Yorkville, Toronto
              </span>
              <span className="px-3 py-1 rounded bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Private Elevator Direct
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              The Yorkville Penthouse Collection
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              An extraordinary 3,850 sq. ft. full-floor sky residence featuring a 1,200 sq. ft. heated wraparound terrace, 270° CN Tower panoramic skyline views, and bespoke interior architecture.
            </p>

            {/* Quick Specs Highlight Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
              <div className="p-3 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80">
                <span className="block text-xs text-neutral-400 uppercase tracking-wider">Bedrooms</span>
                <span className="font-serif text-xl text-amber-300 font-semibold">3 Suite Beds</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80">
                <span className="block text-xs text-neutral-400 uppercase tracking-wider">Bathrooms</span>
                <span className="font-serif text-xl text-amber-300 font-semibold">4 Luxury Baths</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80">
                <span className="block text-xs text-neutral-400 uppercase tracking-wider">Living Space</span>
                <span className="font-serif text-xl text-amber-300 font-semibold">5,050 sq. ft.</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-800/80">
                <span className="block text-xs text-neutral-400 uppercase tracking-wider">Elevator</span>
                <span className="font-serif text-xl text-amber-300 font-semibold">Private Foyer</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenScheduleModal}
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm tracking-wider uppercase transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
                id="hero-schedule-btn"
              >
                <Calendar className="w-4 h-4" />
                Schedule Private Viewing
              </button>

              <button
                onClick={() => onOpenGallery(0)}
                className="px-6 py-3.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-100 font-medium text-sm tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-md"
                id="hero-gallery-btn"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                View Gallery & Virtual Tour
              </button>

              <button
                onClick={onOpenChat}
                className="px-5 py-3.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-amber-500/30 text-amber-300 font-medium text-sm tracking-wider transition-all flex items-center gap-2 backdrop-blur-md"
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
