import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLinux, FaAws, FaLaravel } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiSpringboot,
  SiDocker,
  SiGitlab,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiAnsible,
} from "react-icons/si";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import useRoleSwitcher from "./hooks/useRoleSwitcher";

function App() {
  const role = useRoleSwitcher({
    roles: [
      "SOFTWARE ENGINEER",
      "DEVOPS ENGINEER",
      "CLOUD ENGINEER",
      "BACKEND ENGINEER",
      "FULL-STACK ENGINEER",
    ],
  });

  const [typedName, setTypedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);

  const fullName = "Hi — I'm Ebong Valentine";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));

      if (index === fullName.length) {
        clearInterval(typingInterval);
        setNameComplete(true);
      }
    }, 75);

    return () => clearInterval(typingInterval);
  }, []);

  const skills = [
    // Backend
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiNestjs, name: "NestJS" },
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: FaLaravel, name: "Laravel" },

    // Databases
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMongodb, name: "MongoDB" },

    // DevOps
    { icon: SiDocker, name: "Docker" },
    { icon: SiGitlab, name: "GitLab CI/CD" },
    { icon: SiGithubactions, name: "GitHub Actions" },
    { icon: SiJenkins, name: "Jenkins" },
    { icon: SiTerraform, name: "Terraform" },
    { icon: SiAnsible, name: "Ansible" },
    { icon: FaLinux, name: "Linux" },

    // Cloud
    { icon: FaAws, name: "AWS" },

    // Frontend
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
  ];

  const textEntry = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "circOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        className="min-h-[calc(100vh-4rem)] bg-background"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 pt-24 pb-12 md:grid-cols-2 lg:px-8 lg:py-16">
          {/* Hero Content */}
          <div className="flex min-h-48 flex-col justify-center lg:min-h-56 lg:max-w-[38rem]">
            <motion.div variants={textEntry}>
              <h1>
                {/* Typewriter Name */}
                <span className="text-foreground mb-2 block min-h-[2.5rem] text-3xl font-bold lg:min-h-[3rem] lg:text-4xl">
                  {typedName}

                  {!nameComplete && (
                    <span className="ml-1 inline-block animate-pulse">|</span>
                  )}
                </span>

                {/* Role appears after name finishes */}
                {nameComplete && (
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-primary block text-[1.75rem] font-bold lg:text-3xl"
                  >
                    {role}
                  </motion.span>
                )}
              </h1>

              <p className="text-muted mt-4 text-lg leading-relaxed lg:text-xl">
                I build reliable backend systems, automate infrastructure, and
                design scalable applications. I specialize in backend
                engineering, DevOps, cloud infrastructure, and full-stack
                development.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={textEntry}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="mailto:ebongvalentine70@gmail.com"
                aria-label="Contact Valentine by email"
                className="bg-primary text-primary-foreground border border-primary hover:opacity-90 rounded-lg px-6 py-2.5 text-center text-sm font-bold transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/ebong-valentine-2b1157322/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn Profile"
                className="text-primary bg-transparent border border-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/tinoscript"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View X Profile"
                className="text-primary bg-transparent border border-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300"
              >
                X
              </a>

              <a
                href="https://github.com/Val242"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Profile"
                className="text-primary bg-transparent border border-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-300"
              >
                Github
              </a>

              <a
                href="/EBONG_VALENTINE_CV.pdf"
                download="EBONG_VALENTINE_CV.pdf"
                aria-label="Download Resume"
                className="bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 py-2.5 text-center text-sm font-bold transition-all duration-300"
              >
                Resume
              </a>
            </motion.div>

            {/* Explore My Work */}
            <motion.div variants={textEntry} className="mt-7">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors duration-300"
              >
                Explore My Work
                <span className="text-lg animate-bounce">↓</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Skills Marquee */}
        <Skills skills={skills} />
      </motion.section>

      {/* Sections Wrapper */}
      <div className="space-y-10">
        <section id="about">
          <About />
        </section>

        {/* <section id="services">
          <Services />
        </section> */}

        <section id="projects">
          <Projects />
        </section>

        {/* <section id="contact">
          <Contact />
        </section> */}
      </div>
    </div>
  );
}

export default App;
