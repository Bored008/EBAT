"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { StripTransition } from "@/components/transitions/StripTransition";

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

// Timing constants (ms)
const STRIP_DURATION = 300;
const STRIP_STAGGER = 50;
const STRIP_COUNT = 6;
const COVER_TOTAL = STRIP_DURATION + STRIP_STAGGER * (STRIP_COUNT - 1); // ~550ms
const HOLD_DURATION = 200;

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const lockRef = useRef(false);

  const startTransition = useCallback(
    (href: string) => {
      // Don't transition to the same page or if already transitioning
      if (href === pathname || lockRef.current) return;

      lockRef.current = true;
      setPhase("cover");

      // After strips fully cover the screen, navigate and start reveal
      setTimeout(() => {
        router.push(href);
        window.scrollTo({ top: 0, behavior: "instant" });
        lenis?.scrollTo(0, { immediate: true });

        // Small extra delay to let Next.js swap the page content
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          lenis?.scrollTo(0, { immediate: true });
          setPhase("reveal");

          // After reveal completes, reset to idle
          setTimeout(() => {
            setPhase("idle");
            lockRef.current = false;
          }, COVER_TOTAL + 100);
        }, HOLD_DURATION);
      }, COVER_TOTAL);
    },
    [pathname, router, lenis]
  );

  return (
    <TransitionContext value={{ isTransitioning: phase !== "idle", startTransition }}>
      {children}
      <StripTransition phase={phase} />
    </TransitionContext>
  );
}

