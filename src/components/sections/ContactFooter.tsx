import Image from 'next/image';

export function ContactFooter() {
  return (
    <footer className="w-full max-w-[1260px] mx-auto bg-white rounded-t-[24px] relative overflow-hidden flex flex-col pt-[41px] px-[24px] md:px-[48px] pb-[24px] z-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[401px]">
        <Image src="/images/footer/bg.png" alt="Drone Background" fill className="object-cover" />
      </div>

      <div className="relative z-10 w-full flex flex-col xl:flex-row xl:justify-between">
        
        {/* Left Side: Logo & Socials */}
        <div className="flex flex-col gap-[32px] w-full xl:max-w-[345px] mb-[40px] xl:mb-0">
          <Image src="/images/footer/logo.svg" alt="FIRECHEM Logo" width={215} height={68} />
          <div className="flex flex-col gap-[12px] w-[156px]">
            <span className="font-sans font-medium text-[16px] text-black">Follow us :</span>
            <div className="flex flex-row justify-between items-center w-full">
              <a href="#"><Image src="/images/footer/facebook.svg" alt="Facebook" width={24} height={24} /></a>
              <a href="#"><Image src="/images/footer/instagram.svg" alt="Instagram" width={24} height={24} /></a>
              <a href="#"><Image src="/images/footer/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
              <a href="#"><Image src="/images/footer/twitter.svg" alt="Twitter" width={22} height={22} /></a>
            </div>
          </div>
        </div>

        {/* Right Side Columns */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] xl:gap-[180px] xl:pr-[40px]">
          
          {/* Navigation */}
          <div className="flex flex-col gap-[31px]">
            <h3 className="font-sans font-medium text-[20px] text-black">NAVIGATIONS</h3>
            <div className="flex flex-col gap-[24px]">
              <a href="/" className="font-sans text-[16px] text-black/75 hover:text-black transition-colors">Home</a>
              <a href="#" className="font-sans text-[16px] text-black/75 hover:text-black transition-colors">Products</a>
              <a href="#" className="font-sans text-[16px] text-black/75 hover:text-black transition-colors">Services</a>
              <a href="#" className="font-sans text-[16px] text-black/75 hover:text-black transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[17px]">
            <h3 className="font-sans font-medium text-[16px] text-black/75">CONTACT :</h3>
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/phone-fill.svg" alt="Phone" width={24} height={24} />
                <span className="font-sans text-[14px] text-black/75">123 456 789</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
                <span className="font-sans text-[14px] text-black/75">Whatsapp</span>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image src="/images/contact/mail.svg" alt="Email" width={24} height={24} />
                <span className="font-sans text-[14px] text-black/75">ebat@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Legacy Policies */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="font-sans font-medium text-[18px] uppercase text-black">Legacy Policies</h3>
            <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Terms & Conditions</a>
            <a href="#" className="font-sans text-[16px] tracking-[-0.02em] text-black/75 hover:text-black transition-colors">Refund & Cancellations</a>
          </div>

        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className="relative z-10 flex flex-col w-full gap-[12px] mt-[40px] xl:mt-[100px]">
        <div className="w-full h-[1px] bg-black/75 opacity-75"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-[12px] md:gap-0 w-full py-[12px]">
          <div className="flex flex-row items-center gap-[8px]">
            <Image src="/images/footer/copyright.svg" alt="Copyright" width={20} height={20} />
            <span className="font-sans text-[16px] text-black/75">2026 EBAT. All Rights Reserved</span>
          </div>
          <div className="flex flex-row items-center justify-end w-full md:w-auto">
            <span className="font-sans text-[15px] text-black/75 text-center leading-[15px]">
              Designed and Developed by <span className="font-accent italic text-[#F00511] underline">Himanshu Dahiya</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
