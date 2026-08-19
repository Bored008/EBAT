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
