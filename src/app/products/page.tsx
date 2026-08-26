import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/sections/Footer';

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
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
    image: '/images/products/sentinel-drone.png',
    operatingTemp: '-20°C to 50°C',
    flightTime: '90 minutes',
    serviceCeiling: '5,000 m',
    payloadCapacity: '5 kilograms',
    maxRange: '15 kilometers',
    descriptionHighlight: 'PERSISTENT SURVEILLANCE',
    descriptionText:
      ", Sentinel is engineered to stay airborne long after other units need to return. Paired with onboard edge AI, it doesn't just watch - it detects and flags what matters in real time, with zero cloud dependency. Whether monitoring a perimeter for hours or covering ground no patrol team could match, Sentinel is designed to see what others miss, for as long as the mission demands.",
  },
  {
    id: 'vantage',
    name: 'VANTAGE',
    tagline: 'HIGH-ALTITUDE RECONNAISSANCE',
    image: '/images/products/vantage-drone.png',
    operatingTemp: '-20°C to 50°C',
    flightTime: '60 minutes',
    serviceCeiling: '6,000 m',
    payloadCapacity: '3 kilograms',
    maxRange: '20 kilometers',
    descriptionHighlight: 'HIGH-ALTITUDE RECONNAISSANCE',
    descriptionText:
      ", Vantage climbs where others can't, delivering a wider field of view and greater standoff distance for sensitive operations. Its lightweight airframe maximizes range without sacrificing stability, making it the unit of choice when reach matters more than payload. From border monitoring to large-site reconnaissance, Vantage keeps eyes on the ground from a position nothing below can touch.",
  },
  {
    id: 'warden',
    name: 'WARDEN',
    tagline: 'PERIMETER DEFENSE',
    image: '/images/products/warden-drone.png',
    operatingTemp: '-20°C to 50°C',
    flightTime: '75 minutes',
    serviceCeiling: '4,500 m',
    payloadCapacity: '8 kilograms',
    maxRange: '25 kilometers',
    descriptionHighlight: 'PERIMETER DEFENSE',
    descriptionText:
      " workhorse, Warden combines extended range with the highest payload capacity in the fixed wing lineup - enough to carry multi-sensor arrays for round-the-clock monitoring. Designed for border patrol and critical infrastructure protection, Warden doesn't just cover distance, it carries the intelligence payload needed to act on what it finds.",
  },
  {
    id: 'eagle',
    name: 'EAGLE',
    tagline: 'ADVANCED ISR',
    image: '/images/products/sentinel-drone.png',
    operatingTemp: '-30°C to 60°C',
    flightTime: '120 minutes',
    serviceCeiling: '7,000 m',
    payloadCapacity: '10 kilograms',
    maxRange: '30 kilometers',
    descriptionHighlight: 'ADVANCED ISR',
    descriptionText:
      " (Intelligence, Surveillance, and Reconnaissance) missions, Eagle offers unparalleled endurance and versatility in challenging environments. Its advanced stabilization technology ensures clear imagery, while modular payload options allow for customized setups. Whether conducting wildlife studies or tactical surveillance, Eagle excels at gathering actionable intelligence across vast landscapes.",
  },
];

export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
      {/* Main Container */}
      <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
        {/* Header Section */}
        <section className="flex flex-col w-full items-center gap-[28px]">
          <span className="self-start font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
            <span className="text-[#F00511]">/</span> Products
          </span>

          <div className="flex flex-col gap-[8px] items-center text-center max-w-[842px]">
            <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Drones Engineered for{' '}
              <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">
                Every Mission
              </span>
            </h1>
            <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[650px]">
              From close-range precision to long-range defense - explore the EBAT fleet, built on real-time edge AI.
            </p>
          </div>
        </section>

        {/* Products List */}
        <div className="flex flex-col gap-[100px] w-full">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col items-center w-full gap-[36px] relative"
            >
              {/* Product Header / Title Divider */}
              <div className="flex items-center justify-center w-full gap-[24px]">
                <div className="flex-1 h-[1px] bg-white/15 max-w-[340px]" />
                <h2 className="font-heading font-bold text-[32px] md:text-[44px] tracking-[0.15em] text-white uppercase">
                  {product.name}
                </h2>
                <div className="flex-1 h-[1px] bg-white/15 max-w-[340px]" />
              </div>

              {/* Showcase & Specs Visual Container */}
              <div className="relative w-full min-h-[460px] md:min-h-[500px] flex flex-col items-center justify-center py-6">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[600px] h-[260px] md:h-[340px] bg-white/[0.06] rounded-full blur-[100px] -z-10 pointer-events-none" />

                {/* Drone Image Presentation */}
                <div className="relative w-full max-w-[840px] h-[280px] md:h-[380px] z-10 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.name} UAV`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 840px"
                    priority
                  />
                </div>

                {/* Specs Grid / Overlay */}
                <div className="w-full max-w-[1045px] grid grid-cols-2 md:grid-cols-5 gap-[12px] md:gap-[16px] z-20 mt-4">
                  {/* Spec 1: Operating Temp */}
                  <div className="flex flex-col gap-[4px] p-[16px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-[#F00511]">
                      Operating Temp
                    </span>
                    <span className="font-sans font-medium text-[14px] md:text-[15px] text-white">
                      {product.operatingTemp}
                    </span>
                  </div>

                  {/* Spec 2: Max Flight Time */}
                  <div className="flex flex-col gap-[4px] p-[16px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-[#F00511]">
                      Max Flight Time
                    </span>
                    <span className="font-sans font-medium text-[14px] md:text-[15px] text-white">
                      {product.flightTime}
                    </span>
                  </div>

                  {/* Spec 3: Service Ceiling */}
                  <div className="flex flex-col gap-[4px] p-[16px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-[#F00511]">
                      Service Ceiling
                    </span>
                    <span className="font-sans font-medium text-[14px] md:text-[15px] text-white">
                      {product.serviceCeiling}
                    </span>
                  </div>

                  {/* Spec 4: Payload Capacity */}
                  <div className="flex flex-col gap-[4px] p-[16px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-[#F00511]">
                      Payload Capacity
                    </span>
                    <span className="font-sans font-medium text-[14px] md:text-[15px] text-white">
                      {product.payloadCapacity}
                    </span>
                  </div>

                  {/* Spec 5: Max Range */}
                  <div className="col-span-2 md:col-span-1 flex flex-col gap-[4px] p-[16px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <span className="font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-[#F00511]">
                      Max Range
                    </span>
                    <span className="font-sans font-medium text-[14px] md:text-[15px] text-white">
                      {product.maxRange}
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

              {/* Action Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-[16px] pt-2">
                <Link href="/contact">
                  <Button variant="outline" rightIcon="right-arrow-head">
                    View Full Specifications
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="white" rightIcon="top-right-arrow">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
