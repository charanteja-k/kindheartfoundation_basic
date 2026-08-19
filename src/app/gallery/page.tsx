"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "Image-24898.jpg",
    "Image-25753.jpg",
    "Image-3993.jpg",
    "Image-42999.jpg",
    "Image-49465.jpg",
    "Image-55019.jpg",
    "Image-57822.jpg",
    "Image-69795.jpg",
  ];

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => prev !== null ? (prev + 1) % images.length : null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A visual journey of our efforts, medical camps, and the smiles we've helped create in Indukurpet and beyond.
          </p>
        </div>

        {/* Neat Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer aspect-square bg-gray-100"
            >
              <Image 
                src={`/gallery/${img}`} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M9 3H3v6"/><path d="M14 10L3 21"/><path d="M21 15v6h-6"/><path d="M21 21L10 10"/><path d="M3 15v6h6"/><path d="M3 21l11-11"/></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-3 backdrop-blur-sm transition-all z-50"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          
          {/* Previous Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null);
            }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-4 backdrop-blur-sm transition-all z-50"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Next Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => prev !== null ? (prev + 1) % images.length : null);
            }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-4 backdrop-blur-sm transition-all z-50"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-6xl h-[85vh] mx-4 md:mx-24 select-none animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={`/gallery/${images[selectedIndex]}`} 
              alt={`Gallery image ${selectedIndex + 1} full view`} 
              fill 
              className="object-contain" 
              quality={100}
            />
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
