'use client';

// Updated: Removed external partner logos and ensured assets exist; kept tech narrative
import React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useParallaxBackground, useStaggeredReveal } from '../hooks/useAnimationHook';

// Updated copy: reflect integrations with major providers (no proprietary platform claims)
const coreFeatures = [
  {
    title: 'Data & Analytics',
    description: 'Operational reporting and analytics across shipments, inventory, and service metrics.',
    icon: '/icons/data-analytics.svg',
    iconFallback: '📊',
    stats: 'BI dashboards'
  },
  {
    title: 'Visibility',
    description: 'Real-time shipment tracking using provider tools and optional IoT where available.',
    icon: '/icons/iot-network.svg',
    iconFallback: '📡',
    stats: 'Live tracking'
  },
  {
    title: 'EDI & API Connectivity',
    description: 'Standard EDI documents and REST APIs to connect ERPs, e‑commerce, marketplaces, and TMS/WMS.',
    icon: '/icons/api-connection.svg',
    iconFallback: '🔄',
    stats: 'EDI / REST'
  },
  {
    title: 'Control Center',
    description: 'Exception monitoring and communication across carriers, facilities, and partners.',
    icon: '/icons/control-tower.svg',
    iconFallback: '🔍',
    stats: 'Exception management'
  }
];

// Key tech components that differentiate the platform
const techComponents = [
  {
    title: 'Web & Mobile Apps',
    description: 'User-friendly interfaces for both desktop and mobile provide real-time access to shipment information, reporting, and key metrics.',
    delay: 0.1
  },
  {
    title: 'Real-Time Dashboards',
    description: 'Customizable business intelligence dashboards with actionable insights tailored to specific brand needs.',
    delay: 0.2
  },
  {
    title: 'Automated Billing',
    description: 'Streamlined invoicing with digital documentation and automated reconciliation to reduce accounting overhead.',
    delay: 0.3
  }
];

// Removed partner logos to avoid missing asset references
const techPartners: {logo?: string, name: string}[] = [];

// Animation variants for staggered animations
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
};

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  
  // Use custom hooks for animations instead of duplicating GSAP code
  useParallaxBackground(sectionRef, '.tech-pattern', 15);
  useStaggeredReveal(sectionRef, '.tech-component', { threshold: '80%' });
  
  return (
    <section
      ref={sectionRef}
      id="technology"
      className="py-24 md:py-32 bg-gradient-to-b from-secondary to-secondary-dark relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="tech-pattern absolute inset-0 opacity-5 transform-gpu" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Technology intro with enhanced messaging */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.div 
            className="inline-block mb-6 px-4 py-1 bg-accent/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium text-sm">PROPRIETARY TECHNOLOGY</span>
          </motion.div>
          
          <motion.h2 
            className="type-h2 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Integrated Technology for Modern Logistics
          </motion.h2>
          
          <motion.p 
            className="type-subhead mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We connect with major technology providers—ERPs, WMS, TMS, e‑commerce and marketplace 
            platforms—to deliver visibility and seamless operations without forcing a new system.
          </motion.p>
        </div>
        
        {/* Core tech features - redesigned with modern UI */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="feature-card relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden group"
            >
              {/* Animated accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150"></div>
              
              {/* Feature icon */}
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 relative z-10">
                  {feature.icon ? (
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={24} 
                      height={24}
                      className="w-6 h-6 text-accent"
                    />
                  ) : (
                    <span className="text-xl text-accent">{feature.iconFallback}</span>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-display text-white mb-2 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4 relative z-10">{feature.description}</p>
              
              {/* Feature stat */}
              <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
                <p className="text-accent font-medium">{feature.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Connected systems visualization */}
        <div className="mb-24 rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary-dark/20"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-display text-white mb-4">Connected Systems</h3>
              <p className="text-gray-300">
                We integrate with the systems you already use through standard EDI and REST APIs. 
                Common connections include leading ERPs, e‑commerce platforms, marketplaces, TMS/WMS, 
                and visibility providers.
              </p>
              
              <ul className="space-y-3">
                {techComponents.map((component, index) => (
                  <motion.li 
                    key={component.title}
                    className="tech-component flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: component.delay }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-accent text-xs">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{component.title}</h4>
                      <p className="text-gray-400 text-sm">{component.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Placeholder visual */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-secondary-dark to-accent/20 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-white font-medium mb-2">Discuss Integrations</p>
                  <a href="#contact" className="inline-block mt-4 px-4 py-2 bg-accent text-white text-sm rounded-md">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Removed partner logos section (prevent missing file references) */}
        
        {/* Enhanced CTA */}
        <div className="text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all duration-300 group">
              <span>Talk to Us About Integrations</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
