'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export function ProductsList() {
  return (
    <div className="flex flex-col gap-[120px] w-full">
      {products.map((product) => (
        <article
          key={product.id}
          className="product-card flex flex-col items-center w-full gap-[36px] relative overflow-hidden"
        >
          {/* Product Header / Title Divider */}
          <motion.div 
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "10000px 0px -100px 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-row items-center justify-center w-full gap-[12px]"
          >
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
          </motion.div>

          {/* Showcase & Tactical HUD Container */}
          <div className="relative w-full min-h-[460px] lg:min-h-[500px] flex flex-col items-center justify-start lg:justify-center overflow-hidden">
            {/* Background Ambient Glow */}
            <motion.div 
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ margin: "10000px 0px -100px 0px" }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="absolute top-[20%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-white rounded-full blur-[150px] lg:blur-[200px] z-0 pointer-events-none" 
            />

            {/* Left Side Arrow Accent */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.2 }}
              viewport={{ margin: "10000px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[148px] h-[322px] pointer-events-none z-0"
            >
              <Image
                src="/images/products/arrow-left-duotone.svg"
                alt=""
                width={148}
                height={322}
              />
            </motion.div>

            {/* Right Side Arrow Accent */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.2 }}
              viewport={{ margin: "10000px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[148px] h-[322px] pointer-events-none z-0"
            >
              <Image
                src="/images/products/arrow-right-duotone.svg"
                alt=""
                width={148}
                height={322}
              />
            </motion.div>

            {/* Center Drone Presentation */}
            <motion.div
              initial={{ scale: 0.86, y: 35, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              viewport={{ margin: "10000px 0px -100px 0px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
              className={`relative w-full z-10 flex items-center justify-center ${
                product.id === 'vantage'
                  ? 'max-w-[720px] h-[220px] md:h-[380px] lg:h-[420px]'
                  : product.id === 'warden'
                  ? 'max-w-[860px] h-[180px] md:h-[280px] lg:h-[300px]'
                  : 'max-w-[620px] h-[200px] md:h-[320px] lg:h-[340px]'
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
            </motion.div>

            {/* Exact Telemetry Frame from Figma */}
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[1039px] h-[453px] pointer-events-none z-20">
              {/* 1. Operating Temperature (Top Right: x=747, y=0) */}
              <motion.div 
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "10000px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="absolute top-0 left-[747px] flex flex-col items-start gap-[4px] text-left"
              >
                <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  OPERATING<br />TEMPERATURE
                </span>
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.operatingTemp}
                </span>
              </motion.div>

              {/* 2. Max Flight Time (Middle Left: x=0, y=215) */}
              <motion.div 
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "10000px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="absolute top-[215px] left-0 flex flex-col items-end gap-[4px] text-right"
              >
                <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  MAX FLIGHT TIME
                </span>
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.flightTime}
                </span>
              </motion.div>

              {/* 3. Service Ceiling (Middle Right: x=854, y=215) */}
              <motion.div 
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "10000px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="absolute top-[215px] left-[854px] flex flex-col items-start gap-[4px] text-left"
              >
                <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  SERVICE CEILING
                </span>
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.serviceCeiling}
                </span>
              </motion.div>

              {/* 4. Max Range (Bottom Left: x=167, y=401) */}
              <motion.div 
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "10000px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                className="absolute top-[401px] left-[167px] flex flex-col items-end gap-[4px] text-right"
              >
                <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  MAX RANGE
                </span>
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.maxRange}
                </span>
              </motion.div>

              {/* 5. Payload Capacity (Bottom Right: x=746, y=401, w=214) */}
              <motion.div 
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ margin: "10000px 0px -100px 0px" }}
                transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                className="absolute top-[401px] left-[746px] w-[214px] flex flex-col items-start gap-[4px] text-left"
              >
                <span className="font-sans font-medium text-[24px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  PAYLOAD CAPACITY
                </span>
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.payloadCapacity}
                </span>
              </motion.div>
            </div>

            {/* Mobile / Tablet Stats (Desktop Style) */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ margin: "10000px 0px -60px 0px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:hidden w-full grid grid-cols-2 gap-y-[32px] gap-x-[16px] mt-[32px] z-20 px-4 md:px-12"
            >
              <div className="flex flex-col gap-[4px] text-left">
                <span className="font-sans font-medium text-[18px] md:text-[20px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  OPERATING<br />TEMP
                </span>
                <span className="font-sans font-normal text-[15px] md:text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.operatingTemp}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] text-left">
                <span className="font-sans font-medium text-[18px] md:text-[20px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  MAX FLIGHT<br />TIME
                </span>
                <span className="font-sans font-normal text-[15px] md:text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.flightTime}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] text-left">
                <span className="font-sans font-medium text-[18px] md:text-[20px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  SERVICE<br />CEILING
                </span>
                <span className="font-sans font-normal text-[15px] md:text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.serviceCeiling}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] text-left">
                <span className="font-sans font-medium text-[18px] md:text-[20px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  MAX<br />RANGE
                </span>
                <span className="font-sans font-normal text-[15px] md:text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.maxRange}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] text-left col-span-2">
                <span className="font-sans font-medium text-[18px] md:text-[20px] tracking-[-0.05em] text-[#F00511] uppercase leading-tight">
                  PAYLOAD CAPACITY
                </span>
                <span className="font-sans font-normal text-[15px] md:text-[16px] tracking-[-0.05em] text-white leading-tight">
                  {product.payloadCapacity}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Product Description */}
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "10000px 0px -80px 0px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="font-sans font-normal text-[16px] leading-[1.6] tracking-[-0.02em] text-white/75 text-center max-w-[940px] px-6"
          >
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
          </motion.p>
        </article>
      ))}
    </div>
  );
}
