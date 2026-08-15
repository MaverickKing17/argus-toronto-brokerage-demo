import React from 'react';
import { PROPERTY_DETAILS, PROPERTY_SPECS, AMENITIES_LIST, BROKER_INFO } from '../data/propertyData';
import { 
  DollarSign, 
  Bed, 
  Bath, 
  Maximize2, 
  ArrowUpRight, 
  Compass, 
  Car, 
  ShieldCheck, 
  Lock, 
  Wine, 
  Cpu, 
  Waves, 
  Zap, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Calendar,
  FileText,
  Award,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface PropertyOverviewProps {
  onOpenScheduleModal: () => void;
  onOpenChat: () => void;
  onRequestDossier: () => void;
}

export const PropertyOverview: React.FC<PropertyOverviewProps> = ({
  onOpenScheduleModal,
  onOpenChat,
  onRequestDossier
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-amber-600" />;
      case 'Bed': return <Bed className="w-5 h-5 text-amber-600" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-5 h-5 text-amber-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-600" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-amber-600" />;
      case 'Car': return <Car className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Lock': return <Lock className="w-5 h-5 text-amber-600" />;
      case 'Wine': return <Wine className="w-5 h-5 text-amber-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      default: return <Award className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="overview" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Ambient Warm Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              ARCHITECTURAL DOSSIER & SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold mt-1 tracking-tight">
              Property Specifications & Highlights
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Designed without compromise for the discerning collector seeking luxury living in Yorkville.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDossier}
              className="px-5 py-3.5 rounded-xl border-2 border-slate-300/90 bg-white hover:bg-slate-50 hover:border-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2.5 group cursor-pointer"
              id="download-dossier-btn"
            >
              <FileText className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
              Request Official Brochure (PDF)
            </button>
          </div>
        </div>

        {/* Specs Grid with High-Contrast Elevated Luxury White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROPERTY_SPECS.map((spec) => (
            <div 
              key={spec.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border-2 border-slate-200/90 hover:border-amber-500 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.18)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
              id={`spec-card-${spec.id}`}
            >
              {/* Metallic Gold Accent Top Bar */}
              <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 group-hover:h-[5px] transition-all duration-300"></div>

              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/90 border border-amber-300 text-amber-700 shadow-xs group-hover:border-amber-400 group-hover:scale-110 transition-all duration-300">
                  {getIcon(spec.iconName)}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  VERIFIED SPEC
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <span className="block text-[11px] font-mono text-amber-800 uppercase tracking-widest font-bold">
                  {spec.label}
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-slate-950 font-bold tracking-tight block group-hover:text-amber-900 transition-colors">
                  {spec.value}
                </span>
                {spec.subtext && (
                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700 font-semibold bg-slate-50/90 -mx-1 px-3 py-2 rounded-xl border border-slate-200">
                    <span>{spec.subtext}</span>
                    <span className="text-amber-600 font-bold text-sm">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Split Layout for Residence Overview */}
        <div className="mb-16 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border-2 border-slate-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Narrative & Key Stat Boxes (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs font-mono text-amber-900 uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 shadow-xs">
                  RESIDENCE ARCHITECTURAL OVERVIEW
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold leading-tight tracking-tight">
                {PROPERTY_DETAILS.tagline}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {PROPERTY_DETAILS.description}
              </p>

              {/* Stat Boxes */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Interior Residence:</span>
                  <span className="text-slate-950 font-bold text-lg sm:text-xl font-serif mt-1 block group-hover:text-amber-900">3,850 SQ. FT.</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">3 Bedrooms · 4 Baths</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Private Sky Terrace:</span>
                  <span className="text-amber-800 font-bold text-lg sm:text-xl font-serif mt-1 block">1,200 SQ. FT.</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">Automated Snow-Melt</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Elevation:</span>
                  <span className="text-slate-950 font-bold text-lg sm:text-xl font-serif mt-1 block group-hover:text-amber-900">FULL 52ND FLOOR</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Direct High-Speed Lift</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Vertical Architectural Interior Photo (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)] group h-[420px] sm:h-[480px]">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Penthouse Grand Salon & Skyline Vista" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-xl bg-slate-950/85 border border-amber-400/50 backdrop-blur-md text-amber-300 text-xs font-mono font-bold shadow-lg">
                  SUITE 5200 · SKY RESIDENCE
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 z-10 p-4 rounded-2xl bg-slate-950/90 border border-slate-700 backdrop-blur-md text-white shadow-xl space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      270° LAKE & CN TOWER PANORAMA
                    </span>
                    <span className="text-slate-400">10'8" CEILINGS</span>
                  </div>
                  <p className="text-xs text-slate-200 font-light">
                    Thermal acoustic glazing with integrated Lutron motorized Palladiom shading.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Unsurpassed Architectural Features & Broker Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Key Features & Amenities Grid (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] font-mono text-amber-800 uppercase tracking-widest block font-bold">
                  CURATED LUXURY APPOINTMENTS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-bold flex items-center gap-3 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  Unsurpassed Architectural Features
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 font-mono text-xs font-bold">
                6 EXCLUSIVE RESIDENCE TIERS
              </span>
            </div>

            {/* 6 Feature Cards with Image Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AMENITIES_LIST.map((amenity) => (
                <div 
                  key={amenity.id} 
                  className="relative rounded-2xl bg-white border-2 border-slate-200/90 hover:border-amber-500 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(245,158,11,0.16)] transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                >
                  {/* Thumbnail Image Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    {amenity.imageUrl && (
                      <img 
                        src={amenity.imageUrl} 
                        alt={amenity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                    
                    {/* Category Pill on Image */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono uppercase text-amber-300 tracking-wider font-bold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-amber-400/40 backdrop-blur-md shadow-xs">
                        {amenity.category}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-white text-amber-700 shadow-md border border-amber-300 group-hover:scale-110 group-hover:bg-amber-50 transition-all">
                      {getIcon(amenity.icon)}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-snug group-hover:text-amber-900 transition-colors">
                        {amenity.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1.5 font-normal leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-amber-800 font-bold gap-1 group-hover:translate-x-1 transition-transform">
                      <span>INSPECT DETAILS</span>
                      <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Broker Profile Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={BROKER_INFO.avatar} 
                    alt={BROKER_INFO.name}
                    className="w-18 h-18 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold">
                    EXCLUSIVE LISTING BROKER
                  </span>
                  <h3 className="font-serif text-2xl text-slate-950 font-bold">
                    {BROKER_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-700 font-semibold">
                    {BROKER_INFO.title}
                  </p>
                  <span className="text-[10px] text-slate-500 block mt-0.5 font-mono">
                    {BROKER_INFO.license}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-normal mb-6 italic p-4 rounded-xl bg-slate-50 border border-slate-200">
                "The Penthouse Collection at 188 Bay Street represents a rare opportunity to acquire Toronto's most coveted sky estate. Private viewings are conducted with total discretion."
              </p>

              <div className="space-y-3 pt-2">
                <a 
                  href={`tel:${BROKER_INFO.phone}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  Direct Desk: {BROKER_INFO.phone}
                </a>

                <button 
                  onClick={onOpenScheduleModal}
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-all cursor-pointer"
                  id="broker-card-schedule-btn"
                >
                  <Calendar className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                  Request Private Showing Slot
                </button>

                <button 
                  onClick={onOpenChat}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-black text-amber-300 hover:text-amber-200 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
                  id="broker-card-argus-btn"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  Consult ARGUS AI Assistant
                </button>
              </div>
            </div>

            {/* Verification Seal Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200/90 text-center space-y-2 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300">
              <span className="inline-flex items-center gap-2 text-slate-950 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                VERIFIED BROKERAGE EXCLUSIVE
              </span>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                Registered under the Real Estate Council of Ontario (RECO). All viewing requests are verified for buyer qualification and confidentiality.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
