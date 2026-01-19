"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

const techStack = {
  frontend: {
    title: "Frontend",
    technologies: [
      { name: "React", level: 95, description: "Component-based UI library" },
      { name: "Next.js", level: 90, description: "Full-stack React framework" },
      { name: "TypeScript", level: 85, description: "Typed JavaScript" },
      {
        name: "Tailwind CSS",
        level: 90,
        description: "Utility-first CSS framework",
      },
      { name: "Framer Motion", level: 80, description: "Animation library" },
    ],
  },
  backend: {
    title: "Backend",
    technologies: [
      { name: "Node.js", level: 90, description: "JavaScript runtime" },
      { name: "Python", level: 85, description: "General-purpose programming" },
      {
        name: "Express.js",
        level: 85,
        description: "Web application framework",
      },
      { name: "GraphQL", level: 75, description: "Query language for APIs" },
      { name: "REST APIs", level: 90, description: "API design pattern" },
    ],
  },
  mobile: {
    title: "Mobile",
    technologies: [
      {
        name: "React Native",
        level: 85,
        description: "Cross-platform mobile apps",
      },
      { name: "Flutter", level: 70, description: "UI toolkit for mobile" },
      { name: "iOS Development", level: 75, description: "Native iOS apps" },
      {
        name: "Android Development",
        level: 75,
        description: "Native Android apps",
      },
    ],
  },
  database: {
    title: "Database",
    technologies: [
      { name: "MongoDB", level: 85, description: "NoSQL database" },
      { name: "PostgreSQL", level: 80, description: "Relational database" },
      {
        name: "Redis",
        level: 75,
        description: "In-memory data structure store",
      },
      { name: "Firebase", level: 80, description: "Backend-as-a-Service" },
    ],
  },
  devops: {
    title: "DevOps",
    technologies: [
      { name: "Docker", level: 80, description: "Containerization platform" },
      { name: "AWS", level: 75, description: "Cloud computing platform" },
      { name: "Vercel", level: 85, description: "Deployment platform" },
      { name: "Git", level: 90, description: "Version control system" },
    ],
  },
  ai: {
    title: "AI Tools",
    technologies: [
      {
        name: "TensorFlow",
        level: 70,
        description: "Machine learning framework",
      },
      { name: "OpenAI API", level: 75, description: "AI model integration" },
      {
        name: "Python ML",
        level: 75,
        description: "Machine learning with Python",
      },
      {
        name: "Data Analysis",
        level: 80,
        description: "Data processing and analysis",
      },
    ],
  },
};

export default function TechStack() {
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
              Tech Stack
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Modern technologies and tools I use to build exceptional digital
              experiences
            </motion.p>
          </div>
        </section>

        {/* Tech Stack Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {Object.entries(techStack).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
                  {category.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="bg-background/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">{tech.name}</h3>
                        <span className="text-primary font-bold">
                          {tech.level}%
                        </span>
                      </div>

                      <div className="mb-4">
                        <ProgressBar value={tech.level} />
                      </div>

                      <p className="text-muted text-sm hover:text-foreground transition-colors">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
