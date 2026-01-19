"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/types/project";
import ImageLightbox from "./ImageLightbox";

interface ImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  if (!images || images.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Project Visual Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Selected screens from the live project
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${image.alt} in full screen`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              {/* Image Container with aspect ratio */}
              <div className="relative w-full h-0 pb-[62.5%]">
                <Image
                  src={image.thumbnail || image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center rounded-lg">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
                  {/* Expand Icon */}
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v4m12 0h4v-4m0 12h-4v4m4-4h-4m-6-6h4v4m-4-4H6"
                    />
                  </svg>
                  <span className="text-white text-sm font-medium">
                    View Full Screen
                  </span>
                </div>
              </div>

              {/* Type Badge (optional) */}
              {image.type && (
                <div className="absolute top-3 right-3 bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full">
                  {image.type.replace("-", " ")}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          projectTitle={projectTitle}
        />
      )}
    </>
  );
}
