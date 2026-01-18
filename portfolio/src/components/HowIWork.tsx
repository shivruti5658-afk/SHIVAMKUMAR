"use client";

import { motion } from "framer-motion";
import ProcessFlow from "@/components/ProcessFlow";

const steps = [
  {
    step: 1,
    title: "Understand the Business",
    description: "Deep dive into your goals, users, and competitive landscape",
    icon: "🎯",
  },
  {
    step: 2,
    title: "Design with Purpose",
    description: "Create architecture and UX that solve real problems",
    icon: "📐",
  },
  {
    step: 3,
    title: "Build with Performance",
    description: "Write clean, scalable code from the first commit",
    icon: "⚡",
  },
  {
    step: 4,
    title: "Test Like a User",
    description: "Real-world testing across devices, scenarios, and edge cases",
    icon: "✅",
  },
  {
    step: 5,
    title: "Launch and Support",
    description: "Smooth deployment plus ongoing optimization and support",
    icon: "🚀",
  },
];

export default function HowIWork() {
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
            How I Work
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A clear, intentional process from concept to launch
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <ProcessFlow stepCount={steps.length} orientation="horizontal" />

          <div className="flex items-start justify-between relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-1/5 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 relative z-10"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--bg-primary)",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h3
                  className="font-semibold text-center mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-6 relative pl-8">
          <ProcessFlow stepCount={steps.length} orientation="vertical" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                {step.icon}
              </div>
              <div>
                <h3
                  className="font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
