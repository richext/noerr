// Updated: Simplified hero for readability, refined CTAs (Get a Quote / Call Dispatch), reduced decorative effects
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Technology from '../components/Technology';
import About from '../components/About';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle hero text reveal only (remove heavy effects)
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15
      });

      // Video parallax effect
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: '20%',
          ease: 'none'
        });
      }
      
      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, heroRef);

    // Stats counter animation
    const statsCtx = gsap.context(() => {
      const counters = document.querySelectorAll('.stats-counter');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        let count = 0;
        
        const updateCount = () => {
          const increment = target / 50;
          if (count < target) {
            count += increment;
            counter.textContent = Math.ceil(count).toString();
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target.toString();
          }
        };
        
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          onEnter: updateCount,
          once: true
        });
      });
    }, statsRef);

    return () => {
      ctx.revert();
      statsCtx.revert();
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      <div ref={heroRef} className="hero-section min-h-[100svh] relative overflow-hidden bg-primary">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Gradient overlay for readability - darker on mobile for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90 sm:from-primary/60 sm:via-primary/50 sm:to-primary/80 z-10" />
          
          {/* Video */}
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-105"
          >
            <source src="/videos/1693757_Semi_Semitrailer_3840x2160.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-[100svh] flex flex-col justify-center items-center px-4 pt-16 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="hero-text type-h1 text-white mb-6 md:mb-8 px-4">
              Trusted 3PL for Transportation, Warehousing, and Distribution
            </h1>
            {/* Build verification: ${new Date().toISOString()} */}
            <p className="hero-text type-subhead mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Nearly a century of family-owned trucking heritage delivering reliable regional service across Pennsylvania and the Northeast.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 w-full max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#contact" className="btn-primary transform hover:scale-105 flex items-center justify-center gap-2 group w-full sm:w-auto">
                <span>Get a Quote</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="tel:+17172420566" className="btn-outline transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>Call Dispatch</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="#services" className="hidden" aria-hidden="true">Our Services</a>
            </motion.div>
            {/* Feature badges removed for a cleaner, more professional hero */}
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="scroll-indicator absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2 }}
          >
            <span className="text-white/70 text-xs sm:text-sm mb-2">Scroll to explore</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>

      <About />
      <Services />
      <Technology />
      <Contact />
    </main>
  );
}
