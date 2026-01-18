"use client";

import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  className?: string;
}



export default function ProgressBar({
  value,
  label,
  className = "",
}: ProgressBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!trackRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Set CSS variable and trigger animation
            if (fillRef.current) {
              fillRef.current.style.setProperty(
                "--progress-value",
                `${value}%`
              );
              // Force reflow to ensure transition plays
              void fillRef.current.offsetWidth;
              fillRef.current.classList.add("animate");
              setHasAnimated(true);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(trackRef.current);

    return () => {
      if (trackRef.current) {
        observer.unobserve(trackRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <>
      <div className={`space-y-2 ${className}`}>
        {label && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span
              className="text-sm font-bold text-accent-primary"
              aria-label={`${value} percent`}
            >
              {value}%
            </span>
          </div>
        )}
        <div
          ref={trackRef}
          className="progress-track"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div ref={fillRef} className="progress-fill" />
        </div>
      </div>
    </>
  );
}
