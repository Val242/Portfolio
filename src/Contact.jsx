import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: "akumengwene@gmail.com",
      link: "mailto:akumengwene@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "+237 671 369 673",
      link: "tel:+237671369673",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Douala, Cameroon",
      link: null,
    },
  ];

  return (
    <div className="bg-background flex flex-col items-center px-6 lg:px-40 py-24 pb-40">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Contact</h2>
        <h1 className="text-4xl lg:text-5xl font-black">Let's <span className="text-primary italic">connect</span>.</h1>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full mb-20">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link ? item.link : "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-secondary/80 backdrop-blur-md border border-border rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Glow Orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border border-border text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl shadow-black/5">
              {item.icon}
            </div>
            <span className="relative z-10 text-lg font-bold text-foreground/80 break-all">{item.label}</span>
          </motion.a>
        ))}
      </div>

      {/* Footer-like section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-10"
      >
        <div className="flex gap-10 justify-center text-3xl text-muted">
          <a href="https://x.com/EbongValentineX" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform"><FaTwitter /></a>
          <a href="https://linkedin.com/in/ebong-valentine" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform"><FaLinkedin /></a>
          <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform"><FaGithub /></a>
        </div>
        
        <a
          href="EBONG_VALENTINE_CV.pdf"
          download
          className="inline-block bg-foreground text-background dark:bg-foreground dark:text-background px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
