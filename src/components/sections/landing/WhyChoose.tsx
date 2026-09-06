"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Synchronized sequence across all features
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        });

        tl.from(".heading-anim", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });

        tl.from(".bg-line-anim", {
          opacity: 0,
          y: -40,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6");

        tl.from(".drone-anim", {
          opacity: 0,
          scale: 0.7,
          duration: 1.2,
          ease: "power2.out",
        }, "-=0.8");

        tl.addLabel("outerFeatures", "-=0.6");

        // Animate all outer features simultaneously
        gsap.utils.toArray('.desktop-features .feature-outer').forEach((card: any) => {
          tl.from(card.querySelectorAll('.feature-item'), {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          }, "outerFeatures");
        });

        // Animate all inner features simultaneously, staggered after outer
        gsap.utils.toArray('.desktop-features .feature-inner').forEach((card: any) => {
          tl.from(card.querySelectorAll('.feature-item'), {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          }, "outerFeatures+=0.4");
        });
      });

      // Mobile & Tablet: Cards are stacked vertically, animate each card as it enters view
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".heading-anim", {
          scrollTrigger: {
            trigger: ".heading-anim",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.utils.toArray('.mobile-card').forEach((card: any) => {
          gsap.from(card.querySelectorAll('.feature-item'), {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col items-center px-6 max-w-[1260px] mx-auto relative">
      {/* Background connecting line */}
      <div className="bg-line-anim absolute top-[167px] left-1/2 -translate-x-1/2 w-full max-w-[1260px] h-[238px] -z-20 pointer-events-none hidden lg:block">
        <Image src="/images/why-choose/bg-line.svg" alt="Connecting line" fill sizes="100vw" className="object-cover" />
      </div>

      {/* Drone Background Image */}
      <div className="drone-anim absolute top-[203px] left-1/2 -translate-x-1/2 w-full max-w-[1253px] h-[436px] -z-10 pointer-events-none hidden md:block">
        <Image src="/images/why-choose/fixedwind2nobg.png" alt="Fixed wing drone" fill sizes="100vw" className="object-contain" />
      </div>

      {/* Header Container */}
      <div className="heading-anim flex flex-col items-center gap-2 max-w-[620px] text-center mt-0">
        <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-tight tracking-[-0.05em] text-white">
          Why Choose <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">EBAT</span>
        </h2>
        <p className="font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
          From routine maintenance to mission-critical deployments, we&apos;ve got your fleet covered with reliable, field-tested support.
        </p>
      </div>

      {/* Features Grid - Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] w-full mt-[40px] md:mt-[100px] lg:hidden">
        {features.map((feature, index) => (
          <div key={index} className="mobile-card flex flex-col items-center text-center gap-2 max-w-[320px] mx-auto">
            <div className="feature-item w-[44px] h-[44px] flex items-center justify-center mb-2">
              <Image src={feature.icon} alt={feature.title} width={44} height={44} />
            </div>
            <h3 className="feature-item font-sans font-bold text-[24px] text-white leading-tight">
              {feature.title}
            </h3>
            <p className="feature-item font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Features Layout - Desktop (Figma coordinates) */}
      <div className="desktop-features hidden lg:block relative w-full h-[316px] mt-[280px]">
        {features.map((feature, index) => {
          let left = '0';
          let top = '0';
          if (index === 0) { left = '0px'; top = '0px'; }
          if (index === 1) { left = '272px'; top = '174px'; }
          if (index === 2) { left = '665px'; top = '174px'; }
          if (index === 3) { left = '940px'; top = '0px'; }
          
          const isOuter = index === 0 || index === 3;
          const cardClass = isOuter ? 'feature-outer' : 'feature-inner';

          return (
            <div 
              key={index} 
              className={`absolute flex flex-col items-center text-center gap-2 w-[320px] ${cardClass}`}
              style={{ left, top }}
            >
              <div className="feature-item w-[44px] h-[44px] flex items-center justify-center mb-[8px]">
                <Image src={feature.icon} alt={feature.title} width={44} height={44} />
              </div>
              <h3 className="feature-item font-sans font-bold text-[24px] text-white leading-tight text-left w-full flex justify-center">
                {feature.title}
              </h3>
              <p className="feature-item font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
