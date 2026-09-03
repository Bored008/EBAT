"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-[20px] md:pt-[32px]">
      {/* Background Glow */}
      <div className="absolute top-[-327px] left-1/2 -translate-x-1/2 w-[519px] h-[526px] bg-[rgba(255,255,255,0.52)] rounded-full blur-[111.2px] -z-20 pointer-events-none" />

      {/* Hero Container */}
      <div className="flex flex-col items-center gap-[16px] md:gap-[24px] w-full max-w-[1000px] px-6 z-10 relative pb-[60px]">
        
        {/* Drone Image & Background Text */}
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[412px] flex flex-col items-center justify-end">
          
          {/* EBAT Text (Masked) */}
          <div className="absolute top-0 flex items-center justify-center -z-10 overflow-hidden select-none pointer-events-none w-full h-[200px] sm:h-[220px] md:h-[293.63px]"
               style={{ WebkitMaskImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 6%, rgba(255, 255, 255, 0) 100%)', maskImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 6%, rgba(255, 255, 255, 0) 100%)' }}>
            <div className="font-display text-[210px] sm:text-[280px] md:text-[432.22px] leading-[180px] sm:leading-[220px] md:leading-[293.63px] text-white/90 flex">
              {['E', 'B', 'A', 'T'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + (i * 0.15), 
                    ease: "easeOut" 
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Drone Image placeholder */}
          <motion.div 
            initial={{ scale: 0, opacity: 0, y: 0, x: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -12, 0, 12, 0],
              x: [0, 8, 0, -8, 0]
            }}
            transition={{ 
              scale: { duration: 1.2, ease: "easeOut" },
              opacity: { duration: 1.2, ease: "easeOut" },
              y: { delay: 1.2, duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { delay: 1.2, duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full max-w-[833px] h-[160px] sm:h-[220px] md:h-[297px]"
          >
            <Image 
              src="/images/products/hero-drone-62b94a.png" 
              alt="EBAT Fixed Wing UAV" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Hero Description Container */}
        <div className="flex flex-col items-center gap-[18px] w-full text-center mt-4 md:mt-0">
          <div className="flex flex-col items-center gap-[12px] w-full">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="font-heading font-bold text-[52px] leading-[1.05] sm:text-[56px] sm:leading-[1.1] md:text-[73.33px] md:leading-[1] text-white m-0 w-full inline-block whitespace-normal lg:whitespace-nowrap"
            >
              Built for the Unseen <span className="font-accent italic font-normal text-[#F00511]">Threat.</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              className="font-sans text-[14px] sm:text-[16px] text-white/75 -tracking-[0.02em] w-full max-w-[400px] md:max-w-none"
            >
              Edge AI drones that detect, track, and respond in real time - even off the grid.
            </motion.p>
          </div>

          {/* Buttons Container */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-[12px] w-full sm:w-auto mt-4 md:mt-0 px-6 sm:px-0"
          >
            <div className="w-full sm:w-auto flex justify-center">
              <Button variant="filled" className="w-full sm:w-auto">
                Explore Solutions
              </Button>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
              <Button variant="outline" rightIcon="talk-filled" className="w-full sm:w-auto">
                Talk 
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
