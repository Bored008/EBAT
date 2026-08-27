import React from 'react';
import Image from 'next/image';

export function ContactFooter() {
  return (
    <footer className="w-full max-w-[1260px] mx-auto bg-white rounded-t-[24px] relative overflow-hidden flex flex-col pt-[41px] px-[24px] md:px-[48px] pb-[24px] z-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[401px] pointer-events-none">
        <Image src="/images/footer/footer-bg.png" alt="Drone Background" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        
        {/* Desktop Layout (matches exact Figma coordinates with right-anchored legal policies) */}
        <div className="hidden xl:block relative w-full h-[220px]">
          
          {/* Logo & Socials */}
          <div className="absolute left-0 top-0 flex flex-col gap-[32px] w-[345px]">
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
          <div className="absolute left-[380px] xl:left-[405px] top-0 flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[20px] tracking-[-0.02em] text-white">NAVIGATIONS</h3>
            <div className="flex flex-col gap-[24px]">
              <a href="/" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Home</a>
              <a href="/products" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Products</a>
              <a href="/services" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Services</a>
              <a href="/about" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">About Us</a>
            </div>
          </div>

          {/* Contact */}
          <div className="absolute left-[680px] xl:left-[746px] top-0 flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[16px] text-black/75">CONTACT :</h3>
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/phone-fill.svg" alt="Phone" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">123 456 789</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/whatsapp.svg" alt="Whatsapp" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">Whatsapp</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/mail.svg" alt="Email" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">ebat@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Legal Policies (Right Anchored) */}
          <div className="absolute right-0 top-0 flex flex-col gap-[18px] w-[180px]">
            <h3 className="font-sans font-medium text-[18px] uppercase text-black">Legal Policies</h3>
            <div className="flex flex-col gap-[12px]">
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Terms & Conditions</a>
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Refund & Cancellations</a>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Layout */}
        <div className="flex xl:hidden flex-col md:flex-row flex-wrap gap-[40px] md:gap-[80px]">
          {/* Logo & Socials */}
          <div className="flex flex-col gap-[32px] w-full max-w-[345px]">
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
          <div className="flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[20px] tracking-[-0.02em] text-white">NAVIGATIONS</h3>
            <div className="flex flex-col gap-[24px]">
              <a href="/" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Home</a>
              <a href="/products" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Products</a>
              <a href="/services" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">Services</a>
              <a href="/about" className="font-sans text-[16px] leading-[0.82em] text-white/75 hover:text-white transition-colors">About Us</a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[16px] text-black/75">CONTACT :</h3>
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/phone-fill.svg" alt="Phone" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">123 456 789</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/whatsapp.svg" alt="Whatsapp" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">Whatsapp</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/mail.svg" alt="Email" width={22} height={22} />
                <span className="font-sans text-[14px] text-black/75">ebat@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Legal Policies */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[18px] uppercase text-black">Legal Policies</h3>
            <div className="flex flex-col gap-[12px]">
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Terms & Conditions</a>
              <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Refund & Cancellations</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className="relative z-10 flex flex-col w-full gap-[12px] mt-[40px] xl:mt-[60px]">
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
    </footer>
  );
}
