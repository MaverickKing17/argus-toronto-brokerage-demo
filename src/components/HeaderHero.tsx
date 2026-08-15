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
  Lock,
  BedDouble,
  Bath,
  Maximize2,
  Layers
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
      {/* Top AI Demo Announcement Bar */}
      <div className="bg-slate-950 text-white border-b border-amber-500/30 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/50 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              AI SALES CLOSER DEMO
            </span>
            <span className="text-slate-300 font-medium text-[11px]">
              Custom-Built AI Sales Engine for Toronto Luxury Real Estate Brokerages & Teams
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-300 font-medium">
            <button 
              onClick={onOpenChat}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-bold cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Test AI Closer (ARGUS)</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[10px] font-mono">Concept Spec: 188 Bay St Penthouse</span>
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
              Interactive Brokerage Showcase
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
            src="https://i.ibb.co/GvSZs7mt/Chat-GPT-Image-Aug-14-2026-04-14-11-PM.png" 
            alt="The Yorkville Penthouse Collection Living Room"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Crisp, clear background exposure with gentle bottom fade for control contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content positioned directly over background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-6">
          {/* Listing Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              OFFERED AT $4,500,000 CAD
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white text-xs font-medium flex items-center gap-1.5 shadow-xl">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              188 Bay Street · Yorkville, Toronto
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/50 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-xl">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Private Elevator Direct
            </span>
          </div>

          {/* Headline and Description with High-Contrast Text Shadows */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
              The Yorkville Penthouse Collection
            </h1>

            <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              An extraordinary 3,850 sq. ft. full-floor sky residence featuring a 1,200 sq. ft. heated wraparound terrace, 270° CN Tower panoramic skyline views, and bespoke interior architecture.
            </p>
          </div>

          {/* Quick Specs Highlight Bar with High-Impact Ultra-Luxury Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl">
            {/* Card 1: Bedrooms */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-black/95 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/25 group-hover:scale-105 transition-all">
                  <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">BEDROOMS</span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight block drop-shadow-sm group-hover:text-amber-100 transition-colors">
                3 Suite Beds
              </span>
              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">Ensuite Walk-ins</span>
            </div>

            {/* Card 2: Bathrooms */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-black/95 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/25 group-hover:scale-105 transition-all">
                  <Bath className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">BATHROOMS</span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight block drop-shadow-sm group-hover:text-amber-100 transition-colors">
                4 Luxury Baths
              </span>
              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">Heated Calacatta</span>
            </div>

            {/* Card 3: Living Space */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-black/95 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/25 group-hover:scale-105 transition-all">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">LIVING SPACE</span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight block drop-shadow-sm group-hover:text-amber-100 transition-colors">
                5,050 sq. ft.
              </span>
              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">3,850 + 1,200 Terrace</span>
            </div>

            {/* Card 4: Elevator Access */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-black/95 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 text-white shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400 transition-all"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/25 group-hover:scale-105 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold">ELEVATOR</span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight block drop-shadow-sm group-hover:text-amber-100 transition-colors">
                Private Foyer
              </span>
              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">Biometric Keycard</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenScheduleModal}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.45)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.6)] hover:scale-[1.03] flex items-center gap-2.5 cursor-pointer"
              id="hero-schedule-btn"
            >
              <Calendar className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
              Schedule Private Viewing
            </button>

            <button
              onClick={() => onOpenGallery(0)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-b from-slate-900/90 to-black/90 hover:from-slate-800 hover:to-black/95 backdrop-blur-xl border border-white/20 hover:border-amber-400 text-white hover:text-amber-200 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.25)] hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
              id="hero-gallery-btn"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              View Gallery
            </button>

            <button
              onClick={onOpenChat}
              className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-amber-950/60 via-slate-950/90 to-black/90 hover:from-amber-950/80 hover:to-black backdrop-blur-xl border border-amber-400/50 hover:border-amber-300 text-amber-300 hover:text-amber-200 font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.35)] hover:scale-[1.02] flex items-center gap-2.5 cursor-pointer"
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
