import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
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
          </motion.div>

          <motion.p
            variants={textEntry}
            className="text-muted text-xl lg:text-3xl font-medium max-w-3xl leading-tight"
          >
            I'm Valentine, a Fullstack Developer building digital solutions that
            are{" "}
            <span className="text-foreground">
              bold, efficient, and user-centric.
            </span>
          </motion.p>

          <motion.div
            variants={textEntry}
            className="pt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="bg-transparent text-foreground border-2 border-border px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-foreground hover:text-background transition-all"
            >
              Get In Touch
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
