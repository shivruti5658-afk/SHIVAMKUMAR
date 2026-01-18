"use client";

import { motion } from "framer-motion";

const signals = [
  {
    icon: "⚡",
    text: "3+ Years Building Production-Ready Applications",
  },
  {
    icon: "🚀",
    text: "Multiple End-to-End Products Delivered",
  },
  {
    icon: "⚙️",
    text: "Performance-Focused Engineering",
  },
];

export default function TrustSignals() {
  return (
    <section
      className="py-12 px-4"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl flex-shrink-0" style={{ opacity: 0.8 }}>
                {signal.icon}
              </div>
              <p
                className="text-base font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {signal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
