"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-[100px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[519px] h-[526px] bg-white/50 rounded-full blur-[111.2px] -z-20 pointer-events-none" />

      {/* Hero Container */}
      <div className="flex flex-col items-center gap-[16px] w-full max-w-[834px] px-4 z-10 relative">
        
        {/* Drone Image & Background Text */}
        <div className="relative w-full h-[412px] flex flex-col items-center justify-end">
          
          {/* EBAT Text (Masked) */}
          <div className="absolute top-0 flex items-center justify-center -z-10 overflow-hidden select-none pointer-events-none w-[834px] h-[293.63px]"
               style={{ WebkitMaskImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 6%, rgba(255, 255, 255, 0) 100%)', maskImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 6%, rgba(255, 255, 255, 0) 100%)' }}>
            <span className="font-display text-[432.22px] leading-[293.63px] text-white/90">
              EBAT
            </span>
          </div>

          {/* Drone Image placeholder */}
          <motion.div 
            initial={{ y: 50, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[833px] h-[297px]"
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
        <motion.div 
          initial={{ y: 30, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-[18px] max-w-[813px] text-center"
        >
          <div className="flex flex-col gap-[12px] w-full">
            <h1 className="font-heading font-bold text-[73px] leading-tight text-white m-0">
              Built for the Unseen <span className="font-accent italic font-normal text-[#F00511]">Threat.</span>
            </h1>
            <p className="font-sans text-base text-white/75 -tracking-[0.02em] max-w-xl mx-auto">
              Edge AI drones that detect, track, and respond in real time — even off the grid.
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-row gap-[12px]">
            <Button variant="filled">
              Explore Solutions
            </Button>
            <Button variant="outline" rightIcon="talk-filled">
              Talk to an Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
