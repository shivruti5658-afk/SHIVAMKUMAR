"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/types/project";

interface ImageLightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  projectTitle: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  projectTitle,
}: ImageLightboxProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        // Swiped left - go to next
        onNext();
      } else {
        // Swiped right - go to previous
        onPrevious();
      }
    }
  };

  // Prevent scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Focus trap
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={lightboxRef}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === lightboxRef.current) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="presentation"
    >
      {/* Dialog for accessibility */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Image viewer for ${projectTitle}`}
        className="flex flex-col items-center justify-center w-full h-full outline-none"
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 p-2 hover:bg-white/10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close image viewer"
          title="Close (ESC)"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Main Image Container */}
        <div className="flex-1 flex items-center justify-center max-w-4xl w-full">
          <div
            className="relative w-full h-full flex items-center justify-center animate-zoom-in"
            role="img"
            aria-label={currentImage.alt}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-60">
          <button
            onClick={onPrevious}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="View previous image"
            title="Previous (← arrow)"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-60">
          <button
            onClick={onNext}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="View next image"
            title="Next (→ arrow)"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg">
                {currentImage.caption || currentImage.alt}
              </h3>
              {currentImage.type && (
                <p className="text-gray-400 text-sm mt-1">
                  {currentImage.type.replace("-", " ").charAt(0).toUpperCase() +
                    currentImage.type.replace("-", " ").slice(1)}
                </p>
              )}
            </div>
            <div className="text-white text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 200ms ease-out;
        }

        .animate-zoom-in {
          animation: zoomIn 300ms ease-out;
        }
      `}</style>
    </div>
  );
}
