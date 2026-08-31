import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Footer() {
  return (
    <footer className="w-full max-w-[1260px] mx-auto mt-[120px] bg-white rounded-t-[24px] relative overflow-hidden flex flex-col pt-[41px] px-[24px] md:px-[48px] pb-[24px] z-10">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-full lg:h-[497px] -z-10 pointer-events-none overflow-hidden rounded-t-[24px]">
        <Image 
          src="/images/footer/footer-bg.png" 
          alt="Footer Background" 
          fill 
          sizes="100vw"
          className="object-cover object-[15%_0%] lg:object-top"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* Responsive Grid for Mobile/Tablet, Absolute for Desktop */}
        
        {/* Desktop Layout (matches exact Figma coordinates with right-anchored form) */}
        <div className="hidden lg:block relative w-full h-[400px]">
          
          {/* Logo & Map Column */}
          <div className="absolute left-0 top-0 flex flex-col gap-[32px] w-[345px]">
            <Image src="/images/footer/logo.svg" alt="EBAT Logo" width={215} height={68} />
            
            {/* Social Media */}
            <div className="flex flex-col gap-[12px] w-[156px]">
              <span className="font-sans font-medium text-[16px] text-white">Follow us :</span>
              <div className="flex flex-row justify-between items-center w-full">
                <a href="#"><Image src="/images/footer/facebook.svg" alt="Facebook" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/instagram.svg" alt="Instagram" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/twitter.svg" alt="Twitter" width={22} height={22} /></a>
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full h-[186.94px] rounded-[10px] overflow-hidden">
              <Image src="/images/footer/map-bg.png" alt="Map" fill sizes="(max-width: 1260px) 100vw, 416px" className="object-cover" />
              <div className="absolute top-[11px] left-[16px] bg-white px-[10.5px] py-[4.4px] flex items-center justify-center">
                <span className="font-sans text-[#1475EF] text-[7px]">View larger map</span>
              </div>
              <div className="absolute bottom-[20px] right-[20px]">
                <Image src="/images/footer/location.svg" alt="Location" width={21} height={21} />
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="absolute left-[380px] xl:left-[405px] top-0 flex flex-col gap-[31px]">
            <h3 className="font-sans font-medium text-[20px] tracking-[-0.02em] text-white">NAVIGATIONS</h3>
            <div className="flex flex-col gap-[24px]">
              <a href="/" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Home</a>
              <a href="/products" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Products</a>
              <a href="/services" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Services</a>
              <a href="/about" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">About Us</a>
            </div>
          </div>

          {/* Message Form Column (Right Anchored) */}
          <div className="absolute right-0 top-0 flex flex-col gap-[24px] w-[405px]">
            <div className="flex flex-col gap-[12px]">
              <h3 className="font-sans font-semibold text-[32px] text-black">Send Us a Message</h3>
              <p className="font-sans text-[14px] text-black/75 tracking-[-0.02em]">
                Fill up the form and our team will get back to you with in 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-[16px] w-full">
              {/* Row 1: First Name & Phone */}
              <div className="grid grid-cols-2 gap-[14px] w-full">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans font-medium text-[14px] tracking-[-0.02em] text-black/75">First name</label>
                  <div className="flex flex-row items-center gap-[7px] border border-black/25 rounded-[5px] px-[8px] py-[6px]">
                    <Image src="/images/footer/person.svg" alt="Person" width={13} height={13} />
                    <input type="text" placeholder="Enter first name" className="bg-transparent text-[12px] text-black outline-none w-full placeholder:text-black/25" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans font-medium text-[14px] tracking-[-0.02em] text-black/75">Phone</label>
                  <div className="flex flex-row items-center gap-[7px] border border-black/25 rounded-[5px] px-[8px] py-[6px]">
                    <Image src="/images/footer/phone-outline.svg" alt="Phone" width={13} height={13} />
                    <input type="text" placeholder="Enter phone" className="bg-transparent text-[12px] text-black outline-none w-full placeholder:text-black/25" />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Company (left col) | Message (right col) */}
              <div className="grid grid-cols-2 gap-[14px] w-full">
                {/* Left Col */}
                <div className="flex flex-col gap-[16px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-sans font-medium text-[14px] tracking-[-0.02em] text-black/75">Email</label>
                    <div className="flex flex-row items-center gap-[7px] border border-black/25 rounded-[5px] px-[8px] py-[6px]">
                      <Image src="/images/footer/email.svg" alt="Email" width={13} height={13} />
                      <input type="email" placeholder="Enter email" className="bg-transparent text-[12px] text-black outline-none w-full placeholder:text-black/25" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-sans font-medium text-[14px] tracking-[-0.02em] text-black/75">Company Name</label>
                    <div className="flex flex-row items-center gap-[7px] border border-black/25 rounded-[5px] px-[8px] py-[6px]">
                      <Image src="/images/footer/building.svg" alt="Company" width={13} height={13} />
                      <input type="text" placeholder="Enter Company Name" className="bg-transparent text-[12px] text-black outline-none w-full placeholder:text-black/25" />
                    </div>
                  </div>
                </div>

                {/* Right Col: Message */}
                <div className="flex flex-col gap-[8px] h-full">
                  <label className="font-sans font-medium text-[14px] tracking-[-0.02em] text-black/75">Message</label>
                  <div className="flex flex-row items-start gap-[7px] border border-black/25 rounded-[5px] px-[8px] py-[6px] flex-1">
                    <div className="mt-1 flex-shrink-0"><Image src="/images/footer/notebook.svg" alt="Message" width={13} height={13} /></div>
                    <textarea placeholder="Enter your message" className="bg-transparent text-[12px] text-black outline-none w-full h-full resize-none placeholder:text-black/25"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="filled" className="w-full rounded-[5px] py-[7px]">Submit</Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-[40px] lg:hidden mb-[40px]">
          {/* Logo & Social */}
          <div className="flex flex-col gap-[32px]">
            <Image src="/images/footer/logo.svg" alt="EBAT Logo" width={215} height={68} />
            <div className="flex flex-col gap-[12px] w-[156px]">
              <span className="font-sans font-medium text-[16px] text-white">Follow us :</span>
              <div className="flex flex-row justify-between items-center w-full">
                <a href="#"><Image src="/images/footer/facebook.svg" alt="Facebook" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/instagram.svg" alt="Instagram" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
                <a href="#"><Image src="/images/footer/twitter.svg" alt="Twitter" width={22} height={22} /></a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-[31px]">
            <h3 className="font-sans font-medium text-[20px] tracking-[-0.02em] text-white">NAVIGATIONS</h3>
            <div className="flex flex-col gap-[24px]">
              <a href="/" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Home</a>
              <a href="/products" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Products</a>
              <a href="/services" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Services</a>
              <a href="/about" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">About Us</a>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-[186.94px] rounded-[10px] overflow-hidden max-w-[400px]">
            <Image src="/images/footer/map-bg.png" alt="Map" fill sizes="(max-width: 1260px) 100vw, 416px" className="object-cover" />
            <div className="absolute top-[11px] left-[16px] bg-white px-[10.5px] py-[4.4px] flex items-center justify-center">
              <span className="font-sans text-[#1475EF] text-[7px]">View larger map</span>
            </div>
            <div className="absolute bottom-[20px] right-[20px]">
              <Image src="/images/footer/location.svg" alt="Location" width={21} height={21} />
            </div>
          </div>

          {/* Form is hidden on mobile */}
        </div>

        {/* Bottom Line & Copyright */}
        <div className="flex flex-col w-full gap-[12px] lg:mt-[24px]">
          <div className="w-full h-[1px] bg-black/75 opacity-75"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-[12px] md:gap-0 w-full py-[12px]">
            <div className="flex flex-row items-center gap-[8px]">
              <Image src="/images/footer/copyright.svg" alt="Copyright" width={20} height={20} />
              <span className="font-sans text-[16px] text-black/75">2026 EBAT. All Rights Reserved</span>
            </div>
            <div className="flex flex-row items-center gap-[18px]">
              <span className="font-sans text-[15px] text-black/75 text-center leading-[15px]">
                Designed and Developed by <span className="font-accent italic text-[#F00511]">Himanshu Dahiya</span>
              </span>
            </div>
            <div className="flex flex-row items-center gap-[18px]">
              <a href="#" className="font-sans text-[15px] text-black/75 underline">Privacy Policy</a>
              <a href="#" className="font-sans text-[15px] text-black/75 underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
