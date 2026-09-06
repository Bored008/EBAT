'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function ServicesHeader() {
  return (
    <div className="flex flex-col items-center gap-[8px] w-full overflow-hidden">
      <div className="flex flex-col items-center gap-[28px] w-full">
        <motion.p 
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-left font-sans text-[16px] font-normal text-white/75 tracking-[-0.05em]"
        >
          <span className="text-[#F00511]">/</span> Services
        </motion.p>

        <motion.h1 
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-heading font-bold text-[48px] md:text-[64px] leading-tight md:leading-[86px] tracking-[-0.05em] text-white text-center"
        >
          Support That Keeps You{' '}
          <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
            Flying
          </span>
        </motion.h1>
      </div>

      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="font-sans text-[16px] font-normal text-white/75 tracking-[-0.02em] text-center max-w-[620px]"
      >
        From repairs and part replacements to pilot training, we keep every fleet mission-ready.
      </motion.p>
    </div>
  );
}
