import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNestjs, SiPrisma, SiPostgresql, SiSpringboot, SiHibernate } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
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
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24 overflow-hidden">
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
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto text-center"
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
      </div>

      {/* Full Width Marquee */}
      <div className="w-full mt-32 relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ 
            x: [0, -2000], 
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group flex-shrink-0 bg-secondary/30 px-10 py-6 rounded-3xl border border-border/50 hover:border-primary transition-all shadow-sm"
            >
              <div className="text-5xl text-primary group-hover:scale-110 transition-transform">
                <Icon />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-foreground/70">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
