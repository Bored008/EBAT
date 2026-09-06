'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="w-full hidden md:flex justify-center px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "10000px 0px -120px 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full max-w-[1260px] bg-white rounded-[24px] border-[3px] border-black/25 relative overflow-hidden"
        style={{
          boxShadow: '0px 0.3px 1.9px 0px rgba(255, 255, 255, 0.05), 0px 1.7px 3.8px 0px rgba(255, 255, 255, 0.07), 0px 5.1px 7.5px 0px rgba(255, 255, 255, 0.09), 0px 14px 17.2px 0px rgba(255, 255, 255, 0.11), 0px 48px 56px 0px rgba(255, 255, 255, 0.16)',
          padding: '76.5px 24px'
        }}
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "10000px 0px -120px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.15,
              }
            }
          }}
          className="flex flex-col items-center gap-[28px] w-full max-w-[834px] mx-auto text-center"
        >
          {/* Heading */}
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-sans font-bold text-[40px] md:text-[56px] leading-tight md:leading-[56px] tracking-[-0.02em] text-black"
          >
            Ready for What&apos;s <span className="font-accent italic font-normal text-[#F00511]">next?</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-sans text-[16px] text-black/75 leading-[24px] tracking-[-0.02em]"
          >
            EBAT brings together precision drones, real-time edge AI, and end-to-end service - so your fleet never has to choose between capability and reliability. From close-range FPV missions to long-range security deployments, we&apos;re the one partner built to keep you flying, mission after mission.
          </motion.p>

          {/* Button */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
          >
            <Link href="?quote=true" className="inline-block">
              <Button variant="outline" className="border-t-0 border-x-[1px] border-b-[1px] border-[#F00511] text-[#F00511] px-[24px]">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

