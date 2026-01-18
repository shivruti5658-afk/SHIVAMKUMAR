"use client";

import { motion } from "framer-motion";

const philosophies = [
  {
    title: "Performance Matters",
    description:
      "A 1-second delay can lose 7% of conversions. I optimize from architecture to pixels, ensuring your app stays fast as it grows.",
    icon: "⚡",
  },
  {
    title: "Clean Architecture Saves Money",
    description:
      "Technical debt compounds. I build systems that are easy to extend, debug, and maintain—saving you money long-term.",
    icon: "🏗️",
  },
  {
    title: "User Experience is Non-Negotiable",
    description:
      "Beautiful design without function is just art. I build interfaces that users love to use and keep coming back to.",
    icon: "💎",
  },
];

export default function TechPhilosophy() {
  return (
    <section
      className="py-24 px-4"
      style={{
        backgroundColor: "var(--bg-primary)",
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            My Engineering Philosophy
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            I don't just build features. I build systems that are fast,
            reliable, and built to scale with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderWidth: "1px",
                borderColor: "var(--border)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: "var(--accent-primary)",
                boxShadow: "0 0 20px rgba(0, 229, 255, 0.1)",
              }}
            >
              <div className="text-4xl mb-4" style={{ opacity: 0.9 }}>
                {item.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
