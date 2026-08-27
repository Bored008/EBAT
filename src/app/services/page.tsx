import React from 'react';
import Image from 'next/image';

import { Footer } from '@/components/sections/Footer';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1 flex flex-col items-center pt-[32px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[1260px] px-4 md:px-0">
          <div className="flex flex-col items-center gap-[28px] text-center">
            <p className="font-sans text-[16px] leading-tight text-white/75 tracking-[-0.05em]">
              <span className="text-[#F00511]">/</span> Services
            </p>
            <h1 className="font-oswald font-bold text-[48px] md:text-[64px] leading-[1.2] md:leading-[86px] tracking-[-0.05em] text-white">
              Support That Keeps You <span className="font-accent italic font-normal text-[#F00511] underline">Flying</span>
            </h1>
          </div>
          <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] text-center max-w-[600px]">
            From repairs and part replacements to pilot training, we keep every fleet mission-ready.
          </p>
        </div>

        {/* Masonry Grid Section */}
        <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[20px] flex-1 md:w-[407px]">
            {/* FPV Repair */}
            <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px] rounded-xl h-full max-h-[300px]">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-oswald font-semibold text-[32px] tracking-[-0.02em] text-white">FPV Repair</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Rapid diagnostics and rebuild for close-range units.</p>
              </div>
            </div>

            {/* Fixed Wing Maintenance */}
            <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[34px] rounded-xl h-full max-h-[300px]">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-2 2 4 4 2-2-1-3 4-4 3.2 6.3c.3.4.9.5 1.3.3l2.6-1.3c.5-.2.8-.6.7-1.1z"/></svg>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h3 className="font-oswald font-semibold text-[32px] tracking-[-0.02em] text-white">Fixed Wing Maintenance</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Structural checks and airframe servicing.</p>
              </div>
            </div>

            {/* Image 54 */}
            <div className="relative w-full h-[328px] bg-[#1D1D1F] rounded-xl overflow-hidden">
              <Image 
                src="/images/services/image_54-73f691.png"
                alt="Maintenance Details"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex-1 md:w-[406px]">
            <div className="relative w-full h-full min-h-[782px] rounded-xl overflow-hidden">
              <Image 
                src="/images/services/image_45.png"
                alt="Engineer working on drone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[20px] flex-1 md:w-[407px]">
            {/* Image 61 */}
            <div className="relative w-full h-[356px] bg-[#1D1D1F] rounded-xl overflow-hidden">
              <Image 
                src="/images/services/image_61.png"
                alt="Drone parts"
                fill
                className="object-cover"
              />
            </div>

            {/* Genuine Parts */}
            <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px] rounded-xl h-[193px]">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-oswald font-semibold text-[32px] tracking-[-0.02em] text-white">Genuine Parts</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">OEM-grade components, always in stock.</p>
              </div>
            </div>

            {/* Pilot Training */}
            <div className="flex flex-col bg-[#1D1D1F] p-[24px_27px] gap-[33px] rounded-xl h-[193px]">
              <div className="bg-[#333335] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-oswald font-semibold text-[32px] tracking-[-0.02em] text-white">Pilot Training</h3>
                <p className="font-sans text-[16px] tracking-[-0.02em] text-white/75">Certification for pilots and technicians.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Wing Support Section */}
        <div className="flex flex-col gap-[36px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="font-oswald font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Fixed Wing <span className="font-accent italic font-normal text-[#F00511] underline">Support</span>,<br />
              Built for <span className="font-accent italic font-normal text-[#F00511] underline">Endurance</span>
            </h2>
            <div className="flex flex-col gap-[12px] max-w-[404px]">
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em]">
                Keep every long-range mission airborne — repairs, maintenance, and genuine parts built for the demands of extended flight.
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[#F00511] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="w-[44px] h-[44px] rounded-full border border-[#F00511] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[31px]">
            {/* Red Card */}
            <div className="flex flex-col justify-end p-[24px_20px] md:p-[40px_20px] bg-[#F00511] rounded-xl flex-1 md:w-[384px] min-h-[418px]">
              <div className="flex flex-col gap-[15px]">
                <h3 className="font-oswald font-bold text-[64px] leading-[1] text-white">Repair</h3>
                <p className="font-sans text-[16px] text-white tracking-[-0.02em]">
                  Structural and airframe repairs to handle wear from extended flight hours.
                </p>
                <div className="font-sans text-[16px] text-white/75 tracking-[-0.02em]">
                  <p>- Airframe & wing repair</p>
                  <p>- Motor & propulsion servicing</p>
                  <p>- Fast diagnostics turnaround</p>
                </div>
                <div className="mt-4">
                  <button className="w-[46px] h-[46px] rounded-full border border-white flex justify-center items-center hover:bg-white/10 transition">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Maintenance Image Card */}
            <div className="flex flex-col gap-[5px] flex-1 md:w-[406px]">
              <div className="relative w-full h-[418px] bg-white rounded-xl overflow-hidden group">
                <Image 
                  src="/images/services/image_63.png"
                  alt="Maintenance"
                  fill
                  className="object-cover"
                />
                <button className="absolute bottom-[20px] right-[20px] w-[46px] h-[46px] rounded-full border border-[#F00511] flex justify-center items-center bg-black/20 backdrop-blur-sm group-hover:bg-[#F00511] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </button>
              </div>
              <h3 className="font-oswald font-bold text-[64px] leading-[1] text-[#F00511]">Maintenance</h3>
            </div>

            {/* Genuine Parts Image Card */}
            <div className="flex flex-col gap-[5px] flex-1 md:w-[407px]">
              <div className="relative w-full h-[418px] bg-white rounded-xl overflow-hidden group">
                <Image 
                  src="/images/services/image_65-500d9f.png"
                  alt="Genuine Parts"
                  fill
                  className="object-cover"
                />
                <button className="absolute bottom-[20px] right-[20px] w-[46px] h-[46px] rounded-full border border-[#F00511] flex justify-center items-center bg-black/20 backdrop-blur-sm group-hover:bg-[#F00511] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </button>
              </div>
              <h3 className="font-oswald font-bold text-[64px] leading-[1] text-[#F00511]">Genuine Parts</h3>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="flex flex-col gap-[36px] w-full max-w-[1260px] px-4 md:px-0 mt-[120px] mb-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="font-oswald font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              From First <span className="font-accent italic font-normal text-[#F00511] underline">Flight</span>,<br />
              to Full <span className="font-accent italic font-normal text-[#F00511] underline">Certification</span>
            </h2>
            <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] font-medium">
              A structured path to mission-ready pilot certification.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[16px_40px] bg-[#F00511] rounded-xl min-h-[234px] gap-6">
              <div className="relative w-[255px] h-[188px] rounded-lg overflow-hidden shrink-0">
                <Image src="/images/services/image_66-151826.png" alt="Enrollment" fill className="object-cover" />
              </div>
              <h3 className="font-oswald font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em] flex-1 max-w-[311px]">
                Enrollment & Assessment
              </h3>
              <p className="font-sans text-[16px] text-white/90 tracking-[-0.02em] md:w-[297px]">
                Register for the program and complete a baseline skills assessment to determine your starting point.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] rounded-xl min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-oswald font-bold text-[36px] text-white tracking-[-0.05em]">02</span>
                <h3 className="font-oswald font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                  Ground Training
                </h3>
              </div>
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                Learn drone systems, flight regulations, safety protocols, and mission planning fundamentals before ever taking the controls.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] rounded-xl min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-oswald font-bold text-[36px] text-white tracking-[-0.05em]">03</span>
                <h3 className="font-oswald font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
                  Flight Simulation
                </h3>
              </div>
              <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] md:w-[297px]">
                Supervised, hands-on flight practice across FPV and fixed wing units, guided by certified instructors.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center justify-between p-[40px] bg-[#1D1D1F] rounded-xl min-h-[234px] gap-6">
              <div className="flex items-center gap-[53px] flex-1">
                <span className="font-oswald font-bold text-[36px] text-white tracking-[-0.05em]">04</span>
                <h3 className="font-oswald font-bold text-[36px] md:text-[48px] leading-[1.1] text-white tracking-[-0.05em]">
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

