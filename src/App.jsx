import React from "react";
import { motion } from "framer-motion";

import pp from "./assets/pic.jpg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  // Animation variants for staggered section appearance
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-12 relative"
      >
        {/* Floating shapes for grid-like animated feeling */}
        <motion.div
          className="absolute w-24 h-24 bg-indigo-200 rounded-full top-0 left-10 opacity-50"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-purple-300 rounded-full bottom-10 right-10 opacity-40"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Text */}
        <div className="space-y-4 text-center lg:text-left z-10">
          <p className="text-lg text-gray-700">Hello, I am</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
            Valentine
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-indigo-700">
            Fullstack Web & App Developer
          </h2>
          <p className="text-gray-700">Based in Cameroon</p>
        </div>

        {/* Image */}
        <motion.div
          className="mb-8 lg:mb-0 z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={pp}
            alt="Profile"
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] object-cover rounded-full shadow-2xl border-4 border-indigo-600"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <About />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Services />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
