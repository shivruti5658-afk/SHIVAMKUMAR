import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites and web applications",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user experiences",
  },
  {
    title: "Backend & API Development",
    description: "Scalable server-side solutions",
  },
  {
    title: "AI Integration",
    description: "Intelligent features and automation",
  },
];

const style = `
  .service-card {
    transition: border-color 0.3s ease;
  }
  .service-card:hover {
    border-color: var(--accent-primary) !important;
  }
`;

export default function ServicesSnapshot() {
  return (
    <section id="services" className="py-20 px-4">
      <style>{style}</style>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.title} href="/services">
              <motion.div
                className="service-card rounded-lg p-6 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderWidth: "1px",
                  borderColor: "var(--border)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
