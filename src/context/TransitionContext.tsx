"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
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
const STRIP_DURATION = 400;
const STRIP_STAGGER = 80;
const STRIP_COUNT = 6;
const COVER_TOTAL = STRIP_DURATION + STRIP_STAGGER * (STRIP_COUNT - 1); // ~800ms
const HOLD_DURATION = 250;

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
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

        // Small extra delay to let Next.js swap the page content
        setTimeout(() => {
          setPhase("reveal");

          // After reveal completes, reset to idle
          setTimeout(() => {
            setPhase("idle");
            lockRef.current = false;
          }, COVER_TOTAL + 100);
        }, HOLD_DURATION);
      }, COVER_TOTAL);
    },
    [pathname, router]
  );

  return (
    <TransitionContext value={{ isTransitioning: phase !== "idle", startTransition }}>
      {children}
      <StripTransition phase={phase} />
    </TransitionContext>
  );
}

