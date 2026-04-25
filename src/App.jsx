import React from "react";
import { motion } from "framer-motion";
//import { Analytics } from "@vercel/analytics/next"

import pp from "./assets/pic.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-40 py-32 mt-20"
      >
        <div className="space-y-6 text-center lg:text-left z-10 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Available for freelance
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-8xl font-black leading-tight tracking-tight"
          >
            Designing <span className="text-primary italic">digital</span> experiences.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted text-lg lg:text-xl font-medium"
          >
            I'm Valentine, a Fullstack Developer based in Cameroon, 
            focused on building clean, high-performance web and mobile applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              View Projects
            </button>
            <button className="bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-full font-bold hover:bg-border transition-colors">
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative mb-12 lg:mb-0"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={pp}
            alt="Valentine"
            className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl relative z-10 border-8 border-white dark:border-slate-800"
          />
        </motion.div>
      </motion.section>

      {/* Sections Wrapper */}
      <div className="space-y-32 pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
        >
          <Services />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
        >
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
