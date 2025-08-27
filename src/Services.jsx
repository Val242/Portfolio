import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPaintBrush } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
      title: "Web Development",
      description: "Building responsive, modern, and user-friendly websites using React, Tailwind CSS, and Node.js."
    },
    {
      icon: <FaMobileAlt className="text-indigo-600 text-4xl mb-4" />,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile apps using React Native that run smoothly on iOS and Android."
    },
    {
      icon: <FaServer className="text-indigo-600 text-4xl mb-4" />,
      title: "Backend & API Development",
      description: "Designing scalable server-side solutions, RESTful APIs, and integrating databases with Node.js & Convex."
    },
    {
      icon: <FaPaintBrush className="text-indigo-600 text-4xl mb-4" />,
      title: "UI/UX Design",
      description: "Crafting clean and modern user interfaces with great user experience in mind."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex flex-col items-center px-6 lg:px-20 py-16">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-12 text-center">
        My <span className="text-indigo-600">Services</span>
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
