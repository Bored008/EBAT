'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '@/components/sections/Footer';

const serviceCards = [
  {
    id: 'repair',
    title: 'Repair',
    image: '/images/services/image_54-73f691.png',
    description: 'Structural and airframe repairs to handle wear from extended flight hours.',
    bullets: [
      'Airframe & wing repair',
      'Motor & propulsion servicing',
      'Fast diagnostics turnaround',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    image: '/images/services/image_63.png',
    description: 'Routine servicing and comprehensive diagnostics to guarantee continuous operational readiness.',
    bullets: [
      'Scheduled pre-flight inspections',
      'Avionics & edge-AI calibration',
      'Battery health & power checks',
    ],
  },
  {
    id: 'parts',
    title: 'Genuine Parts',
    image: '/images/services/image_65-500d9f.png',
    description: 'OEM-grade replacement components engineered specifically for EBAT endurance airframes.',
    bullets: [
      'Factory-certified spares in stock',
      'High-capacity power packs',
      'Rapid dispatch and global delivery',
    ],
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const [activeCard, setActiveCard] = useState('repair');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1 flex flex-col items-center pt-[32px]">
        {/* Header Section */}
        <div ref={heroRef} className="flex flex-col items-center gap-[8px] w-full max-w-[1260px] px-4 md:px-0">
          <div className="flex flex-col items-center gap-[28px] w-full">
            <p className="hero-text w-full text-left font-sans text-[16px] font-normal text-white/75 tracking-[-0.05em]">
              <span className="text-[#F00511]">/</span> Services
            </p>
            <h1 className="hero-text font-heading font-bold text-[64px] leading-[86px] tracking-[-0.05em] text-white text-center">
              Support That Keeps You <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">Flying</span>
            </h1>
          </div>
          <p className="hero-text font-sans text-[16px] font-normal text-white/75 tracking-[-0.02em] text-center">
            From repairs and part replacements to pilot training, we keep every fleet mission-ready.
          </p>
        </div>

        {/* Masonry Grid Section */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[20px] w-full md:w-[407px] h-full">
            {/* FPV Repair */}
            <div className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <Image src="/images/services/icons/wrench.svg" alt="Repair" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">FPV Repair</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Rapid diagnostics and rebuild for close-range units.</p>
              </div>
            </div>

            {/* Fixed Wing Maintenance */}
            <div className="flex flex-col gap-[34px] bg-[#1D1D1F] p-[24px_27px] flex-1">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <Image src="/images/services/icons/plane.svg" alt="Maintenance" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Fixed Wing Maintenance</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Structural checks and airframe servicing.</p>
              </div>
            </div>

            {/* Image 54 */}
            <div className="relative w-full h-[328px] bg-[#1D1D1F] overflow-hidden shrink-0">
              <Image 
                src="/images/services/image_54-73f691.png"
                alt="Maintenance Details"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="w-full md:flex-1 h-[400px] md:h-full">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/images/services/image_45.png"
                alt="Engineer working on drone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[20px] w-full md:w-[407px] h-full">
            {/* Image 61 */}
            <div className="relative w-full h-[356px] bg-[#1D1D1F] overflow-hidden shrink-0">
              <Image 
                src="/images/services/image_61.png"
                alt="Drone parts"
                fill
                className="object-cover"
              />
            </div>

            {/* Genuine Parts */}
            <div className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <Image src="/images/services/icons/certificate.svg" alt="Genuine Parts" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Genuine Parts</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">OEM-grade components, always in stock.</p>
              </div>
            </div>

            {/* Pilot Training */}
            <div className="flex flex-col gap-[33px] bg-[#1D1D1F] p-[24px_27px] flex-1">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <Image src="/images/services/icons/certificate.svg" alt="Pilot Training" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">Pilot Training</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Certification for pilots and technicians.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Wing Support Section */}
        <div className="flex flex-col gap-[36px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Fixed Wing <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">Support</span>,<br />
              Built for <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">Endurance</span>
            </h2>
            <div className="flex flex-col gap-[12px] max-w-[404px]">
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em]">
                Keep every long-range mission airborne — repairs, maintenance, and genuine parts built for the demands of extended flight.
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[#F00511] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95">
                  <ArrowRight className="text-white" size={20} />
                </div>
                <div className="w-[44px] h-[44px] rounded-full border border-[#F00511] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95">
                  <ArrowRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 3-Card Deck with Smooth Crossfade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[31px]">
            {serviceCards.map((card) => {
              const isActive = activeCard === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className="relative h-[504px] w-full cursor-pointer select-none overflow-hidden group"
                >
                  {/* Inactive State (Image + Bottom Title) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 flex flex-col gap-[5px] z-0 pointer-events-none"
                  >
                    <div className="relative w-full h-[418px] overflow-hidden bg-white">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 407px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Inactive Arrow - Inside the image, bottom right (matches the hardcoded version) */}
                      <div className="absolute bottom-[20px] right-[20px] w-[46px] h-[46px] rounded-full border border-[#F00511] flex items-center justify-center transition-colors duration-300 bg-black/20 backdrop-blur-sm group-hover:bg-[#F00511]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                    <div className="px-0 relative w-full flex items-center">
                      <h3 className="font-heading font-bold text-[56px] md:text-[64px] leading-[1] text-[#F00511] tracking-[-0.05em] pt-[4px]">
                        {card.title}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Active State (Red Background + Centered Content) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-[#F00511] z-10 flex flex-col justify-center px-[24px] md:px-[40px] pointer-events-none"
                  >
                    <motion.div
                      initial={false}
                      animate={{ y: isActive ? 0 : 15, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: isActive ? 0.1 : 0 }}
                      className="flex flex-col gap-[15px]"
                    >
                      <h3 className="font-heading font-bold text-[56px] md:text-[64px] leading-[1] text-white tracking-[-0.05em]">
                        {card.title}
                      </h3>
                      <p className="font-sans text-[16px] leading-[1.4] text-white tracking-[-0.02em]">
                        {card.description}
                      </p>
                      <div className="font-sans text-[16px] leading-[1.5] text-white/90 tracking-[-0.02em] flex flex-col gap-[4px] mt-[10px]">
                        {card.bullets.map((bullet, idx) => (
                          <p key={idx}>- {bullet}</p>
                        ))}
                      </div>
                    </motion.div>

                    {/* Active Arrow - Bottom Left */}
                    <div className="absolute bottom-[40px] left-[24px] md:left-[40px]">
                      <div className="w-[46px] h-[46px] rounded-full border border-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certification Section */}
        <div className="flex flex-col gap-[36px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px] mb-[120px]">
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
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[16px_40px] bg-[#F00511] min-h-[234px] gap-6">
              <div className="relative w-[255px] h-[188px] overflow-hidden shrink-0">
                <Image src="/images/services/image_66-151826.png" alt="Enrollment" fill className="object-cover" />
              </div>
              <h3 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em] flex-1 max-w-[311px]">
                Enrollment & Assessment
              </h3>
              <p className="font-sans text-[16px] text-white/90 tracking-[-0.02em] md:w-[297px]">
                Register for the program and complete a baseline skills assessment to determine your starting point.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-heading font-bold text-[36px] text-white tracking-[-0.05em]">02</span>
                <h3 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                  Ground Training
                </h3>
              </div>
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                Learn drone systems, flight regulations, safety protocols, and mission planning fundamentals before ever taking the controls.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-heading font-bold text-[36px] text-white tracking-[-0.05em]">03</span>
                <h3 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                  Flight Simulation
                </h3>
              </div>
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                Supervised, hands-on flight practice across FPV and fixed wing units, guided by certified instructors.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-heading font-bold text-[36px] text-white tracking-[-0.05em]">04</span>
                <h3 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                  Certification &<br />Deployment
                </h3>
              </div>
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                Pass your final assessment, receive EBAT certification, and get cleared for real-world mission deployment.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
