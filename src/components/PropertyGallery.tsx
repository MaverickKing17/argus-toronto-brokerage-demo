import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/propertyData';
import { GalleryPhoto } from '../types';
import { 
  Eye, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Layers, 
  Sparkles,
  Camera
} from 'lucide-react';

interface PropertyGalleryProps {
  initialPhotoIndex?: number | null;
  onCloseLightbox?: () => void;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  initialPhotoIndex = null,
  onCloseLightbox
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(initialPhotoIndex);
  const [virtualTourActive, setVirtualTourActive] = useState<boolean>(false);

  const filteredPhotos = activeFilter === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightboxModal = () => {
    setLightboxIndex(null);
    if (onCloseLightbox) onCloseLightbox();
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % GALLERY_PHOTOS.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="relative py-20 bg-[#12141A] text-zinc-100 border-b border-white/[0.08] overflow-hidden">
      {/* Background Accent Lines & Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              ARCHITECTURAL VISUAL PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mt-1">
              High-Resolution Gallery & Virtual Experience
            </h2>
            <p className="text-zinc-300 text-sm mt-2 font-normal max-w-2xl leading-relaxed">
              Explore the 3,850 sq. ft. sky residence through curated architectural photography and immersive panoramic previews.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#1C1E24] border border-white/[0.08] shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeFilter === 'all' 
                  ? 'bg-amber-500 text-zinc-950 shadow-md' 
                  : 'text-zinc-300 hover:text-white hover:bg-[#242731]'
              }`}
            >
              All Views ({GALLERY_PHOTOS.length})
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeFilter === 'interior' 
                  ? 'bg-amber-500 text-zinc-950 shadow-md' 
                  : 'text-zinc-300 hover:text-white hover:bg-[#242731]'
              }`}
            >
              Interiors
            </button>
            <button
              onClick={() => setActiveFilter('terrace')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeFilter === 'terrace' 
                  ? 'bg-amber-500 text-zinc-950 shadow-md' 
                  : 'text-zinc-300 hover:text-white hover:bg-[#242731]'
              }`}
            >
              Private Terrace
            </button>
            <button
              onClick={() => setActiveFilter('amenities')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeFilter === 'amenities' 
                  ? 'bg-amber-500 text-zinc-950 shadow-md' 
                  : 'text-zinc-300 hover:text-white hover:bg-[#242731]'
              }`}
            >
              Amenities
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] bg-[#1C1E24] hover:border-amber-500/50 transition-all duration-500 shadow-2xl hover:shadow-amber-500/10"
              id={`gallery-thumb-${photo.id}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity"></div>

              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#14161C]/90 border border-white/[0.08] text-amber-400 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[#14161C]/90 border border-white/[0.08] backdrop-blur-sm shadow-md">
                  {photo.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <h3 className="font-serif text-xl text-white font-bold group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-zinc-300 font-normal line-clamp-1">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 360 Virtual Tour Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#1C1E24] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-[#14161C] border border-white/[0.08] text-amber-400 shrink-0 shadow-inner">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block mb-1">
                3D SPATIAL SCANNING
              </span>
              <h3 className="font-serif text-xl text-white font-bold">
                Interactive 3D Walkthrough Available
              </h3>
              <p className="text-xs text-zinc-300 font-normal mt-0.5 max-w-xl leading-relaxed">
                Experience room-by-room floorplan orientation with 4K laser spatial scans. Integrated directly into the luxury buyer dossier.
              </p>
            </div>
          </div>

          <button
            onClick={() => setVirtualTourActive(!virtualTourActive)}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 shrink-0 shadow-xl shadow-amber-500/20"
            id="toggle-virtual-tour-btn"
          >
            <Sparkles className="w-4 h-4 text-zinc-950" />
            {virtualTourActive ? "Close 3D View" : "Launch 3D Walkthrough"}
          </button>
        </div>

        {/* 3D Walkthrough Viewport */}
        {virtualTourActive && (
          <div className="mt-6 p-4 rounded-2xl bg-[#14161C] border border-white/[0.08] text-center space-y-4">
            <div className="relative h-96 w-full rounded-xl overflow-hidden border border-white/[0.08]">
              <img 
                src={GALLERY_PHOTOS[0].url} 
                alt="3D Walkthrough Preview" 
                className="w-full h-full object-cover filter contrast-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0F1115]/70 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                <div className="p-4 rounded-full bg-[#1C1E24] border border-white/[0.08] text-zinc-200 mb-3 animate-pulse">
                  <Compass className="w-8 h-8 text-amber-400" />
                </div>
                <span className="font-serif text-2xl text-white font-bold">
                  3D Spatial Tour Engine Active
                </span>
                <p className="text-xs text-zinc-200 max-w-md mt-1 font-normal">
                  Use mouse/touch to pan 360° across the 3,850 sq. ft. floorplate. Direct private elevator entrance highlighted at Bay St elevation.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={closeLightboxModal}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={GALLERY_PHOTOS[lightboxIndex].url}
              alt={GALLERY_PHOTOS[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl border border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold">
                PHOTO {lightboxIndex + 1} OF {GALLERY_PHOTOS.length}
              </span>
              <h3 className="font-serif text-2xl text-white font-bold">
                {GALLERY_PHOTOS[lightboxIndex].title}
              </h3>
              <p className="text-xs text-zinc-300 font-normal max-w-lg mx-auto">
                {GALLERY_PHOTOS[lightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
