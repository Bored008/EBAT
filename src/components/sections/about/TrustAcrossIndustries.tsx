import React from "react";

const partners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
];

export function TrustAcrossIndustries() {
  return (
    <section className="flex flex-col w-full gap-[56px] items-center">
      <span className="self-start font-sans font-normal text-[16px] tracking-[-0.05em] text-white/75">
        <span className="text-[#F00511]">/</span> About Us
      </span>

      <div className="flex flex-col gap-[8px] items-center text-center max-w-[842px]">
        <h1 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
          Trust Across{" "}
          <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">
            Industries
          </span>
        </h1>
        <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[613px]">
          We&apos;re proud to work alongside partners and certification
          bodies who share our commitment to reliability, precision, and
          mission-readiness.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center w-full gap-[20px]">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-row items-center gap-[8px]">
            <div className="w-[20px] h-[20px] rounded-full bg-white/35"></div>
            <span className="font-sans font-medium text-[16px] text-white">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
