import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
} from "react-icons/si";
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

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Relay — Intelligent Transition Platform",
      period: "June 2026 – Present",
      desc: "Lead backend engineering and system architecture for a transition intelligence platform serving service members and veterans. Design scalable system and REST API architectures using NestJS, Prisma, and PostgreSQL, covering transitions, phases, signals, checklist items, places, groups, and user state. Build data import pipelines for large Excel datasets while focusing on scalability, data integrity, authentication, and CI/CD.",
    },
    {
      role: "Frontend Developer",
      company: "MammyHealth — Pregnancy & Maternal Health Platform",
      period: "May 2026 – Aug 2026",
      desc: "Build a scalable cross-platform React Native application focused on pregnancy and maternal health guidance. Develop reusable UI components, structured health content systems, and guided onboarding flows while maintaining a modular frontend architecture for future guides, articles, and community features.",
    },
    {
      role: "Software Engineering Intern",
      company: "Tech Chantier",
      period: "August 2026 – January 2027",
      desc: "Contribute to the TCPoS mobile application by implementing complete English and French localization using i18n. Translated the application interface and built dynamic language switching between English and French for a more accessible user experience.",
    },
  ];

  const leadership = [
    {
      role: "Public Relations Officer",
      company: "GDGoC - Univ. of Buea",
      period: "Aug 2025 – Aug 2026",
      desc: "Coordinating communication, engaging sponsors, and building a strong student developer community.",
    },
    {
      role: "Core Team Member",
      company: "Hult Prize",
      period: "Dec 2025 – Feb 2026",
      desc: "Assisted in student orientation, awareness campaigns, and engagement in the Hult Prize program.",
    },
  ];

  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-primary uppercase tracking-[0.3em] mb-4">
          About Me
        </h2>
      </motion.div>

      {/* About Content */}
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto text-center"
        >
          <div className="space-y-6 text-muted text-xl leading-relaxed text-justify">
            <p>
              Hi, I’m{" "}
              <span className="font-bold text-foreground underline decoration-primary decoration-4 underline-offset-4">
                Valentine
              </span>
              , a Full-Stack Software Engineer with a strong focus on backend
              engineering, DevOps, and building reliable, scalable systems.
            </p>

            <p>
              I specialize in backend development and API architecture using
              TypeScript, NestJS, Java, and Spring Boot, with hands-on
              experience designing production-ready services, databases, and
              distributed system components. I also work extensively with DevOps
              and cloud infrastructure, using Docker, CI/CD, AWS, Terraform, and
              Linux to automate, deploy, and operate applications reliably.
            </p>

            <p>
              Alongside my backend and infrastructure expertise, I have strong
              frontend experience building modern web and mobile interfaces with
              React, Next.js, and React Native. I enjoy working across the stack
              while paying particular attention to system architecture,
              scalability, automation, and delivering software that is built to
              run reliably in production.
            </p>
          </div>

          {/* Experience Stat */}
          <div className="pt-8 flex justify-center border-t border-border">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-2">3+</h3>
              <p className="text-muted text-sm uppercase font-bold tracking-widest">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience & Leadership */}
      <div className="max-w-5xl w-full mt-40 grid lg:grid-cols-2 gap-20">
        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-black mb-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-4">
            <span className="w-12 h-[2px] bg-primary hidden lg:block" />
            Experience
          </h3>

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l-2 border-border/50 group hover:border-primary transition-colors text-left"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />

                <h4 className="text-xl font-bold text-foreground mb-1">
                  {job.role}
                </h4>

                <div className="flex flex-col mb-4">
                  <span className="text-primary font-bold uppercase text-[10px] tracking-widest">
                    {job.company}
                  </span>

                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">
                    {job.period}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-black mb-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-4">
            <span className="w-12 h-[2px] bg-primary hidden lg:block" />
            Leadership
          </h3>

          <div className="space-y-12">
            {leadership.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l-2 border-border/50 group hover:border-primary transition-colors text-left"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />

                <h4 className="text-xl font-bold text-foreground mb-1">
                  {item.role}
                </h4>

                <div className="flex flex-col mb-4">
                  <span className="text-primary font-bold uppercase text-[10px] tracking-widest">
                    {item.company}
                  </span>

                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">
                    {item.period}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
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
            ease: "linear",
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map(
            ({ icon: Icon, name }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group flex-shrink-0 bg-secondary/30 px-6 py-4 rounded-2xl border border-border/50 hover:border-primary transition-all shadow-sm"
              >
                <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                  <Icon />
                </div>

                <span className="text-sm font-bold uppercase tracking-widest text-foreground/70">
                  {name}
                </span>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
