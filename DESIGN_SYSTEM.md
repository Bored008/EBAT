# EBAT Design System

## Colors
- **Background**: `#000000` (Black)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `rgba(255, 255, 255, 0.75)` (White 75%)
- **Accent Red**: `#F00511` (Primary Button fill, highlighted text)
- **Accent Red Alt**: `#EF0512` (Active nav link)

## Typography
- **Primary Font**: `Inter` (Regular, Medium, Semi Bold) - used for body, navigation, buttons, subheadings.
- **Hero Background Display**: `Jersey 25` (Regular)
- **Hero Headline**: `Oswald` (Bold)
- **Hero Headline Accent**: `Instrument Serif` (Italic) - used for emphasized words like "*Threat.*".

## Spacing & Grid
- **Nav gap**: 36px
- **Standard gaps**: 12px, 16px, 18px

## Components
- **Navbar**: Top navigation with links and "Contact Us" button.
- **Button**: 
  - `filled`: Solid red background (`#F00511`), white text. 23px border-radius.
  - `outline`: Transparent background, red outline (`#F00511`), red text. 23px border-radius.
- **Hero Section**: Large background text, centered drone image, bold headline with serif accent, dual buttons.

## Open Questions / Flags
- The design uses specific display fonts (`Jersey 25`, `Oswald`, `Instrument Serif`) for the hero section which differ from the base `Inter` font. These will be loaded via `next/font/google`.

## AI Rules for Figma-to-Code Implementation (Avoid these mistakes)
1. **Never Assume Rounded Corners (Border Radii):** Do NOT assume modern UI defaults like `rounded-[12px]` or `rounded-lg` on cards, containers, or images unless explicitly specified in the Figma `cornerRadius` property.
2. **Never Substitute Icons:** Always extract the EXACT SVG icons (`<IMAGE-SVG>` nodes) from the Figma data. Do NOT use generic placeholder SVGs (e.g., standard Tailwind or lucide-react icons) unless explicitly instructed.
3. **Follow Exact Fill / Stroke properties:** Implement the SVG paths using the exact Figma paths, and hook them up to the appropriate `text-white` or `text-black` color scales using `fill="currentColor"` or `stroke="currentColor"`.
4. **Strict Layout Accuracy:** Always double-check exact gaps (e.g., `gap: 56px`), container alignments (`items-center`), and bounding constraints (`max-w`). Do not default to `w-full` if the Figma design explicitly restricts width.

