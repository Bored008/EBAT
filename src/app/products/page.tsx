'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/sections/Footer';

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  operatingTemp: string;
  flightTime: string;
  serviceCeiling: string;
  payloadCapacity: string;
  maxRange: string;
  descriptionHighlight: string;
  descriptionText: string;
}

const products: Product[] = [
  {
    id: 'sentinel',
    name: 'SENTINEL',
    tagline: 'PERSISTENT SURVEILLANCE',
    image: '/images/products/sentinel-drone-6f8425.png',
    imageWidth: 620,
    imageHeight: 340,
    operatingTemp: '-20°C to 50°C',
    flightTime: '- 90 minutes',
    serviceCeiling: '- 5,000 m',
    payloadCapacity: '- 5 kilograms',
    maxRange: '15 kilometers',
    descriptionHighlight: 'PERSISTENT SURVEILLANCE',
    descriptionText:
      ", Sentinel is engineered to stay airborne long after other units need to return. Paired with onboard edge AI, it doesn't just watch - it detects and flags what matters in real time, with zero cloud dependency. Whether monitoring a perimeter for hours or covering ground no patrol team could match, Sentinel is designed to see what others miss, for as long as the mission demands.",
  },
  {
    id: 'vantage',
    name: 'VANTAGE',
    tagline: 'HIGH-ALTITUDE RECONNAISSANCE',
    image: '/images/products/vantage-drone-32279b.png',
    imageWidth: 765,
    imageHeight: 670,
    operatingTemp: '-20°C to 50°C',
    flightTime: '- 60 minutes',
    serviceCeiling: '- 6,000 m',
    payloadCapacity: '- 3 kilograms',
    maxRange: '20 kilometers',
    descriptionHighlight: 'HIGH-ALTITUDE RECONNAISSANCE',
    descriptionText:
      ", Vantage climbs where others can't, delivering a wider field of view and greater standoff distance for sensitive operations. Its lightweight airframe maximizes range without sacrificing stability, making it the unit of choice when reach matters more than payload. From border monitoring to large-site reconnaissance, Vantage keeps eyes on the ground from a position nothing below can touch.",
  },
  {
    id: 'warden',
    name: 'WARDEN',
    tagline: 'PERIMETER DEFENSE',
    image: '/images/products/warden-drone-node.png',
    imageWidth: 989,
    imageHeight: 299,
    operatingTemp: '-20°C to 50°C',
    flightTime: '- 75 minutes',
    serviceCeiling: '- 4500 m',
    payloadCapacity: '- 8 kilograms',
    maxRange: '25 kilometers',
    descriptionHighlight: 'PERIMETER DEFENSE',
    descriptionText:
      " workhorse, Warden combines extended range with the highest payload capacity in the fixed wing lineup - enough to carry multi-sensor arrays for round-the-clock monitoring. Designed for border patrol and critical infrastructure protection, Warden doesn't just cover distance, it carries the intelligence payload needed to act on what it finds.",
  },
  {
    id: 'eagle',
    name: 'EAGLE',
    tagline: 'ADVANCED ISR',
    image: '/images/products/eagle-drone-node.png',
    imageWidth: 620,
    imageHeight: 340,
    operatingTemp: '-30°C to 60°C',
    flightTime: '- 120 minutes',
    serviceCeiling: '- 7,000 m',
    payloadCapacity: '- 10 kilograms',
    maxRange: '30 kilometers',
    descriptionHighlight: 'ADVANCED ISR',
    descriptionText:
      " (Intelligence, Surveillance, and Reconnaissance) missions, Eagle offers unparalleled endurance and versatility in challenging environments. Its advanced stabilization technology ensures clear imagery, while modular payload options allow for customized setups. Whether conducting wildlife studies or tactical surveillance, Eagle excels at gathering actionable intelligence across vast landscapes.",
  },
];

