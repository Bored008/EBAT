'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <div className="w-full pt-[32px] px-[24px] md:px-[90px] relative z-50">
      <nav className="w-full max-w-[1260px] mx-auto h-[48px] flex items-center justify-between relative">
        <div className="flex items-center gap-[36px] px-[13px] py-[1.5px]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-base transition-colors",
                  isActive
                    ? "text-[#EF0512] underline decoration-1 underline-offset-4"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px] h-[48px] flex items-center justify-center">
          <Link href="/">
            <Image src="/images/logo.svg" alt="EBAT Logo" width={152} height={48} priority />
          </Link>
        </div>

        <div>
          <Link href="/contact">
            <Button 
              variant={pathname === '/contact' ? 'filled' : 'white'} 
              leftIcon="phone-outline"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
