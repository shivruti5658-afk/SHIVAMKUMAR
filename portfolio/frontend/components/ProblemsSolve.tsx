"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const problems = [
  {
    problem: "Slow, Unscalable Websites",
    solution: "I build for speed and growth from day one",
    icon: "🐌",
  },
  {
    problem: "Apps That Break Under Real Users",
    solution: "Robust architecture that handles scale without refactoring",
    icon: "💥",
  },
  {
    problem: "Beautiful Designs That Don't Convert",
    solution: "Design meets strategy: beautiful AND functional",
    icon: "🎨",
  },
  {
    problem: "Developers Who Disappear",
    solution: "I stay for the long term and support your growth",
    icon: "👻",
  },
];

export default function ProblemsSolve() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: "var(--bg-primary)" }}
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
            Problems I Solve
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            I understand the pain points that hold businesses back. Here's how I
            fix them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor:
                  hoveredIndex === index
                    ? "var(--bg-secondary)"
                    : "var(--bg-elevated)",
                borderWidth: "1px",
                borderColor:
                  hoveredIndex === index
                    ? "var(--accent-primary)"
                    : "var(--border)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {item.problem}
              </h3>
              <motion.p
                className="text-base font-medium"
                style={{
                  color:
                    hoveredIndex === index
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.7,
                }}
              >
                ✓ {item.solution}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
