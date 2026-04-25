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
          <div className="space-y-6 text-muted text-xl leading-relaxed text-justify">
            <p>
              Hi, I’m <span className="font-bold text-foreground underline decoration-primary decoration-4 underline-offset-4">Valentine</span>,
              a junior Full-Stack Software Engineer currently pursuing my B.ENG in Software Engineering (3rd Year).
            </p>
            <p>
              I have hands-on experience building web and mobile applications using React.js, React Native, and Next.js.
              I enjoy creating clean, intuitive user interfaces and translating product ideas into functional applications.
            </p>
            <p>
              On the backend, I work with Node.js, TypeScript, Express.js, Nest.js, Java, and Spring Boot to build RESTful APIs and support robust application logic.
              I’m fluent in English and French and motivated to grow in fast-paced engineering teams.
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

      {/* Resume Details: Experience & Education */}
      <div className="max-w-5xl w-full mt-40 grid lg:grid-cols-2 gap-20">

        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-black mb-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-4">
            <span className="w-12 h-[2px] bg-primary hidden lg:block" />
            Experience
          </h3>
          <div className="space-y-12">
            {[
              {
                role: "Full-Stack Developer",
                company: "Cameroon International Music Festival Hackathon",
                period: "Hackathon Project",
                desc: "Built KontriVibe, a platform promoting Cameroonian music. Implemented frontend components, supported backend API integration, and integrated AI-driven features.",
              },
              {
                role: "Co-Trainer",
                company: "React & React Native Dev Bootcamp",
                period: "Cohort 5",
                desc: "Trained 20+ participants in React/React Native, explaining core concepts (state, hooks) and supporting debugging during hands-on sessions.",
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l-2 border-border/50 group hover:border-primary transition-colors text-left"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />
                <h4 className="text-xl font-bold text-foreground mb-1">{job.role}</h4>
                <div className="flex flex-col mb-4">
                  <span className="text-primary font-bold uppercase text-[10px] tracking-widest">{job.company}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{job.period}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Education */}
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-black mb-12 text-center lg:text-left flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-[2px] bg-primary hidden lg:block" />
              Leadership
            </h3>
            <div className="space-y-12">
              {[
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
                }
              ].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8 border-l-2 border-border/50 group hover:border-primary transition-colors text-left"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors border-4 border-background" />
                  <h4 className="text-xl font-bold text-foreground mb-1">{role.role}</h4>
                  <div className="flex flex-col mb-4">
                    <span className="text-primary font-bold uppercase text-[10px] tracking-widest">{role.company}</span>
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{role.period}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{role.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>


        </div>

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
              className="flex items-center gap-3 group flex-shrink-0 bg-secondary/30 px-6 py-4 rounded-2xl border border-border/50 hover:border-primary transition-all shadow-sm"
            >
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform">
                <Icon />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground/70">
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
