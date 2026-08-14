import React from 'react';
import { PROPERTY_DETAILS, GALLERY_PHOTOS } from '../data/propertyData';
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
    <header className="relative w-full bg-[#F4F5F7] border-b border-slate-200/90">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#F4F5F7] border-b border-slate-200/90 px-4 py-2 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              TROPHY RESIDENCE
            </span>
            <span className="text-slate-700 font-medium">Yorkville, Toronto, ON · Private Collection</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 hover:text-amber-700 transition-colors cursor-pointer" onClick={onOpenChat}>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              ARGUS AI Concierge Online
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <a href="tel:+14169288800" className="hidden md:flex items-center gap-1 hover:text-slate-900 transition-colors text-slate-600">
              <PhoneCall className="w-3 h-3 text-slate-500" />
              +1 (416) 928-8800
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl border border-amber-200 bg-amber-50 flex items-center justify-center shadow-sm group-hover:border-amber-400 transition-colors">
            <span className="font-serif text-xl font-bold text-amber-900 tracking-tighter">Y</span>
          </div>
          <div>
            <span className="block font-serif text-lg tracking-wider text-slate-900 font-bold group-hover:text-amber-700 transition-colors uppercase">
              The Yorkville Luxury Group
            </span>
            <span className="block text-[10px] tracking-widest text-slate-500 uppercase font-mono font-semibold">
              Premier Toronto Brokerage
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-700">
          <a href="#overview" className="hover:text-amber-700 transition-colors">Overview</a>
          <a href="#specs" className="hover:text-amber-700 transition-colors">Specifications</a>
          <a href="#gallery" className="hover:text-amber-700 transition-colors">Gallery</a>
          <a href="#floorplan" className="hover:text-amber-700 transition-colors">Floorplan</a>
          <a href="#neighborhood" className="hover:text-amber-700 transition-colors">Yorkville</a>
          <a href="#calculator" className="hover:text-amber-700 transition-colors">Investment</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onShare}
            className="p-2.5 rounded-lg border border-slate-200/90 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm cursor-pointer"
            title="Share Dossier"
            id="share-button"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={onOpenScheduleModal}
            className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            id="schedule-tour-header-btn"
          >
            <Calendar className="w-4 h-4 text-zinc-950" />
            <span className="hidden sm:inline">Schedule Tour</span>
          </button>
        </div>
      </nav>

      {/* Hero Container with Clear Vivid Background */}
      <div className="relative min-h-[640px] lg:min-h-[720px] flex items-end overflow-hidden">
        {/* Luminous High-Res Penthouse Interior Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" 
            alt="The Yorkville Penthouse Collection Living Room"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Dark Gradient Vignette Overlay for Text Legibility Without Obscuring the View */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content positioned directly over background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-6">
          {/* Listing Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              OFFERED AT $4,500,000 CAD
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              188 Bay Street · Yorkville, Toronto
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Private Elevator Direct
            </span>
          </div>

          {/* Headline and Description Directly Over Hero Image */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-md">
              The Yorkville Penthouse Collection
            </h1>

            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl drop-shadow-sm">
              An extraordinary 3,850 sq. ft. full-floor sky residence featuring a 1,200 sq. ft. heated wraparound terrace, 270° CN Tower panoramic skyline views, and bespoke interior architecture.
            </p>
          </div>

          {/* Quick Specs Highlight Bar with High-Contrast Dark Glassmorphism Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <span className="block text-[10px] font-mono text-amber-300 uppercase tracking-wider font-bold">Bedrooms</span>
              <span className="font-serif text-xl sm:text-2xl text-white font-bold mt-1 block">3 Suite Beds</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <span className="block text-[10px] font-mono text-amber-300 uppercase tracking-wider font-bold">Bathrooms</span>
              <span className="font-serif text-xl sm:text-2xl text-white font-bold mt-1 block">4 Luxury Baths</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <span className="block text-[10px] font-mono text-amber-300 uppercase tracking-wider font-bold">Living Space</span>
              <span className="font-serif text-xl sm:text-2xl text-white font-bold mt-1 block">5,050 sq. ft.</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl hover:border-amber-400/60 transition-all duration-300">
              <span className="block text-[10px] font-mono text-amber-300 uppercase tracking-wider font-bold">Elevator Access</span>
              <span className="font-serif text-xl sm:text-2xl text-white font-bold mt-1 block">Private Foyer</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenScheduleModal}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl shadow-amber-500/30 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
              id="hero-schedule-btn"
            >
              <Calendar className="w-4 h-4 text-zinc-950" />
              Schedule Private Viewing
            </button>

            <button
              onClick={() => onOpenGallery(0)}
              className="px-6 py-3.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 hover:border-amber-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              id="hero-gallery-btn"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              View Gallery
            </button>

            <button
              onClick={onOpenChat}
              className="px-5 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-950 backdrop-blur-md border border-amber-400/50 text-amber-300 font-bold text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              id="hero-argus-btn"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              Inquire with ARGUS AI
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
