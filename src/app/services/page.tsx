import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { ServicesHeader } from '@/components/sections/services/ServicesHeader';
import { MasonryGrid } from '@/components/sections/services/MasonryGrid';
import { FixedWingSupport } from '@/components/sections/services/FixedWingSupport';
import { CertificationSection } from '@/components/sections/services/CertificationSection';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="w-full flex-1 flex flex-col items-center pt-[60px] md:pt-[120px] px-6 md:px-[90px]">
        {/* Main Container */}
        <div className="flex flex-col gap-[80px] md:gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
          <div className="flex flex-col gap-[40px] md:gap-[60px] w-full">
            <ServicesHeader />
            <MasonryGrid />
          </div>
          <FixedWingSupport />
          <CertificationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
