import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const products = [
  {
    id: 'fpv',
    title: 'FPV Drones',
    image: '/images/products/fpv-drone.png',
    features: ['- Live Video feed', '- Rapid Response', '- Precision maneuvering'],
    width: 300,
    height: 394,
    imageHeight: 298,
    isLarge: false,
  },
  {
    id: 'ucav',
    title: 'Unmanned Combat Aerial Vehicle (UCAV)',
    image: '/images/products/ucav-drone.png',
    features: ['- Long-range endurance', '- Wide-area coverage', '- Border patrol ready'],
    width: 406,
    height: 495,
    imageHeight: 372,
    isLarge: true,
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Devices',
    image: '/images/products/edge-ai-device.png',
    features: ['- On-device processing', '- Offline capable', '- Real-time detection'],
    width: 300,
    height: 394,
    imageHeight: 298,
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
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-[20px] w-full">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white flex flex-col p-[9px] lg:p-[12px] text-black w-full"
              style={{
                maxWidth: product.width,
                height: product.height,
                borderRadius: product.isLarge ? '0' : '0', // Adjust if we need rounding
              }}
            >
              {/* Product Image */}
              <div 
                className="relative w-full" 
                style={{ height: product.imageHeight, borderRadius: product.isLarge ? '16px' : '12px', overflow: 'hidden' }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Title */}
              <h3 className="font-sans font-medium text-[20px] leading-tight -tracking-[0.02em] mt-3">
                {product.title}
              </h3>

              {/* Product Features & Button */}
              <div className="mt-auto flex flex-row items-end justify-between">
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-black/75 text-[11px] leading-tight max-w-[200px]">
                  {product.features.map((feature, idx) => (
                    <span key={idx}>{feature}</span>
                  ))}
                </div>
                
                {product.isLarge ? (
                  <Button variant="filled" rightIcon="top-right-arrow">
                    View Product
                  </Button>
                ) : (
                  <Button variant="filled" rightIcon="top-right-arrow" className="h-[25px] px-[10px] py-[5px] text-[10px]">
                    View Product
                  </Button>
                )}
              </div>
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
