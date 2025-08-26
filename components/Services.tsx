// Updated: Align services with specified 3PL categories; removed non-specified offerings; fixed background asset path
'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Only the approved 3PL services are displayed below
const services = [
  {
    title: 'Ecommerce Fulfillment',
    description: 'Fast, accurate direct-to-consumer fulfillment for modern brands across key verticals.',
    icon: '/icons/warehousing.svg',
    iconFallback: '📦',
    benefits: ['Apparel', 'Cosmetics', 'Electronics', 'Health & Wellness', 'Food & Beverage']
  },
  {
    title: 'B2B Distribution',
    description: 'Retail and wholesale order fulfillment with compliant routing, labeling, and scheduling.',
    icon: '/icons/supply-chain.svg',
    iconFallback: '🏷️',
    benefits: ['Retail compliance', 'EDI/ASN support', 'Palletization & labeling']
  },
  {
    title: 'Value-Added Services',
    description: 'Flexible projects that enhance your brand experience and unit economics.',
    icon: '/icons/data-analytics.svg',
    iconFallback: '🧰',
    benefits: ['Kitting & Assembly', 'Custom Packaging', 'Returns Management']
  },
  {
    title: 'Trucking & Transportation',
    description: 'Reliable domestic transportation with proactive communication and tracking.',
    icon: '/icons/fleet-management.svg',
    iconFallback: '🚚',
    benefits: ['LTL & FTL Shipping', 'Last Mile Delivery', 'Expedited options']
  },
  {
    title: 'Warehouse Management',
    description: 'Operations designed for accuracy, visibility, and control at scale.',
    icon: '/icons/warehousing.svg',
    iconFallback: '🏭',
    benefits: ['Inventory Control', 'Order Processing', 'Cycle counting & QA']
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={containerRef} id="services" className="py-20 md:py-32 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Background pattern fixed to existing asset */}
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent opacity-70 mr-4"></div>
            <span className="type-eyebrow">Core 3PL Services</span>
            <div className="h-px w-12 bg-accent opacity-70 ml-4"></div>
          </div>
          
          <h2 className="type-h2 text-white mb-6 text-center">
            Logistics That Scales With Your Brand
          </h2>
          
          <p className="type-body text-center max-w-2xl mx-auto">
            Purpose-built 3PL solutions for D2C and B2B with best-in-class execution.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group relative bg-secondary/10 backdrop-blur-sm border border-white/5 rounded-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-accent/20 via-secondary/5 to-transparent transition-opacity duration-700 -z-10"></div>
              
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent/10 text-accent">
                {service.icon ? (
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={32} 
                    height={32}
                    className="w-8 h-8"
                  />
                ) : (
                  <span className="text-2xl">{service.iconFallback}</span>
                )}
              </div>
              
              <h3 className="type-h3 text-white mb-3">{service.title}</h3>
              <p className="type-body mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="mr-2 text-accent">✓</span>
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/10 p-8 md:p-12 mb-8 border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl md:text-3xl font-display text-white">Ready to transform your supply chain?</h3>
              <p className="text-gray-300">
                Talk to our team about a right-sized solution across fulfillment, distribution, and transportation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md font-medium transition-all duration-300">Contact Us</a>
                <a href="#about" className="bg-transparent border border-white/30 hover:border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300">Learn More</a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-white italic mb-4 text-sm">
                  "Noerr helped us cut fulfillment costs and improve on-time delivery without sacrificing customer experience."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-full mr-3"></div>
                  <div>
                    <p className="text-white text-sm font-medium">Operations Lead, Growth Brand</p>
                    <p className="text-gray-400 text-xs">Consumer Goods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
