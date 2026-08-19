import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const products = [
  {
    id: 'fpv',
    title: 'FPV Drones',
    image: '/images/products/fpv-drone.png',
    bgImage: '/images/products/fpv-card-bg.svg',
    features: ['- Live Video feed', '- Rapid Response ', '- Precision maneuvering'],
    width: 300,
    height: 394,
    imageHeight: 298,
    imageRadius: '0px',
    padding: 9,
    isLarge: false,
  },
  {
    id: 'ucav',
    title: 'Unmanned Combat Aerial Vehicle (UCAV)',
    image: '/images/products/ucav-drone.png',
    bgImage: '/images/products/ucav-card-bg.svg',
    features: ['- Border patrol ready', '- Wide-area coverage', '- Long-range endurance'],
    width: 406,
    height: 495,
    imageHeight: 372,
    imageRadius: '16px',
    padding: 12,
    isLarge: true,
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Devices',
    image: '/images/products/edge-ai-device.png',
    bgImage: '/images/products/fpv-card-bg.svg', // Edge AI uses the same template
    features: ['- On-device processing', '- Offline capable', '- Real-time detection'],
    width: 300,
    height: 394,
    imageHeight: 298,
    imageRadius: '12px',
    padding: 9,
    isLarge: false,
  },
];

export function Products() {
  return (
    <section className="relative w-full flex flex-col items-center px-4">
      {/* Background Glow */}
      <div className="absolute top-[14px] right-[calc(50%-494px/2-238px)] w-[494px] h-[248px] bg-[rgba(255,255,255,0.52)] blur-[111.2px] -z-20 pointer-events-none" />

      <div className="flex flex-col items-center gap-[51px] w-full max-w-[1046px]">
        {/* Title Container */}
        <div className="flex flex-col items-center gap-[8px] text-center">
          <h2 className="font-heading font-bold text-[64px] leading-tight text-white m-0">
            Our Best Selling <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">Drones</span>
          </h2>
          <p className="font-sans text-[16px] text-white/75 -tracking-[0.02em]">
            From close-range recon to long-range defense - proven across every mission type.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-[20px] w-full justify-center">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col text-black w-full relative bg-transparent bg-no-repeat bg-center bg-cover"
              style={{
                maxWidth: product.width,
                height: product.height,
                padding: product.padding,
                backgroundImage: `url('${product.bgImage}')`,
              }}
            >
              {/* Product Image */}
              <div 
                className="relative w-full" 
                style={{ height: product.imageHeight, borderRadius: product.imageRadius, overflow: 'hidden' }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Title */}
              <h3 className="font-sans font-medium text-[20px] leading-[1.2] -tracking-[0.02em] mt-[8px]">
                {product.title}
              </h3>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-x-1 gap-y-[4.2px] text-black/75 text-[11px] leading-[1.2] mt-[4px] w-[85%]">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="whitespace-nowrap">{feature}</span>
                ))}
              </div>
              
              {/* Absolute Positioned Button */}
              {product.isLarge ? (
                <Button variant="filled" rightIcon="top-right-arrow" className="absolute bottom-[0px] right-[8px]">
                  View Product
                </Button>
              ) : (
                <Button variant="filled" rightIcon="top-right-arrow" className="absolute bottom-[0px] right-[10px] h-[25px] px-[10px] py-[5px] !text-[10px] !rounded-[17px] gap-[3px]">
                  View Product
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <Button variant="outline" rightIcon="top-right-arrow" className="px-[32px]">
          View All Products
        </Button>
      </div>
    </section>
  );
}
