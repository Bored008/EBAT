import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <TrustBar />
      {/* TODO: Add next sections here */}
    </main>
  );
}
