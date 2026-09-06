'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function ProductsHeader() {
  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between w-full gap-[32px] overflow-hidden">
      <motion.div 
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-[16px] max-w-[806px]"
      >
        <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
          <span className="text-[#F00511]">/</span> Products
        </span>

        <div className="flex flex-col gap-[8px]">
          <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.15] tracking-[-0.05em] text-white">
            Drones Engineered for{' '}
            <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">
              Every Mission
            </span>
          </h1>
          <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[650px]">
            From close-range precision to long-range defense - explore the EBAT fleet, built on real-time edge AI.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="shrink-0 pb-1"
      >
        <Link href="?quote=true">
          <Button variant="filled" rightIcon="top-right-arrow">
            Request a Quote
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
