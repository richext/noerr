'use client';

// Updated: Ensure image assets exist and keep copy concise
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useParallaxBackground, useStaggeredReveal } from '../hooks/useAnimationHook';

// Enhanced milestone data with more details about tech evolution
const milestones = [
  {
    year: '1927',
    title: 'The Foundation',
    description: 'The Noerr family establishes its first transportation business in Pittsburgh with a single truck.',
    icon: '/icons/milestone-foundation.svg',
    iconFallback: '🚚'
  },
  {
    year: '1950s',
    title: 'Regional Expansion',
    description: 'Growing fleet and terminal network connects the Eastern Seaboard to the Midwest.',
    icon: '/icons/milestone-expansion.svg',
    iconFallback: '🏢'
  },
  {
    year: '2000s',
    title: 'Digital Transformation',
    description: 'Adoption of first TMS platform and GPS-enabled fleet tracking transforms operations.',
    icon: '/icons/milestone-digital.svg',
    iconFallback: '💻'
  },
  {
    year: '2022',
    title: 'Tech Innovation',
    description: 'Launch of proprietary logistics platform with predictive analytics and API-first architecture.',
    icon: '/icons/milestone-innovation.svg',
    iconFallback: '🔧'
  }
];

// Core values that drive the company
const coreValues = [
  {
    title: 'Heritage & Innovation',
    description: 'Blending our rich family history with cutting-edge technology'
  },
  {
    title: 'Reliability & Precision',
    description: 'Consistently delivering on promises with data-driven accuracy'
  },
  {
    title: 'Transparency & Control',
    description: 'Providing complete visibility and actionable insights'
  },
  {
    title: 'Sustainability & Efficiency',
    description: 'Optimizing operations to reduce environmental impact'
  }
];

// Key differentiators in the modern logistics space
const differentiators = [
  {
    title: 'Tech-Enabled Services',
    description: 'We connect with all major technology providers to power every aspect of our operations',
    icon: '/icons/tech-platform.svg',
    iconFallback: '⚙️'
  },
  {
    title: 'Family-Owned, Enterprise Capabilities',
    description: 'Combining the personal touch of a family business with enterprise-grade solutions',
    icon: '/icons/family-enterprise.svg',
    iconFallback: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Brand-Focused Approach',
    description: 'Specifically designed to meet the unique needs of consumer brands',
    icon: '/icons/brand-focus.svg',
    iconFallback: '🔍'
  }
];

// Animation variants for staggered animations
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Use custom hooks for animations instead of repeating GSAP code
  useParallaxBackground(containerRef, '.bg-pattern', 20);
  useStaggeredReveal(containerRef, '.value-card', { threshold: '75%' });

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-heritage-900 to-heritage-950 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern with more subtle animation */}
      {/* Subtle background only to reduce visual noise */}
      <div className="absolute inset-0 opacity-5 bg-pattern" />
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Modern Header Section */}
        <div className="mb-20 md:mb-28 max-w-3xl mx-auto text-center">
          <motion.div 
            className="inline-block mb-6 px-4 py-1 bg-accent/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium text-sm">OUR STORY</span>
          </motion.div>
          
          <motion.h2 
            className="type-h2 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nearly a Century of Logistics Excellence
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From our humble beginnings in 1927 to our tech-enabled future today, the Noerr family 
            has continuously evolved to meet the changing needs of modern supply chains.
          </motion.p>
        </div>

        {/* Heritage & Innovation Section - Redesigned with modern layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="type-h3 text-white mb-6">
              Where Heritage Meets <span className="text-accent">Innovation</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              The Noerr family has been a cornerstone of American transportation for nearly a century,
              building a reputation for reliability and excellence that spans five generations.
            </p>
            
            <div className="space-y-4 text-gray-300 type-body">
              <p>
                While we honor our traditions, we're firmly focused on the future. Today's Noerr combines 
                time-tested logistics expertise with integrated technology partnerships to deliver solutions that modern 
                brands demand in a rapidly evolving marketplace.
              </p>
              <p>
                Our management team consists of 4th and 5th generation family members working alongside
                technology experts, engineers, and logistics specialists to provide an unmatched
                combination of personal service and technological innovation.
              </p>
            </div>
            
            <div className="pt-4">
              <motion.button
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white flex items-center space-x-2 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Our Leadership Team</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden">
              {/* Main image with stylized border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-heritage-700/20 rounded-2xl transform rotate-1 scale-[0.98]" />
              <div className="absolute inset-0 bg-gradient-to-bl from-heritage-800/20 to-accent/20 rounded-2xl transform -rotate-1 scale-[0.98]" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden p-1">
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-gradient-to-br from-heritage-800/70 to-heritage-900/70 p-8 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30" />
                  
                  <div className="relative z-10 text-center">
                    <div className="mb-6 flex justify-center">
                      <Image
                        src="/images/old_noerr_logo.png"
                        alt="Noerr Motor Freight Heritage Logo"
                        width={120}
                        height={120}
                        className="drop-shadow-xl"
                      />
                    </div>
                    
                    <div className="font-display text-white text-2xl mb-2">1927 - 2023</div>
                    <div className="text-gray-300">Nearly a century of evolution</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline removed per request */}
        
        {/* Core Values Section */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <h3 className="text-2xl md:text-3xl font-display text-white text-center mb-12">Our Core Values</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={fadeInUpVariant}
              >
                <div className="font-display text-white text-xl mb-3">{value.title}</div>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Differentiators Section */}
        <div className="rounded-2xl bg-gradient-to-r from-heritage-800/50 to-heritage-900/50 border border-white/5 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display text-white text-center mb-10">What Sets Us Apart</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent text-2xl">{diff.iconFallback}</span>
                </div>
                <h4 className="text-xl font-display text-white mb-3">{diff.title}</h4>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">{diff.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}


