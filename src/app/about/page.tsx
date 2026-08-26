import React from "react";
import Image from "next/image";
import { Footer } from "@/components/sections/Footer";
import { Team } from "@/components/sections/Team";

const partners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
];

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[120px] px-[24px] md:px-[90px]">
      {/* Main Container */}
      <div className="flex flex-col gap-[120px] w-full max-w-[1260px] mx-auto pb-[86px]">
        {/* Section 1: Trust Across Industries */}
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

        {/* Section 2: Meet the Team */}
        <Team />

        {/* Section 3: Our Core Values */}
        <section className="flex flex-col w-full max-w-[940px] mx-auto gap-[32px] items-center">
          <div className="flex flex-col gap-[8px] items-center text-center max-w-[816px]">
            <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-[1.2] tracking-[-0.05em] text-white">
              Our Core{" "}
              <span className="font-accent italic font-normal underline decoration-[1px] underline-offset-[8px] text-[#F00511]">
                Values
              </span>
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75 max-w-[613px]">
              The principles that guide every drone we build and every mission
              we support.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center w-full gap-[20px]">
            {/* Value 1 */}
            <div className="flex flex-col flex-1 w-full p-[28px_20px] justify-between bg-white min-h-[349px]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" fill="#F00511" />
                <path
                  d="M18.3333 31.1667L11 23.8334L13.585 21.2484L18.3333 25.9784L30.415 13.8967L33 16.5M22 1.83337L5.5 9.16671V20.1667C5.5 30.3417 12.54 39.8567 22 42.1667C31.46 39.8567 38.5 30.3417 38.5 20.1667V9.16671L22 1.83337Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[24px] leading-[1.3] tracking-[-0.02em] text-black">
                  Mission Reliability
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-black/75">
                  Stress-tested for real deployment conditions, with repairs
                  turned around fast enough to keep fleets operational. Downtime
                  isn&apos;t an acceptable outcome - it&apos;s the baseline we
                  build against.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col flex-1 w-full p-[28px_20px] justify-between bg-[#F00511] min-h-[388px]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" fill="white" />
                <path
                  d="M21.9998 3.66663C11.8743 3.66663 3.6665 11.8745 3.6665 22C3.6665 32.1255 11.8743 40.3333 21.9998 40.3333C32.1253 40.3333 40.3332 32.1255 40.3332 22C40.3332 20.3591 40.1132 18.7678 39.7098 17.2535L35.8158 21.1475C35.5182 21.442 35.1879 21.7016 34.8313 21.9211L34.8332 22C34.8332 24.5382 34.0805 27.0193 32.6704 29.1298C31.2602 31.2402 29.2559 32.8851 26.9109 33.8564C24.566 34.8277 21.9856 35.0819 19.4962 34.5867C17.0068 34.0915 14.7201 32.8693 12.9253 31.0745C11.1305 29.2797 9.90827 26.993 9.41309 24.5036C8.91792 22.0142 9.17206 19.4338 10.1434 17.0889C11.1147 14.7439 12.7596 12.7396 14.87 11.3294C16.9805 9.91929 19.4616 9.16663 21.9998 9.16663L22.0787 9.16846C22.2987 8.81646 22.5535 8.48279 22.8523 8.18396L26.7463 4.28996C25.232 3.88663 23.6407 3.66663 21.9998 3.66663ZM21.2408 12.8663C19.4982 13.0104 17.8332 13.6499 16.4422 14.7094C15.0511 15.7689 13.9921 17.2041 13.3901 18.8457C12.7881 20.4874 12.6682 22.267 13.0445 23.9745C13.4208 25.6821 14.2776 27.2465 15.5139 28.483C16.7502 29.7195 18.3144 30.5767 20.0219 30.9533C21.7294 31.3299 23.509 31.2103 25.1508 30.6086C26.7926 30.0069 28.228 28.9481 29.2877 27.5573C30.3474 26.1665 30.9872 24.5015 31.1317 22.759H26.7408C26.6382 22.759 26.5361 22.7559 26.4347 22.7498L25.4447 23.7398C24.7531 24.4077 23.8269 24.7773 22.8655 24.7689C21.9041 24.7606 20.9845 24.375 20.3047 23.6951C19.6248 23.0153 19.2392 22.0957 19.2309 21.1343C19.2225 20.1729 19.5921 19.2467 20.26 18.5551L21.25 17.5651C21.2441 17.4632 21.2411 17.3611 21.2408 17.259V12.8663ZM33.9238 3.89763C33.5888 3.75883 33.22 3.72255 32.8643 3.79337C32.5086 3.86418 32.1819 4.03892 31.9255 4.29546L25.4465 10.7781C25.1027 11.1219 24.9094 11.5881 24.9093 12.0743V16.5L21.5543 19.8513C21.2106 20.1955 21.0176 20.6623 21.018 21.1488C21.0183 21.6353 21.2119 22.1017 21.5562 22.4455C21.9004 22.7892 22.3671 22.9822 22.8536 22.9818C23.3401 22.9815 23.8066 22.7879 24.1503 22.4436L27.4998 19.0923H31.9255C32.4117 19.0922 32.8779 18.899 33.2217 18.5551L39.7025 12.0743C39.9588 11.8179 40.1334 11.4913 40.2041 11.1357C40.2748 10.7801 40.2385 10.4115 40.0998 10.0766C39.961 9.74164 39.7261 9.45534 39.4247 9.25389C39.1233 9.05244 38.7689 8.94487 38.4063 8.94479H35.055V5.58979C35.0547 5.22753 34.9471 4.87348 34.7458 4.57231C34.5445 4.27114 34.2585 4.03637 33.9238 3.89763Z"
                  fill="#F00511"
                />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[24px] leading-[1.3] tracking-[-0.02em] text-white">
                  Precision Engineering
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-white/75">
                  Built for real operating conditions - wind, distance, terrain
                  - not just ideal test environments. Precision is the
                  foundation, not a finishing touch.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col flex-1 w-full p-[28px_20px] justify-between bg-white min-h-[349px]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" fill="#F00511" />
                <path
                  d="M34.9615 9.0383C32.1068 6.18052 28.3882 4.34554 24.3834 3.81842C20.3786 3.2913 16.3118 4.10155 12.8148 6.1233M7.33316 11H7.3515M4.19816 17.6366C3.51083 20.4362 3.49339 23.3585 4.14724 26.1661C4.8011 28.9737 6.10782 31.5876 7.96133 33.7955C9.81483 36.0034 12.1629 37.743 14.8148 38.8733C17.4668 40.0035 20.3479 40.4925 23.2242 40.3004C26.1005 40.1083 28.8911 39.2407 31.3692 37.7679C33.8473 36.2951 35.9432 34.2587 37.4867 31.824C39.0302 29.3893 39.9779 26.6249 40.2526 23.7553C40.5274 20.8857 40.1216 17.9917 39.0682 15.3083"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.7734 14.2266C28.7183 13.1654 27.4578 12.3306 26.069 11.7734C24.6802 11.2161 23.1923 10.9481 21.6964 10.9856C20.2004 11.0232 18.7279 11.3657 17.3688 11.992C16.0097 12.6183 14.7928 13.5153 13.7923 14.6281C12.7919 15.741 12.029 17.0462 11.5504 18.4641C11.0718 19.8819 10.8875 21.3825 11.0089 22.874C11.1302 24.3655 11.5546 25.8166 12.256 27.1384C12.9575 28.4602 13.9212 29.6251 15.0884 30.5616M22 32.9999H22.0184M32.9817 21.3766C33.0814 23.1208 32.7643 24.8636 32.0565 26.4609C31.3488 28.0581 30.2707 29.4638 28.9117 30.5616"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.9997 25.6666C24.0247 25.6666 25.6663 24.025 25.6663 21.9999C25.6663 19.9749 24.0247 18.3333 21.9997 18.3333C19.9746 18.3333 18.333 19.9749 18.333 21.9999C18.333 24.025 19.9746 25.6666 21.9997 25.6666Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.585 19.415L34.9616 9.03833"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-sans font-medium text-[24px] leading-[1.3] tracking-[-0.02em] text-black">
                  Real-Time Intelligence
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[1.5] tracking-[-0.02em] text-black/75">
                  On-device edge AI that detects and responds instantly, with no
                  cloud dependency. Faster insights for commercial ops, faster
                  response for security missions.
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
