"use client";

import React from "react";
import { Project } from "@/types/project";
import ImageGallery from "@/components/ImageGallery";

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Live Project →
              </a>
            )}
            {project.caseStudyLink && (
              <a
                href={project.caseStudyLink}
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                Read Case Study →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery images={project.images} projectTitle={project.title} />

      {/* Tech Stack Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Results Section */}
      {project.results && (
        <section className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg my-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Results
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.results}
          </p>
        </section>
      )}
    </main>
  );
}
