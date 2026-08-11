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
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-amber-400" />;
      case 'Wine': return <Wine className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="overview" className="py-16 bg-neutral-950 text-neutral-100 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              // ARCHITECTURAL DOSSIER & SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
              Property Specifications & Highlights
            </h2>
            <p className="text-neutral-400 text-sm mt-1 max-w-2xl font-light">
              Designed without compromise for the discerning collector seeking luxury living in Yorkville.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDossier}
              className="px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              id="download-dossier-btn"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              Request Official Brochure (PDF)
            </button>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROPERTY_SPECS.map((spec) => (
            <div 
              key={spec.id}
              className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/30 transition-all duration-300 group"
              id={`spec-card-${spec.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60 group-hover:border-amber-500/40 transition-colors">
                  {getIcon(spec.iconName)}
                </div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  VERIFIED SPEC
                </span>
              </div>
              <span className="block text-xs text-neutral-400 uppercase tracking-wider font-medium">
                {spec.label}
              </span>
              <span className="font-serif text-2xl text-white font-semibold mt-1 block group-hover:text-amber-300 transition-colors">
                {spec.value}
              </span>
              {spec.subtext && (
                <span className="block text-xs text-neutral-400 mt-2 font-light">
                  {spec.subtext}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Narrative & Senior Broker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Main Residence Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-4">
              <span className="inline-block text-xs font-mono text-amber-400 uppercase tracking-widest">
                RESIDENCE OVERVIEW
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                {PROPERTY_DETAILS.tagline}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {PROPERTY_DETAILS.description}
              </p>
              
              <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-neutral-400 block">Interior Area:</span>
                  <span className="text-white font-semibold text-sm font-mono">3,850 SQ. FT.</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Private Terrace:</span>
                  <span className="text-amber-300 font-semibold text-sm font-mono">1,200 SQ. FT. HEATED</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Floor Position:</span>
                  <span className="text-white font-semibold text-sm font-mono">FULL 52ND FLOOR</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities List */}
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
              <h3 className="font-serif text-xl text-white font-semibold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                Unsurpassed Architectural Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity.id} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                      {getIcon(amenity.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
                        {amenity.category}
                      </span>
                      <h4 className="text-sm font-semibold text-white mt-0.5">
                        {amenity.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
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
            <div className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-amber-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-2xl"></div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={BROKER_INFO.avatar} 
                  alt={BROKER_INFO.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/40 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                    EXCLUSIVE LISTING BROKER
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold">
                    {BROKER_INFO.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    {BROKER_INFO.title}
                  </p>
                  <span className="text-[10px] text-neutral-500 block mt-0.5 font-mono">
                    {BROKER_INFO.license}
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                "The Penthouse Collection at 188 Bay Street represents a rare opportunity to acquire Toronto's most coveted sky estate. Private viewings are conducted with total discretion."
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                <a 
                  href={`tel:${BROKER_INFO.phone}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs flex items-center justify-center gap-2 border border-neutral-700/80 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Direct Desk: {BROKER_INFO.phone}
                </a>

                <button 
                  onClick={onOpenScheduleModal}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-all"
                  id="broker-card-schedule-btn"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Request Private Showing Slot
                </button>

                <button 
                  onClick={onOpenChat}
                  className="w-full py-2.5 px-4 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-amber-500/30 text-amber-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                  id="broker-card-argus-btn"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Consult ARGUS AI Assistant
                </button>
              </div>
            </div>

            {/* Verification Seal Card */}
            <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/60 text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                VERIFIED BROKERAGE EXCLUSIVE
              </span>
              <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                Registered under the Real Estate Council of Ontario (RECO). All viewing requests are verified for buyer qualification and confidentiality.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