export default function ProductsPage() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
    <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
      {/* Main Container */}
      <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
        {/* Header Section (Figma node 304:2772 - Main Title split with Request a Quote) */}
        <section className="flex flex-col md:flex-row md:items-end justify-between w-full gap-[32px]">
          <div className="flex flex-col gap-[16px] max-w-[806px]">
            <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
              <span className="text-[#F00511]">/</span> Products
            </span>

            <div className="flex flex-col gap-[8px]">
              <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.15] tracking-[-0.05em] text-white">
                Drones Engineered for{' '}
                <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">
                  Every Mission
                </span>
              </h1>
              <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[650px]">
                From close-range precision to long-range defense - explore the EBAT fleet, built on real-time edge AI.
              </p>
            </div>
          </div>

          <div className="shrink-0 pb-1">
            <Link href="?quote=true">
              <Button variant="filled" rightIcon="top-right-arrow">
                Request a Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* Products List (Figma node 304:2647 - Gap 120px) */}
        <div className="flex flex-col gap-[120px] w-full">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col items-center w-full gap-[36px] relative"
            >
              {/* Product Header / Title Divider (Figma node 304:2682 & 304:2654) */}
              <div className="flex flex-row items-center justify-center w-full gap-[12px]">
                <Image
                  src="/images/products/title-line-left.svg"
                  alt=""
                  width={100}
                  height={1}
                  className="shrink-0 h-[1px] w-[100px]"
                />
                <h2 className="font-sans font-semibold text-[32px] md:text-[48px] tracking-[-0.05em] text-white uppercase leading-none text-center">
                  {product.name}
                </h2>
                <Image
                  src="/images/products/title-line-right.svg"
                  alt=""
                  width={100}
                  height={1}
                  className="shrink-0 h-[1px] w-[100px]"
                />
              </div>

              {/* Showcase & Tactical HUD Container */}
              <div className="relative w-full min-h-[460px] lg:min-h-[500px] flex items-center justify-center">
                {/* Background Ambient Glow */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[200px] z-0 pointer-events-none opacity-20" 
                />

                {/* Left Side Arrow Accent */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[148px] h-[322px] pointer-events-none opacity-20 z-0">
                  <Image
                    src="/images/products/arrow-left-duotone.svg"
                    alt=""
                    width={148}
                    height={322}
                  />
                </div>

                {/* Right Side Arrow Accent */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[148px] h-[322px] pointer-events-none opacity-20 z-0">
                  <Image
                    src="/images/products/arrow-right-duotone.svg"
                    alt=""
                    width={148}
                    height={322}
                  />
                </div>

                {/* Center Drone Presentation */}
                <div
                  className={`relative w-full z-10 flex items-center justify-center ${
                    product.id === 'vantage'
                      ? 'max-w-[720px] h-[320px] md:h-[380px] lg:h-[420px]'
                      : product.id === 'warden'
                      ? 'max-w-[860px] h-[240px] md:h-[280px] lg:h-[300px]'
                      : 'max-w-[620px] h-[260px] md:h-[320px] lg:h-[340px]'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} UAV`}
                    fill
                    className={`object-contain transition-transform duration-300 ${
                      product.id === 'vantage' ? '-rotate-[-22deg]' : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 860px"
                    priority
                  />
                </div>

                {/* Exact Telemetry Frame from Figma node 304:2043 (1039px x 453px) */}
                <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[1039px] h-[453px] pointer-events-none z-20">
                  {/* 1. Operating Temperature (Top Right: x=747, y=0) */}
                  <div className="absolute top-0 left-[747px] flex flex-col items-start gap-[4px] text-left">
                    <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                      OPERATING<br />TEMPERATURE
                    </span>
                    <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                      {product.operatingTemp}
                    </span>
                  </div>

                  {/* 2. Max Flight Time (Middle Left: x=0, y=215) */}
                  <div className="absolute top-[215px] left-0 flex flex-col items-end gap-[4px] text-right">
                    <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                      MAX FLIGHT TIME
                    </span>
                    <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                      {product.flightTime}
                    </span>
                  </div>

                  {/* 3. Service Ceiling (Middle Right: x=854, y=215) */}
                  <div className="absolute top-[215px] left-[854px] flex flex-col items-start gap-[4px] text-left">
                    <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                      SERVICE CEILING
                    </span>
                    <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                      {product.serviceCeiling}
                    </span>
                  </div>

                  {/* 4. Max Range (Bottom Left: x=167, y=401) */}
                  <div className="absolute top-[401px] left-[167px] flex flex-col items-end gap-[4px] text-right">
                    <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                      MAX RANGE
                    </span>
                    <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                      {product.maxRange}
                    </span>
                  </div>

                  {/* 5. Payload Capacity (Bottom Right: x=746, y=401, w=214) */}
                  <div className="absolute top-[401px] left-[746px] w-[214px] flex flex-col items-start gap-[4px] text-left">
                    <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                      PAYLOAD CAPACITY
                    </span>
                    <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                      {product.payloadCapacity}
                    </span>
                  </div>
                </div>

                {/* Mobile / Tablet Responsive Fallback Grid */}
                <div className="lg:hidden w-full grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 z-20">
                  <div className="flex flex-col gap-1 text-left bg-white/[0.02] border border-white/10 p-3">
                    <span className="font-sans font-medium text-[14px] text-[#F00511] uppercase">
                      Operating Temp
                    </span>
                    <span className="font-sans font-normal text-[14px] text-white">
                      {product.operatingTemp}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-left bg-white/[0.02] border border-white/10 p-3">
                    <span className="font-sans font-medium text-[14px] text-[#F00511] uppercase">
                      Max Flight Time
                    </span>
                    <span className="font-sans font-normal text-[14px] text-white">
                      {product.flightTime}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-left bg-white/[0.02] border border-white/10 p-3">
                    <span className="font-sans font-medium text-[14px] text-[#F00511] uppercase">
                      Service Ceiling
                    </span>
                    <span className="font-sans font-normal text-[14px] text-white">
                      {product.serviceCeiling}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-left bg-white/[0.02] border border-white/10 p-3">
                    <span className="font-sans font-medium text-[14px] text-[#F00511] uppercase">
                      Max Range
                    </span>
                    <span className="font-sans font-normal text-[14px] text-white">
                      {product.maxRange}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-left bg-white/[0.02] border border-white/10 p-3 col-span-2 sm:col-span-1">
                    <span className="font-sans font-medium text-[14px] text-[#F00511] uppercase">
                      Payload Capacity
                    </span>
                    <span className="font-sans font-normal text-[14px] text-white">
                      {product.payloadCapacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <p className="font-sans font-normal text-[16px] leading-[1.6] tracking-[-0.02em] text-white/75 text-center max-w-[940px] px-4">
                {product.id === 'warden' ? (
                  <>
                    Built as EBAT&apos;s{' '}
                    <strong className="text-white font-semibold">
                      {product.descriptionHighlight}
                    </strong>
                    {product.descriptionText}
                  </>
                ) : (
                  <>
                    Built for{' '}
                    <strong className="text-white font-semibold">
                      {product.descriptionHighlight}
                    </strong>
                    {product.descriptionText}
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}


