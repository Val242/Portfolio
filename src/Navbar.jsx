import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

import myLogo from "./assets/my_logo.png";
import myLogoDark from "./assets/my_logo_dark.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink("#" + sectionId);
        }
      });

      if (scrollY < 100) setActiveLink("#home");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Projects", to: "#projects" },
    { name: "Contact", to: "#contact" },
  ];

  // Light mode → dark logo
  // Dark mode → light logo
  const currentLogo = theme === "light" ? myLogo : myLogoDark;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl glass rounded-full px-6 py-2 flex items-center justify-between border border-white/10">
        {/* Logo */}
        <a href="#home" aria-label="Go to homepage">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-10 h-10 rounded-full overflow-hidden border border-border"
          >
            <img
              src={currentLogo}
              alt="Ebong Valentine"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              onClick={() => setActiveLink(link.to)}
              className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${
                activeLink === link.to
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="h-6 w-[1px] bg-border mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all border border-border"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/50 border border-border"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Menu Toggle */}
          <button
            className="text-2xl text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
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
              <a
                key={link.name}
                href={link.to}
                onClick={() => {
                  setActiveLink(link.to);
                  setMenuOpen(false);
                }}
                className={`text-2xl font-black uppercase tracking-widest transition-colors ${
                  activeLink === link.to
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex gap-8 text-2xl pt-8 border-t border-border w-full justify-center">
              <a
                href="https://x.com/EbongValentineX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                <FaTwitter className="text-foreground/40 hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/ebong-valentine-2b1157322"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-foreground/40 hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/Val242"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-foreground/40 hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
