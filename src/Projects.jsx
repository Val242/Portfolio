import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Jobive from "./assets/Jobive.jpg";
import Traveling from "./assets/Traveling.png";
import FeedbackHub from "./assets/FeedbackHub.png";

// Projects data with branding colors
const projects = [
  {
    title: "Jobive",
    description: "A professional job search platform built for modern career hunting.",
    image: Jobive,
    github: "https://github.com/Val242/jobive",
    live: "https://github.com/EnowBibi/Jobive.git",
    tech: ["React", "NestJS", "Prisma", "MongoDB"],
    color: "rgba(79, 70, 229, 0.1)" // Branded blueish
  },
  {
    title: "Traveling",
    description: "Discover the world with ease through our curated travel experiences.",
    image: Traveling,
    github: "https://github.com/Val242/Traveling.git",
    live: "https://traveling-xyms.vercel.app/",
    tech: ["React", "Vite", "TailwindCSS"],
    color: "rgba(20, 184, 166, 0.1)" // Branded teal
  },
  {
    title: "FeedBackHub",
    description: "An intelligent feedback engine capturing user sentiments in real-time.",
    image: FeedbackHub,
    github: "https://github.com/Val242/FeedBackIWOMI_FRONTEND.git",
    live: "https://feed-back-iwomi-frontend.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    color: "rgba(236, 72, 153, 0.1)" // Branded pink
  },
];

function Projects() {
  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24" id="projects">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4">Portfolio</h2>
        <h1 className="text-4xl lg:text-7xl font-black">Featured <span className="text-primary italic">Works</span>.</h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
          >
            {/* Image Box */}
            <div 
              className="relative overflow-hidden rounded-[2.5rem] bg-secondary aspect-square mb-8 border border-white/5 p-6 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10"
              style={{ backgroundColor: project.color }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Links */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl hover:scale-110 transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl hover:scale-110 transition-all"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow px-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 border border-white/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-black mb-3 group-hover:text-primary transition-colors tracking-tight">{project.title}</h2>
              <p className="text-muted font-medium text-base leading-relaxed line-clamp-3">
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
