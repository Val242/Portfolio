import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-indigo-600 text-2xl md:text-3xl" />,
      label: "akumengwene@gmail.com",
      link: "mailto:akumengwene@gmail.com",
    },
    {
      icon: <FaPhone className="text-indigo-600 text-2xl md:text-3xl" />,
      label: "+237 671 369 673",
      link: "tel:+237671369673",
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-600 text-2xl md:text-3xl" />,
      label: "Douala, Cameroon",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center px-6 lg:px-20 py-16 relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-300 rounded-full opacity-20 -top-20 -left-20"
        animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-300 rounded-full opacity-20 bottom-0 right-0"
        animate={{ x: [0, -150, 0], y: [0, -100, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center"
      >
        Get in <span className="text-indigo-600">Touch</span>
      </motion.h1>

      {/* Contact Info */}
      <div className="relative z-10 flex flex-col items-center space-y-6 text-gray-700 w-full max-w-lg">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link ? item.link : "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-4 w-full bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow text-gray-700"
          >
            {item.icon}
            <span className="text-lg md:text-xl font-medium">{item.label}</span>
          </motion.a>
        ))}

        {/* Social Icons + Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mt-6 gap-6"
        >
          {/* Social Icons */}
          <div className="flex gap-8 text-3xl md:text-4xl text-gray-600">
            <motion.a
              href="https://x.com/EbongValentineX?t=y-ncZQcYc3hqBUvEwlDcMA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#1DA1F2" }}
              className="cursor-pointer"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ebong-valentine-2b1157322"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#0077B5" }}
              className="cursor-pointer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Val242"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#000000" }}
              className="cursor-pointer"
            >
              <FaGithub />
            </motion.a>
          </div>

          {/* Download Resume Button */}
          <motion.a
            href="EBONG VALENTINE RESUME.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-500 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
