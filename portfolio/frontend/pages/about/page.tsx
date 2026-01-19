"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const experience = [
  {
    period: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Freelance",
    description:
      "Building custom web and mobile solutions for startups and businesses worldwide.",
  },
  {
    period: "2022 - 2023",
    title: "Frontend Developer",
    company: "Tech Startup",
    description:
      "Developed responsive web applications using React and Next.js, improving user engagement by 40%.",
  },
  {
    period: "2021 - 2022",
    title: "Mobile App Developer",
    company: "Digital Agency",
    description:
      "Created cross-platform mobile applications with React Native, deployed to App Store and Play Store.",
  },
];

const skills = [
  "JavaScript/TypeScript",
  "React/Next.js",
  "Node.js",
  "Python",
  "React Native",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
];

export default function About() {
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
              About Me
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate developer crafting digital experiences that make a
              difference
            </motion.p>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Professional Summary
                </h2>
                <div className="space-y-4 text-muted">
                  <p>
                    I'm a full-stack developer with over 3 years of experience
                    building scalable web and mobile applications. My passion
                    lies in creating user-centric solutions that combine
                    beautiful design with robust functionality.
                  </p>
                  <p>
                    I specialize in modern JavaScript frameworks, cloud
                    technologies, and AI integration. Whether it's a startup MVP
                    or an enterprise application, I deliver high-quality code
                    that drives business results.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    mentoring aspiring developers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden md:block"></div>

              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.period}
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
                        <div className="text-primary font-semibold mb-2">
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {exp.title}
                        </h3>
                        <div className="text-primary mb-4">{exp.company}</div>
                        <p className="text-muted">{exp.description}</p>
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

        {/* Skills */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
