import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ContactFooter } from '@/components/sections/ContactFooter';

export default function ContactPage() {
  return (
    <>
    <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
      
      {/* Main Container */}
      <div className="flex flex-col gap-[86px] w-full max-w-[1260px] mx-auto pb-[86px]">
        
        {/* Content Container */}
        <div className="flex flex-col w-full items-center gap-[32px]">
          
          {/* Intro Container (wraps Header and Form/Map split) */}
          <div className="flex flex-col w-full gap-[62px]">
            
            {/* Header Container */}
            <div className="flex flex-col gap-[8px] max-w-[842px]">
              
              {/* Title Container (304:1434) */}
              <div className="flex flex-col gap-[28px] max-w-[613px]">
                <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
                  <span className="text-[#F00511]">/</span> Contact Us
                </span>
                <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] md:leading-[86px] tracking-[-0.05em] text-white">
                  Get in Touch with <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">Our Team</span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white max-w-[613px]">
                Whether you&apos;re scaling commercial operations or securing critical ground, our team is ready to help you find the right drone solution.
              </p>

            </div>

            {/* Container: Form + Direct Approach */}
            <div className="flex flex-col xl:flex-row w-full gap-[40px] xl:gap-[87px]">
              
              {/* Form Container (Left) */}
              <div className="flex flex-col p-[32px] items-center gap-[28px] bg-white rounded-[12px] w-full xl:max-w-[640px]">
                <div className="flex flex-col w-full gap-[8px]">
                  <h2 className="font-sans font-semibold text-[24px] leading-[28px] text-[#0A0A0A]">Send us a message</h2>
                  <p className="font-sans text-[14px] leading-[20px] text-[#737373]">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>
                
                <form className="flex flex-col w-full max-w-[572px] gap-[22px]">
                  {/* Row 1 */}
                  <div className="flex flex-col sm:flex-row w-full gap-[11px]">
                    <div className="flex flex-col flex-1 gap-[9px]">
                      <label className="font-sans font-medium text-[15px] leading-[20px] text-[#0A0A0A]">First Name <span className="text-[#F00511]">*</span></label>
                      <div className="flex flex-row items-center border border-[#E5E5E5] rounded-[6px] px-[13px] py-[11px]">
                        <input type="text" placeholder="John" className="bg-transparent text-[14px] text-black outline-none w-full placeholder:text-[#9CA3AF]" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-[9px]">
                      <label className="font-sans font-medium text-[15px] leading-[20px] text-[#0A0A0A]">Last Name <span className="text-[#F00511]">*</span></label>
                      <div className="flex flex-row items-center border border-[#E5E5E5] rounded-[6px] px-[13px] py-[11px]">
                        <input type="text" placeholder="Doe" className="bg-transparent text-[14px] text-black outline-none w-full placeholder:text-[#9CA3AF]" />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col w-full gap-[9px]">
                    <label className="font-sans font-medium text-[15px] leading-[20px] text-[#0A0A0A]">Email Address <span className="text-[#F00511]">*</span></label>
                    <div className="flex flex-row items-center border border-[#E5E5E5] rounded-[6px] px-[13px] py-[11px]">
                      <input type="email" placeholder="john@company.com" className="bg-transparent text-[14px] text-black outline-none w-full placeholder:text-[#9CA3AF]" />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col w-full gap-[9px]">
                    <label className="font-sans font-medium text-[15px] leading-[20px] text-[#0A0A0A]">Company</label>
                    <div className="flex flex-row items-center border border-[#E5E5E5] rounded-[6px] px-[13px] py-[11px]">
                      <input type="text" placeholder="Let us know who you represent" className="bg-transparent text-[14px] text-black outline-none w-full placeholder:text-[#9CA3AF]" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col w-full gap-[9px]">
                    <label className="font-sans font-medium text-[15px] leading-[20px] text-[#0A0A0A]">Message <span className="text-[#F00511]">*</span></label>
                    <div className="flex flex-row items-start border border-[#E5E5E5] rounded-[6px] px-[13px] py-[9px] min-h-[120px]">
                      <textarea placeholder="Tell us about your project..." className="bg-transparent text-[14px] leading-[20px] text-black outline-none w-full h-full resize-none placeholder:text-[#9CA3AF]"></textarea>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex flex-row items-center gap-[8px]">
                    <Image src="/images/contact/checkbox.svg" alt="Checkbox" width={18} height={18} className="cursor-pointer brightness-0" />
                    <span className="font-sans text-[14px] leading-[20px] text-black">
                      <span className="text-black/75">I agree to the</span> Terms of Service <span className="text-black/75">and</span> Privacy Policy
                    </span>
                  </div>

                  {/* Submit */}
                  <div className="w-full mt-[10px]">
                    <Button variant="filled" className="w-full rounded-[6px] py-[9px] h-auto">Submit</Button>
                  </div>
                </form>
              </div>

              {/* Direct Approach Container (Right) */}
              <div className="flex flex-col flex-1 gap-[40px] justify-between">
                
                {/* Contact Methods */}
                <div className="flex flex-col w-full gap-[15px]">
                  <h2 className="font-sans font-medium text-[32px] tracking-[-0.02em] text-white">
                    Prefer a <span className="font-accent italic text-[#F00511]">Direct</span> Approach?
                  </h2>
                  <div className="flex flex-col gap-[14px]">
                    <div className="flex flex-row items-center gap-[8px]">
                      <Image src="/images/contact/phone-fill.svg" alt="Phone" width={24} height={24} className="brightness-0 invert" />
                      <span className="font-sans text-[14px] text-white/75">123 456 789</span>
                    </div>
                    <div className="flex flex-row items-center gap-[8px]">
                      <Image src="/images/contact/whatsapp.svg" alt="Whatsapp" width={24} height={24} className="brightness-0 invert" />
                      <span className="font-sans text-[14px] text-white/75">Whatsapp</span>
                    </div>
                    <div className="flex flex-row items-center gap-[8px]">
                      <Image src="/images/contact/mail.svg" alt="Email" width={24} height={24} className="brightness-0 invert" />
                      <span className="font-sans text-[14px] text-white/75">ebat@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Map Container */}
                <div className="relative w-full min-h-[300px] flex-1 rounded-[12px] overflow-hidden bg-white mt-auto">
                  <Image src="/images/contact/map.png" alt="Map" fill sizes="(max-width: 1280px) 100vw, 640px" className="object-cover" />
                  
                  {/* Map Icon inside map */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src="/images/contact/location.svg" alt="Map Marker" width={39} height={39} className="scale-[2.1]" />
                  </div>

                  {/* Office Visit Container */}
                  <div className="absolute bottom-[18px] left-[18px] right-[18px] flex flex-col p-[16px] gap-[10px] bg-white rounded-[12px] shadow-lg">
                    <h3 className="font-sans font-medium text-[18px] text-black">Visit our Office</h3>
                    <div className="flex flex-row items-center gap-[4px]">
                      <Image src="/images/contact/location-red.svg" alt="Location" width={14} height={14} />
                      <span className="font-sans text-[12px] tracking-[-0.02em] text-black/75">Sonipat, Murthal Khas, Haryana 131039</span>
                    </div>
                    <button className="flex flex-row items-center justify-center gap-[3px] border border-black/50 rounded-[4px] py-[6px] px-[12px] w-[116px] text-black/50 hover:bg-black/5 transition-colors">
                      <span className="font-sans text-[10.5px]">Get a direction</span>
                      <Image src="/images/contact/right-arrow.svg" alt="Arrow" width={13.5} height={13.5} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Bottom Section */}
          <div className="flex flex-col w-full max-w-[1260px] gap-[32px]">
            <div className="w-full h-[1px] bg-white/50"></div>
            
            {/* Red Box with Info */}
            <div className="flex flex-col lg:flex-row w-full p-[32px] gap-[44px] bg-[#F00511] rounded-[12px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)]">
              
              {/* Office Hours */}
              <div className="flex flex-col flex-1 h-full gap-[16px]">
                <h3 className="font-sans font-semibold text-[18px] leading-[28px] text-white">Office Hours</h3>
                <div className="flex flex-col pt-[16px] h-full justify-between min-h-[92px]">
                  <div className="flex flex-row justify-between pb-[8px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">Monday - Friday</span>
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex flex-row justify-between py-[8px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">Saturday</span>
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex flex-row justify-between pt-[8px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">Sunday</span>
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col flex-1 h-full gap-[16px] lg:max-w-[598px]">
                <h3 className="font-sans font-semibold text-[18px] leading-[28px] text-white">Contact Information</h3>
                <div className="flex flex-col w-full gap-[8px]">
                  <div className="flex flex-row justify-between items-center w-full min-h-[20px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75 w-[60px]">Email</span>
                    <span className="font-sans text-[14px] text-white/75">ebat@gmail.com</span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full min-h-[20px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75 w-[60px]">Phone</span>
                    <span className="font-sans text-[14px] leading-[20px] text-white/75">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full min-h-[20px]">
                    <span className="font-sans text-[14px] leading-[20px] text-white/75 w-[60px]">Address</span>
                    <span className="font-sans text-[14px] leading-[20px] text-white/75 text-right">123 Innovation St, Tech City</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </main>
    <ContactFooter />
    </>
  );
}
