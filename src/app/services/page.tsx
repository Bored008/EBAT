import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { ServicesHeader } from '@/components/sections/services/ServicesHeader';
import { MasonryGrid } from '@/components/sections/services/MasonryGrid';
import { FixedWingSupport } from '@/components/sections/services/FixedWingSupport';
import { CertificationSection } from '@/components/sections/services/CertificationSection';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1 flex flex-col items-center pt-[32px]">
        <ServicesHeader />
        <MasonryGrid />
        <FixedWingSupport />
        <CertificationSection />
      </main>
      
      <Footer />
    </div>
  );
}
