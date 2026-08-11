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
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-amber-400" />;
      case 'Bed': return <Bed className="w-5 h-5 text-amber-400" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-5 h-5 text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-amber-400" />;
      case 'Car': return <Car className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-amber-400" />;
      case 'Wine': return <Wine className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="overview" className="relative py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800/80 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              ARCHITECTURAL DOSSIER & SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mt-1">
              Property Specifications & Highlights
            </h2>
            <p className="text-zinc-300 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
              Designed without compromise for the discerning collector seeking luxury living in Yorkville.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDossier}
              className="px-5 py-3 rounded-xl border border-amber-500/40 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:border-amber-400 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center gap-2.5 group"
              id="download-dossier-btn"
            >
              <FileText className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              Request Official Brochure (PDF)
            </button>
          </div>
        </div>

        {/* Specs Grid with High Contrast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROPERTY_SPECS.map((spec) => (
            <div 
              key={spec.id}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-900 to-zinc-950 border border-zinc-700/80 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 group overflow-hidden"
              id={`spec-card-${spec.id}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 shadow-inner group-hover:border-amber-500/30 transition-colors">
                  {getIcon(spec.iconName)}
                </div>
                <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  VERIFIED SPEC
                </span>
              </div>
              <span className="block text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                {spec.label}
              </span>
              <span className="font-serif text-2xl text-white font-bold mt-1 block group-hover:text-amber-300 transition-colors">
                {spec.value}
              </span>
              {spec.subtext && (
                <span className="block text-xs text-zinc-300 mt-2 font-medium">
                  {spec.subtext}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Narrative & Senior Broker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8">
          
          {/* Main Residence Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-700/80 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <span className="inline-block text-xs font-mono text-amber-400 uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                RESIDENCE OVERVIEW
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                {PROPERTY_DETAILS.tagline}
              </h3>
              <p className="text-zinc-200 text-sm leading-relaxed font-normal">
                {PROPERTY_DETAILS.description}
              </p>
              
              <div className="pt-6 border-t border-zinc-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-zinc-400 block font-medium">Interior Area:</span>
                  <span className="text-white font-bold text-sm font-mono mt-0.5 block">3,850 SQ. FT.</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-zinc-400 block font-medium">Private Terrace:</span>
                  <span className="text-white font-bold text-sm font-mono mt-0.5 block">1,200 SQ. FT. HEATED</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <span className="text-zinc-400 block font-medium">Floor Position:</span>
                  <span className="text-white font-bold text-sm font-mono mt-0.5 block">FULL 52ND FLOOR</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities List */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-700/80 shadow-2xl">
              <h3 className="font-serif text-xl text-white font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Unsurpassed Architectural Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity.id} className="flex items-start gap-4 p-4.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-amber-400 shrink-0 shadow-sm">
                      {getIcon(amenity.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider font-bold block">
                        {amenity.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">
                        {amenity.title}
                      </h4>
                      <p className="text-xs text-zinc-300 mt-1 font-normal leading-relaxed">
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
            <div className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-700/90 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={BROKER_INFO.avatar} 
                  alt={BROKER_INFO.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/80 shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-bold">
                    EXCLUSIVE LISTING BROKER
                  </span>
                  <h3 className="font-serif text-xl text-white font-bold">
                    {BROKER_INFO.name}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium">
                    {BROKER_INFO.title}
                  </p>
                  <span className="text-[10px] text-zinc-400 block mt-0.5 font-mono">
                    {BROKER_INFO.license}
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-200 leading-relaxed font-normal mb-6 italic p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                "The Penthouse Collection at 188 Bay Street represents a rare opportunity to acquire Toronto's most coveted sky estate. Private viewings are conducted with total discretion."
              </p>

              <div className="space-y-3 pt-2">
                <a 
                  href={`tel:${BROKER_INFO.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 border border-zinc-700 transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Direct Desk: {BROKER_INFO.phone}
                </a>

                <button 
                  onClick={onOpenScheduleModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all"
                  id="broker-card-schedule-btn"
                >
                  <Calendar className="w-3.5 h-3.5 text-zinc-950" />
                  Request Private Showing Slot
                </button>

                <button 
                  onClick={onOpenChat}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                  id="broker-card-argus-btn"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Consult ARGUS AI Assistant
                </button>
              </div>
            </div>

            {/* Verification Seal Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-2 shadow-lg">
              <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                VERIFIED BROKERAGE EXCLUSIVE
              </span>
              <p className="text-[11px] text-zinc-300 font-normal leading-relaxed">
                Registered under the Real Estate Council of Ontario (RECO). All viewing requests are verified for buyer qualification and confidentiality.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
