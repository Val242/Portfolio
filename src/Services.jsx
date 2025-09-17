import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-white text-5xl mb-4" />,
      title: "Web Development",
      description:
        "Building responsive, modern, and user-friendly websites using React, Tailwind CSS, and Node.js.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      icon: <FaMobileAlt className="text-white text-5xl mb-4" />,
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps using React Native that run smoothly on iOS and Android.",
      gradient: "from-green-400 via-teal-500 to-blue-500",
    },
    {
      icon: <FaServer className="text-white text-5xl mb-4" />,
      title: "Backend & API Development",
      description:
        "Designing scalable server-side solutions, RESTful APIs, and integrating databases with Node.js & Convex.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex flex-col items-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
        My <span className="text-indigo-600">Services</span>
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-xl shadow-2xl p-8 flex flex-col items-center text-center cursor-pointer transform transition-transform hover:scale-105 bg-gradient-to-br ${service.gradient}`}
          >
            {service.icon}
            <h2 className="text-xl font-semibold mt-4 text-white">{service.title}</h2>
            <p className="text-white mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
