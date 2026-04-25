import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Responsive, modern interfaces built with React & Tailwind CSS.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      description: "Cross-platform mobile experiences that feel native and fast.",
    },
    {
      icon: <FaServer />,
      title: "Backend Solutions",
      description: "Robust server logic using NestJS X Prisma, Node.js, and SpringBoot X Hibernate.",
    },
  ];

  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Expertise</h2>
        <h1 className="text-4xl lg:text-5xl font-black">Services I <span className="text-primary italic">provide</span>.</h1>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass rounded-[2.5rem] p-10 flex flex-col items-start text-left hover:border-primary/50 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-lg shadow-primary/5">
              {service.icon}
            </div>
            <h2 className="text-2xl font-black mb-4">{service.title}</h2>
            <p className="text-muted leading-relaxed font-medium">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
