"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/context/TransitionContext";

type TransitionLinkProps = Omit<React.ComponentProps<typeof Link>, "onClick"> & {
  children: React.ReactNode;
};

export function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const { startTransition } = usePageTransition();
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : href.pathname ?? "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Skip transition for same-page, external links, or modifier keys
    if (
      hrefString === pathname ||
      hrefString.startsWith("http") ||
      hrefString.startsWith("mailto:") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
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

