import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Jobive from "./assets/Jobive.jpg";
import Traveling from "./assets/Traveling.png";
import FeedbackHub from "./assets/FeedbackHub.png";

// Projects data
const projects = [
  {
    title: "Jobive",
    description: "A job search platform that helps users find and apply for jobs.",
    image: Jobive,
    github: "https://github.com/Val242/jobive",
    live: "https://github.com/EnowBibi/Jobive.git",
    tech: ["React", "Vite", "TailwindCSS","MongoDB","Express"]
  },
  {
    title: "Traveling",
    description: "A Traveling website blended with great options.",
    image: Traveling,
    github: "https://github.com/Val242/Traveling.git",
    live: "https://traveling-xyms.vercel.app/",
    tech: ["React", "Vite", "TailwindCSS"]
  },
  {
    title: "FeedBackHub",
    description: "A feedback collection app that gathers user feedback with associated emotions.",
    image: FeedbackHub,
    github: "https://github.com/Val242/FeedBackIWOMI_FRONTEND.git",
    live: "https://feed-back-iwomi-frontend.vercel.app/",
    tech: ["React", "Vite", "TailwindCSS","MongoDB","Express"]
  },
];

function Projects() {
  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
        <h1 className="text-4xl lg:text-5xl font-black">Latest <span className="text-primary italic">works</span>.</h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary aspect-video mb-6">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl hover:scale-110 transition-transform"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl hover:scale-110 transition-transform"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <div className="px-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-black mb-3 group-hover:text-primary transition-colors">{project.title}</h2>
              <p className="text-muted font-medium text-lg max-w-md">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
