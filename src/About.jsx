import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import pp from "./assets/pic.jpg";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center px-6 lg:px-20 py-16">
      
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 text-center">
        About <span className="text-indigo-600">Me</span>
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={pp}
            alt="Profile"
            className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-xl border-4 border-indigo-500"
          />
        </div>

        {/* Text */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Hi, I’m <span className="font-semibold text-indigo-600">Valentine</span>, 
            a passionate <span className="font-semibold">Fullstack App & Web Developer</span> 
            based in Cameroon. I love turning ideas into real digital products and 
            bringing them to life with clean, efficient code.
          </p>
          <p>
            My journey into tech started with curiosity and has grown into a deep 
            passion for solving problems with software. I enjoy working across both 
            the frontend and backend, building smooth user experiences and scalable 
            systems.
          </p>
          <p>
            When I’m not coding, I’m exploring new technologies, contributing to 
            open-source, or brainstorming creative project ideas.
          </p>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-6 text-4xl text-indigo-600">
              <FaHtml5 title="HTML5" className="hover:text-orange-500 transition" />
              <FaCss3Alt title="CSS3" className="hover:text-blue-500 transition" />
              <FaJs title="JavaScript" className="hover:text-yellow-500 transition" />
              <FaReact title="React" className="hover:text-blue-400 transition" />
              <FaNodeJs title="Node.js" className="hover:text-green-600 transition" />
              <SiMongodb title="MongoDB" className="hover:text-green-500 transition" />
              <SiTailwindcss title="TailwindCSS" className="hover:text-cyan-400 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
