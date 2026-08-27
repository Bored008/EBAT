'use client';
import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { ProductsHeader } from '@/components/sections/products/ProductsHeader';
import { ProductsList } from '@/components/sections/products/ProductsList';

export default function ProductsPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
        {/* Main Container */}
        <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
          <ProductsHeader />
          <ProductsList />
        </div>
      </main>
      <Footer />
    </>
  );
}
