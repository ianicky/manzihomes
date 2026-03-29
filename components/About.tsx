"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
      >
        About Manzi Homes
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-700 text-lg"
      >
        Manzi Homes is a trusted construction company dedicated to delivering
        quality architectural designs, professional construction services,
        and precise surveying solutions. We are committed to building homes
        that reflect your vision and stand the test of time.
      </motion.p>
    </motion.section>
  );
}