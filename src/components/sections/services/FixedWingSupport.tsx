'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export function FixedWingSupport() {
  const [activeCard, setActiveCard] = useState('repair');

  return (
    <div className="flex flex-col gap-[36px] w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
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
                  <Image src="/images/services/slider-btn-prev.svg" alt="Previous" width={20} height={20} />
                </div>
                <div className="w-[44px] h-[44px] rounded-full border border-[#F00511] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95">
                  <Image src="/images/services/slider-btn-next.svg" alt="Next" width={20} height={20} />
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
                    <div className="relative w-full h-[418px] overflow-hidden bg-[#1D1D1F]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 407px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Inactive Arrow - Inside the image, bottom right */}
                      <div className="absolute bottom-[20px] right-[20px] w-[46px] h-[46px] rounded-full border border-[#F00511] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#F00511]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#F00511"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:stroke-white transition-colors"
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

                  {/* Active State (Red Background + Top Left Content) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-[#F00511] z-10 flex flex-col justify-start px-[24px] md:px-[40px] pt-[32px] md:pt-[40px] pointer-events-none"
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
                          <p key={idx}>• {bullet}</p>
                        ))}
                      </div>
                    </motion.div>

                    {/* Active Arrow - Bottom Right */}
                    <div className="absolute bottom-[40px] right-[24px] md:right-[40px]">
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
  );
}
