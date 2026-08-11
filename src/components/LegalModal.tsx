import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, Scale, Copyright, Cookie, Building2, CheckCircle2 } from 'lucide-react';

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

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] my-auto">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  ONTARIO REAL ESTATE COMPLIANCE & LEGAL GOVERNANCE
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  RECO #4892011
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-bold">
                Legal & Regulatory Framework
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            id="close-legal-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="bg-zinc-950/50 border-b border-zinc-800 px-6 py-2 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Privacy Policy (PIPEDA & FINTRAC)
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Terms of Representation (TRESA)
          </button>

          <button
            onClick={() => setActiveTab('portal')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'portal'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Discreet Client Portal & NDAs
          </button>

          <button
            onClick={() => setActiveTab('dmca')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'dmca'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Copyright className="w-3.5 h-3.5" />
            DMCA & Architectural Copyright
          </button>

          <button
            onClick={() => setActiveTab('disclaimers')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'disclaimers'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            RECO & TRREB Disclaimers
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'cookies'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            Cookie & Tracking Policy
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 01 // CANADIAN PRIVACY & FINTRAC PROTOCOL
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  Privacy Policy & Confidential Wealth Data Protection
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Effective Date: January 1, 2026 · Compliant with PIPEDA (Canada) & Ontario Personal Information Protection Framework
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Ultra-High-Net-Worth (UHNW) Anonymity Guarantees
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  The Yorkville Luxury Group operating under RECO Brokerage Registration #4892011 maintains strict non-disclosure protocols. We do not sell, license, monetize, or publicly disclose client contact records, wire transaction logs, or property ownership details to third-party ad networks or public property search databases.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Information Collection & FINTRAC Compliance</h4>
                <p>
                  In accordance with the <em>Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCTFA)</em> enforced by FINTRAC (Financial Transactions and Reports Analysis Centre of Canada), real estate brokerages in Ontario are legally mandated to verify the identity of buyers and sellers participating in high-value real estate transactions.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
                  <li><strong>Identity Verification Records:</strong> Government-issued photo identification, corporate beneficial ownership declarations, and FINTRAC Individual Identification Information forms.</li>
                  <li><strong>Financial Pre-Approvals & Proof of Funds:</strong> Verified letters of bank standing, escrow deposit receipts, and accredited investor credentials submitted for Suite 5200 access.</li>
                  <li><strong>Digital Interactions:</strong> Encrypted IP logs, multi-factor login tokens for the Discreet Client Portal, and communication logs with Victoria Sterling, Senior Managing Partner.</li>
                </ul>

                <h4 className="font-serif text-base text-white font-bold">2. Use & Protection of Client Data</h4>
                <p>
                  All personal and financial documentation is encrypted using AES-256 standard encryption and stored on SOC2-compliant, Canadian-hosted servers. Data is strictly limited to authorized senior brokers and licensed legal counsel representing the transaction.
                </p>

                <h4 className="font-serif text-base text-white font-bold">3. Disclosure to Third Parties</h4>
                <p>
                  We disclose personal information exclusively to: (a) Real Estate Council of Ontario (RECO) auditors upon legal requirement; (b) Closing real estate lawyers and trust account holders; (c) Financial institutions issuing deposit guarantees or mortgage charges upon client direction.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF REPRESENTATION (TRESA) */}
          {activeTab === 'terms' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 02 // ONTARIO TRESA 2023 REGULATORY FRAMEWORK
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  Terms of Representation & Brokerage Duties
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Governed by the Trust in Real Estate Services Act, 2020 (TRESA) & Real Estate Council of Ontario (RECO)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase block">DESIGNATED REPRESENTATION</span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    Under TRESA 2023, clients may enter into a Designated Representation Agreement where specific designated brokers (e.g. Victoria Sterling) owe full fiduciary duties of undivided loyalty, confidentiality, and competence directly to the client.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase block">MULTIPLE REPRESENTATION DISCLOSURE</span>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    In the event that The Yorkville Luxury Group represents both the prospective purchaser and vendor for Suite 5200, full written disclosure and explicit informed consent must be signed by both parties prior to offer presentation.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Statutory Fiduciary Duties Owed to Clients</h4>
                <p>
                  When represented under an official Buyer Representation Agreement (BRA) or Seller Representation Agreement:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
                  <li><strong>Duty of Undivided Loyalty:</strong> Promoting and protecting the client's best financial and legal interests above all others.</li>
                  <li><strong>Confidentiality Guarantee:</strong> Maintaining lifetime confidentiality regarding client motivations, maximum budget allocations, or strategic negotiation thresholds.</li>
                  <li><strong>Full Disclosure of Material Facts:</strong> Disclosing all known physical, legal, architectural, or zoning facts regarding the penthouse property.</li>
                </ul>

                <h4 className="font-serif text-base text-white font-bold">2. Real Estate Trust Account Protection</h4>
                <p>
                  All earnest deposit funds paid towards property acquisitions (such as the standard 5% to 10% Toronto luxury deposit) are held in RECO-insured interest-bearing Real Estate Trust Accounts administered by top-tier Canadian chartered banks in accordance with Section 27 of TRESA.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: DISCREET CLIENT PORTAL & NDAs */}
          {activeTab === 'portal' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 03 // PRIVATE OFF-MARKET DOSSIER ACCESS
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  Discreet Client Portal & Off-Market NDA Protocols
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Private Wealth Access Rules for Confidential Yorkville Sky Residences & Trophy Estates
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  Privileged Architectural & Security Access
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  The Discreet Client Portal provides qualified luxury purchasers, family office representatives, and private wealth managers with confidential off-market inventory, 3D laser spatial walkthroughs, private elevator schematics, and structural engineering reports not indexed on public MLS systems.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Non-Disclosure Agreement (NDA) Terms</h4>
                <p>
                  By accessing off-market listing dossiers or requesting 3D floorplan scans for Suite 5200 and other private off-market residences, the user agrees to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-zinc-300">
                  <li>Refrain from capturing, screenshotting, downloading, or publishing interior photos, floorplan schematics, or structural specs on public web platforms, social media, or press outlets.</li>
                  <li>Maintain strict confidentiality regarding current vendor identity, artwork collections, security camera locations, and private elevator access protocols.</li>
                  <li>Use listing dossiers solely for evaluating genuine acquisition interest on behalf of accredited buyers or principal entities.</li>
                </ul>

                <h4 className="font-serif text-base text-white font-bold">2. Accredited Purchaser Vetting</h4>
                <p>
                  To protect seller privacy and maintain security in inhabited luxury sky residences, The Yorkville Luxury Group reserves the right to request proof of financial capacity or bank client verification prior to authorizing physical in-person private viewings.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DMCA & ARCHITECTURAL COPYRIGHT */}
          {activeTab === 'dmca' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 04 // INTELLECTUAL PROPERTY & MEDIA PROTECTION
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  DMCA Notice & Architectural Copyright Policy
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Protection of 4K Photography, Spatial 3D Scans, Floorplans & Proprietary Branding under Canadian & US Copyright Standards
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Proprietary Media Ownership</h4>
                <p>
                  All architectural photography, 3D Matterport/LiDAR spatial scans, CAD floorplan schematics, drone aerial videography, financial modeling calculators, and descriptive copy featured on this application are protected by copyright law and intellectual property rights owned by The Yorkville Luxury Group and licensed visual content producers.
                </p>

                <h4 className="font-serif text-base text-white font-bold">2. Prohibition of Unauthorized Extraction & Scraping</h4>
                <p>
                  Automated scraping, AI data mining, unauthorized media re-hosting, framing, or syndication to secondary property aggregation portals without explicit written permission from The Yorkville Luxury Group is strictly prohibited and subject to legal injunction.
                </p>

                <h4 className="font-serif text-base text-white font-bold">3. DMCA Takedown Agent & Infringement Reporting</h4>
                <p>
                  If you believe any content hosted on this application infringes upon your copyright rights, please submit a formal written notification to our Designated Copyright Officer:
                </p>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs space-y-1">
                  <p className="text-white font-bold">Legal Counsel & Intellectual Property Desk</p>
                  <p className="text-zinc-300">The Yorkville Luxury Group</p>
                  <p className="text-zinc-300">100 Bloor Street West, Suite 400, Toronto, ON M5S 1M4</p>
                  <p className="text-amber-400">Email: legal@yorkvilleluxury.com | Phone: +1 (416) 928-8800</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RECO & TRREB DISCLAIMERS */}
          {activeTab === 'disclaimers' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 05 // REAL ESTATE COUNCIL & MLS DATA ACCURACY
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  RECO Compliance & TRREB MLS Disclaimers
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Mandatory Disclosures for Toronto Regional Real Estate Board (TRREB) & Ontario Real Estate Association (OREA)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase block">BROKERAGE REGISTRATION DETAILS</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  The Yorkville Luxury Group is a fully licensed and registered Real Estate Brokerage with the Real Estate Council of Ontario (RECO #4892011). Victoria Sterling is a licensed Senior Real Estate Broker in the Province of Ontario.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Independent Buyer Verification Required</h4>
                <p>
                  All materials, dimensions, square footages (e.g. 3,850 sq. ft. interior + 1,200 sq. ft. terrace), room measurements, ceiling heights, building amenities, maintenance fees ($3,250/mo), property taxes ($38,500/yr), and architectural schematics are provided for informational and marketing orientation purposes only.
                </p>
                <p>
                  While believed to be accurate at the time of publication, all measurements and features must be independently confirmed by the purchaser or the purchaser's legal counsel through surveyor verification and status certificate inspection prior to executing a binding Agreement of Purchase and Sale.
                </p>

                <h4 className="font-serif text-base text-white font-bold">2. Equal Housing Opportunity & Non-Discrimination</h4>
                <p>
                  The Yorkville Luxury Group strictly adheres to the Ontario Human Rights Code and RECO Code of Ethics. We provide equal professional services to all persons regardless of race, ancestry, place of origin, color, ethnic origin, citizenship, creed, sex, sexual orientation, gender identity, age, marital status, family status, or disability.
                </p>

                <h4 className="font-serif text-base text-white font-bold">3. Financial Modeling Disclaimer</h4>
                <p>
                  The mortgage calculation tool provided on this platform is a mathematical simulation model for preliminary financial planning. Actual mortgage approval, land transfer tax rates (Ontario and Toronto municipal dual LTT), and interest charges are subject to formal underwriting by chartered financial institutions.
                </p>
              </div>
            </div>
          )}

          {/* TAB 6: COOKIE & TRACKING POLICY */}
          {activeTab === 'cookies' && (
            <div className="space-y-5 animate-fade-in">
              <div className="pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 font-semibold block uppercase">
                  LEGAL DOCUMENT 06 // PRIVACY PREFERENCES & DATA TOKENS
                </span>
                <h3 className="font-serif text-2xl text-white font-bold mt-1">
                  Cookie & Privacy Tracking Policy
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Transparent Session Management & High-Security Authentication Cookies
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base text-white font-bold">1. Essential Security & Authentication Cookies</h4>
                <p>
                  We utilize minimal, highly secure cookies exclusively to ensure website security, remember your active 3D virtual tour preferences, and authenticate secure access within the Discreet Client Portal.
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-white font-bold block">`ylg_session_auth` (Essential)</span>
                      <p className="text-xs text-zinc-400 mt-0.5">Encrypts session authentication tokens for private client viewing schedules.</p>
                    </div>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shrink-0">STRICTLY ESSENTIAL</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-white font-bold block">`ylg_tour_state` (Functional)</span>
                      <p className="text-xs text-zinc-400 mt-0.5">Saves room preferences and filter states during floorplan inspections.</p>
                    </div>
                    <span className="px-2 py-1 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 font-bold shrink-0">FUNCTIONAL</span>
                  </div>
                </div>

                <h4 className="font-serif text-base text-white font-bold">2. Zero Third-Party Advertising Trackers</h4>
                <p>
                  We do <strong>not</strong> deploy third-party advertising retargeting pixels (such as Meta Pixel or cross-site ad networks) that track UHNW client browsing behavior across external websites. Your privacy remains completely uncompromised.
                </p>

                <h4 className="font-serif text-base text-white font-bold">3. Managing Cookie Settings</h4>
                <p>
                  You can modify or disable cookies at any time through your web browser preferences. Note that disabling essential security cookies may limit access to private floorplans and automated schedule syncing.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>The Yorkville Luxury Group · RECO Registered Real Estate Brokerage #4892011</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            id="acknowledge-legal-modal-btn"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
