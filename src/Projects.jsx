import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import TCPoS from "./assets/tcpos.png";
import MammyHealth from "./assets/mammyHealth.png";

const projects = [
  {
    title: "TCPoS Mobile",
    description:
      "A cross-platform point-of-sale mobile application for managing sales, products, inventory, and business operations.",
    image: TCPoS,
    live: "#",
    tech: ["React Native", "Expo", "TypeScript", "i18n"],
  },
  {
    title: "MammyHealth",
    description:
      "A cross-platform maternal health application providing personalized pregnancy guidance, health information, and structured educational content.",
    image: MammyHealth,
    live: "#",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
  },
];

function Projects() {
  return (
    <div
      className="bg-background flex flex-col items-center px-6 lg:px-40 py-24"
      id="projects"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl lg:text-7xl font-black">
          Featured <span className="text-primary italic">Works</span>.
        </h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
          >
            {/* Phone Mockup */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary aspect-[4/5] mb-8  p-6 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10 flex items-center justify-center">
              <motion.img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Live Project Link */}
              {project.live !== "#" && (
                <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl hover:scale-110 transition-all"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow px-2">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-black uppercase tracking-[0.2em] text-muted border border-border px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h2>

              <p className="text-muted font-medium text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
