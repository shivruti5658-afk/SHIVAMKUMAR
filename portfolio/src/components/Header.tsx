"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const drawerVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.28,
        ease: "easeOut",
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.28,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.28,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.28,
      },
    },
  };

  const navItemVariants: Variants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50 bg-bg-secondary/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: "rgba(var(--bg-secondary-rgb, 17 24 39), 0.8)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              Shivam Kumar
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors font-medium ${
                      isActive
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-accent-primary"
                    }`}
                    style={{
                      color: isActive
                        ? "var(--accent-primary)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-bg-elevated transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                title={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : 'Toggle theme'}
                style={{
                  backgroundColor:
                    theme === "dark" ? "transparent" : "transparent",
                }}
              >
                {!mounted ? (
                  <div className="w-6 h-6" />
                ) : theme === "dark" ? (
                  <span
                    className="text-2xl"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    ☀️
                  </span>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden p-2 rounded-full hover:bg-bg-elevated transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                    }`}
                    style={{
                      backgroundColor: "var(--text-primary)",
                    }}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      backgroundColor: "var(--text-primary)",
                    }}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 transition-transform duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                    }`}
                    style={{
                      backgroundColor: "var(--text-primary)",
                    }}
                  ></span>
                </div>
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="/contact"
                className="hidden md:block px-6 py-2 rounded-full font-semibold transition-colors"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "var(--bg-primary)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 md:hidden shadow-2xl"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderLeft: "1px solid var(--border)",
              }}
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Brand Bar */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{
                  borderColor: "var(--border)",
                  background:
                    "linear-gradient(135deg, rgba(var(--accent-primary-rgb, 0 229 255), 0.05), rgba(var(--accent-secondary-rgb, 124 58 237), 0.05))",
                }}
              >
                <motion.div
                  className="text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  Shivam Kumar
                </motion.div>

                <div className="flex items-center gap-3">
                  {/* Theme Toggle in Drawer */}
                  <motion.button
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-bg-elevated transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle theme"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {theme === "dark" ? (
                      <span
                        className="text-lg"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        ☀️
                      </span>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    )}
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-bg-elevated transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        custom={index}
                        variants={navItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-accent-primary/10 text-accent-primary border-l-4"
                              : "hover:bg-bg-elevated text-text-primary hover:text-accent-primary"
                          }`}
                          style={{
                            borderLeftColor: isActive
                              ? "var(--accent-primary)"
                              : "transparent",
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Primary CTA */}
              <div
                className="p-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <motion.a
                  href="/contact"
                  className="block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-200 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                    color: "var(--bg-primary)",
                    boxShadow:
                      "0 4px 20px rgba(var(--accent-primary-rgb, 0 229 255), 0.3)",
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
