import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNestjs, SiPrisma, SiPostgresql, SiSpringboot, SiHibernate } from "react-icons/si";
import { motion } from "framer-motion";
import pp from "./assets/pic.jpg";
import Navbar from "./Navbar";

function About() {
  const iconHover = { scale: 1.2, y: -5 };

  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiNestjs, name: "NestJS X Prisma ORM" },
    { icon: SiSpringboot, name: "SpringBoot X Hibernate" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiTypescript, name: "TypeScript" },
  ];

  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
        <h1 className="text-4xl lg:text-6xl font-black">Building with <span className="text-primary italic">purpose</span>.</h1>
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6 text-muted text-xl leading-relaxed">
            <p>
              Hi, I’m <span className="font-bold text-foreground underline decoration-primary decoration-4 underline-offset-4">Valentine</span>,
              a Fullstack Developer dedicated to crafting exceptional digital products.
            </p>
            <p>
              I bridge the gap between complex backend logic and intuitive frontend design.
              My approach is centered on efficiency, scalability, and user-centric results.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
            <div>
              <h3 className="text-2xl font-black mb-2">3+</h3>
              <p className="text-muted text-sm uppercase font-bold tracking-widest">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">20+</h3>
              <p className="text-muted text-sm uppercase font-bold tracking-widest">Projects Done</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
          <h3 className="text-2xl font-black mb-8">My Tech Stack</h3>
          <div className="grid grid-cols-4 gap-8">
            {skills.map(({ icon: Icon, name }, index) => (
              <motion.div
                key={index}
                whileHover={iconHover}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <Icon />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
