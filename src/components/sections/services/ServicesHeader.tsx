'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ServicesHeader() {
  const heroRef = useRef(null);

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
  );
}
