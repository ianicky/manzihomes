"use client";

import { motion } from "framer-motion";

export default function Credentials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50 text-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
      >
        Our Credentials
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-700 mb-12 text-lg"
      >
        We are fully registered and compliant with all regulatory bodies,
        ensuring professionalism, safety, and trust in every project we undertake.
      </motion.p>

      {/* CERTIFICATES */}
      <div className="grid md:grid-cols-3 gap-8 px-6">

        {[
          {
            title: "Company Registration Certificate",
            src: "/documents/company-registration.pdf",
            desc: "Official proof of legal registration.",
          },
          {
            title: "Single Business Permit",
            src: "/documents/business-permit.pdf",
            desc: "Authorized to operate within the jurisdiction.",
          },
          {
            title: "NCA Certificate of Registration",
            src: "/documents/nca-certificate.pdf",
            desc: "Registered with the National Construction Authority.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              {item.title}
            </h3>

            <iframe
              src={item.src}
              className="w-full h-48 mb-4 rounded border"
            />

            <p className="text-gray-600 text-sm mb-4">
              {item.desc}
            </p>

            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:underline"
            >
              View Full Document
            </a>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}