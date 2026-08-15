import React, { useState } from 'react';
import { PROPERTY_DETAILS, AMENITIES_LIST, BROKER_INFO } from '../data/propertyData';
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
  ChevronRight,
  Info,
  X,
  Eye,
  SlidersHorizontal,
  Navigation
} from 'lucide-react';

interface PropertyOverviewProps {
  onOpenScheduleModal: () => void;
  onOpenChat: () => void;
  onRequestDossier: () => void;
}

interface SpecDetailModalData {
  title: string;
  subtitle: string;
  badge: string;
  metrics: { label: string; value: string }[];
  details: string[];
  architecturalNotes: string;
}

export const PropertyOverview: React.FC<PropertyOverviewProps> = ({
  onOpenScheduleModal,
  onOpenChat,
  onRequestDossier
}) => {
  // Hero Bento Metric Toggle: 'valuation' | 'breakdown' | 'analytics'
  const [heroTab, setHeroTab] = useState<'valuation' | 'breakdown' | 'analytics'>('valuation');
  
  // Selected Card Modal state for deeper technical inspection
  const [activeModalSpec, setActiveModalSpec] = useState<SpecDetailModalData | null>(null);

  // Compass view angle for 270° card interactive state
  const [activeViewDirection, setActiveViewDirection] = useState<'south' | 'west' | 'north'>('south');

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

  const handleOpenSpecDetail = (specType: string) => {
    switch (specType) {
      case 'valuation_space':
        setActiveModalSpec({
          title: "Valuation & Spatial Architecture",
          subtitle: "Suite 5200 · Penthouse Collection",
          badge: "MLS #C8492019 · EXCLUSIVE",
          metrics: [
            { label: "Listed Price", value: "$4,500,000 CAD" },
            { label: "Interior Climate Space", value: "3,850 Sq. Ft." },
            { label: "Private Heated Terrace", value: "1,200 Sq. Ft." },
            { label: "Blended Interior PSF", value: "~$1,168 / sq. ft." },
            { label: "Monthly Common Element", value: "$3,450 CAD/mo" },
            { label: "Annual Property Tax (2025)", value: "$34,200 CAD" }
          ],
          details: [
            "Fully detached floor-plate layout occupying the entire southern & western quadrant of the 52nd floor.",
            "Includes deeded ownership of 3 subterranean parking stalls with dedicated 240V 48A circuits and a secure 180 sq. ft. dry locker.",
            "Condo maintenance includes 24/7 dedicated porter/concierge, private lift maintenance, building insurance, snow-melt terrace systems, and full wellness spa access."
          ],
          architecturalNotes: "Engineered with triple-glazed thermal sound-barrier curtain walls achieving STC 48 acoustic isolation from metropolitan noise."
        });
        break;

      case 'beds_baths':
        setActiveModalSpec({
          title: "Suites & Spa Bathrooms",
          subtitle: "3 Bedrooms · 4.5 Bathrooms Layout",
          badge: "ARCHITECTURAL FLOORPLAN",
          metrics: [
            { label: "Primary Master Wing", value: "1,120 Sq. Ft. Private Suite" },
            { label: "Secondary Suites", value: "2 En-Suite Guest Rooms" },
            { label: "Bathrooms", value: "4 Full Ensuite + 1 Powder" },
            { label: "Primary Ensuite Fixtures", value: "Boffi + Dornbracht Platinum" },
            { label: "Wardrobe Systems", value: "Dual Rimadesio Walk-Ins" },
            { label: "Flooring", value: "Radiant-Heated Calacatta" }
          ],
          details: [
            "Primary bedroom suite features private direct terrace egress, acoustic privacy vestibule, and motorized blackout drapery.",
            "Primary Ensuite is clad in bookmatched Calacatta Oro marble slabs with a freestanding Boffi soaking tub and multi-head Dornbracht steam shower.",
            "Both guest suites include private ensuite bathrooms with custom Italian vanities and walk-in closets."
          ],
          architecturalNotes: "Dedicated powder room situated adjacent to the formal foyer with backlit onyx feature vanity and concealed Toto Neorest commode."
        });
        break;

      case 'elevator':
        setActiveModalSpec({
          title: "Direct Elevator Access & Foyer",
          subtitle: "High-Speed Private Lift to Suite 5200",
          badge: "BIOMETRIC RESTRICTED",
          metrics: [
            { label: "Access Control", value: "Biometric & RFID Touchpad" },
            { label: "Elevator Speed", value: "700 FPM High-Velocity" },
            { label: "Floor Access", value: "Dedicated 52nd Floor Lockout" },
            { label: "Foyer Reveal", value: "Private 140 Sq. Ft. Gallery" },
            { label: "Security Integration", value: "Crestron / 24/7 Concierge" },
            { label: "Secondary Egress", value: "Pressurized Service Stairwell" }
          ],
          details: [
            "High-speed elevator opens directly into your private foyer reveal without any shared corridor spaces.",
            "Programmable one-touch guest arrival mode authenticated directly from the Lutron wall panels or resident mobile app.",
            "Equipped with dedicated service elevator capacity for large art installations, bespoke furniture delivery, and private catering staff."
          ],
          architecturalNotes: "Foyer features 10'8\" ceiling reveals with bespoke cove lighting and sound-dampening fluted oak paneling."
        });
        break;

      case 'views':
        setActiveModalSpec({
          title: "270° Panoramic Sightlines",
          subtitle: "South, West & North Sky Horizon",
          badge: "UNOBSTRUCTED 52ND FLOOR",
          metrics: [
            { label: "Elevation", value: "52nd Floor (185m Above Grade)" },
            { label: "Sightline Arc", value: "270° Continuous Panorama" },
            { label: "Key Landmarks", value: "CN Tower, Lake Ontario, Skyline" },
            { label: "Sunset Exposure", value: "Direct West Golden Hour" },
            { label: "Acoustic Glazing", value: "Triple-Pane Thermal Low-E" },
            { label: "Solar Shading", value: "Motorized Lutron Palladiom" }
          ],
          details: [
            "Southern exposure overlooks the Financial District skyline, Royal Ontario Museum, and glistening waters of Lake Ontario.",
            "Western view captures unobstructed panoramic sunsets over High Park and the tree-lined canopy of historic Rosedale.",
            "Floor-to-ceiling glass reveals unobstructed horizon views with zero future tower obstruction zoning rights in the immediate line of sight."
          ],
          architecturalNotes: "Floor-to-ceiling vision glass panels measure up to 10 feet in single uninterrupted spans with structural silicone joints."
        });
        break;

      case 'parking':
        setActiveModalSpec({
          title: "Private Enclosed EV Garage",
          subtitle: "3 Enclosed Parking Bays + Hyper-Chargers",
          badge: "SUBTERRANEAN SECURE P1",
          metrics: [
            { label: "Allocated Stalls", value: "3 Enclosed Private Bays" },
            { label: "Charging Capacity", value: "Dual 240V / 48A Hyper-Chargers" },
            { label: "Storage Locker", value: "180 Sq. Ft. Private Climate Vault" },
            { label: "Location", value: "Direct Subterranean Level P1" },
            { label: "Access Security", value: "Automated RFID Plate Reader" },
            { label: "Detailing Area", value: "Resident Water & Power Outlet" }
          ],
          details: [
            "Private subterranean parking module equipped with automated roll-up security gate separating your vehicles from general building parking.",
            "Dedicated high-speed level 2 EV charging stations pre-wired on a private electrical sub-panel with smart metering.",
            "Direct proximity to the private high-speed elevator bank for seamless, discreet transit from vehicle to penthouse."
          ],
          architecturalNotes: "Includes a dry, humidity-managed 180 sq. ft. concrete storage vault for fine wine overflow, seasonal wardrobe, or sporting equipment."
        });
        break;
    }
  };

  return (
    <section id="overview" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Ambient Warm Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Single Verified MLS Seal & Luxury Metallic CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest shadow-xs">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                ARCHITECTURAL SPECIFICATIONS
              </span>

              {/* Single Elegant Verified MLS Architectural Data Seal */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-500/40 text-emerald-950 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified MLS Architectural Data · Suite 5200
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold tracking-tight">
              Property Specifications & Highlights
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Precision engineering and bespoke finishes curated for the discerning collector in Yorkville.
            </p>
          </div>

          {/* Prominent Luxury Metallic CTA Button with Shimmer Animation */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestDossier}
              className="relative group overflow-hidden px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_8px_30px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_36px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer border border-amber-300/80"
              id="download-dossier-btn"
            >
              {/* Shimmer Sheen Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform ease-out pointer-events-none"></div>
              
              <div className="p-1.5 rounded-lg bg-zinc-950/15 text-zinc-950">
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform stroke-[2.5]" />
              </div>
              <span>Request Official Brochure (PDF)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          
          {/* HERO BENTO CARD (Span 8 Columns on LG): Price & Total Living Space with Interactive Breakdown */}
          <div 
            onClick={() => handleOpenSpecDetail('valuation_space')}
            className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-white border border-amber-500/20 hover:border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            id="hero-bento-card"
          >
            {/* Subtle Gold Accent Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>

            <div>
              {/* Card Header with Interactive Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
                    <DollarSign className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-amber-800 uppercase tracking-widest font-bold block">
                      HERO VALUATION & FOOTPRINT
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Full 52nd Floor Private Estate
                    </span>
                  </div>
                </div>

                {/* Micro Tab Selector */}
                <div 
                  className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setHeroTab('valuation')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      heroTab === 'valuation'
                        ? 'bg-white text-slate-950 shadow-xs border border-slate-300/60'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Price
                  </button>
                  <button
                    onClick={() => setHeroTab('breakdown')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      heroTab === 'breakdown'
                        ? 'bg-white text-slate-950 shadow-xs border border-slate-300/60'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Sq. Ft. Breakdown
                  </button>
                  <button
                    onClick={() => setHeroTab('analytics')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                      heroTab === 'analytics'
                        ? 'bg-white text-slate-950 shadow-xs border border-slate-300/60'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    Analytics
                  </button>
                </div>
              </div>

              {/* Main Numeric Presentation with High-End Editorial Serif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-6">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                    OFFERING PRICE
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold tracking-tight text-balance group-hover:text-amber-900 transition-colors">
                    $4,500,000 <span className="text-base sm:text-lg font-sans font-semibold text-slate-500">CAD</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold mt-1.5 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Verified Exclusive Offering
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                    TOTAL COMBINED LIVING SPACE
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold tracking-tight group-hover:text-amber-900 transition-colors">
                    5,050 <span className="text-base sm:text-lg font-sans font-semibold text-slate-500">SQ. FT.</span>
                  </div>
                  <span className="text-xs text-amber-800 font-mono font-bold mt-1.5 block">
                    3,850 Interior + 1,200 Terrace
                  </span>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs">
                {heroTab === 'valuation' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
                    <div className="border-r-0 sm:border-r border-slate-200 pr-3">
                      <span className="text-slate-500 block text-[11px]">Blended Living PSF:</span>
                      <span className="font-mono text-slate-950 font-bold text-sm">~$1,168 / sq. ft.</span>
                    </div>
                    <div className="border-r-0 sm:border-r border-slate-200 pr-3">
                      <span className="text-slate-500 block text-[11px]">USD Equivalent (est):</span>
                      <span className="font-mono text-slate-950 font-bold text-sm">~$3,320,000 USD</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Monthly Maintenance:</span>
                      <span className="font-mono text-slate-950 font-bold text-sm">$3,450 CAD/mo</span>
                    </div>
                  </div>
                )}

                {heroTab === 'breakdown' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between font-medium">
                      <span className="text-slate-600">Interior Climate-Controlled Residence:</span>
                      <span className="font-mono text-slate-950 font-bold">3,850 sq. ft. (76%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden flex">
                      <div className="h-full bg-amber-500 w-[76%] rounded-l-full"></div>
                      <div className="h-full bg-slate-800 w-[24%] rounded-r-full"></div>
                    </div>
                    <div className="flex items-center justify-between font-medium pt-1">
                      <span className="text-slate-600">Private Sky Terrace (Radiant Heated & Plumbed):</span>
                      <span className="font-mono text-amber-800 font-bold">1,200 sq. ft. (24%)</span>
                    </div>
                  </div>
                )}

                {heroTab === 'analytics' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Yorkville Luxury Index:</span>
                      <span className="font-mono text-emerald-700 font-bold text-sm">+8.4% 12-Mo Trend</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Building Ownership:</span>
                      <span className="font-mono text-slate-950 font-bold text-sm">88% Owner-Occupied</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Elevation Profile:</span>
                      <span className="font-mono text-amber-800 font-bold text-sm">Top 0.1% Toronto Height</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Modal Trigger Prompt */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-bold font-mono">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-600" />
                CLICK FOR COMPLETE ARCHITECTURAL DOSSIER METRICS
              </span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* SECONDARY CARD 1 (Span 4 Columns on LG): Bedrooms & Baths */}
          <div 
            onClick={() => handleOpenSpecDetail('beds_baths')}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-amber-500/20 hover:border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            id="beds-baths-card"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
                  <Bed className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                  SUITE ACCOMMODATION
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                ACCOMMODATION LAYOUT
              </span>
              
              <div className="font-serif text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight group-hover:text-amber-900 transition-colors">
                3 Beds · 4.5 Baths
              </div>

              <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                Full master sanctuary wing featuring dual Rimadesio walk-in dressing suites, freestanding Boffi spa soaking tub, plus 2 private guest ensuite suites and a guest powder room.
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  1,120 Sq. Ft. Master Wing
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Dornbracht Fixtures
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Heated Marble Floors
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-bold font-mono">
              <span>INSPECT ROOM SPECS</span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* SECONDARY CARD 2 (Span 4 Columns on LG): 270° Panoramic Views with Interactive Orientation */}
          <div 
            onClick={() => handleOpenSpecDetail('views')}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-amber-500/20 hover:border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            id="views-bento-card"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                  HORIZON PERSPECTIVE
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                ELEVATION & SIGHTLINES
              </span>

              <div className="font-serif text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight group-hover:text-amber-900 transition-colors">
                270° Panoramic Vista
              </div>

              {/* Interactive View Direction Selector */}
              <div 
                className="my-3 flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveViewDirection('south')}
                  className={`flex-1 py-1 text-center rounded-lg font-bold transition-all cursor-pointer ${
                    activeViewDirection === 'south'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  South (Lake/CN)
                </button>
                <button
                  onClick={() => setActiveViewDirection('west')}
                  className={`flex-1 py-1 text-center rounded-lg font-bold transition-all cursor-pointer ${
                    activeViewDirection === 'west'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  West (Sunset)
                </button>
                <button
                  onClick={() => setActiveViewDirection('north')}
                  className={`flex-1 py-1 text-center rounded-lg font-bold transition-all cursor-pointer ${
                    activeViewDirection === 'north'
                      ? 'bg-slate-950 text-amber-400 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  North (Yorkville)
                </button>
              </div>

              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {activeViewDirection === 'south' && "Unobstructed high-altitude line of sight directly to CN Tower illumination and Lake Ontario water reflections."}
                {activeViewDirection === 'west' && "Spectacular unobstructed sunset horizon overlooking High Park and West Toronto tree canopy."}
                {activeViewDirection === 'north' && "Lush architectural canopy views over historic Yorkville village and Rosedale ravine."}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-bold font-mono">
              <span>VIEW ACOUSTIC SPECS</span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* SECONDARY CARD 3 (Span 4 Columns on LG): Direct Private Elevator Access */}
          <div 
            onClick={() => handleOpenSpecDetail('elevator')}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-amber-500/20 hover:border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            id="elevator-bento-card"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
                  <Lock className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                  ARRIVAL PROTOCOL
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                EXCLUSIVE ARRIVAL
              </span>

              <div className="font-serif text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight group-hover:text-amber-900 transition-colors">
                Direct Private Lift
              </div>

              <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                Biometric & encrypted keycard high-speed elevator opening exclusively into your private 140 sq. ft. 52nd-floor gallery foyer with zero shared corridors.
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  700 FPM Speed
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Biometric Access
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Zero Shared Hallways
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-bold font-mono">
              <span>VIEW SECURITY INTEGRATION</span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* SECONDARY CARD 4 (Span 4 Columns on LG): Private EV Garage & Storage Vault */}
          <div 
            onClick={() => handleOpenSpecDetail('parking')}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-amber-500/20 hover:border-amber-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.16)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            id="parking-bento-card"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300/80 text-amber-700 shadow-xs group-hover:scale-105 transition-transform">
                  <Car className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                  SUBTERRANEAN
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                PRIVATE MOTORING
              </span>

              <div className="font-serif text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight group-hover:text-amber-900 transition-colors">
                3 EV Hyper-Bays
              </div>

              <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                Dedicated enclosed private garage module on Level P1 with dual 240V hyper-chargers, private detailing power/water, and an adjacent 180 sq. ft. climate storage vault.
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Dual 240V Chargers
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  Level P1 Location
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                  180 Sq. Ft. Private Vault
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-bold font-mono">
              <span>VIEW GARAGE SPECIFICATIONS</span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* 2-Column Split Layout for Residence Overview */}
        <div className="mb-16 p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-amber-500/20 shadow-[0_12px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden">
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
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Interior Residence:</span>
                  <span className="text-slate-950 font-bold text-lg sm:text-xl font-serif mt-1 block group-hover:text-amber-900">3,850 SQ. FT.</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">3 Bedrooms · 4.5 Baths</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Private Sky Terrace:</span>
                  <span className="text-amber-800 font-bold text-lg sm:text-xl font-serif mt-1 block">1,200 SQ. FT.</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">Automated Snow-Melt</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group shadow-xs">
                  <span className="text-slate-500 block font-bold text-[10px] uppercase font-mono tracking-wider">Elevation:</span>
                  <span className="text-slate-950 font-bold text-lg sm:text-xl font-serif mt-1 block group-hover:text-amber-900">FULL 52ND FLOOR</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Direct High-Speed Lift</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Vertical Architectural Interior Photo (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.15)] group h-[420px] sm:h-[480px]">
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
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-amber-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden">
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
                  className="relative rounded-2xl bg-white border border-amber-500/15 hover:border-amber-500/60 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(245,158,11,0.16)] transition-all duration-300 group overflow-hidden flex flex-col justify-between"
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
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-amber-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition-all duration-300 relative overflow-hidden">
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
                  className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-all cursor-pointer border border-amber-300/80"
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
            <div className="p-6 rounded-2xl bg-white border border-amber-500/20 text-center space-y-2 shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300">
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

      {/* QUICK MODAL PREVIEW FOR DEEPER TECHNICAL SPECIFICATIONS */}
      {activeModalSpec && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalSpec(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl p-7 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.4)] border border-amber-500/30 overflow-hidden text-slate-900 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-2">
                  {activeModalSpec.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-950 font-bold tracking-tight">
                  {activeModalSpec.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  {activeModalSpec.subtitle}
                </p>
              </div>

              <button 
                onClick={() => setActiveModalSpec(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activeModalSpec.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">{m.label}</span>
                  <span className="font-serif text-base sm:text-lg font-bold text-slate-950 block mt-0.5">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Detailed Points */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-amber-800 uppercase tracking-wider font-bold block">
                TECHNICAL ENGINEERING HIGHLIGHTS:
              </span>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {activeModalSpec.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Notes Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-800">
              <span className="font-bold text-amber-900 block font-mono text-[10px] uppercase mb-1">
                ARCHITECTURAL NOTE:
              </span>
              {activeModalSpec.architecturalNotes}
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveModalSpec(null);
                  onRequestDossier();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-950 text-white hover:bg-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                Download Complete Specification PDF
              </button>

              <button
                onClick={() => {
                  setActiveModalSpec(null);
                  onOpenScheduleModal();
                }}
                className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                Schedule Showing
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
