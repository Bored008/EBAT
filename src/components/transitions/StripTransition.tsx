"use client";

import React from "react";
import { motion } from "framer-motion";

const STRIP_COLORS = [
  "#FFFFFF",
  "#A80410",
  "#FFFFFF",
  "#A80410",
  "#FFFFFF",
  "#A80410",
];

const STRIP_DURATION = 0.3; // seconds
const STRIP_STAGGER = 0.05; // seconds

interface StripTransitionProps {
  phase: "idle" | "cover" | "reveal";
}

export function StripTransition({ phase }: StripTransitionProps) {
  if (phase === "idle") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none flex"
      aria-hidden="true"
    >
      {STRIP_COLORS.map((color, i) => (
        <motion.div
          key={`${phase}-${i}`}
          initial={{
            y: phase === "cover" ? "-100%" : "0%",
          }}
          animate={{
            y: phase === "cover" ? "0%" : "100%",
          }}
          transition={{
            duration: STRIP_DURATION,
            delay: i * STRIP_STAGGER,
            ease: "easeInOut",
          }}
          style={{
            backgroundColor: color,
            width: `${100 / STRIP_COLORS.length}%`,
            height: "100%",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

