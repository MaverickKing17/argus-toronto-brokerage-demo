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
    <section id="gallery" className="py-16 bg-neutral-950 text-neutral-100 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              // ARCHITECTURAL VISUAL PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
              High-Resolution Gallery & Virtual Experience
            </h2>
            <p className="text-neutral-400 text-sm mt-1 font-light max-w-2xl">
              Explore the 3,850 sq. ft. sky residence through curated architectural photography and immersive panoramic previews.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-amber-500 text-neutral-950 font-semibold' 
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              All Views ({GALLERY_PHOTOS.length})
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'interior' 
                  ? 'bg-amber-500 text-neutral-950 font-semibold' 
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              Interiors
            </button>
            <button
              onClick={() => setActiveFilter('terrace')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'terrace' 
                  ? 'bg-amber-500 text-neutral-950 font-semibold' 
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              Private Terrace
            </button>
            <button
              onClick={() => setActiveFilter('amenities')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'amenities' 
                  ? 'bg-amber-500 text-neutral-950 font-semibold' 
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white'
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
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800/80 bg-neutral-900 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
              id={`gallery-thumb-${photo.id}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              <div className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-950/70 border border-neutral-800 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                  {photo.category}
                </span>
                <h3 className="font-serif text-xl text-white font-semibold group-hover:text-amber-200 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light line-clamp-1">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 360 Virtual Tour Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-white font-semibold">
                Interactive 3D Walkthrough Available
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-0.5 max-w-xl">
                Experience room-by-room floorplan orientation with 4K laser spatial scans. Integrated directly into the luxury buyer dossier.
              </p>
            </div>
          </div>

          <button
            onClick={() => setVirtualTourActive(!virtualTourActive)}
            className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-amber-500/40 text-amber-300 font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2 shrink-0"
            id="toggle-virtual-tour-btn"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            {virtualTourActive ? "Close 3D View" : "Launch 3D Walkthrough"}
          </button>
        </div>

        {/* 3D Walkthrough Viewport */}
        {virtualTourActive && (
          <div className="mt-6 p-4 rounded-2xl bg-neutral-950 border border-amber-500/30 text-center space-y-4">
            <div className="relative h-96 w-full rounded-xl overflow-hidden border border-neutral-800">
              <img 
                src={GALLERY_PHOTOS[0].url} 
                alt="3D Walkthrough Preview" 
                className="w-full h-full object-cover filter contrast-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/40 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                <div className="p-4 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 mb-3 animate-pulse">
                  <Compass className="w-8 h-8" />
                </div>
                <span className="font-serif text-2xl text-white font-semibold">
                  3D Spatial Tour Engine Active
                </span>
                <p className="text-xs text-neutral-300 max-w-md mt-1 font-light">
                  Use mouse/touch to pan 360° across the 3,850 sq. ft. floorplate. Direct private elevator entrance highlighted at Bay St elevation.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={closeLightboxModal}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-6 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={GALLERY_PHOTOS[lightboxIndex].url}
              alt={GALLERY_PHOTOS[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl border border-neutral-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                PHOTO {lightboxIndex + 1} OF {GALLERY_PHOTOS.length}
              </span>
              <h3 className="font-serif text-2xl text-white font-semibold">
                {GALLERY_PHOTOS[lightboxIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 font-light max-w-lg mx-auto">
                {GALLERY_PHOTOS[lightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
