'use client';

// Updated: Simplified to phone/email contact only - no forms to avoid Netlify runtime conflicts
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const inquiryTypes = [
  { id: 'ecommerce', label: 'Ecommerce Fulfillment', icon: '/icons/warehousing.svg', description: 'D2C pick/pack across key verticals' },
  { id: 'b2b', label: 'B2B Distribution', icon: '/icons/supply-chain.svg', description: 'Retail/wholesale routing and compliance' },
  { id: 'vas', label: 'Value-Added Services', icon: '/icons/data-analytics.svg', description: 'Kitting, custom packaging, returns' },
  { id: 'transportation', label: 'Trucking & Transportation', icon: '/icons/fleet-management.svg', description: 'LTL, FTL, last mile' },
  { id: 'wms', label: 'Warehouse Management', icon: '/icons/warehousing.svg', description: 'Inventory control, order processing' },
];

// Office locations for the Contact component
const locations = [
  {
    city: 'Lewistown',
    state: 'PA',
    address: 'Norlin Warehousing & Noerr Trucking',
    phone: '+1 (717) 242-0566',
    email: ''
  }
];

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>('');
  const [formStep, setFormStep] = useState(1);

  const handleInquirySelect = (id: string) => {
    setSelectedInquiry(id);
    setFormStep(2);
  };

  const resetForm = () => {
    setSelectedInquiry('');
    setFormStep(1);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-secondary-dark relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="mb-16 md:mb-20 max-w-3xl mx-auto text-center">
          <motion.div 
            className="inline-block mb-6 px-4 py-1 bg-accent/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium text-sm">LET'S CONNECT</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-display text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Transform Your Supply Chain
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team of logistics experts and technology specialists are ready to help 
            you build a more resilient, efficient supply chain that drives growth for your brand.
          </motion.p>
        </div>

        {/* Multi-step contact form with better UX */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 mb-16">
          <div className="space-y-8">
            {/* Step 1: Select inquiry type */}
            {formStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-display text-white mb-6">How can we help you?</h3>
                <p className="text-gray-300 mb-8">Select the service you're interested in:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {inquiryTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      className={`p-6 rounded-xl cursor-pointer border transition-all duration-300 ${selectedInquiry === type.id 
                        ? 'border-accent bg-accent/10' 
                        : 'border-white/10 hover:border-white/30 bg-white/5'}`}
                      onClick={() => handleInquirySelect(type.id)}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Image 
                            src={type.icon} 
                            alt={type.label} 
                            width={20} 
                            height={20}
                            className="text-accent"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-lg mb-1">{type.label}</h4>
                          <p className="text-gray-400 text-sm">{type.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Contact info with direct actions */}
            {formStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-display text-white">Get in Touch</h3>
                  <button 
                    type="button" 
                    onClick={() => setFormStep(1)}
                    className="text-accent hover:text-accent/80 text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    You're interested in: <span className="text-accent font-medium">{inquiryTypes.find(t => t.id === selectedInquiry)?.label}</span>
                  </p>
                  
                  <div className="bg-white/5 rounded-xl p-6 space-y-4">
                    <h4 className="text-white font-medium text-lg">Call us directly</h4>
                    <a 
                      href="tel:+17172420566"
                      className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors text-xl font-medium"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      (717) 242-0566
                    </a>
                    <p className="text-gray-400 text-sm">Available Monday-Friday, 8 AM - 5 PM EST</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 space-y-4">
                    <h4 className="text-white font-medium text-lg">Or email us</h4>
                    <a 
                      href={`mailto:contact@noerr-inc.com?subject=${encodeURIComponent(`Inquiry: ${inquiryTypes.find(t => t.id === selectedInquiry)?.label}`)}`}
                      className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      contact@noerr-inc.com
                    </a>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Locations grid and additional contact options */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main office locations */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            <h3 className="text-2xl font-display text-white mb-4 md:col-span-2">Our Locations</h3>
            
            {locations.map((location) => (
              <motion.div 
                key={location.city}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-xl font-display text-white mb-2">{location.city}, {location.state}</h4>
                <p className="text-gray-400 text-sm mb-4">{location.address}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a href="tel:+17172420566" className="text-gray-300 text-sm hover:text-white">{location.phone}</a>
                  </div>
                  {location.email ? (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-300 text-sm">{location.email}</span>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Quick contact options */}
          <div>
            <h3 className="text-2xl font-display text-white mb-4">Quick Connect</h3>
            
            <div className="space-y-4">
              <motion.a 
                href="tel:+17172420566"
                className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Dispatch</div>
                  <div className="text-white">+1 (717) 242-0566</div>
                </div>
              </motion.a>
              {/* Removed email/scheduler to keep direct phone-first contact */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}