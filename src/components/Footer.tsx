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
    <footer className="relative bg-gradient-to-b from-[#18181b] via-[#121215] to-[#0d0d0f] text-zinc-300 text-xs border-t border-amber-500/20 pt-16 pb-12 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      
      {/* Subtle Top Gold Accent Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* VIP Off-Market Registry Banner Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                VVIP OFF-MARKET REGISTRY
              </span>
              <span className="text-[10px] font-mono text-zinc-400">YORKVILLE & BAY ST</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
              Access Private Off-Market Penthouse Collections
            </h3>
            <p className="text-xs text-zinc-300 font-normal leading-relaxed">
              Join Toronto’s confidential registry to receive non-public listing dossiers, 3D spatial floorplans, and private elevator access protocols prior to public MLS placement.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {!subscribed ? (
              <form onSubmit={handleVipSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={vipEmail}
                  onChange={(e) => setVipEmail(e.target.value)}
                  placeholder="vance@privateoffice.com"
                  className="w-full sm:w-72 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400 placeholder:text-zinc-500 font-medium"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 shrink-0"
                  id="join-offmarket-registry-btn"
                >
                  Join Registry
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-xs font-semibold animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-white font-bold">Registration Received</span>
                  <span className="text-[11px] font-normal text-emerald-200">Confidential vetting invitation dispatched via encrypted channel.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4-Column Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-4">
          
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-amber-500/40 bg-zinc-900 flex items-center justify-center font-serif text-amber-400 font-bold text-lg shadow-md">
                Y
              </div>
              <div>
                <span className="font-serif text-base sm:text-lg text-white font-bold tracking-wider block">
                  THE YORKVILLE LUXURY GROUP
                </span>
                <span className="text-[10px] font-mono text-zinc-400 font-semibold block">
                  ONTARIO REGISTERED BROKERAGE #4892011
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-300 font-normal leading-relaxed">
              Toronto's premier boutique real estate brokerage specializing in trophy sky estates, historic Yorkville manors, and private off-market property collections.
            </p>

            {/* Compliance Trust Badges */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] font-bold bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RECO VERIFIED · FINTRAC COMPLIANT</span>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">TRREB MEMBER</span>
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">OREA / CREA</span>
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">PIPEDA SAFE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Yorkville Headquarters */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center justify-between">
              <span>YORKVILLE HEADQUARTERS</span>
              <Building2 className="w-4 h-4 text-amber-400" />
            </h4>
            
            <div className="space-y-2.5 pt-1 text-xs">
              <p className="flex items-start gap-2.5 text-zinc-200 font-medium">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100 Bloor Street West, Suite 400<br />Yorkville, Toronto, ON M5S 1M4</span>
              </p>
              <p className="flex items-center gap-2.5 text-zinc-200 font-medium">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (416) 928-8800 (Private Desk)</span>
              </p>
              <p className="flex items-center gap-2.5 text-zinc-200 font-medium">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>concierge@yorkvilleluxury.com</span>
              </p>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 font-semibold block uppercase">MANAGEMENT DESK HOURS</span>
                <p className="text-[11px] text-zinc-200 font-medium">Mon–Fri: 8:00 AM – 8:00 PM EST</p>
                <p className="text-[11px] text-amber-400 font-medium">24/7 VIP On-Call Advisory for Suite 5200</p>
              </div>
            </div>
          </div>

          {/* Column 3: The Collection Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-1 border-b border-zinc-800">
              THE PENTHOUSE COLLECTION
            </h4>
            <ul className="space-y-2 text-xs text-zinc-200 font-medium">
              <li>
                <a href="#overview" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Penthouse Specifications
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Architectural Visual Portfolio
                </a>
              </li>
              <li>
                <a href="#floorplan" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  3D Floorplans & Schematics
                </a>
              </li>
              <li>
                <a href="#neighborhood" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Yorkville Lifestyle & Dining
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Financial Carry Modeling
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Detailed Legal & Regulatory Governance */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white font-bold uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center justify-between">
              <span>LEGAL & GOVERNANCE</span>
              <Scale className="w-4 h-4 text-amber-400" />
            </h4>

            <p className="text-[11px] text-zinc-300 font-normal leading-relaxed">
              Explore Toronto real estate regulatory frameworks, Ontario TRESA guidelines, and client non-disclosure protocols:
            </p>

            <div className="space-y-1.5 font-medium">
              <button
                onClick={() => openLegalTab('privacy')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-privacy-btn"
              >
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  Privacy Policy (PIPEDA/FINTRAC)
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>

              <button
                onClick={() => openLegalTab('terms')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-terms-btn"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  Terms of Representation (TRESA)
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>

              <button
                onClick={() => openLegalTab('portal')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-portal-btn"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  Discreet Client Portal & NDAs
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>

              <button
                onClick={() => openLegalTab('dmca')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-dmca-btn"
              >
                <span className="flex items-center gap-2">
                  <Copyright className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  DMCA & Architectural Copyright
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>

              <button
                onClick={() => openLegalTab('disclaimers')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-disclaimers-btn"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  RECO & TRREB Disclaimers
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>

              <button
                onClick={() => openLegalTab('cookies')}
                className="w-full text-left py-1.5 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-between text-xs group"
                id="footer-cookies-btn"
              >
                <span className="flex items-center gap-2">
                  <Cookie className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" />
                  Cookie & Tracking Policy
                </span>
                <span className="text-[10px] font-mono text-zinc-400">View</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Regulatory Notice & Quick Links */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-300 font-medium">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-zinc-200 font-semibold">© 2026 The Yorkville Luxury Group. All Rights Reserved.</p>
            <p className="text-[10px] text-zinc-400 font-normal">
              Equal Housing Opportunity. Licensed under Real Estate Council of Ontario (RECO Brokerage #4892011).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-zinc-300 text-[11px]">
            <button onClick={() => openLegalTab('privacy')} className="hover:text-amber-300 transition-colors">Privacy Policy</button>
            <span>·</span>
            <button onClick={() => openLegalTab('terms')} className="hover:text-amber-300 transition-colors">Terms of Representation</button>
            <span>·</span>
            <button onClick={() => openLegalTab('portal')} className="hover:text-amber-300 transition-colors">Discreet Portal</button>
            <span>·</span>
            <button onClick={() => openLegalTab('dmca')} className="hover:text-amber-300 transition-colors">DMCA Notice</button>
            <span>·</span>
            <button onClick={() => openLegalTab('disclaimers')} className="hover:text-amber-300 transition-colors">RECO Disclaimers</button>
            <span>·</span>
            <button onClick={() => openLegalTab('cookies')} className="hover:text-amber-300 transition-colors">Cookie Policy</button>
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
