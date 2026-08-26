<div align="center">

# 🦅 EBAT (EnlivenBot AI)
### Autonomous Defense Systems • Edge Intelligence • Mission-Critical Aerospace

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Ready-blueviolet?style=for-the-badge)](https://turbo.build/)

<p align="center">
  <b>High-performance, pixel-perfect B2B digital experience for EBAT (EnlivenBot AI).</b><br />
  Engineering cutting-edge FPV tactical drones, long-range fixed-wing surveillance units, and on-device edge AI intelligence for defense, perimeter security, and enterprise infrastructure.
</p>

[Explore Fleet](#-fleet--product-ecosystem) • [Architecture](#-system-architecture) • [Design System](#-design-system--tokens) • [Quickstart](#-quickstart--local-development)

---

</div>

## 🌐 Overview & Value Proposition

**EBAT (EnlivenBot AI)** is an aerospace and defense engineering company delivering mission-ready autonomous aerial systems. By pairing ruggedized drone hardware with onboard zero-cloud edge AI compute modules, EBAT empowers defense forces, security operatives, and enterprise inspectors to detect, analyze, and act on field intelligence with zero latency and unmatched reliability.

This repository hosts EBAT's enterprise web platform—engineered for speed, accessibility, and high-conversion client engagement.

---

## ✨ Key Features & Capabilities

- 🎯 **Pixel-Perfect Figma Fidelity**: Engineered strictly from production Figma specifications with zero-compromise typography, spacing scales, and custom vector glyphs.
- ⚡ **Next.js 16 + Turbopack**: Built on React 19 and Next.js App Router with full Server Component optimization for blazing-fast page loads and zero layout shifts.
- 🎨 **Tailwind CSS v4 Engine**: Utilizes Tailwind's next-generation CSS variable-driven `@theme` configuration for instantaneous compile times and clean style tokens.
- 🛡️ **Defense-Grade Aesthetic**: Precision dark mode palette (`#000000` base) elevated with vibrant EBAT Primary Red accents (`#F00511`) and crisp typography.
- 📱 **Adaptive Cross-Platform Layouts**: Fluid responsive design ensuring seamless operation across mobile handhelds, tablets, and ultra-wide command monitors.
- 📐 **Modular Component Architecture**: Decoupled, reusable UI primitives, section blocks, and isolated SVG systems structured for scale.

---

## 🚁 Fleet & Product Ecosystem

| Model | Classification | Core Capability | Highlight |
| :--- | :--- | :--- | :--- |
| **EBAT FPV-X1** | Close-Range Tactical FPV | Ultra-low latency 4K gimbal feed & agile maneuvering | Real-time onboard obstacle & anomaly detection |
| **EBAT Sentinel** | Persistent Surveillance Fixed-Wing | Extended endurance for long-duration sorties | Automated perimeter patrolling with zero cloud reliance |
| **EBAT Warden** | Heavy-Payload Perimeter Defense | Multi-sensor array integration & border monitoring | Intelligence payload for critical infrastructure security |
| **EBAT Eagle** | Advanced ISR Tactical Aircraft | Wide-area reconnaissance across harsh terrain | Modular sensor payload with high-wind stabilization |

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NEXT.JS 16 APP ROUTER                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ┌──────────────┐       ┌────────────────┐       ┌────────────────┐   │
│   │  Landing (/) │       │ About (/about) │       │Contact(/contact│   │
│   └───────┬──────┘       └────────┬───────┘       └────────┬───────┘   │
│           │                       │                        │           │
│           ▼                       ▼                        ▼           │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                   COMPOSITE SECTION MODULES                    │   │
│   │  • Hero              • TrustBar          • Products Grid       │   │
│   │  • WhyChoose         • EdgeAI Engine     • Services & Training │   │
│   │  • CoreValues Cards  • Team Grid         • Interactive Contact │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│                                   ▼                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     REUSABLE UI PRIMITIVES                     │   │
│   │  • Button (CVA Variants)   • Navbar (Active Route Detection)   │   │
│   │  • Vector SVG System       • Responsive Layout Containers      │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│                                   ▼                                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                 CORE DESIGN TOKENS & UTILITIES                 │   │
│   │  • Tailwind CSS v4 Theme   • Google Fonts Matrix   • clsx/cn   │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System & Tokens

Defined via Next.js Font Optimization and Tailwind CSS v4 `@theme` tokens in `src/app/globals.css`:

### Color Palette
- **Deep Void (Background)**: `#000000`
- **Pure Light (Surface / Text)**: `#FFFFFF`
- **Subtext Dim**: `rgba(255, 255, 255, 0.75)`
- **EBAT Primary Red (Accent)**: `#F00511`
- **Active Navigation Indicator**: `#EF0512`

### Typography Matrix
- **`font-sans` (`Inter`)**: Primary interface typography, technical specifications, and body copy.
- **`font-heading` (`Oswald`)**: Bold, industrial headlines and section markers.
- **`font-accent` (`Instrument Serif`)**: Editorial italics used for strategic visual emphasis (e.g. *"Unseen Threat"*, *"Industries"*, *"Values"*).
- **`font-display` (`Jersey 25`)**: High-impact background watermark display text.

---

## 📁 Repository Structure

```text
c:\Coding\Projects\EBAT
├── public/                     # Static media assets & Figma exports
│   ├── images/
│   │   ├── about/             # Team & Core Values SVG assets
│   │   ├── contact/           # Office, maps, and communication icons
│   │   ├── footer/            # Background watermark textures
│   │   ├── hero/              # Flagship FPV drone render
│   │   └── products/          # High-resolution fleet renders
├── src/
│   ├── app/                   # App Router pages & route definitions
│   │   ├── about/             # /about - Company mission, team & core values
│   │   ├── contact/           # /contact - Lead generation, map & inquiry form
│   │   ├── globals.css        # Tailwind v4 theme variables & font rules
│   │   ├── layout.tsx         # Root layout with persistent Navbar
│   │   └── page.tsx           # / - Primary commercial landing page
│   ├── components/
│   │   ├── icons/             # Custom SVG glyphs & icon primitives
│   │   ├── sections/          # Composite page sections
│   │   │   ├── CTA.tsx        # Call to Action block
│   │   │   ├── ContactFooter.tsx
│   │   │   ├── EdgeAI.tsx     # On-device AI processing showcase
│   │   │   ├── FAQ.tsx        # Expandable operational FAQ
│   │   │   ├── Footer.tsx     # Full brand footer
│   │   │   ├── Hero.tsx       # Flagship landing hero
│   │   │   ├── Products.tsx   # Fleet catalog grid
│   │   │   ├── Services.tsx   # Maintenance, repair & pilot training
│   │   │   ├── TrustBar.tsx   # Operational metrics & stats
│   │   │   └── WhyChoose.tsx  # Reliability & uptime differentiators
│   │   └── ui/                # Atomic UI building blocks (Button, Navbar, etc.)
│   └── lib/                   # Utility helpers & class merger (clsx, tailwind-merge)
├── DESIGN_SYSTEM.md           # Granular design token documentation
├── package.json               # Dependencies & build scripts
└── tsconfig.json              # TypeScript compilation rules
```

---

## 🚀 Quickstart & Local Development

### Prerequisites
- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone Repository
```bash
git clone https://github.com/Bored008/EBAT.git
cd EBAT
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot-Module-Reloading (HMR).

### 4. Production Build & Static Validation
```bash
npm run build
npm run start
```

---

## 🛠️ Scripts & Tooling

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Turbopack-powered local dev server on port `3000` |
| `npm run build` | Compiles optimized production bundle with strict TypeScript verification |
| `npm run start` | Boots the Next.js production server |
| `npm run lint` | Runs ESLint analysis across all components and pages |

---

## 🤝 Engineering & Contribution Standards

To maintain pixel perfection and code quality:
1. **Figma Fidelity**: Always inspect exact layout modes, gap values, and bounding widths before styling.
2. **Zero Hardcoded Radii**: Never add `rounded-*` classes unless explicitly defined by Figma `cornerRadius`.
3. **SVG Cleanliness**: Preserve exact `<rect>` background fills and vector strokes as defined in design assets.
4. **Clean Commits**: Follow conventional commit conventions (`feat:`, `style:`, `fix:`, `refactor:`).

---

<div align="center">

**Built for Mission Reliability • Powered by EBAT**

</div>
