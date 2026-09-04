<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Navigation Rules

## Scroll to Top on Navigation
- Every page navigation MUST scroll to the top of the page (hero section).
- Because Lenis smooth-scroll maintains its own virtual scroll position, you MUST call both `window.scrollTo({ top: 0, behavior: "instant" })` and `lenis?.scrollTo(0, { immediate: true })`.
- Handled at 3 levels:
  1. `TransitionContext.tsx`: during covered transition phase and before reveal.
  2. `LenisProvider.tsx`: in `ScrollReset` watching `pathname`.
  3. `template.tsx`: on page component mount.
- Same-page links (e.g., clicking Home/Logo while already on Home): `TransitionLink.tsx` intercepts same-page clicks and smoothly scrolls to top via `lenis.scrollTo(0, { duration: 1.2 })`.

## Page Transitions
- All internal navigation links MUST use `<TransitionLink>` from `src/components/transitions/TransitionLink.tsx` instead of Next.js `<Link>`.
- The strip transition overlay lives in `src/components/transitions/StripTransition.tsx`.
- Transition timing is defined in `src/context/TransitionContext.tsx`.
- Never use bare `<Link>` for page navigation in the Navbar or any primary navigation component.

## Page Content Entrance
- `src/app/template.tsx` handles the fade-in + slide-up animation for new page content after transition.
- `template.tsx` remounts on every route change — do not move this logic to `layout.tsx`.
