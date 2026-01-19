"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your vision, goals, and requirements through detailed consultation and research.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Creating wireframes, mockups, and interactive prototypes to visualize the solution.",
    icon: "🎨",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building the solution using modern technologies, best practices, and agile methodology.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing across devices and scenarios to ensure reliability and performance.",
    icon: "🧪",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description:
      "Seamless deployment to production with monitoring and optimization for peak performance.",
    icon: "🚀",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and maintenance to keep your solution current and secure.",
    icon: "🔧",
  },
];

export default function Process() {
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
              My Process
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A proven methodology that ensures successful project delivery from
              concept to launch
            </motion.p>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden md:block"></div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-full md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-background/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <div>
                            <span className="text-primary font-semibold">
                              {step.step}
                            </span>
                            <h3 className="text-xl font-semibold">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
