import React from "react";
import { Footer } from "@/components/sections/Footer";
import { TrustAcrossIndustries } from "@/components/sections/about/TrustAcrossIndustries";
import { Team } from "@/components/sections/about/Team";
import { CoreValues } from "@/components/sections/about/CoreValues";

export default function AboutPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-black flex flex-col items-center pt-[60px] md:pt-[120px] px-6 md:px-[90px]">
        {/* Main Container */}
        <div className="flex flex-col gap-[150px] w-full max-w-[1260px] mx-auto pb-[86px]">
          <TrustAcrossIndustries />
          <Team />
          <CoreValues />
        </div>
      </main>
      <Footer />
    </>
  );
}
