import React from 'react';

const stats = [
  { value: '500+', label: 'Units Deployed' },
  { value: '24-48hr', label: 'Repair Turnaround' },
  { value: '15+', label: 'Industries served' },
  { value: '99%', label: 'Uptime' },
  { value: '100+', label: 'Support Staff' },
];

export function TrustBar() {
  return (
    <section className="w-full flex justify-center px-6 overflow-hidden">
      
      {/* Desktop View (Static Row) */}
      <div className="hidden md:flex flex-row items-stretch w-full max-w-[1259px] rounded-[13px]">
        {stats.map((stat, index) => (
          <div 
            key={`desktop-${index}`}
            className={`flex flex-col items-center justify-center py-0 flex-1 gap-[3px] ${
              index !== stats.length - 1 ? 'border-r border-white/70' : ''
            }`}
          >
            <span className="font-sans font-medium text-[48px] leading-none text-[#F00511]">
              {stat.value}
            </span>
            <span className="font-sans font-normal text-[16px] text-white/75 px-2 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile View (Infinite Marquee) */}
      <div className="md:hidden w-full relative flex overflow-hidden gap-[20px] py-2">
        {/* Track 1 */}
        <div className="flex flex-row gap-[20px] min-w-max animate-marquee items-center">
          {stats.map((stat, index) => (
            <div 
              key={`mobile-1-${index}`}
              className="flex flex-col items-center justify-center min-w-[160px] gap-[3px]"
            >
              <span className="font-sans font-medium text-[40px] leading-none text-[#F00511]">
                {stat.value}
              </span>
              <span className="font-sans font-normal text-[14px] text-white/75 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Track 2 - Duplicate for seamless looping */}
        <div className="flex flex-row gap-[20px] min-w-max animate-marquee items-center" aria-hidden="true">
          {stats.map((stat, index) => (
            <div 
              key={`mobile-2-${index}`}
              className="flex flex-col items-center justify-center min-w-[160px] gap-[3px]"
            >
              <span className="font-sans font-medium text-[40px] leading-none text-[#F00511]">
                {stat.value}
              </span>
              <span className="font-sans font-normal text-[14px] text-white/75 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
