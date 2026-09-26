import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import useRoleSwitcher from "./hooks/useRoleSwitcher";

function App() {
  const role = useRoleSwitcher({
    roles: [
      "BACKEND ENGINEER",
      "DEVOPS ENGINEER",
      "CLOUD ENGINEER",
      "SOFTWARE ENGINEER",
      "FULL-STACK ENGINEER",
    ],
  });

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
        className="relative min-h-screen flex items-center px-8 lg:px-40 py-32"
      >
        <div className="space-y-10 text-center lg:text-left z-10 max-w-5xl">
          <motion.div variants={textEntry} className="space-y-4">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs">
              Based in Cameroon
            </p>

            <h1 className="text-6xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter">
              BEYOND <br />
              <span className="text-primary italic">PIXELS</span>.
            </h1>

            <span className="text-accent block text-[1.75rem] font-bold">
              {role}
            </span>
          </motion.div>

          <motion.p
            variants={textEntry}
            className="text-muted text-xl lg:text-3xl font-medium max-w-4xl leading-tight"
          >
            I'm Valentine, a Full-Stack Software Engineer specializing in{" "}
            <span className="text-foreground">
              backend engineering, DevOps, and scalable systems
            </span>
            , with strong frontend experience building modern web and mobile
            applications.
          </motion.p>

          {/* Direct Contact Actions */}
          <motion.div
            variants={textEntry}
            className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="mailto:your-email@example.com"
              aria-label="Contact Valentine by email"
              className="border border-primary bg-primary text-primary-foreground hover:opacity-90 rounded-lg px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/ebong-valentine-2b1157322/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="EBONG_VALENTINE_CV.pdf"
              download
              aria-label="Download Resume"
              className="border border-border text-foreground hover:bg-foreground hover:text-background rounded-lg px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>

          {/* Explore Work */}
          <motion.div
            variants={textEntry}
            className="flex justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="text-muted hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Explore My Work ↓
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Sections Wrapper */}
      <div className="space-y-10">
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <footer className="py-20 text-center border-t border-border">
        <p className="text-muted text-sm font-bold tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} Ebong Valentine &bull; Excellence
          Always
        </p>
      </footer>
    </div>
  );
}

export default App;
