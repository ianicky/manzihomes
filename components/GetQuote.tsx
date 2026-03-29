"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function GetQuote() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState(selectedService);

  const handleSubmit = () => {
    const message = `Hello Manzi Homes, my name is ${name}. I am located in ${location} and I am interested in ${service}. I would like to get a quote for my project.`;

    const url = `https://wa.me/254718856612?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
      >
        Get a Quote
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-700 mb-6"
      >
        Select a service or combine multiple services based on your project needs. 
        We provide flexible solutions tailored to you.
      </motion.p>

      {/* PROCESS STEPS */}
      <div className="grid md:grid-cols-3 gap-8 px-6 mb-12">
        {[
          {
            title: "1. Contact Us",
            text: "Reach out via call or WhatsApp to discuss your project.",
          },
          {
            title: "2. Site Visit",
            text: "We visit your site. Fuel cost may apply depending on location. Free within Ongata Rongai and nearby areas.",
          },
          {
            title: "3. Project Assessment",
            text: "We evaluate your needs and recommend the best approach.",
          },
          {
            title: "4. Planning & Design",
            text: "We prepare architectural, structural plans and BOQ.",
          },
          {
            title: "5. Payment Plan",
            text: "Flexible options based on your project scope.",
          },
          {
            title: "6. Execution",
            text: "Construction or service delivery begins.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white border rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.text}</p>
          </motion.div>
        ))}
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col gap-4 px-6 mb-8"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Your Location"
          className="p-4 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="p-4 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>

          {/* DESIGN */}
          <option value="Architectural Design">Architectural Design</option>
          <option value="Civil Engineering Designs">Civil Engineering Designs</option>
          <option value="Urban Planning">Urban Planning</option>
          <option value="Change of Use">Change of Use</option>

          {/* CONSTRUCTION */}
          <option value="Building & Construction Works">Building & Construction Works</option>
          <option value="Project Management">Project Management</option>

          {/* SURVEY */}
          <option value="Mutation Survey">Mutation Survey</option>
          <option value="Title Deed Transfer">Title Deed Transfer</option>
          <option value="Sectional Properties Survey">Sectional Properties Survey</option>
          <option value="Mapping">Mapping</option>
          <option value="Cadastral Survey">Cadastral Survey</option>
          <option value="Beacon Re-establishment">Beacon Re-establishment</option>
        </select>
      </motion.div>

      {/* CTA BUTTON */}
      <motion.button
        onClick={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition shadow-lg"
      >
        Request a Quote on WhatsApp
      </motion.button>

    </section>
  );
}