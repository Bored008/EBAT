"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/context/TransitionContext";
import { useLenis } from "lenis/react";

type TransitionLinkProps = Omit<React.ComponentProps<typeof Link>, "onClick"> & {
  children: React.ReactNode;
};

export function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const { startTransition } = usePageTransition();
  const pathname = usePathname();
  const lenis = useLenis();
  const hrefString = typeof href === "string" ? href : href.pathname ?? "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Skip transition for external links or modifier keys
    if (
      hrefString.startsWith("http") ||
      hrefString.startsWith("mailto:") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    // If clicking a link to the current page (e.g. Home or Logo while already on /)
    if (hrefString === pathname) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    e.preventDefault();
    startTransition(hrefString);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

