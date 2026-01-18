import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-bold bg-clip-text text-transparent mb-4"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Shivam Kumar
            </motion.h3>
            <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
              Building high-performance web and mobile products for startups,
              businesses, and agencies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                GitHub
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  Backend Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 text-center"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <p>&copy; 2024 Shivam Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
