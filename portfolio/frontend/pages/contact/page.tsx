"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

export default function Contact() {
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
              Let's Build Something Great
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind? Fill out the form below to tell me about your needs.
            </motion.p>
          </div>
        </section>

        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

