"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      
      <h2 className="text-4xl font-bold mb-4 text-gray-900">
        Our Projects
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Explore some of our ongoing and completed projects showcasing our expertise in construction and renovation.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        loop={projects.length >= 2}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* CONTENT */}
              <div className="p-8 text-left">

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <span className="inline-block mb-6 text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded">
                  Ongoing Project
                </span>

                {/* VIDEO (ONLY IF EXISTS) */}
                {project.video && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Featured Work
                    </h4>

                    <video
                      src={project.video}
                      className="w-full max-w-md rounded-lg shadow"
                      controls
                    />
                  </div>
                )}

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}