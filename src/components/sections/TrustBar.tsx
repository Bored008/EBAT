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
    <section className="w-full flex justify-center px-4">
      <div className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-[1259px] rounded-[13px]">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center justify-center py-6 md:py-0 w-full md:flex-1 gap-[3px] ${
              index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/70' : ''
            }`}
          >
            <span className="font-sans font-medium text-[48px] leading-none text-[#F00511]">
              {stat.value}
            </span>
            <span className="font-sans font-normal text-[16px] text-white/75">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
