"use client";

import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import { ThemeProvider } from "@/contexts/ThemeContext";

/**
 * Root Providers Wrapper
 * Wraps all child components with context providers
 * - ThemeProvider: Manages light/dark theme state and localStorage persistence
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AnimatedGradientBackground />
      {children}
    </ThemeProvider>
  );
}
