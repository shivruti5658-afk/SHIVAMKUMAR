"use client";

import { useEffect, useRef, useState } from "react";

const styles = `
  .process-flow-container {
    position: relative;
    width: 100%;
  }

  .flow-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    z-index: 0;
  }

  .flow-curve-segment {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .flow-curve-segment:hover {
    stroke-width: 4;
    opacity: 1 !important;
    filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.8));
  }

  .flow-node {
    fill: var(--accent-primary, #00e5ff);
    opacity: 0.8;
    filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.6));
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .flow-node:hover {
    r: 8;
    opacity: 1;
    filter: drop-shadow(0 0 15px rgba(0, 229, 255, 1));
  }

  .flow-node-animated {
    animation: pulseNode 2s ease-in-out infinite;
  }

  @keyframes pulseNode {
    0%, 100% {
      opacity: 0.8;
      r: 5;
    }
    50% {
      opacity: 1;
      r: 7;
    }
  }

  /* Desktop: Horizontal flow */
  @media (min-width: 768px) {
    .flow-svg {
      height: 120px;
    }
  }

  /* Mobile: Vertical flow */
  @media (max-width: 767px) {
    .flow-svg {
      display: none;
    }

    .flow-svg-mobile {
      position: absolute;
      left: 24px;
      top: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 229, 255, 1),
        rgba(0, 229, 255, 0.3)
      );
      pointer-events: none;
      z-index: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .flow-node-animated {
      animation: none;
    }

    .flow-curve-segment,
    .flow-node {
      transition: none;
    }
  }
`;

interface ProcessFlowProps {
  stepCount: number;
  orientation?: "horizontal" | "vertical";
}

export default function ProcessFlow({
  stepCount,
  orientation = "horizontal",
}: ProcessFlowProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Generate straight path between two points
  const generateCurvedPath = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    _isVertical: boolean = false
  ) => {
    // Simple straight line between points
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  };

  // Desktop: Horizontal SVG flow with curved connectors
  const generateHorizontalFlow = () => {
    const padding = 40;
    const width = 1000;
    const height = 100;
    const stepWidth = (width - padding * 2) / (stepCount - 1);

    const positions = Array.from({ length: stepCount }).map((_, i) => ({
      x: padding + i * stepWidth,
      y: height / 2,
    }));

    return { positions, viewBox: `0 0 ${width} ${height}` };
  };

  // Mobile/Page: Vertical SVG flow with curved connectors
  const generateVerticalFlow = () => {
    const padding = 40;
    const width = 100;
    const height = 120 * (stepCount - 1) + 80; // Dynamic height based on steps
    const stepHeight = (height - padding * 2) / (stepCount - 1);

    const positions = Array.from({ length: stepCount }).map((_, i) => ({
      x: width / 2,
      y: padding + i * stepHeight,
    }));

    return { positions, viewBox: `0 0 ${width} ${height}` };
  };

  const isVertical = orientation === "vertical";
  const flowData = isVertical
    ? generateVerticalFlow()
    : generateHorizontalFlow();
  const { positions, viewBox } = flowData;

  return (
    <>
      <style>{styles}</style>
      <div className="process-flow-container">
        {/* Desktop SVG with curved connectors */}
        <svg
          ref={svgRef}
          className={`flow-svg ${isVertical ? "block" : "hidden md:block"}`}
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          style={isVertical ? { height: "100%" } : {}}
        >
          <defs>
            <linearGradient
              id="flowGradient"
              x1={isVertical ? "0%" : "0%"}
              y1={isVertical ? "0%" : "0%"}
              x2={isVertical ? "100%" : "100%"}
              y2={isVertical ? "100%" : "0%"}
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00e5ff", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#7c3aed", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#00e5ff", stopOpacity: 0.6 }}
              />
            </linearGradient>
          </defs>

          {/* Curved connecting lines between steps */}
          {positions.map((pos, i) => {
            if (i === positions.length - 1) return null;
            const nextPos = positions[i + 1];
            const pathData = generateCurvedPath(
              pos.x,
              pos.y,
              nextPos.x,
              nextPos.y,
              isVertical
            );

            return (
              <path
                key={`curve-${i}`}
                d={pathData}
                className="flow-curve-segment"
                stroke="url(#flowGradient)"
                opacity={
                  hoveredSegment === null || hoveredSegment === i ? 0.9 : 0.4
                }
                onMouseEnter={() => setHoveredSegment(i)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            );
          })}

          {/* Connection nodes */}
          {positions.map((pos, i) => (
            <circle
              key={`node-${i}`}
              cx={pos.x}
              cy={pos.y}
              r="5"
              className={`flow-node ${
                i === 0 || i === positions.length - 1
                  ? "flow-node-animated"
                  : ""
              }`}
            />
          ))}
        </svg>

        {/* Mobile vertical line */}
        <div
          className={`flow-svg-mobile ${!isVertical ? "md:hidden" : "hidden"}`}
        />
      </div>
    </>
  );
}
