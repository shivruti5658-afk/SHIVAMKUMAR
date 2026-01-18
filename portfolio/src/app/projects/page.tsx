"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = ["All", "Web", "Mobile", "AI"];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    category: "Web",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication",
    image: "/project2.jpg",
    technologies: ["React Native", "Firebase", "Biometric Auth"],
    link: "#",
    category: "Mobile",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    image: "/project3.jpg",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
    link: "#",
    category: "AI",
  },
  {
    title: "Social Media Management Tool",
    description: "Comprehensive social media management platform",
    image: "/project4.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "AWS"],
    link: "#",
    category: "Web",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
              Featured Projects
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Showcasing innovative solutions and cutting-edge technologies
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-background"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-background/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-block px-6 py-2 bg-primary text-background rounded-full font-semibold hover:bg-primary/80 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
