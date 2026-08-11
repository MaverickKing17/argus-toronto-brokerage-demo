/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { PropertyOverview } from './components/PropertyOverview';
import { PropertyGallery } from './components/PropertyGallery';
import { FloorplanView } from './components/FloorplanView';
import { NeighborhoodSection } from './components/NeighborhoodSection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ScheduleTourModal } from './components/ScheduleTourModal';
import { ArgusChatWidget } from './components/ArgusChatWidget';
import { Footer } from './components/Footer';
import { CheckCircle2, FileText, Share2, Sparkles, X } from 'lucide-react';

export default function App() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true); // Default open widget for demo clarity
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-xl bg-neutral-900 border border-amber-500/50 text-neutral-100 shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-fade-in text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="p-1 hover:text-white text-neutral-400 transition-colors"
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

    </div>
  );
}
