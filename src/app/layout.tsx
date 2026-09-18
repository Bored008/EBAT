import type { Metadata } from 'next';
import { Inter, Oswald, Instrument_Serif, Jersey_25 } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { QuoteModal } from '@/components/ui/QuoteModal';
import LenisProvider from '@/components/LenisProvider';
import { TransitionProvider } from '@/context/TransitionContext';

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
  metadataBase: new URL('https://ebat-omega.vercel.app'),
  title: {
    default: 'EBAT | EnlivenBot AI - Autonomous Edge AI Drones',
    template: '%s | EBAT',
  },
  description: 'EBAT (EnlivenBot AI) builds autonomous Edge AI drones that detect, track, and respond in real time - even off the grid. Commercial operations, FPV repair, and defense-grade aerospace systems.',
  keywords: [
    'EBAT',
    'EBAT drone',
    'EBAT EnlivenBot',
    'EnlivenBot AI',
    'Edge AI Drones',
    'Autonomous Drones',
    'Surveillance UAV',
    'FPV Drone Repair',
    'Pilot Training',
  ],
  authors: [{ name: 'EBAT - EnlivenBot AI' }],
  creator: 'Himanshu Dahiya',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ebat-omega.vercel.app',
    siteName: 'EBAT - EnlivenBot AI',
    title: 'EBAT | Autonomous Edge AI Drones',
    description: 'Autonomous Edge AI drones engineered for defense, tactical surveillance, and enterprise missions.',
  },
  icons: {
    icon: '/images/logoIcon.svg',
  },
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
        <LenisProvider>
          <TransitionProvider>
            <div className="w-full overflow-x-hidden relative flex flex-col min-h-screen">
              <Navbar />
              <div className="w-full h-[96px] shrink-0"></div>
              {children}
              <QuoteModal />
            </div>
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
