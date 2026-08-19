import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Products } from '@/components/sections/Products';
import { EdgeAI } from '@/components/sections/EdgeAI';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[120px]">
      <div className="w-full flex flex-col items-center gap-[36px]">
        <Hero />
        <TrustBar />
      </div>
      <Products />
      <EdgeAI />
      {/* TODO: Add next sections here */}
    </main>
  );
}
