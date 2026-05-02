import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from "react-icons/fa";
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
    {
      icon: <FaDatabase />,
      title: "Database Administration",
      description: "Designing, securing, and optimizing database architecture for peak performance.",
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
            className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-secondary/80 backdrop-blur-md border border-border rounded-[2.5rem] p-10 flex flex-col items-start text-left transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Glow Orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border border-border text-primary flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl shadow-black/5">
              {service.icon}
            </div>
            <h2 className="relative z-10 text-2xl font-black mb-4">{service.title}</h2>
            <p className="relative z-10 text-muted leading-relaxed font-medium">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
