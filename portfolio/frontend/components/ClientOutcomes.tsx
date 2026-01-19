"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    metric: "Faster Load Times",
    description: "Optimized code and architecture reduce load time by 50%+",
    icon: "⚡",
  },
  {
    metric: "Better User Retention",
    description: "Great UX and performance keep users coming back",
    icon: "📈",
  },
  {
    metric: "Reduced Maintenance",
    description: "Clean code means fewer bugs and faster updates",
    icon: "🛠️",
  },
  {
    metric: "Scalable Backend",
    description: "Built to handle growth without a rebuild",
    icon: "📊",
  },
];

export default function ClientOutcomes() {
  return (
    <section
      className="py-24 px-4"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
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
            What You'll Experience
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Real outcomes from real engineering discipline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg flex gap-6"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderWidth: "1px",
                borderColor: "var(--border)",
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl flex-shrink-0" style={{ opacity: 0.8 }}>
                {item.icon}
              </div>
              <div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {item.metric}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
