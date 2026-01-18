"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustSignals from "@/components/TrustSignals";
import ProblemsSolve from "@/components/ProblemsSolve";
import HowIWork from "@/components/HowIWork";
import TechPhilosophy from "@/components/TechPhilosophy";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import ClientOutcomes from "@/components/ClientOutcomes";
import FAQ from "@/components/FAQ";
import WhyChooseMe from "@/components/WhyChooseMe";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Animated Background with Parallax */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(135deg, var(--accent-primary-rgb, 0.1) 0%, var(--accent-secondary-rgb, 0.05) 50%, var(--bg-primary) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building High-Performance Web & Mobile Products
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            For startups, growing businesses, and digital agencies
          </motion.p>

          <motion.p
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-medium"
            style={{ color: 'var(--accent-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium app development and web development services
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--bg-primary)',
              }}
            >
              Start a Project
            </a>
            <a
              href="/projects"
              className="px-8 py-3 rounded-full font-semibold transition-colors hover:opacity-80 border-2"
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              View Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Problems I Solve */}
      <ProblemsSolve />

      {/* Services */}
      <ServicesSnapshot />

      {/* How I Work */}
      <HowIWork />

      {/* Tech Philosophy */}
      <TechPhilosophy />

      {/* Client Outcomes */}
      <ClientOutcomes />

      {/* Why Choose Me */}
      <WhyChooseMe />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-24 px-4 border-t" style={{ 
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's build something reliable, scalable, and premium together.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--bg-primary)',
              }}
            >
              Start a Project
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold transition-colors hover:opacity-80 border-2"
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
