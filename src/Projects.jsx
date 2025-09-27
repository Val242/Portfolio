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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex flex-col items-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center"
      >
        My <span className="text-indigo-600">Projects</span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all"
          >
            {/* Image with overlay */}
            <div className="relative h-60 overflow-hidden rounded-t-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 transition-opacity"
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Card Content */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
