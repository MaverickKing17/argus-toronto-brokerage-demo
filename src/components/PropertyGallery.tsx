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
import { Spatial3DTour } from './Spatial3DTour';

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
  const [virtualTourActive, setVirtualTourActive] = useState<boolean>(true);

  const filteredPhotos = activeFilter === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === activeFilter);

  const openLightbox = (photo: GalleryPhoto) => {
    const index = GALLERY_PHOTOS.findIndex(p => p.id === photo.id);
    setLightboxIndex(index !== -1 ? index : 0);
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
    <section id="gallery" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Accent Lines & Glow */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-amber-600" />
              ARCHITECTURAL VISUAL PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold mt-1 tracking-tight">
              High-Resolution Gallery & Virtual Experience
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal max-w-2xl leading-relaxed">
              Explore the 3,850 sq. ft. sky residence through curated architectural photography and immersive panoramic previews.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white border-2 border-slate-200/90 shadow-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === 'all' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              All Views ({GALLERY_PHOTOS.length})
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === 'interior' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              Interiors
            </button>
            <button
              onClick={() => setActiveFilter('terrace')}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === 'terrace' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              Private Terrace
            </button>
            <button
              onClick={() => setActiveFilter('amenities')}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === 'amenities' 
                  ? 'bg-amber-500 text-zinc-950 shadow-sm font-bold' 
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              Amenities
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border-2 border-slate-200/90 bg-white hover:border-amber-500 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.18)] hover:-translate-y-1"
              id={`gallery-thumb-${photo.id}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-95 group-hover:opacity-85 transition-opacity"></div>

              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/70 border border-white/25 text-amber-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono text-amber-200 uppercase tracking-widest font-bold px-3 py-1 rounded-lg bg-black/70 border border-white/20 backdrop-blur-sm shadow-md">
                  {photo.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <h3 className="font-serif text-xl text-white font-bold group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-200 font-normal line-clamp-1">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 360 Virtual Tour Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/90 border border-amber-300 text-amber-700 shrink-0 shadow-sm">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest font-bold block mb-1">
                3D SPATIAL SCANNING
              </span>
              <h3 className="font-serif text-2xl text-slate-950 font-bold">
                Interactive 3D Walkthrough Available
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5 max-w-xl leading-relaxed">
                Experience room-by-room floorplan orientation with 4K laser spatial scans. Integrated directly into the luxury buyer dossier.
              </p>
            </div>
          </div>

          <button
            onClick={() => setVirtualTourActive(!virtualTourActive)}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 shrink-0 shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] cursor-pointer"
            id="toggle-virtual-tour-btn"
          >
            <Sparkles className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
            {virtualTourActive ? "Close 3D View" : "Launch 3D Walkthrough"}
          </button>
        </div>

        {/* 3D Walkthrough Viewport */}
        {virtualTourActive && (
          <div className="mt-8 animate-fade-in">
            <Spatial3DTour />
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
