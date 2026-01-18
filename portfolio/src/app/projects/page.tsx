"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { projectsData } from "@/data/projects";
import { useState } from "react";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject = selectedProjectId
    ? projectsData.find((p) => p.id === selectedProjectId)
    : null;

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
              <button
                onClick={() => setSelectedProjectId(null)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedProjectId === null
                    ? "bg-primary text-background"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                All Projects
              </button>
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    selectedProjectId === project.id
                      ? "bg-primary text-background"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {selectedProjectId && selectedProject ? (
              // Detailed Project View with Gallery
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Project Header */}
                <div className="mb-8">
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="text-primary hover:text-primary/80 mb-4 flex items-center gap-2"
                  >
                    ← Back to All Projects
                  </button>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-muted mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mb-8">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors font-semibold"
                      >
                        Visit Live Project →
                      </a>
                    )}
                    {selectedProject.caseStudyLink && (
                      <Link
                        href={selectedProject.caseStudyLink}
                        className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
                      >
                        Read Case Study →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image Gallery */}
                {selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <ImageGallery
                      images={selectedProject.images}
                      projectTitle={selectedProject.title}
                    />
                  )}

                {/* Results Section */}
                {selectedProject.results && (
                  <motion.section
                    className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Results
                    </h3>
                    <p className="text-lg text-muted">
                      {selectedProject.results}
                    </p>
                  </motion.section>
                )}
              </motion.div>
            ) : (
              // Projects List View
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {projectsData.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-background/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    {/* Project Image Preview */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      {project.images && project.images.length > 0 ? (
                        <Image
                          src={
                            project.images[0].thumbnail || project.images[0].src
                          }
                          alt={project.images[0].alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-6xl">📸</span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      {project.images && (
                        <p className="text-sm text-muted/70">
                          📸 {project.images.length} screenshots
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
