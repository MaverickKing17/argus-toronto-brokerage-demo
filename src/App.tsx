/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { PropertyOverview } from './components/PropertyOverview';
import { PropertyGallery } from './components/PropertyGallery';
import { FloorplanView } from './components/FloorplanView';
import { NeighborhoodSection } from './components/NeighborhoodSection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ScheduleTourModal } from './components/ScheduleTourModal';
import { ArgusChatWidget } from './components/ArgusChatWidget';
import { Footer } from './components/Footer';
import { CheckCircle2, FileText, Share2, Sparkles, X, ArrowUp } from 'lucide-react';

export default function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true); // Default open widget for demo clarity
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("Listing dossier link copied to clipboard.");
  };

  const handleRequestDossier = () => {
    showToast("Official 18-page architectural PDF brochure generated and sent to email.");
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-900">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-xl bg-white border border-amber-500/50 text-[#1A1A1A] shadow-xl flex items-center gap-3 backdrop-blur-xl animate-fade-in text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-black text-gray-400 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Hero Header */}
      <HeaderHero
        onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenGallery={() => {
          const galleryEl = document.getElementById('gallery');
          if (galleryEl) galleryEl.scrollIntoView({ behavior: 'smooth' });
        }}
        onShare={handleShare}
      />

      {/* Property Specifications & Overview */}
      <PropertyOverview
        onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onRequestDossier={handleRequestDossier}
      />

      {/* High-Resolution Gallery & Virtual Tour */}
      <PropertyGallery />

      {/* Floorplan & Architectural Schematics */}
      <FloorplanView />

      {/* Yorkville Neighborhood & Amenities */}
      <NeighborhoodSection />

      {/* Mortgage & Financial Investment Carry Model */}
      <MortgageCalculator />

      {/* Floating Embedded ARGUS AI Chat Widget */}
      <ArgusChatWidget
        isOpenExternal={isChatOpen}
        onToggleExternal={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Schedule Tour Modal */}
      <ScheduleTourModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onBookingSuccess={(details) => {
          showToast(`Viewing slot reserved: ${details.slot}`);
        }}
      />

      {/* Footer */}
      <Footer />

      {/* Standout High-Contrast Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 left-6 z-40 p-3.5 rounded-2xl bg-slate-950/90 hover:bg-black text-amber-400 border-2 border-amber-400 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 group cursor-pointer flex items-center gap-2"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 text-amber-400 group-hover:text-amber-300 stroke-[3] transition-transform group-hover:-translate-y-0.5" />
          <span className="hidden sm:inline font-mono text-[11px] font-bold text-amber-400 uppercase tracking-wider pr-1">
            Top
          </span>
        </button>
      )}

    </div>
  );
}
