'use client';

import React from 'react';
import CountUp from '@/components/ui/CountUp';

interface StatItem {
  label: string;
  isRange?: boolean;
  from1?: number;
  to1?: number;
  from2?: number;
  to2?: number;
  from?: number;
  to?: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { from: 0, to: 500, suffix: '+', label: 'Units Deployed' },
  { isRange: true, from1: 0, to1: 24, from2: 0, to2: 48, suffix: 'hr', label: 'Repair Turnaround' },
  { from: 0, to: 15, suffix: '+', label: 'Industries served' },
  { from: 0, to: 99, suffix: '%', label: 'Uptime' },
  { from: 0, to: 100, suffix: '+', label: 'Support Staff' },
];

function StatValue({ stat }: { stat: StatItem }) {
  if (stat.isRange) {
    return (
      <span className="inline-flex items-baseline">
        <CountUp from={stat.from1 ?? 0} to={stat.to1 ?? 0} duration={2} />
        <span>-</span>
        <CountUp from={stat.from2 ?? 0} to={stat.to2 ?? 0} duration={2} />
        {stat.suffix && <span>{stat.suffix}</span>}
      </span>
    );
  }
  return (
    <span className="inline-flex items-baseline">
      <CountUp from={stat.from ?? 0} to={stat.to ?? 0} duration={2} />
      {stat.suffix && <span>{stat.suffix}</span>}
    </span>
  );
}

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
              <StatValue stat={stat} />
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
                <StatValue stat={stat} />
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
                <StatValue stat={stat} />
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
