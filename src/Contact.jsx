import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-indigo-600 text-xl" />,
      label: "akumengwene@gmail.com",
      link: "mailto:akumengwene@gmail.com",
    },
    {
      icon: <FaPhone className="text-indigo-600 text-xl" />,
      label: "+237 671 369 673",
      link: "tel:+237671369673",
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-600 text-xl" />,
      label: "Douala, Cameroon",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center px-6 lg:px-20 py-16">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center"
      >
        Get in <span className="text-indigo-600">Touch</span>
      </motion.h1>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-6 text-gray-700 w-full max-w-lg">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link ? item.link : "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-4 w-full bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow text-gray-700"
          >
            {item.icon}
            <span className="text-lg">{item.label}</span>
          </motion.a>
        ))}

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6 text-2xl mt-6 text-gray-600"
        >
          <a href="https://x.com/EbongValentineX?t=y-ncZQcYc3hqBUvEwlDcMA&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-500 transition cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ebong-valentine-2b1157322" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
          </a>
          <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black transition cursor-pointer" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
