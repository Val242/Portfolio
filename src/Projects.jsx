import React from "react";
import { motion } from "framer-motion";
import TCPoS from "./assets/tcpos.png";
import MammyHealth from "./assets/mammyHealth.png";

const projects = [
  {
    title: "TCPoS Mobile",
    description:
      "A cross-platform point-of-sale mobile application for managing sales, products, inventory, and business operations.",
    image: TCPoS,
    live: "https://play.google.com/store/apps/details?id=com.techchantier.tcpos&hl=en",
  },
  {
    title: "MammyHealth",
    description:
      "A cross-platform maternal health application providing personalized pregnancy guidance, health information, and structured educational content.",
    image: MammyHealth,
    live: "https://play.google.com/store/apps/details?id=app.mammy.health&hl=en",
  },
];

function Projects() {
  return (
    <div
      className="bg-background flex flex-col items-center px-6 py-24 lg:px-40"
      id="projects"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-7"
      >
        <h1 className="text-4xl font-black lg:text-7xl">
          Featured <span className="text-primary">Works</span>.
        </h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex h-full flex-col"
          >
            {/* Clickable Product Card */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on Google Play`}
              className="block"
            >
              {/* Phone Mockup */}
              <div className="relative mb-8 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] bg-secondary p-6 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10">
                <motion.img
                  src={project.image}
                  alt={`${project.title} mobile application`}
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-grow flex-col px-2">
                <h2 className="mb-3 text-3xl font-black tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h2>

                <p className="text-base font-medium leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
