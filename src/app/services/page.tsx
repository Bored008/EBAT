'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Footer } from '@/components/sections/Footer';

interface ServiceCardData {
  id: 'repair' | 'maintenance' | 'parts';
  title: string;
  image: string;
  description: string;
  bullets: string[];
}

const serviceCards: ServiceCardData[] = [
  {
    id: 'repair',
    title: 'Repair',
    image: '/images/services/services-center.png',
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
  const [activeCard, setActiveCard] = useState<'repair' | 'maintenance' | 'parts'>('repair');

  const cardIds: Array<'repair' | 'maintenance' | 'parts'> = ['repair', 'maintenance', 'parts'];

  const handlePrev = () => {
    const currentIndex = cardIds.indexOf(activeCard);
    const prevIndex = (currentIndex - 1 + cardIds.length) % cardIds.length;
    setActiveCard(cardIds[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = cardIds.indexOf(activeCard);
    const nextIndex = (currentIndex + 1) % cardIds.length;
    setActiveCard(cardIds[nextIndex]);
  };

  return (
    <>
      <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
        {/* Main Container */}
        <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
          {/* Top Section with 36px Spacing */}
          <div className="flex flex-col gap-[36px] w-full">
            {/* Header Section */}
            <section className="flex flex-col w-full items-center gap-[28px]">
              <span className="self-start font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
                <span className="text-[#F00511]">/</span> Services
              </span>

              <div className="flex flex-col gap-[8px] items-center text-center max-w-[842px]">
                <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
                  Support That Keeps You{' '}
                  <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
                    Flying
                  </span>
                </h1>
                <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[650px]">
                  From repairs and part replacements to pilot training, we keep every fleet mission-ready.
                </p>
              </div>
            </section>

            {/* Bento Grid Section (Figma node 426:1306) */}
            <section className="flex flex-col lg:flex-row gap-[20px] w-full max-w-[1260px] mx-auto items-stretch">
              {/* Left Column (407px) */}
              <div className="flex flex-col gap-[20px] w-full lg:w-[407px] shrink-0">
                {/* Card 1: FPV Repair */}
                <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px]">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#333335] flex items-center justify-center shrink-0">
                    <Image
                      src="/images/services/icon-tool.svg"
                      alt="Tool Icon"
                      width={24}
                      height={24}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">
                      FPV Repair
                    </h3>
                    <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">
                      Rapid diagnostics and rebuild for close-range units.
                    </p>
                  </div>
                </div>

                {/* Card 2: Fixed Wing Maintenance */}
                <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[34px]">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#333335] flex items-center justify-center shrink-0">
                    <Image
                      src="/images/services/icon-plane.svg"
                      alt="Plane Icon"
                      width={24}
                      height={24}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">
                      Fixed Wing Maintenance
                    </h3>
                    <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">
                      Structural checks and airframe servicing.
                    </p>
                  </div>
                </div>

                {/* Image 54 */}
                <div className="relative w-full h-[328px] bg-[#1D1D1F] overflow-hidden">
                  <Image
                    src="/images/services/services-left-bottom.png"
                    alt="Maintenance Details"
                    fill
                    sizes="(max-width: 1024px) 100vw, 407px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Middle Column (406px) */}
              <div className="w-full lg:w-[406px] shrink-0">
                <div className="relative w-full h-[500px] lg:h-full min-h-[500px] lg:min-h-[782px] overflow-hidden bg-[#1D1D1F]">
                  <Image
                    src="/images/services/services-center.png"
                    alt="Engineer working on drone"
                    fill
                    sizes="(max-width: 1024px) 100vw, 406px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Column (407px) */}
              <div className="flex flex-col gap-[20px] w-full lg:w-[407px] shrink-0">
                {/* Image 61 */}
                <div className="relative w-full h-[356px] bg-[#1D1D1F] overflow-hidden">
                  <Image
                    src="/images/services/services-right-top.png"
                    alt="Drone components"
                    fill
                    sizes="(max-width: 1024px) 100vw, 407px"
                    className="object-cover"
                  />
                </div>

                {/* Card 3: Genuine Parts */}
                <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px]">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#333335] flex items-center justify-center shrink-0">
                    <Image
                      src="/images/services/icon-parts.svg"
                      alt="Parts Icon"
                      width={24}
                      height={24}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">
                      Genuine Parts
                    </h3>
                    <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">
                      OEM-grade components, always in stock.
                    </p>
                  </div>
                </div>

                {/* Card 4: Pilot Training */}
                <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px]">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#333335] flex items-center justify-center shrink-0">
                    <Image
                      src="/images/services/icon-training.svg"
                      alt="Training Icon"
                      width={24}
                      height={24}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-heading font-semibold text-[32px] tracking-[-0.02em] text-white">
                      Pilot Training
                    </h3>
                    <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">
                      Certification for pilots and technicians.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section 2: Fixed Wing Support Section (Interactive State Cards) */}
          <section className="flex flex-col gap-[36px] w-full max-w-[1260px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.15] tracking-[-0.05em] text-white">
                Fixed Wing{' '}
                <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
                  Support
                </span>
                ,<br />
                Built for{' '}
                <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
                  Endurance
                </span>
              </h2>
              <div className="flex flex-col gap-[12px] max-w-[404px]">
                <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em]">
                  Keep every long-range mission airborne — repairs, maintenance, and genuine parts built for the demands of extended flight.
                </p>
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={handlePrev}
                    className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shrink-0"
                    aria-label="Previous service"
                  >
                    <Image
                      src="/images/services/slider-btn-prev.svg"
                      alt="Previous"
                      width={28}
                      height={28}
                      className="w-full h-full"
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shrink-0"
                    aria-label="Next service"
                  >
                    <Image
                      src="/images/services/slider-btn-next.svg"
                      alt="Next"
                      width={30}
                      height={30}
                      className="w-full h-full"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive 3-Card Deck */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[31px]">
              {serviceCards.map((card) => {
                const isActive = activeCard === card.id;

                if (isActive) {
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveCard(card.id)}
                      className="flex flex-col justify-end p-[24px_20px] md:p-[40px_20px] bg-[#F00511] min-h-[418px] cursor-pointer transition-all duration-300"
                    >
                      <div className="flex flex-col gap-[15px]">
                        <h3 className="font-heading font-bold text-[64px] leading-[1] text-white">
                          {card.title}
                        </h3>
                        <p className="font-sans text-[16px] text-white tracking-[-0.02em]">
                          {card.description}
                        </p>
                        <div className="font-sans text-[16px] text-white/75 tracking-[-0.02em] flex flex-col gap-1">
                          {card.bullets.map((bullet, idx) => (
                            <p key={idx}>- {bullet}</p>
                          ))}
                        </div>
                        <div className="mt-4">
                          <button className="w-[46px] h-[46px] rounded-full border border-white flex justify-center items-center hover:bg-white/10 transition">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(card.id)}
                    className="flex flex-col gap-[5px] cursor-pointer group transition-all duration-300"
                  >
                    <div className="relative w-full h-[418px] bg-white overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button className="absolute bottom-[20px] right-[20px] w-[46px] h-[46px] rounded-full border border-[#F00511] flex justify-center items-center bg-black/20 backdrop-blur-sm group-hover:bg-[#F00511] transition-all">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-heading font-bold text-[64px] leading-[1] text-[#F00511]">
                      {card.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Certification Section */}
          <section className="flex flex-col gap-[36px] w-full max-w-[1260px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.15] tracking-[-0.05em] text-white">
                From First{' '}
                <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
                  Flight
                </span>
                ,<br />
                to Full{' '}
                <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-8">
                  Certification
                </span>
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
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
