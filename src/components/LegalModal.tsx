import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  Copyright, 
  Cookie, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info,
  Award,
  Check
} from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'portal' | 'dmca' | 'disclaimers' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, initialTab = 'privacy', onClose }) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  const tabList: { id: LegalTab; label: string; icon: React.ReactNode; shortLabel: string }[] = [
    { id: 'privacy', label: 'Privacy Policy (PIPEDA & FINTRAC)', shortLabel: 'Privacy & FINTRAC', icon: <Lock className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Representation (TRESA)', shortLabel: 'Terms of Representation', icon: <FileText className="w-4 h-4" /> },
    { id: 'portal', label: 'Discreet Client Portal & NDAs', shortLabel: 'Discreet Portal & NDAs', icon: <Building2 className="w-4 h-4" /> },
    { id: 'dmca', label: 'DMCA & Architectural Copyright', shortLabel: 'DMCA & Copyright', icon: <Copyright className="w-4 h-4" /> },
    { id: 'disclaimers', label: 'RECO & TRREB Disclaimers', shortLabel: 'RECO Disclaimers', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookie & Tracking Policy', shortLabel: 'Cookie Policy', icon: <Cookie className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-5xl rounded-3xl bg-white border-2 border-slate-300/90 shadow-[0_25px_70px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col max-h-[90vh] my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Luminous Gold Top Ambient Bar */}
        <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 z-20"></div>

        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 bg-slate-950 text-white border-b border-slate-800 flex items-center justify-between shrink-0 relative overflow-hidden">
          {/* Subtle Ambient Gold Glow in Header */}
          <div className="absolute -right-20 -top-20 w-56 h-56 bg-amber-500/15 blur-[60px] pointer-events-none rounded-full"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] shrink-0">
              <Scale className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  AI SALES CLOSER TECHNOLOGY DEMONSTRATION · LEGAL SPECIFICATION
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-500/50 text-amber-300 shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  CONCEPT DEMO
                </span>
              </div>
              <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Legal & Regulatory Framework
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/20 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Close legal modal"
            id="close-legal-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          {tabList.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-zinc-950 font-bold shadow-[0_4px_15px_rgba(245,158,11,0.35)] border border-amber-300 scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 hover:border-slate-300'
                }`}
                id={`tab-btn-${tab.id}`}
              >
                <span className={isActive ? 'text-zinc-950' : 'text-amber-600'}>
                  {tab.icon}
                </span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body Content Area - High Legibility & Structured Card Design */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto text-slate-800 leading-relaxed bg-[#F9FAFB] flex-1">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              {/* Document Banner */}
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 01 // CANADIAN PRIVACY & FINTRAC PROTOCOL
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  Privacy Policy & Confidential Wealth Data Protection
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Effective Date: January 1, 2026 · Compliant with PIPEDA (Canada) & Ontario Personal Information Protection Framework
                </p>
              </div>

              {/* Executive Summary Highlight Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300/80 shadow-[0_4px_20px_rgba(245,158,11,0.12)] space-y-2.5">
                <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                  Ultra-High-Net-Worth (UHNW) Anonymity & Non-Disclosure Guarantee
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  The Yorkville Luxury Group (RECO Brokerage Registration #4892011) enforces institutional-grade privacy protocols. We never monetize, lease, disclose, or syndicate client identities, net worth credentials, wire transactions, or acquired property holdings to public property indexes, marketing brokers, or advertising networks.
                </p>
              </div>

              {/* Structured Numbered Sections */}
              <div className="grid grid-cols-1 gap-6">
                
                {/* Section 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Mandatory Identification & FINTRAC Anti-Money Laundering Compliance
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Under the federal <em>Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCTFA)</em> enforced by FINTRAC, licensed Canadian real estate brokerages are legally required to verify the bona fide identity of all transacting principals.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-950 text-xs block">Government ID Records</span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Passports & corporate beneficial ownership registries.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-950 text-xs block">Proof of Liquid Funds</span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Verified bank standing letters for Suite 5200 access.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-950 text-xs block">Encrypted Audit Logs</span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">Multi-factor tokens & secure showing records.</span>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Institutional AES-256 Data Encryption & Canadian Server Hosting
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    All client disclosures, draft purchase agreements, and private communications are encrypted at rest and in transit using military-grade AES-256 standard encryption on dedicated SOC2 Type II certified servers physically hosted within Canada.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      03
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Strict Limitation of Third-Party Disclosures
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Disclosures are executed strictly on a need-to-know basis directly with designated real estate attorneys, authorized statutory auditors from RECO, and escrow deposit holding accounts with chartered Schedule I Canadian banks.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF REPRESENTATION (TRESA) */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 02 // ONTARIO TRESA 2023 REGULATORY FRAMEWORK
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  Terms of Representation & Brokerage Fiduciary Duties
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Governed by the Trust in Real Estate Services Act, 2020 (TRESA) & Real Estate Council of Ontario (RECO)
                </p>
              </div>

              {/* Dual Representation Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white border-2 border-amber-300/80 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase font-mono tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    DESIGNATED REPRESENTATION
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Under TRESA 2023, you are represented individually by Victoria Sterling. Full undivided loyalty, confidentiality, and negotiation advocacy are owed strictly to you without conflict of interest.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase font-mono tracking-wider">
                    <Info className="w-4 h-4 text-slate-600" />
                    MULTIPLE REPRESENTATION DISCLOSURE
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    In the event that our brokerage represents both buyer and seller on Suite 5200, mandatory written disclosure and affirmative consent are required prior to presenting offer terms.
                  </p>
                </div>
              </div>

              {/* Detailed Articles */}
              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Statutory Fiduciary Guarantees Owed to Represented Clients
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span><strong>Undivided Loyalty:</strong> Advancing and defending the client's financial, tax, and legal position during acquisition talks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span><strong>Permanent Confidentiality:</strong> Absolute lifetime protection regarding purchasing budgets, motivation, and corporate structures.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span><strong>Full Material Disclosure:</strong> Complete disclosure of building physical specs, reserve fund health, and condominium bylaws.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      RECO-Insured Real Estate Trust Account Protection
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    All earnest deposit payments (typically 5% to 10% on Toronto luxury sky estates) are placed into government-regulated, insured real estate trust accounts managed pursuant to Section 27 of TRESA.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DISCREET CLIENT PORTAL & NDAs */}
          {activeTab === 'portal' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 03 // PRIVATE OFF-MARKET DOSSIER ACCESS
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  Discreet Client Portal & Non-Disclosure Agreement (NDA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Private Wealth Access Rules for Confidential Yorkville Sky Residences & Trophy Estates
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.1)] space-y-2.5">
                <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  Privileged Off-Market Inventory & Architectural Schematics
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  The Discreet Client Portal grants accredited purchasers, family offices, and estate trustees confidential access to non-public floorplans, 3D laser spatial scans, and private elevator access protocols not available on MLS systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-600" />
                    Binding Non-Disclosure Terms
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Recipients agree not to publish, screenshot, or distribute interior architectural photos, vendor information, or security layout schematics to press, social media, or public forums.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    Accredited Buyer Vetting
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    To preserve building resident privacy, private in-person viewing slots for Suite 5200 are confirmed after bank standing or legal counsel representation verification.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DMCA & ARCHITECTURAL COPYRIGHT */}
          {activeTab === 'dmca' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 04 // INTELLECTUAL PROPERTY & MEDIA PROTECTION
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  DMCA Notice & Architectural Copyright Policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Protection of 4K Photography, Spatial 3D Scans, Floorplans & Proprietary Branding under Canadian & US Copyright Standards
                </p>
              </div>

              {/* Highlight Box */}
              <div className="p-6 rounded-2xl bg-white border-2 border-amber-400 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm sm:text-base">
                  <Copyright className="w-5 h-5 text-amber-600 shrink-0" />
                  Proprietary Media & Spatial Data Ownership
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  All 4K architectural photography, 3D Matterport laser scans, CAD floorplan schematics, drone footage, financial mortgage calculators, and curated descriptive prose are protected intellectual property owned by The Yorkville Luxury Group.
                </p>
              </div>

              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Prohibition of Unauthorized Data Scraping & Re-hosting
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Automated web scraping, AI model training, framing, or syndication to third-party aggregation portals without express written consent is strictly prohibited and subject to injunctive relief.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-md space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500 text-zinc-950 font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h4 className="text-base sm:text-lg text-white font-bold">
                      Designated DMCA Copyright Takedown Agent
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Formal copyright notices or takedown inquiries should be dispatched directly to our legal desk:
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/15 font-mono text-xs space-y-1">
                    <p className="text-amber-400 font-bold">Legal Counsel & Intellectual Property Desk</p>
                    <p className="text-slate-200">The Yorkville Luxury Group · 100 Bloor Street West, Suite 400, Toronto, ON M5S 1M4</p>
                    <p className="text-slate-300">Email: legal@yorkvilleluxury.com | Desk: +1 (416) 928-8800</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RECO & TRREB DISCLAIMERS */}
          {activeTab === 'disclaimers' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 05 // REAL ESTATE COUNCIL & MLS DATA ACCURACY
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  RECO Compliance & TRREB MLS Disclaimers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Mandatory Disclosures for Toronto Regional Real Estate Board (TRREB) & Ontario Real Estate Association (OREA)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm space-y-2">
                <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  BROKERAGE REGISTRATION DETAILS
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The Yorkville Luxury Group is a registered Ontario Real Estate Brokerage licensed under RECO #4892011. Victoria Sterling is a licensed Senior Real Estate Broker in Ontario.
                </p>
              </div>

              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Independent Buyer Measurement Verification
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    All specifications, square footages (3,850 sq. ft. interior + 1,200 sq. ft. private terrace), maintenance fees ($3,250/mo), and property taxes ($38,500/yr) are provided for marketing orientation and must be confirmed through legal status certificate review.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h4 className="text-base sm:text-lg text-slate-950 font-bold">
                      Equal Housing Opportunity & Human Rights Compliance
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We strictly uphold the Ontario Human Rights Code and RECO Code of Ethics, delivering exemplary, non-discriminatory service across all client engagements.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: COOKIE & TRACKING POLICY */}
          {activeTab === 'cookies' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-4 border-b border-slate-200">
                <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                  LEGAL DOCUMENT 06 // PRIVACY PREFERENCES & DATA TOKENS
                </span>
                <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold mt-1 tracking-tight">
                  Cookie & Privacy Tracking Policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Transparent Session Management & High-Security Authentication Cookies
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-slate-950 font-bold block">`ylg_session_auth` (Strictly Essential)</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Encrypts authenticated tokens for private client viewing schedules.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold shrink-0">
                    ESSENTIAL
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-slate-950 font-bold block">`ylg_tour_state` (Functional)</span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Saves active floorplan room filters and 3D camera angles.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-300 font-bold shrink-0">
                    FUNCTIONAL
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    Zero Third-Party Advertising Retargeting Pixels
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700">
                    We do not install cross-site marketing pixels (such as Meta Pixel or third-party ad networks). Your browsing behavior remains completely confidential.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shrink-0 shadow-lg">
          <div className="flex items-center gap-2.5 text-slate-700 font-mono text-xs">
            <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">AI Sales Closer Interactive Prototype · Designed for Toronto Luxury Real Estate Brokerages & Teams</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            id="acknowledge-legal-modal-btn"
          >
            <CheckCircle2 className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
