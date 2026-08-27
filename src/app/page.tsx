import { Hero } from '@/components/sections/landing/Hero';
import { TrustBar } from '@/components/sections/landing/TrustBar';
import { Products } from '@/components/sections/landing/Products';
import { EdgeAI } from '@/components/sections/landing/EdgeAI';
import { Services } from '@/components/sections/landing/Services';
import { WhyChoose } from '@/components/sections/landing/WhyChoose';
import { FAQ } from '@/components/sections/landing/FAQ';
import { CTA } from '@/components/sections/landing/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center gap-[120px]">
      <div className="w-full flex flex-col items-center gap-[36px]">
        <Hero />
        <TrustBar />
      </div>
      <Products />
      <EdgeAI />
      <Services />
      <WhyChoose />
      <FAQ />
      <CTA />
    </main>
    <Footer />
    </>
  );
}
