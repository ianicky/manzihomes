"use client";

import { motion } from "framer-motion";
import { videos } from "@/data/videos";

export default function Videos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
        Project Videos
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={video.url}
              className="w-full h-64"
              allowFullScreen
            />

            <p className="mt-3 font-semibold text-gray-800">
              {video.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}