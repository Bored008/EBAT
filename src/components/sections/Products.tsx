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
    imageStyle: { left: 9, top: 8.76, width: 282, height: 298, borderRadius: '0px' },
    titleStyle: { left: 8.87, top: 314.76 },
    featuresStyle: { left: 5, top: 342.76, width: 199 },
    buttonStyle: { left: 198.02, top: 369 },
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
    imageStyle: { left: 12, top: 12, width: 382, height: 372, borderRadius: '16px' },
    titleStyle: { left: 12, top: 392, width: 339 },
    featuresStyle: { left: 16, top: 444, width: 242 },
    buttonStyle: { left: 268, top: 464 },
    isLarge: true,
  },
  {
    id: 'edge-ai',
    title: 'Edge AI Devices',
    image: '/images/products/edge-ai-device.png',
    bgImage: '/images/products/fpv-card-bg.svg',
    features: ['- On-device processing', '- Offline capable', '- Real-time detection'],
    width: 300,
    height: 394,
    imageStyle: { left: 9, top: 8.76, width: 282, height: 298, borderRadius: '12px' },
    titleStyle: { left: 8.87, top: 314.76 },
    featuresStyle: { left: 5, top: 343, width: 269 },
    buttonStyle: { left: 198.02, top: 369 },
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
              className="text-black relative bg-transparent bg-no-repeat bg-center bg-cover shrink-0"
              style={{
                width: product.width,
                height: product.height,
                backgroundImage: `url('${product.bgImage}')`,
              }}
            >
              {/* Product Image */}
              <div 
                className="absolute overflow-hidden" 
                style={product.imageStyle}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Title */}
              <h3 className="absolute font-sans font-medium text-[20px] leading-[1.2] -tracking-[0.02em]" style={product.titleStyle}>
                {product.title}
              </h3>

              {/* Product Features */}
              <div className="absolute grid grid-cols-2 gap-x-1 gap-y-[4.2px] text-black/75 text-[11px] leading-[1.2]" style={product.featuresStyle}>
                {product.features.map((feature, idx) => (
                  <span key={idx} className="whitespace-nowrap">{feature}</span>
                ))}
              </div>
              
              {/* Absolute Positioned Button */}
              {product.isLarge ? (
                <Button variant="filled" rightIcon="top-right-arrow" className="absolute" style={product.buttonStyle}>
                  View Product
                </Button>
              ) : (
                <Button variant="filled" rightIcon="top-right-arrow" className="absolute h-[25px] px-[10px] py-[5px] !text-[10px] !rounded-[17px] gap-[3px]" iconClassName="!w-[13px] !h-[13px]" style={product.buttonStyle}>
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
