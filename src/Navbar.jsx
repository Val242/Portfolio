import React, { useState } from 'react';
import { NavLink, Link } from "react-router";
import { FaTwitter, FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl glass rounded-full px-6 py-2 flex items-center justify-between border border-white/10">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-primary"
          >
            ENVA
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.to}
              className={({ isActive }) => `text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="h-6 w-[1px] bg-border mx-2" />
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all border border-border"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/50 border border-border"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <div className="text-2xl text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass rounded-[2rem] p-10 flex flex-col items-center gap-8 md:hidden shadow-2xl border border-white/10"
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `text-2xl font-black uppercase tracking-widest transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`}
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex gap-8 text-2xl pt-8 border-t border-border w-full justify-center">
              <a href="https://x.com/EbongValentineX" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-foreground/40 hover:text-primary transition-colors" /></a>
              <a href="https://linkedin.com/in/ebong-valentine" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-foreground/40 hover:text-primary transition-colors" /></a>
              <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer"><FaGithub className="text-foreground/40 hover:text-primary transition-colors" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;