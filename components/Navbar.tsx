'use client';

// Updated: CTA anchors to contact; no functional changes otherwise
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-white hover:text-accent transition-colors">Services</a>
            <a href="#technology" className="text-white hover:text-accent transition-colors">Technology</a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">Contact</a>
            <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.a 
                  href="#about" 
                  className="block text-white hover:text-accent transition-colors py-2"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#services" 
                  className="block text-white hover:text-accent transition-colors py-2"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </motion.a>
                <motion.a 
                  href="#technology" 
                  className="block text-white hover:text-accent transition-colors py-2"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="block text-white hover:text-accent transition-colors py-2"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </motion.a>
                <motion.a 
                  href="#contact"
                  className="w-full inline-block text-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
