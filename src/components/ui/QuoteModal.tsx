'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export function QuoteModalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get('quote') === 'true';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('quote');
    router.push(`${pathname}?${newParams.toString()}`);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-center pt-[90px] md:pt-[100px]">
      {/* Background Blur Overlay */}
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-[12.5px]"
            onClick={closeModal}
          />
      
      {/* Form Container */}
      <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[833px] h-full bg-white rounded-t-[12px] border border-black/60 border-b-0 p-[32px] md:p-[32px_44px] flex flex-col gap-[32px] overflow-y-auto shadow-2xl pb-[120px]">
        {/* Info Section */}
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-sans font-semibold text-[24px] text-[#F00511]">
            Personal & Company Info
          </h2>
          
          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">First Name *</label>
              <input 
                type="text" 
                placeholder="Enter your first name" 
                className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
              />
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter your last name" 
                className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-normal text-[15px] text-black/75">Company Name *</label>
            <input 
              type="text" 
              placeholder="Enter your company name" 
              className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Email Address *</label>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
              />
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Phone Number *</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Country *</label>
              <div className="relative">
                <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                  <option value="" disabled hidden className="text-black/25">Choose your country</option>
                  <option value="usa" className="text-black">United States</option>
                  <option value="uk" className="text-black">United Kingdom</option>
                  <option value="ind" className="text-black">India</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">State *</label>
              <div className="relative">
                <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                  <option value="" disabled hidden className="text-black/25">Choose your State</option>
                  <option value="ny" className="text-black">New York</option>
                  <option value="ca" className="text-black">California</option>
                  <option value="tx" className="text-black">Texas</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-normal text-[15px] text-black/75">City *</label>
            <div className="relative">
              <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                <option value="" disabled hidden className="text-black/25">Choose your city</option>
                <option value="nyc" className="text-black">New York City</option>
                <option value="la" className="text-black">Los Angeles</option>
                <option value="sf" className="text-black">San Francisco</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Product Selection Section */}
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-sans font-semibold text-[24px] text-[#F00511]">
            Product Selection
          </h2>

          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Product Category *</label>
              <div className="relative">
                <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                  <option value="" disabled hidden className="text-black/25">FPV / Fixed Wing / Edge AI Devices</option>
                  <option value="fpv" className="text-black">FPV Drones</option>
                  <option value="fixed" className="text-black">Fixed Wing</option>
                  <option value="edge" className="text-black">Edge AI Devices</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Drone Model</label>
              <div className="relative">
                <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                  <option value="" disabled hidden className="text-black/25">Select model</option>
                  <option value="sentinel" className="text-black">Sentinel</option>
                  <option value="vantage" className="text-black">Vantage</option>
                  <option value="warden" className="text-black">Warden</option>
                  <option value="eagle" className="text-black">Eagle</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[12px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Quantity required *</label>
              <input 
                type="number" 
                placeholder="Enter number of units" 
                className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50"
              />
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label className="font-sans font-normal text-[15px] text-black/75">Intended Use Case *</label>
              <div className="relative">
                <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                  <option value="" disabled hidden className="text-black/25">Commercial / Defense / Other</option>
                  <option value="commercial" className="text-black">Commercial</option>
                  <option value="defense" className="text-black">Defense</option>
                  <option value="other" className="text-black">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-normal text-[15px] text-black/75">Deployment Timeline *</label>
            <div className="relative">
              <select className="w-full px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] appearance-none bg-white outline-none focus:border-black/50 invalid:text-black/25" required defaultValue="">
                <option value="" disabled hidden className="text-black/25">Immediate / 1-3 months / 3-6 months</option>
                <option value="immediate" className="text-black">Immediate</option>
                <option value="1-3" className="text-black">1-3 months</option>
                <option value="3-6" className="text-black">3-6 months</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8.5 7L16 1" stroke="black" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-normal text-[15px] text-black/75">Project Requirement</label>
            <textarea 
              placeholder="Tell us about your mission requirements, terrain, or specific capabilities needed"
              className="w-full h-[140px] px-[12px] py-[10px] border border-black/25 rounded-lg text-black text-[12px] placeholder:text-black/25 outline-none focus:border-black/50 resize-y"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={closeModal}
          className="w-full bg-[#F00511] text-white font-medium text-[14px] py-[12px] rounded-lg mt-2 mb-4"
        >
          Submit Quote Request
        </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function QuoteModal() {
  return (
    <React.Suspense fallback={null}>
      <QuoteModalContent />
    </React.Suspense>
  );
}

