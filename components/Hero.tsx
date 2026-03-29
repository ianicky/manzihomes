"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* 🔥 PARALLAX BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6">

        {/* 🔥 GLOW + LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center relative"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

          {/* Logo */}
          <Image
            src="/Logo.png"
            alt="Manzi Homes Logo"
            width={400}
            height={400}
            className="relative z-10 w-64 md:w-80 lg:w-[420px] h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get a Quote
          </a>

          <a
            href="#projects"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </motion.div>

      </div>

      </section>
  );
}