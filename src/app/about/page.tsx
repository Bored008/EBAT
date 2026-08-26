import React from 'react';
import Image from 'next/image';
import { Footer } from '@/components/sections/Footer';

const partners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06"
];

const team = [
  { name: "Arjun Mehta", role: "Lead Hardware Engineer" },
  { name: "Divya Kapoor", role: "Training & Certification Lead" },
  { name: "Ananya Rao", role: "Field Service Technician" },
  { name: "Arjun Mehta", role: "Lead Hardware Engineer" },
  { name: "Priya Nair", role: "AI/ML Engineer" },
  { name: "Rohan Verma", role: "Flight Operations Specialist" },
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
      
      {/* Main Container */}
      <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
        
        {/* Section 1: Trust Across Industries */}
        <section className="flex flex-col w-full gap-[64px]">
          <div className="flex flex-col gap-[28px] max-w-[842px]">
            <span className="font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
              <span className="text-[#F00511]">/</span> About Us
            </span>
            <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Trust Across <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">Industries</span>
            </h1>
            <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[613px]">
              We&apos;re proud to work alongside partners and certification bodies who share our commitment to reliability, precision, and mission-readiness.
            </p>
          </div>

          <div className="flex flex-row flex-wrap justify-between items-center w-full gap-[20px]">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-row items-center gap-[8px]">
                <div className="w-[20px] h-[20px] rounded-full bg-white/35"></div>
                <span className="font-sans font-medium text-[16px] text-white">{partner}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Meet the Team */}
        <section className="flex flex-col w-full gap-[64px]">
          <div className="flex flex-col gap-[16px] max-w-[842px]">
            <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Meet the <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">Team</span>
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[613px]">
              The engineers, pilots, and specialists who keep every EBAT mission flying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col gap-[20px] w-full">
                {/* Member Image Placeholder */}
                <div className="w-full h-[293px] bg-white/10 rounded-[12px] relative overflow-hidden">
                  {/* <Image src={`/images/team/member-${index + 1}.png`} alt={member.name} fill className="object-cover" /> */}
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-sans font-medium text-[18px] text-white">{member.name}</h3>
                  <p className="font-sans text-[14px] text-white/75">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Our Core Values */}
        <section className="flex flex-col w-full gap-[64px]">
          <div className="flex flex-col gap-[16px] max-w-[842px]">
            <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Our Core <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">Values</span>
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[613px]">
              The principles that guide every drone we build and every mission we support.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-[20px]">
            {/* Value 1 */}
            <div className="flex flex-col flex-1 p-[28px_20px] justify-between bg-white rounded-[12px] min-h-[349px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/75">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[20px] text-black">Mission Reliability</h3>
                <p className="font-sans text-[16px] leading-[1.5] text-black/75">
                  Stress-tested for real deployment conditions, with repairs turned around fast enough to keep fleets operational. Downtime isn&apos;t an acceptable outcome - it&apos;s the baseline we build against.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col flex-1 p-[28px_20px] justify-between bg-[#F00511] rounded-[12px] min-h-[388px] lg:-mt-[20px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[20px] text-white">Precision Engineering</h3>
                <p className="font-sans text-[16px] leading-[1.5] text-white/75">
                  Built for real operating conditions - wind, distance, terrain - not just ideal test environments. Precision is the foundation, not a finishing touch.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col flex-1 p-[28px_20px] justify-between bg-white rounded-[12px] min-h-[349px]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/75">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[20px] text-black">Real-Time Intelligence</h3>
                <p className="font-sans text-[16px] leading-[1.5] text-black/75">
                  On-device edge AI that detects and responds instantly, with no cloud dependency. Faster insights for commercial ops, faster response for security missions.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
