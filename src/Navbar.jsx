import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FaTwitter, FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from './ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-primary"
        >
          ENVA
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-foreground/80 font-semibold items-center">
          <NavLink to="/" className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>Contact</NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center border-l border-border pl-6 ml-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun className="text-yellow-400" />}
          </button>
          <div className="flex gap-4 text-foreground/60 text-lg">
            <a href="https://x.com/EbongValentineX" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-primary transition-colors" /></a>
            <a href="https://linkedin.com/in/ebong-valentine" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-primary transition-colors" /></a>
            <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-primary transition-colors" /></a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <div className="text-2xl text-foreground">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} className="cursor-pointer" />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} className="cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass rounded-3xl p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-primary">Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-primary">About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-primary">Services</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-primary">Contact</NavLink>
            
            <div className="flex gap-8 text-2xl pt-4 border-t border-border w-full justify-center">
              <a href="https://x.com/EbongValentineX" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-foreground/60" /></a>
              <a href="https://linkedin.com/in/ebong-valentine" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-foreground/60" /></a>
              <a href="https://github.com/Val242" target="_blank" rel="noopener noreferrer"><FaGithub className="text-foreground/60" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar