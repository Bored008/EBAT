# EBAT (EnlivenBot AI) - Marketing Website

B2B drone company marketing website for EBAT (EnlivenBot AI). Sells FPV drones, fixed wing drones, and edge AI devices to commercial/enterprise and defense/security buyers.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (Standard UI) + GSAP (Scroll-driven)
- **Icons**: Custom SVG components extracted directly from Figma

## Progress Tracker

- [x] **Project Initialization**
  - Next.js App Router setup
  - Tailwind v4 Configuration
  - Google Fonts integration (Inter, Oswald, Instrument Serif, Jersey 25)
  - Dark theme configured (`bg-black`, `text-white`, `#F00511` accent)

- [x] **Global UI Components**
  - **Navbar**: Sticky top navigation with exact padding and logo placement.
  - **Button**: Reusable CVA component with `filled` (Red), `outline` (Red), and `white` variants.
  - **Icons**: Centralized `<Icon />` wrapper rendering raw Figma SVGs (`talk-filled`, `phone-outline`).

- [x] **Hero Section**
  - "EBAT" text background mask using `-webkit-mask-image` gradient fade.
  - Drone image perfectly positioned and centered.
  - Hero heading ("Built for the Unseen Threat.") with exact line height and Figma constraints.
  - Call to action buttons with integrated icons.
  - Centralized glowing background blur effect bleeding seamlessly under the transparent Navbar.

- [ ] **Next Section...** (Awaiting design)

## Development Workflow
- **Icons**: Always extract raw SVGs from Figma using exact node constraints. Store in `/src/components/icons/svg/` and wrap with `Icon.tsx`.
- **Commits**: Commits are batched periodically (every 2-3 logical updates) and synced to GitHub to maintain a clean history.
