"use client";

import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/icons/Icon';
import { motion } from 'framer-motion';

const services = [
  { 
    id: 'fpv-repair', 
    title: 'FPV Repair',
    displayTitle: 'FPV Repair',
    subtitle: 'Rapid diagnostics and rebuild for close-range units.', 
    image: '/images/services/fpv-repair.png' 
  },
  { 
    id: 'fixed-wing', 
    title: 'Fixed Wing Maintenance',
    displayTitle: <>Fixed Wing<br />Maintenance</>,
    subtitle: 'Comprehensive checks and aerodynamic tuning.', 
    image: '/images/services/fixed-wing.png' 
  },
  { 
    id: 'edge-ai', 
    title: 'Edge AI Diagnostics',
    displayTitle: <>Edge AI<br />Diagnostics</>,
    subtitle: 'Software updates and hardware integrity checks.', 
    image: '/images/services/edge-ai.png' 
  },
  { 
    id: 'genuine-parts', 
    title: 'Genuine Parts',
    displayTitle: <>Genuine<br />Parts</>,
    subtitle: 'OEM certified replacements for all models.', 
    image: '/images/services/genuine-parts.png' 
  },
  { 
    id: 'pilot-training', 
    title: 'Pilot Training',
    displayTitle: 'Pilot Training',
    subtitle: 'Simulation and real-world flight certification.', 
    image: '/images/services/pilot-training.png' 
  },
];

export function Services() {
  return (
    <section className="w-full flex flex-col items-center px-6 overflow-hidden">
      <div className="flex flex-col items-center gap-[40px] md:gap-[76px] w-full max-w-[1260px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-8 lg:gap-0">
          {/* Heading Container */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "10000px 0px -250px 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-[22px] w-full md:max-w-[215px]"
          >
            <p className="font-sans text-[16px] text-white/75 tracking-[-0.05em] flex items-center gap-1">
              <span className="text-[#F00511]">/</span> Services We Offer
            </p>
            <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-tight md:leading-[86px] tracking-[-0.05em] text-white m-0">
              <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">Certified</span><br />
              Reliability
            </h2>
          </motion.div>

          {/* Description Container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "10000px 0px -250px 0px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
              hidden: {}
            }}
            className="flex flex-col justify-between w-full lg:max-w-[407px] h-full lg:h-[100px] gap-6 lg:gap-0"
          >
            <motion.p 
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="font-sans text-[16px] text-white/75 tracking-[-0.02em] leading-snug"
            >
              From repairs and part replacements to pilot training, we keep every drone mission-ready. Choose uptime, choose EBAT.
            </motion.p>
            
            {/* Links */}
            <motion.div 
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="flex items-center gap-[29px]"
            >
              <a href="#" className="flex items-center gap-[2px] group">
                <span className="font-sans text-[16px] tracking-[-0.02em] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors">View All Services</span>
                <Icon name="right-arrow-head" className="w-[18px] h-[18px] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors" />
              </a>
              <a href="#" className="flex items-center gap-[2px] group">
                <span className="font-sans text-[16px] tracking-[-0.02em] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors">Book a Service</span>
                <Icon name="right-arrow-head" className="w-[18px] h-[18px] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "10000px 0px -250px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
          }}
          className="flex flex-col md:flex-row md:flex-wrap justify-center xl:justify-between items-center gap-[24px] xl:gap-0 w-full"
        >
          {services.map((service, idx) => {
            const isFirst = idx === 0;
            // Zigzag on mobile: intersect 50% of card width by translating 25% from center
            const mobileAlign = idx % 2 === 0 ? 'self-center -translate-x-[25%] md:translate-x-0' : 'self-center translate-x-[25%] md:translate-x-0';

            return (
              <motion.div 
                key={service.id}
                variants={{
                  hidden: { x: "100vw", opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`group relative w-[232px] h-[278px] cursor-pointer ${mobileAlign} md:self-auto`}
              >
                {/* Clipped Background Layer */}
                <div 
                  className="absolute inset-0 bg-[#D9D9D9] overflow-hidden transition-colors duration-500"
                  style={{
                    clipPath: 'path("M0 12C0 5.37258 5.37258 0 12 0H220C226.627 0 232 5.37258 232 12V194.79C232 205.952 222.881 215 211.72 215C188.03 215 168.676 234.204 168.676 257.894C168.676 268.998 159.674 278 148.57 278H12C5.37259 278 0 272.627 0 266V12Z")'
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-500 ${isFirst ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-100 group-hover:scale-105'}`}
                  />
                  
                  {/* Overlay Gradient (Only shows when image is visible) */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isFirst ? 'opacity-80' : 'opacity-0 group-hover:opacity-80'}`} />
                </div>

                {/* Text Content */}
                <div className="absolute left-[22.5px] right-[22.5px] bottom-[25px] flex flex-col gap-[4px] z-10 pointer-events-none">
                  <h3 className={`font-sans font-medium tracking-[-0.05em] transition-all duration-300 ${isFirst ? 'text-[32px] leading-[1.1] text-[#F00511]' : 'text-[24px] text-white group-hover:text-[32px] group-hover:leading-[1.1] group-hover:text-[#F00511]'}`}>
                    {service.displayTitle}
                  </h3>
                  <div className={`grid transition-all duration-300 ${isFirst ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'}`}>
                    <p className="overflow-hidden font-sans text-[16px] text-white/75 tracking-[-0.02em] leading-snug">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <button className={`absolute right-[0px] bottom-[2px] w-[46px] h-[46px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg z-10 ${isFirst ? 'bg-[#F00511]' : 'bg-white group-hover:bg-[#F00511]'}`}>
                  <Icon name="top-right-arrow" className={`w-[26.46px] h-[26.46px] transition-colors duration-300 ${isFirst ? 'text-white' : 'text-black group-hover:text-white'}`} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Decorative Line */}
        <div className="w-full hidden md:flex justify-center mt-[-20px]">
          <div className="relative w-[685px] h-[3px]">
            <Image src="/images/services/services-line.svg" alt="line" fill sizes="685px" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
