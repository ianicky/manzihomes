"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-white text-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
      >
        Why Choose Us
      </motion.h2>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">

        {[
          {
            title: "Professional Expertise",
            text: "Experienced team in design and construction",
          },
          {
            title: "Quality Workmanship",
            text: "We deliver durable and high-quality structures",
          },
          {
            title: "Reliable Delivery",
            text: "Projects completed on time and within budget",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 border rounded-xl shadow-lg hover:shadow-2xl transition max-w-sm"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.text}</p>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}