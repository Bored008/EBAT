import type { Metadata } from 'next';
import { Inter, Oswald, Instrument_Serif, Jersey_25 } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { QuoteModal } from '@/components/ui/QuoteModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
});

const jersey25 = Jersey_25({
  subsets: ['latin'],
  variable: '--font-jersey-25',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'EBAT | Edge AI Drones',
  description: 'Edge AI drones that detect, track, and respond in real time — even off the grid.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} ${instrumentSerif.variable} ${jersey25.variable} font-sans antialiased bg-black text-white`}
      >
        <div className="w-full overflow-x-hidden relative flex flex-col min-h-screen">
          <Navbar />
          <div className="w-full h-[96px] shrink-0"></div>
          {children}
          <QuoteModal />
        </div>
      </body>
    </html>
  );
}
