'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certificationSteps = [
  {
    id: 1,
    number: "01",
    title: "Enrollment & Assessment",
    description: "Register for the program and complete a baseline skills assessment to determine your starting point.",
    image: "/images/services/image_66-151826.png"
  },
  {
    id: 2,
    number: "02",
    title: "Ground Training",
    description: "Learn drone systems, flight regulations, safety protocols, and mission planning fundamentals before ever taking the controls.",
    image: "/images/services/image_66-151826.png" // Using the same image for demonstration as no other specific images were provided
  },
  {
    id: 3,
    number: "03",
    title: "Flight Simulation",
    description: "Supervised, hands-on flight practice across FPV and fixed wing units, guided by certified instructors.",
    image: "/images/services/image_66-151826.png"
  },
  {
    id: 4,
    number: "04",
    title: "Certification & Deployment",
    titleBreaks: (
      <>
        Certification &<br />Deployment
      </>
    ),
    description: "Pass your final assessment, receive EBAT certification, and get cleared for real-world mission deployment.",
    image: "/images/services/image_66-151826.png"
  }
];

export function CertificationSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="flex flex-col gap-[36px] w-full">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
          From First <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">Flight</span>,<br />
          to Full <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">Certification</span>
        </h2>
        <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] font-medium">
          A structured path to mission-ready pilot certification.
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        {certificationSteps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <div 
              key={step.id} 
              className="relative w-full min-h-[234px] cursor-pointer"
              onMouseEnter={() => setActiveStep(step.id)}
            >
              {/* Inactive State (Initial State) */}
              <motion.div 
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] gap-6"
                initial={false}
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ pointerEvents: isActive ? 'none' : 'auto' }}
              >
                <div className="flex items-center gap-[53px] flex-1">
                  <span className="font-heading font-bold text-[36px] text-white tracking-[-0.05em]">{step.number}</span>
                  <h3 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                    {step.titleBreaks || step.title}
                  </h3>
                </div>
                <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                  {step.description}
                </p>
              </motion.div>

              {/* Active State (Final State) */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
              >
                {/* Red Background appearing from behind (scale up) */}
                <motion.div 
                  className="absolute inset-0 bg-[#F00511]"
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-[16px_40px] h-full gap-6">
                  {/* Image appearing from -x (left) */}
                  <motion.div 
                    className="relative w-[255px] h-[188px] overflow-hidden shrink-0"
                    initial={false}
                    animate={{ 
                      x: isActive ? 0 : -60,
                      opacity: isActive ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: isActive ? 0.05 : 0 }}
                  >
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </motion.div>

                  {/* Title moving from right (+x) */}
                  <motion.h3 
                    className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em] flex-1 max-w-[311px]"
                    initial={false}
                    animate={{ 
                      x: isActive ? 0 : 40,
                      opacity: isActive ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: isActive ? 0.1 : 0 }}
                  >
                    {step.titleBreaks || step.title}
                  </motion.h3>

                  {/* Description moving from right (+x) */}
                  <motion.p 
                    className="font-sans text-[16px] text-white/90 tracking-[-0.02em] md:w-[297px]"
                    initial={false}
                    animate={{ 
                      x: isActive ? 0 : 40,
                      opacity: isActive ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: isActive ? 0.15 : 0 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
