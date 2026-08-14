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
  Award
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
    <section id="overview" className="relative py-20 bg-[#F4F5F7] text-slate-900 border-b border-slate-200/90 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              ARCHITECTURAL DOSSIER & SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mt-1">
              Property Specifications & Highlights
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
              Designed without compromise for the discerning collector seeking luxury living in Yorkville.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDossier}
              className="px-5 py-3 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-amber-500 text-slate-900 font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 group cursor-pointer"
              id="download-dossier-btn"
            >
              <FileText className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
              Request Official Brochure (PDF)
            </button>
          </div>
        </div>

        {/* Specs Grid with Elevated Solid White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROPERTY_SPECS.map((spec) => (
            <div 
              key={spec.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              id={`spec-card-${spec.id}`}
            >
              {/* Metallic Gold Accent Top Bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20 group-hover:via-amber-500 transition-all duration-500"></div>

              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 shadow-sm group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300">
                  {getIcon(spec.iconName)}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  VERIFIED SPEC
                </span>
              </div>

              <div className="relative z-10 space-y-1">
                <span className="block text-[11px] font-mono text-amber-800 uppercase tracking-widest font-bold">
                  {spec.label}
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight block group-hover:text-amber-700 transition-colors">
                  {spec.value}
                </span>
                {spec.subtext && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold bg-slate-50 -mx-1 px-3 py-1.5 rounded-lg border border-slate-200/80">
                    <span>{spec.subtext}</span>
                    <span className="text-amber-600 text-xs">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Senior Broker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8">
          
          {/* Main Residence Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-4 relative overflow-hidden">
              <span className="inline-block text-xs font-mono text-amber-800 uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
                RESIDENCE OVERVIEW
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">
                {PROPERTY_DETAILS.tagline}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {PROPERTY_DETAILS.description}
              </p>
              
              <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <span className="text-slate-500 block font-medium">Interior Area:</span>
                  <span className="text-slate-900 font-bold text-sm font-mono mt-0.5 block">3,850 SQ. FT.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <span className="text-slate-500 block font-medium">Private Terrace:</span>
                  <span className="text-slate-900 font-bold text-sm font-mono mt-0.5 block">1,200 SQ. FT. HEATED</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <span className="text-slate-500 block font-medium">Floor Position:</span>
                  <span className="text-slate-900 font-bold text-sm font-mono mt-0.5 block">FULL 52ND FLOOR</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities List */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-bold mb-6 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Unsurpassed Architectural Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity.id} className="relative flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md group overflow-hidden">
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 shrink-0 shadow-sm group-hover:border-amber-400 group-hover:scale-105 transition-all">
                      {getIcon(amenity.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-800 tracking-widest font-bold block">
                        {amenity.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5 group-hover:text-amber-800 transition-colors">
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={BROKER_INFO.avatar} 
                  alt={BROKER_INFO.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-mono text-amber-800 uppercase tracking-wider block font-bold">
                    EXCLUSIVE LISTING BROKER
                  </span>
                  <h3 className="font-serif text-xl text-slate-900 font-bold">
                    {BROKER_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {BROKER_INFO.title}
                  </p>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">
                    {BROKER_INFO.license}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 italic p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                "The Penthouse Collection at 188 Bay Street represents a rare opportunity to acquire Toronto's most coveted sky estate. Private viewings are conducted with total discretion."
              </p>

              <div className="space-y-3 pt-2">
                <a 
                  href={`tel:${BROKER_INFO.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200/90 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  Direct Desk: {BROKER_INFO.phone}
                </a>

                <button 
                  onClick={onOpenScheduleModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  id="broker-card-schedule-btn"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-950" />
                  Request Private Showing Slot
                </button>

                <button 
                  onClick={onOpenChat}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-amber-400 text-amber-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow-md cursor-pointer"
                  id="broker-card-argus-btn"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  Consult ARGUS AI Assistant
                </button>
              </div>
            </div>

            {/* Verification Seal Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center space-y-2 shadow-md hover:shadow-lg transition-all duration-300">
              <span className="inline-flex items-center gap-1.5 text-slate-900 text-xs font-bold">
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
