'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function MasonryGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-[20px] w-full overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col gap-[20px] w-full md:w-[407px] h-full">
        {/* FPV Repair */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1"
        >
          <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <Image src="/images/services/icons/wrench.svg" alt="Repair" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">FPV Repair</h3>
            <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Rapid diagnostics and rebuild for close-range units.</p>
          </div>
        </motion.div>

        {/* Fixed Wing Maintenance */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-[34px] bg-[#1D1D1F] p-[24px_27px] flex-1"
        >
          <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <Image src="/images/services/icons/plane.svg" alt="Maintenance" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Fixed Wing Maintenance</h3>
            <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Structural checks and airframe servicing.</p>
          </div>
        </motion.div>

        {/* Image 54 */}
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full h-[328px] bg-[#1D1D1F] overflow-hidden shrink-0"
        >
          <Image 
            src="/images/services/image_54-73f691.png"
            alt="Maintenance Details"
            fill
            sizes="(max-width: 768px) 100vw, 407px"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Middle Column */}
      <motion.div 
        initial={{ y: 40, scale: 0.96, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        viewport={{ margin: "10000px 0px -80px 0px" }}
        transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
        className="w-full md:flex-1 h-[400px] md:h-[782px]"
      >
        <div className="relative w-full h-full min-h-[400px] md:min-h-[782px] overflow-hidden">
          <Image 
            src="/images/services/image_45.png"
            alt="Engineer working on drone"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Right Column */}
      <div className="flex flex-col gap-[20px] w-full md:w-[407px] h-full">
        {/* Image 61 */}
        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative w-full h-[356px] bg-[#1D1D1F] overflow-hidden shrink-0"
        >
          <Image 
            src="/images/services/image_61.png"
            alt="Drone parts"
            fill
            sizes="(max-width: 768px) 100vw, 407px"
            className="object-cover"
          />
        </motion.div>

        {/* Genuine Parts */}
        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1"
        >
          <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <Image src="/images/services/icons/certificate.svg" alt="Genuine Parts" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Genuine Parts</h3>
            <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">OEM-grade components, always in stock.</p>
          </div>
        </motion.div>

        {/* Pilot Training */}
        <motion.div 
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -80px 0px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1"
        >
          <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
            <Image src="/images/services/icons/certificate.svg" alt="Pilot Training" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Pilot Training</h3>
            <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Certification for pilots and technicians.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
