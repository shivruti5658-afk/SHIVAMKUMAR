"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "Shivam's expertise in React and Node.js transformed our platform. The user experience improved dramatically, and our conversion rates increased by 40%. Highly recommended!",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateLabs",
    company: "InnovateLabs",
    content:
      "Working with Shivam was a game-changer. He delivered a complex mobile app ahead of schedule with exceptional quality. His attention to detail and technical skills are outstanding.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GreenTech Solutions",
    company: "GreenTech Solutions",
    content:
      "Shivam built our entire e-commerce platform from scratch. The site is fast, secure, and beautifully designed. Our customers love it, and so do we!",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "CTO, DataFlow Systems",
    company: "DataFlow Systems",
    content:
      "The AI-powered analytics dashboard Shivam developed has revolutionized how we make data-driven decisions. His understanding of both frontend and backend technologies is impressive.",
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, BrandBoost",
    company: "BrandBoost",
    content:
      "Shivam's work on our social media management tool exceeded all expectations. The interface is intuitive, and the features are exactly what we needed. Great communication throughout the project.",
    avatar: "LT",
  },
  {
    name: "Robert Wilson",
    role: "Founder, StartupXYZ",
    company: "StartupXYZ",
    content:
      "From MVP to scale, Shivam has been instrumental in our growth. His code is clean, maintainable, and scalable. We couldn't have asked for a better developer partner.",
    avatar: "RW",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Client Testimonials
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What clients say about working with me
            </motion.p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-background/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                      <p className="text-sm text-primary">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
