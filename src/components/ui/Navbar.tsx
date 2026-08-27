'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-[24px] md:px-[90px]",
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/[0.08] py-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
          : "bg-transparent pt-[32px] pb-[16px]"
      )}
    >
      <nav className="w-full max-w-[1260px] mx-auto h-[48px] flex items-center justify-between relative">
        {/* Navigation Links */}
        <div className="flex items-center gap-[20px] md:gap-[36px] px-[13px] py-[1.5px]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-sm md:text-base transition-colors duration-200 relative py-1",
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

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px] h-[48px] flex items-center justify-center pointer-events-none">
          <Link href="/" className="pointer-events-auto transition-transform duration-200 hover:scale-105">
            <Image src="/images/logo.svg" alt="EBAT Logo" width={152} height={48} priority />
          </Link>
        </div>

        {/* Right Action */}
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
    </motion.header>
  );
}

