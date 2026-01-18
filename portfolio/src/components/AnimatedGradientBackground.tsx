"use client";

import { useEffect, useRef } from "react";



export default function AnimatedGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if mobile/touch device
    const isMobile = window.innerWidth <= 768;

    if (prefersReducedMotion || isMobile) {
      return; // Skip cursor tracking on mobile or if reduced motion is preferred
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Store target position (will be interpolated)
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 100, // Max 100px offset
        y: (e.clientY / window.innerHeight - 0.5) * 100,
      };
    };

    const animate = () => {
      // Interpolate current position toward target (inertia effect)
      positionRef.current.x +=
        (targetRef.current.x - positionRef.current.x) * 0.45;
      positionRef.current.y +=
        (targetRef.current.y - positionRef.current.y) * 0.45;

      // Apply transforms to blobs with slight offset for parallax
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate3d(${
          positionRef.current.x * 0.7
        }px, ${positionRef.current.y * 0.7}px, 0)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate3d(${
          positionRef.current.x * 1.2
        }px, ${positionRef.current.y * 1.2}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="animated-bg-container">
        <div
          ref={blob1Ref}
          className="gradient-blob blob-1"
          style={{ top: "10%", left: "15%" }}
        />
        <div
          ref={blob2Ref}
          className="gradient-blob blob-2"
          style={{ top: "50%", right: "10%" }}
        />
        <div
          ref={blob3Ref}
          className="gradient-blob blob-3"
          style={{ bottom: "10%", left: "45%" }}
        />
      </div>
    </>
  );
}
