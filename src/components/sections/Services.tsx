import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/icons/Icon';

const services = [
  { 
    id: 'fpv-repair', 
    title: 'FPV Repair', 
    subtitle: 'Rapid diagnostics and rebuild for close-range units.', 
    image: '/images/services/fpv-repair.png' 
  },
  { 
    id: 'fixed-wing', 
    title: 'Fixed Wing Maintenance', 
    subtitle: 'Comprehensive checks and aerodynamic tuning.', 
    image: '/images/services/fixed-wing.png' 
  },
  { 
    id: 'edge-ai', 
    title: 'Edge AI Diagnostics', 
    subtitle: 'Software updates and hardware integrity checks.', 
    image: '/images/services/edge-ai.png' 
  },
  { 
    id: 'genuine-parts', 
    title: 'Genuine Parts', 
    subtitle: 'OEM certified replacements for all models.', 
    image: '/images/services/genuine-parts.png' 
  },
  { 
    id: 'pilot-training', 
    title: 'Pilot Training', 
    subtitle: 'Simulation and real-world flight certification.', 
    image: '/images/services/pilot-training.png' 
  },
];

export function Services() {
  return (
    <section className="w-full flex flex-col items-center px-4">
      <div className="flex flex-col items-center gap-[76px] w-full max-w-[1260px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-8 lg:gap-0">
          {/* Heading Container */}
          <div className="flex flex-col gap-[22px] max-w-[215px]">
            <p className="font-sans text-[16px] text-white/75 tracking-[-0.05em] flex items-center gap-1">
              <span className="text-[#F00511]">/</span> Services We Offer
            </p>
            <h2 className="font-heading font-bold text-[64px] leading-[86px] tracking-[-0.05em] text-white m-0">
              <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">Certified</span><br />
              Reliability
            </h2>
          </div>

          {/* Description Container */}
          <div className="flex flex-col justify-between w-full lg:max-w-[407px] h-full lg:h-[100px] gap-6 lg:gap-0">
            <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] leading-snug">
              From repairs and part replacements to pilot training, we keep every drone mission-ready. Choose uptime, choose EBAT.
            </p>
            
            {/* Links */}
            <div className="flex items-center gap-[29px]">
              <a href="#" className="flex items-center gap-[2px] group">
                <span className="font-sans text-[16px] tracking-[-0.02em] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors">View All Services</span>
                <Icon name="right-arrow-head" className="w-[18px] h-[18px] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors" />
              </a>
              <a href="#" className="flex items-center gap-[2px] group">
                <span className="font-sans text-[16px] tracking-[-0.02em] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors">Book a Service</span>
                <Icon name="right-arrow-head" className="w-[18px] h-[18px] text-[#F00511]/75 group-hover:text-[#F00511] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="flex flex-row flex-wrap justify-center xl:justify-between items-center gap-[24px] xl:gap-0 w-full">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="group relative w-[232px] h-[278px] rounded-[12px] overflow-hidden cursor-pointer bg-[#D9D9D9]"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Text Content */}
              <div className="absolute left-[22.5px] right-[22.5px] bottom-[25px] flex flex-col gap-[4px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-[32px] group-hover:translate-y-0">
                <h3 className="font-sans font-medium text-[24px] group-hover:text-[32px] group-hover:leading-[1.1] text-white group-hover:text-[#F00511] tracking-[-0.05em] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <button className="absolute right-[10px] bottom-[10px] w-[46px] h-[46px] rounded-full bg-white group-hover:bg-[#F00511] flex items-center justify-center transition-colors duration-300 shadow-lg z-10">
                <Icon name="top-right-arrow" className="w-[26.46px] h-[26.46px] text-black group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Decorative Line */}
        <div className="w-full flex justify-center mt-[-20px]">
          <div className="relative w-[685px] h-[3px]">
            <Image src="/images/services/services-line.svg" alt="line" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
