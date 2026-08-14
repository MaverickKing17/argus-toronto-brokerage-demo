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
  Sparkles
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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-sm">
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
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/90 border border-amber-300 text-amber-700 shadow-sm group-hover:border-amber-400 group-hover:scale-110 transition-all duration-300">
                  {getIcon(spec.iconName)}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm border border-slate-800">
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

        {/* Narrative & Senior Broker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Main Residence Narrative */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition-all duration-300 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

              <div className="flex items-center gap-2">
                <span className="inline-block text-xs font-mono text-amber-900 uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-200 shadow-xs">
                  RESIDENCE OVERVIEW
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-950 font-bold leading-tight">
                {PROPERTY_DETAILS.tagline}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {PROPERTY_DETAILS.description}
              </p>
              
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
                  <span className="text-slate-500 block font-bold text-[11px] uppercase font-mono">Interior Area:</span>
                  <span className="text-slate-950 font-bold text-base font-serif mt-1 block">3,850 SQ. FT.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
                  <span className="text-slate-500 block font-bold text-[11px] uppercase font-mono">Private Terrace:</span>
                  <span className="text-slate-950 font-bold text-base font-serif mt-1 block">1,200 SQ. FT. HEATED</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
                  <span className="text-slate-500 block font-bold text-[11px] uppercase font-mono">Floor Position:</span>
                  <span className="text-slate-950 font-bold text-base font-serif mt-1 block">FULL 52ND FLOOR</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities List */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

              <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                Unsurpassed Architectural Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity.id} className="relative flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <div className="p-3.5 rounded-xl bg-white border border-amber-200 text-amber-700 shrink-0 shadow-sm group-hover:bg-amber-50 group-hover:border-amber-400 group-hover:scale-105 transition-all">
                      {getIcon(amenity.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-800 tracking-widest font-bold block">
                        {amenity.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-950 mt-0.5 group-hover:text-amber-900 transition-colors">
                        {amenity.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 font-normal leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Senior Broker Profile Card */}
          <div className="space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

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
