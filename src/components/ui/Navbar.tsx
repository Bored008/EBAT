'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 px-6 md:px-[90px]",
        scrolled || mobileMenuOpen
          ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.08] py-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
          : "bg-transparent pt-[32px] pb-[16px]"
      )}
    >
      <nav className="w-full max-w-[1260px] mx-auto h-[48px] flex items-center justify-between relative">
        
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-[36px] px-[13px] py-[1.5px]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-base transition-colors duration-200 relative py-1",
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] md:w-[152px] h-[32px] md:h-[48px] flex items-center justify-center pointer-events-none z-50">
          <Link href="/" className="pointer-events-auto transition-transform duration-200 hover:scale-105 flex items-center justify-center w-full h-full">
            <div className="relative w-full h-full">
              <Image src="/images/logo.svg" alt="EBAT Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        {/* Right Action */}
        <div className="z-50">
          <Link href="/contact">
            <Button 
              variant={pathname === '/contact' ? 'filled' : 'white'} 
              leftIcon="phone-outline"
              className="text-[12px] md:text-sm px-3 md:px-6 h-[36px] md:h-[44px]"
            >
              Contact<span className="hidden sm:inline">&nbsp;Us</span>
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "font-heading font-bold text-3xl transition-colors duration-200 block",
                      isActive ? "text-[#EF0512]" : "text-white hover:text-white/80"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
