import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

export function Navbar() {
  return (
    <nav className="w-full h-12 flex items-center justify-between px-[213px] relative z-50 mt-[32px]">
      <div className="flex items-center gap-[36px] px-[13px] py-[1.5px]">
        <Link href="/" className="text-[#EF0512] font-medium text-base underline decoration-1 underline-offset-4">
          Home
        </Link>
        <Link href="/products" className="text-white/75 font-medium text-base hover:text-white transition-colors">
          Products
        </Link>
        <Link href="/services" className="text-white/75 font-medium text-base hover:text-white transition-colors">
          Services
        </Link>
        <Link href="/about" className="text-white/75 font-medium text-base hover:text-white transition-colors">
          About Us
        </Link>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px] h-[48px] flex items-center justify-center">
        <Image src="/images/logo.svg" alt="EBAT Logo" width={152} height={48} priority />
      </div>

      <div>
        <Link href="/contact">
          <Button variant="white" leftIcon="phone-outline">Contact Us</Button>
        </Link>
      </div>
    </nav>
  );
}
