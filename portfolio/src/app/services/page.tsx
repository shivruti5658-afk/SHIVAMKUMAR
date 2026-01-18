"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Modern, responsive web applications with cutting-edge technologies",
    features: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Performance Optimization",
    ],
    icon: "💻",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description: "Scalable server-side solutions and robust API architectures",
    features: ["Node.js", "Python", "REST/GraphQL", "Database Design"],
    icon: "⚙️",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "React Native",
      "Flutter",
      "iOS/Android",
      "App Store Deployment",
    ],
    icon: "📱",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Intelligent features and automation solutions",
    features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"],
    icon: "🤖",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              Services
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive development solutions tailored to your business
              needs
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="bg-background/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setSelectedService(
                      selectedService === service.id ? null : service.id
                    )
                  }
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      className="w-full px-6 py-2 bg-primary text-background rounded-full font-semibold hover:bg-primary/80 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Navigate to contact with pre-filled service
                        window.location.href = `/contact?service=${service.id}`;
                      }}
                    >
                      Request Quote
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {selectedService === service.id && (
                    <motion.div
                      className="px-6 pb-6 border-t border-primary/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4">
                        <h4 className="font-semibold mb-2">What I Offer:</h4>
                        <ul className="text-muted space-y-1">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <span className="text-primary mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm text-muted">
                          Ready to get started? Let's discuss your project
                          requirements.
                        </p>
                      </div>
                    </motion.div>
                  )}
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
