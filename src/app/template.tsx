"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

