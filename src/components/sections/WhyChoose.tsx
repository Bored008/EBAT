import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function WhyChoose() {
  const features = [
    {
      title: 'Edge AI Advantage',
      description: "Real-time, on-device detection with zero cloud dependency. Every decision happens the instant it's needed.",
      icon: '/images/why-choose/braincircuit.svg',
    },
    {
      title: 'Field-Tested Reliability',
      description: 'Proven across commercial operations and security deployments alike. Built to perform under real operating conditions.',
      icon: '/images/why-choose/shieldcheck.svg',
    },
    {
      title: 'End-to-End Support',
      description: 'One partner for hardware, repairs, parts, and training. No juggling vendors, no gaps in service.',
      icon: '/images/why-choose/headset2.svg',
    },
    {
      title: 'Rapid Response',
      description: 'Repairs completed in 24-48 hours, not weeks. Your fleet stays mission-ready.',
      icon: '/images/why-choose/zap.svg',
    },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-[100px] px-6 max-w-[1260px] mx-auto relative">
      {/* Background connecting line */}
      <div className="absolute top-[320px] left-1/2 -translate-x-1/2 w-full max-w-[1260px] h-[238px] -z-20 pointer-events-none hidden lg:block">
        <Image src="/images/why-choose/bg-line.svg" alt="Connecting line" fill className="object-cover" />
      </div>

      {/* Drone Background Image */}
      <div className="absolute top-[203px] left-1/2 -translate-x-1/2 w-full max-w-[1253px] h-[436px] -z-10 pointer-events-none hidden md:block">
        <Image src="/images/why-choose/fixedwind2nobg.png" alt="Fixed wing drone" fill className="object-contain" />
      </div>

      {/* Header Container */}
      <div className="flex flex-col items-center gap-2 max-w-[620px] text-center">
        <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-tight tracking-[-0.05em] text-white">
          Why Choose <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">EBAT</span>
        </h2>
        <p className="font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
          From routine maintenance to mission-critical deployments, we&apos;ve got your fleet covered with reliable, field-tested support.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[20px] w-full mt-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2 max-w-[320px] mx-auto">
            {/* Icon */}
            <div className="w-[44px] h-[44px] flex items-center justify-center mb-2">
              <Image src={feature.icon} alt={feature.title} width={44} height={44} />
            </div>
            
            {/* Title */}
            <h3 className="font-sans font-bold text-[20px] md:text-[24px] text-white leading-tight">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Request a Quote Button */}
      <div className="mt-[-20px]">
        <Button variant="filled">Request a Quote</Button>
      </div>
    </section>
  );
}
