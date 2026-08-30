import React from 'react';
import Image from 'next/image';

export function MasonryGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-[1260px] px-6 md:px-0 mt-[120px]">
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
          <div className="w-full md:flex-1 h-[400px] md:h-[782px]">
            <div className="relative w-full h-full min-h-[400px] md:min-h-[782px] overflow-hidden">
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
  );
}
