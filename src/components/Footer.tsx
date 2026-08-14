import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, Lock, FileText, Scale, Copyright, Cookie, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { LegalModal, LegalTab } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<LegalTab>('privacy');
  const [vipEmail, setVipEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const openLegalTab = (tab: LegalTab) => {
    setSelectedTab(tab);
    setLegalModalOpen(true);
  };

  const handleVipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vipEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setVipEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="relative bg-[#0A0B0E] text-slate-300 text-xs border-t-2 border-amber-500/40 pt-20 pb-16 overflow-hidden">
      
      {/* Subtle Top Gold Ambient Glow and Background Radiance */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-amber-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* VIP Off-Market Registry Banner Card (High-Impact Gilded Obsidian Card) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#13151B] to-slate-950 border-2 border-amber-500/40 shadow-[0_12px_45px_rgba(0,0,0,0.85)] hover:border-amber-400 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          {/* Top Golden Light Streak */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:h-[3px] transition-all"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/15 blur-[80px] pointer-events-none rounded-full"></div>

          <div className="space-y-3 max-w-xl relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-400/15 border border-amber-400/50 text-amber-300 uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                VVIP OFF-MARKET REGISTRY
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider">YORKVILLE & BAY ST</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
              Access Private Off-Market Penthouse Collections
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Join Toronto’s confidential registry to receive non-public listing dossiers, 3D spatial floorplans, and private elevator access protocols prior to public MLS placement.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 relative z-10">
            {!subscribed ? (
              <form onSubmit={handleVipSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={vipEmail}
                  onChange={(e) => setVipEmail(e.target.value)}
                  placeholder="vance@privateoffice.com"
                  className="w-full sm:w-80 px-4.5 py-3.5 rounded-xl bg-black/70 border-2 border-white/20 text-white text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500 font-medium shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.45)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.6)] hover:scale-[1.03] flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  id="join-offmarket-registry-btn"
                >
                  Join Registry
                  <ArrowRight className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                </button>
              </form>
            ) : (
              <div className="p-4.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-400/60 text-emerald-200 flex items-center gap-3 text-xs font-semibold animate-fade-in shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-white font-bold text-sm">Registration Received</span>
                  <span className="text-[11px] font-normal text-emerald-300">Confidential vetting invitation dispatched via encrypted channel.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4-Column Main Footer Section with Rich Dark Surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-4">
          
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border-2 border-amber-400 bg-gradient-to-br from-amber-500/20 to-black flex items-center justify-center font-serif text-amber-300 font-bold text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                Y
              </div>
              <div>
                <span className="font-serif text-base sm:text-lg text-white font-bold tracking-wider block">
                  THE YORKVILLE LUXURY GROUP
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-semibold block">
                  ONTARIO REGISTERED BROKERAGE #4892011
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              Toronto's premier boutique real estate brokerage specializing in trophy sky estates, historic Yorkville manors, and private off-market property collections.
            </p>

            {/* Compliance Trust Badges */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-mono text-[10px] font-bold bg-emerald-950/60 px-3.5 py-2 rounded-xl border border-emerald-500/40 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RECO VERIFIED · FINTRAC COMPLIANT</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300 font-semibold">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 shadow-xs">TRREB MEMBER</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 shadow-xs">OREA / CREA</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 shadow-xs">PIPEDA SAFE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Yorkville Headquarters */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-2 border-b border-white/15 flex items-center justify-between">
              <span>YORKVILLE HEADQUARTERS</span>
              <Building2 className="w-4 h-4 text-amber-400" />
            </h4>
            
            <div className="space-y-3 pt-1 text-xs">
              <p className="flex items-start gap-2.5 text-slate-200 font-medium">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100 Bloor Street West, Suite 400<br />Yorkville, Toronto, ON M5S 1M4</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-200 font-medium">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (416) 928-8800 (Private Desk)</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-200 font-medium">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>concierge@yorkvilleluxury.com</span>
              </p>
            </div>

            <div className="pt-1">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-1.5 shadow-md">
                <span className="text-[10px] font-mono text-amber-300 font-bold block uppercase tracking-wider">MANAGEMENT DESK HOURS</span>
                <p className="text-[11px] text-slate-300 font-medium">Mon–Fri: 8:00 AM – 8:00 PM EST</p>
                <p className="text-[11px] text-amber-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  24/7 VIP On-Call Advisory for Suite 5200
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: The Collection Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-2 border-b border-white/15">
              THE PENTHOUSE COLLECTION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <a href="#overview" className="hover:text-amber-300 transition-colors flex items-center gap-2.5 group">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shrink-0"></span>
                  Penthouse Specifications
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors flex items-center gap-2.5 group">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shrink-0"></span>
                  Architectural Visual Portfolio
                </a>
              </li>
              <li>
                <a href="#floorplan" className="hover:text-amber-300 transition-colors flex items-center gap-2.5 group">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shrink-0"></span>
                  3D Floorplans & Schematics
                </a>
              </li>
              <li>
                <a href="#neighborhood" className="hover:text-amber-300 transition-colors flex items-center gap-2.5 group">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shrink-0"></span>
                  Yorkville Lifestyle & Dining
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors flex items-center gap-2.5 group">
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shrink-0"></span>
                  Financial Carry Modeling
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Detailed Legal & Regulatory Governance */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-2 border-b border-white/15 flex items-center justify-between">
              <span>LEGAL & GOVERNANCE</span>
              <Scale className="w-4 h-4 text-amber-400" />
            </h4>

            <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
              Explore Toronto real estate regulatory frameworks, Ontario TRESA guidelines, and client non-disclosure protocols:
            </p>

            <div className="space-y-2 font-medium">
              <button
                onClick={() => openLegalTab('privacy')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-privacy-btn"
              >
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  Privacy Policy (PIPEDA/FINTRAC)
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>

              <button
                onClick={() => openLegalTab('terms')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-terms-btn"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  Terms of Representation (TRESA)
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>

              <button
                onClick={() => openLegalTab('portal')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-portal-btn"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Discreet Client Portal & NDAs
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>

              <button
                onClick={() => openLegalTab('dmca')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-dmca-btn"
              >
                <span className="flex items-center gap-2">
                  <Copyright className="w-3.5 h-3.5 text-amber-400" />
                  DMCA & Architectural Copyright
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>

              <button
                onClick={() => openLegalTab('disclaimers')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-disclaimers-btn"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  RECO & TRREB Disclaimers
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>

              <button
                onClick={() => openLegalTab('cookies')}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-amber-400/60 text-slate-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group cursor-pointer shadow-sm"
                id="footer-cookies-btn"
              >
                <span className="flex items-center gap-2">
                  <Cookie className="w-3.5 h-3.5 text-amber-400" />
                  Cookie & Tracking Policy
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">View →</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Regulatory Notice & Quick Links */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400 font-medium">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <p className="text-white font-semibold">
              © 2026 AI Sales Closer Interactive Demo · Custom AI Sales Engine for Toronto Luxury Real Estate Teams & Brokerages.
            </p>
            <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
              Demonstration & Technology Prototype. The Yorkville Luxury Group & Suite 5200 are conceptual demonstration assets engineered to showcase AI sales conversion, TRESA/RECO compliance handling, and high-ticket buyer qualification workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-300 text-[11px]">
            <button onClick={() => openLegalTab('privacy')} className="hover:text-amber-300 transition-colors cursor-pointer">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => openLegalTab('terms')} className="hover:text-amber-300 transition-colors cursor-pointer">Terms of Representation</button>
            <span>·</span>
            <button onClick={() => openLegalTab('portal')} className="hover:text-amber-300 transition-colors cursor-pointer">Discreet Portal</button>
            <span>·</span>
            <button onClick={() => openLegalTab('dmca')} className="hover:text-amber-300 transition-colors cursor-pointer">DMCA Notice</button>
            <span>·</span>
            <button onClick={() => openLegalTab('disclaimers')} className="hover:text-amber-300 transition-colors cursor-pointer">RECO Disclaimers</button>
            <span>·</span>
            <button onClick={() => openLegalTab('cookies')} className="hover:text-amber-300 transition-colors cursor-pointer">Cookie Policy</button>
          </div>
        </div>

      </div>

      {/* Interactive Legal Governance Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={selectedTab}
        onClose={() => setLegalModalOpen(false)}
      />

    </footer>
  );
};
