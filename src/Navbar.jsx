import React, { useState }  from 'react'
import { NavLink } from 'react-router';
import { FaTwitter, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
          <nav className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">ENVA</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
         <NavLink to = "/"><div className="hover:text-indigo-600 transition cursor-pointer">Home</div></NavLink> 
         <NavLink to = "/about"><div className="hover:text-indigo-600 transition cursor-pointer">About</div></NavLink> 
         <NavLink to = "/services"><div className="hover:text-indigo-600 transition cursor-pointer">Services</div></NavLink> 
         <NavLink to = "/contact"><div className="hover:text-indigo-600 transition cursor-pointer">Contact</div></NavLink> 
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex gap-4 text-gray-600 text-xl">
          <FaTwitter className="hover:text-blue-500 transition cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
          <FaGithub className="hover:text-black transition cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-gray-700">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur-md py-6 shadow-lg space-y-6 text-lg font-medium">
      <NavLink to = "/"><div className="hover:text-indigo-600 transition cursor-pointer">Home</div></NavLink> 
         <NavLink to = "/about"><div className="hover:text-indigo-600 transition cursor-pointer">About</div></NavLink> 
         <NavLink to = "/services"><div className="hover:text-indigo-600 transition cursor-pointer">Services</div></NavLink> 
         <NavLink to = "/contact"><div className="hover:text-indigo-600 transition cursor-pointer">Contact</div></NavLink> 
          <div className="flex gap-6 text-gray-600 text-2xl pt-4">
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
      )}
    </div>
  )
}

export default Navbar