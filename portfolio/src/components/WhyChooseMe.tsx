import { motion } from "framer-motion";

const reasons = [
  {
    title: "Expertise",
    description: "Years of experience in modern web and mobile technologies",
  },
  {
    title: "Quality",
    description:
      "Clean, maintainable code with focus on performance and scalability",
  },
  {
    title: "Innovation",
    description:
      "Latest technologies and AI integration for cutting-edge solutions",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and support after project completion",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {reason.title}
              </h3>
              <p className="text-muted">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
