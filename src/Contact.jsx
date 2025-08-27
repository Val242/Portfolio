import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
        Get in <span className="text-indigo-600">Touch</span>
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-6 text-gray-700">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-indigo-600 text-xl" />
          <span>akumengwene@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaPhone className="text-indigo-600 text-xl" />
          <span>+237 671 369 673</span>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-indigo-600 text-xl" />
          <span>Douala, Cameroon</span>
        </div>

        {/* Social Icons */}
       <div className="flex gap-6 text-2xl mt-6 text-gray-600">
         <a href="https://x.com/EbongValentineX?t=y-ncZQcYc3hqBUvEwlDcMA&s=09" target="_blank" rel="noopener noreferrer">
           <FaTwitter className="hover:text-blue-500 transition cursor-pointer" />
         </a>
         <a href="https://www.linkedin.com/in/ebong-valentine-2b1157322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
           <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
         </a>
         <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer">
           <FaGithub className="hover:text-black transition cursor-pointer" />
         </a>
       </div>
      </div>
    </div>
  );
}

export default Contact;
