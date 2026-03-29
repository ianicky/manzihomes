"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Services() {
  const router = useRouter();

  // ✅ State for multiple selection
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // ✅ Toggle selection
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // ✅ Proceed to quote page with multiple services
  const handleProceed = () => {
    if (selectedServices.length === 0) return;

    const query = selectedServices
      .map((s) => encodeURIComponent(s))
      .join(",");

    router.push(`/quote?services=${query}`);
  };

  const serviceCategories = [
    {
      title: "Design & Planning",
      icon: "📐",
      services: [
        "Architectural Design",
        "Civil Engineering Designs",
        "Urban Planning",
        "Change of Use",
      ],
    },
    {
      title: "Construction & Project Management",
      icon: "🏗️",
      services: [
        "Building & Construction Works",
        "Project Management",
      ],
    },
    {
      title: "Surveying Services",
      icon: "📍",
      services: [
        "Mutation Survey",
        "Title Deed Transfer",
        "Sectional Properties Survey",
        "Mapping",
        "Cadastral Survey",
        "Beacon Re-establishment",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white text-center">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Our Services
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-3xl mx-auto text-gray-700 mb-12 text-lg">
        Select one or more services and request a quote instantly via WhatsApp.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-left border border-gray-100"
          >
            {/* ICON */}
            <div className="text-3xl mb-4">{category.icon}</div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {category.title}
            </h3>

            {/* SERVICES */}
            <ul className="space-y-3 text-sm">
              {category.services.map((service, i) => (
                <li
                  key={i}
                  onClick={() => toggleService(service)}
                  className={`cursor-pointer px-4 py-2 rounded-md border transition-all duration-200 font-medium flex justify-between items-center
                    ${
                      selectedServices.includes(service)
                        ? "bg-orange-100 border-orange-400 text-orange-600"
                        : "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                >
                  {service}
                  <span className="text-xs opacity-60">
                    {selectedServices.includes(service) ? "✓" : "→"}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10">
        <button
          onClick={handleProceed}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50"
          disabled={selectedServices.length === 0}
        >
          Request Quote
        </button>
      </div>

    </section>
  );
}