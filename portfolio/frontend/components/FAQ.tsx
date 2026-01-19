"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How do you estimate project cost?",
    answer:
      "I provide detailed estimates based on scope, complexity, and timeline. I break down the project into milestones and give clear pricing for each phase so there are no surprises.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. I offer ongoing support packages that include bug fixes, performance optimization, and feature updates. Think of me as an extension of your team.",
  },
  {
    question: "Can you work with existing code?",
    answer:
      "Yes. Whether you need to refactor legacy code, fix bugs, or add new features to an existing project, I can jump in and make improvements quickly.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on complexity. A simple website might take 4-6 weeks. A full-stack app could take 2-4 months. I always provide a realistic timeline upfront.",
  },
  {
    question: "What's your process for communication?",
    answer:
      "Clear communication is key. We start with a discovery call, then I provide weekly updates. You'll have direct access to me throughout the project.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's okay. I offer a free consultation to understand your business, users, and goals. We'll figure out the best approach together.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-3xl mx-auto">
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Have questions? I've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-lg transition-all"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderWidth: "1px",
                  borderColor:
                    openIndex === index
                      ? "var(--accent-primary)"
                      : "var(--border)",
                }}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-semibold"
                    style={{
                      color:
                        openIndex === index
                          ? "var(--accent-primary)"
                          : "var(--text-primary)",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    style={{
                      color:
                        openIndex === index
                          ? "var(--accent-primary)"
                          : "var(--text-secondary)",
                      fontSize: "1.5rem",
                    }}
                  >
                    ▼
                  </motion.span>
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className="p-6 pt-0"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                    borderWidth: "1px",
                    borderTop: "none",
                    borderColor: "var(--accent-primary)",
                    borderRadius: "0 0 0.5rem 0.5rem",
                  }}
                >
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
