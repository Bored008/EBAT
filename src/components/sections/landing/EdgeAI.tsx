"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function EdgeAI() {
  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 flex flex-col gap-[36px]">
      {/* Header Info Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ margin: "10000px 0px -250px 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-2 max-w-[816px]"
      >
        <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-tight tracking-[-0.05em] text-white">
          What is <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">Edge AI</span>
        </h2>
        <p className="font-sans text-[16px] md:text-[18px] text-white/75 leading-relaxed tracking-[-0.02em]">
          Our Edge AI devices process data directly on the drone, enabling real-time detection, faster decisions, and reliable performance even in remote or communication-denied environments.
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[340px] gap-4 w-full h-auto lg:h-[695px] relative">
        {/* Glow effect matching Figma boxShadow */}
        <div className="absolute inset-0 z-0 pointer-events-none rounded-[12px] shadow-[14px_11px_39px_0px_rgba(255,255,255,0.05),56px_43px_70px_0px_rgba(255,255,255,0.04),125px_97px_95px_0px_rgba(255,255,255,0.03),223px_172px_113px_0px_rgba(255,255,255,0.01),348px_269px_123px_0px_rgba(255,255,255,0)]" />

        {/* Card 1: Intelligence at the Edge (spans 2 cols) */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -250px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-[12px] border-[0.5px] border-white/50 lg:col-span-2 lg:row-span-1 z-10 flex flex-col justify-end p-[27px]"
        >
          <Image
            src="/images/edge-ai/edge-ai-1.png"
            alt="Intelligence at the Edge"
            fill
            className="object-cover -z-10 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent -z-10" />
          <h3 className="font-sans font-semibold leading-[1.1] tracking-[-0.05em] mb-2">
            <span className="text-[#F00511] text-[40px] md:text-[48px]">Intelligence</span><br />
            <span className="text-white text-[32px] md:text-[40px]">at the Edge</span>
          </h3>
          <p className="font-sans text-[14px] md:text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em] max-w-[777px]">
            AI-powered processing happens directly on the device, eliminating cloud dependency and delivering instant insights where every second matters. From object recognition to threat detection, critical decisions are made in real time, even in the most demanding environments.
          </p>
        </motion.div>

        {/* Card 2: Secure On-Device Processing (spans 1 col, 2 rows) */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -250px 0px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-[12px] border-[0.5px] border-white/50 lg:col-span-1 lg:row-span-2 z-10 flex flex-col justify-end p-[27px]"
        >
          <Image
            src="/images/edge-ai/edge-ai-4-2de794.png"
            alt="Secure On-Device Processing"
            fill
            className="object-cover object-top -z-10 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />
          <div className="flex flex-col gap-2 max-w-[375px]">
            <h3 className="font-sans font-semibold leading-[1.1] tracking-[-0.05em]">
              <span className="text-[#F00511] text-[40px] md:text-[48px]">Secure</span><br className="hidden lg:block"/> 
              <span className="text-white text-[32px] md:text-[40px]">On-Device Processing</span>
            </h3>
            <p className="font-sans text-[14px] md:text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
              By processing information locally, Edge AI reduces latency, enhances operational security, and minimizes the risk of data exposure. This approach ensures faster decision-making while maintaining privacy and reliability across surveillance, inspection, and defense missions.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Real-Time Detection */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -250px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-[12px] border-[0.5px] border-white/50 lg:col-span-1 lg:row-span-1 z-10 flex flex-col justify-end p-[27px]"
        >
          <Image
            src="/images/edge-ai/edge-ai-2-542a9c.png"
            alt="Real-Time Detection"
            fill
            className="object-cover -z-10 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent -z-10" />
          <div className="flex flex-col gap-2 max-w-[382px]">
            <h3 className="font-sans font-semibold leading-[1.1] tracking-[-0.05em]">
              <span className="text-[#F00511] text-[40px] md:text-[48px]">Real-Time</span><br />
              <span className="text-white text-[32px] md:text-[40px]">Detection</span>
            </h3>
            <p className="font-sans text-[14px] md:text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
              Identify people, vehicles, objects, and anomalies instantly with AI models optimized for rapid, low-latency analysis and immediate operational response.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Offline Operation */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "10000px 0px -250px 0px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative group overflow-hidden rounded-[12px] border-[0.5px] border-white/50 lg:col-span-1 lg:row-span-1 z-10 flex flex-col justify-end p-[27px]"
        >
          <Image
            src="/images/edge-ai/edge-ai-3.png"
            alt="Offline Operation"
            fill
            className="object-cover -z-10 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent -z-10" />
          <div className="flex flex-col gap-2 max-w-[383px]">
            <h3 className="font-sans font-semibold leading-[1.1] tracking-[-0.05em]">
              <span className="text-[#F00511] text-[40px] md:text-[48px]">Offline</span> <span className="text-white text-[32px] md:text-[40px]">Operation</span>
            </h3>
            <p className="font-sans text-[14px] md:text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
              Identify people, vehicles, objects, and anomalies instantly with AI models optimized for rapid, low-latency analysis and immediate operational response.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
