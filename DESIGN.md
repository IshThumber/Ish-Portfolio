# DESIGN.md — vite-pf Portfolio Design System

> **Version 2.0** — Foundational design system for the `vite-pf` Vite + React + Tailwind CSS v4 portfolio.  
> This document is the single source of truth for visual design, motion, tokens, and component specifications. Every implementation decision traces back here.

---

## Table of Contents

1. [Visual Philosophy](#1-visual-philosophy)
2. [Design Tokens — CSS Custom Properties](#2-design-tokens--css-custom-properties)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Spacing & Sizing Scale](#5-spacing--sizing-scale)
6. [Motion & Animation System](#6-motion--animation-system)
7. [Depth & Elevation](#7-depth--elevation)
8. [Surface & Glassmorphism Spec](#8-surface--glassmorphism-spec)
9. [Component Specifications](#9-component-specifications)
10. [Layout Principles](#10-layout-principles)
11. [Responsive Behavior](#11-responsive-behavior)
12. [Accessibility](#12-accessibility)
13. [Agent Prompt Guide](#13-agent-prompt-guide)
14. [Do's and Don'ts](#14-dos-and-donts)

---

## 1. Visual Philosophy

### Mood & Atmosphere
**Modern. Premium. Atmospheric. Intentional.**

The portfolio communicates craft and depth — not loudness. Every visual decision should feel considered, not accidental.

### Core Principles

| Principle | What it means in practice |
|---|---|
| **Dark as canvas** | Deep, near-black backgrounds let color and light *mean* something. Nothing competes with content. |
| **Color as narrative** | Each section has its own chromatic identity. Color tells the user where they are. |
| **Depth through layers** | Glassmorphism, glow shadows, and blurred surfaces create a sense of physical space — foreground, midground, background. |
| **Motion as language** | Every animation communicates state, hierarchy, or transition. Nothing moves decoratively. |
| **Spaciousness as luxury** | Generous whitespace is not emptiness. It is signal that each element matters. |

### What makes this design unforgettable
The giant low-opacity background ghost text combined with vibrant gradient-clipped cursive foreground headings — a cinematic layering technique that gives every section a unique identity while maintaining visual cohesion. Section colors shift like scenes in a film.

---

## 2. Design Tokens — CSS Custom Properties

All tokens live in `src/index.css` inside a `@theme {}` block (Tailwind v4 approach). **Never hardcode hex values in components.** Reference only Tailwind utilities derived from these tokens.

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  /* ─── Base Surfaces ─────────────────────────────────── */
  --color-bg-base:        #111827;   /* Global app background */
  --color-bg-elevated:    #131f2a;   /* Cards, panels, elevated surfaces */
  --color-bg-overlay:     #0d1117;   /* Modals, drawers, deepest surfaces */

  /* ─── Global Text ────────────────────────────────────── */
  --color-text-primary:   #f5f5f5;   /* Default body text */
  --color-text-secondary: #9ca3af;   /* Captions, metadata, secondary labels */
  --color-text-muted:     #4b5563;   /* Disabled states, placeholders */

  /* ─── Section Palettes (sampled representatives) ─────── */
  /* Full palette scales live in their own @theme blocks below */

  /* Hero & Resume — Kimberly / Kashmir Blue */
  --color-hero-400:  #6a6eae;
  --color-hero-500:  #5777a0;
  --color-hero-600:  #4a6590;

  /* About — Gigas (purple) */
  --color-about-400: #9f70dc;
  --color-about-500: #8055c8;
  --color-about-600: #6b3fb8;

  /* Projects — Hopbush (pink/purple) */
  --color-projects-400: #c47ab4;
  --color-projects-500: #b874a7;
  --color-projects-600: #a05d8e;

  /* Experience — Wedgewood (crisp blue) */
  --color-experience-400: #6097c2;
  --color-experience-500: #4682a9;
  --color-experience-600: #346a90;

  /* Contact — Careys Pink */
  --color-contact-400: #d4878f;
  --color-contact-500: #c3707d;
  --color-contact-600: #ad5764;

  /* Certifications — Mantle (muted green-gray) */
  --color-certifications-400: #7a9990;
  --color-certifications-500: #5b716a;
  --color-certifications-600: #475c56;

  /* ─── Typography ─────────────────────────────────────── */
  --font-primary:   'Urbanist', sans-serif;
  --font-heading:   'GT Walsheim', sans-serif;
  --font-accent:    'Brandon Text', sans-serif;
  --font-signature: 'fourHand W29', cursive;

  /* ─── Motion ─────────────────────────────────────────── */
  --ease-cinematic:  cubic-bezier(0.76, 0, 0.24, 1);
  --ease-reveal:     cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-subtle:     cubic-bezier(0.25, 0.46, 0.45, 0.94);

  --duration-instant:    80ms;
  --duration-fast:       150ms;
  --duration-transition: 400ms;
  --duration-cinematic:  1200ms;

  /* ─── Z-Index Scale ──────────────────────────────────── */
  --z-base:       0;
  --z-content:    10;
  --z-floating:   20;
  --z-nav:        40;
  --z-overlay:    50;
  --z-toast:      60;

  /* ─── Glassmorphism ──────────────────────────────────── */
  --glass-bg:           rgba(15, 23, 42, 0.6);
  --glass-border:       rgba(255, 255, 255, 0.08);
  --glass-blur:         16px;
  --glass-blur-heavy:   24px;
  --glass-shadow:       0 8px 32px rgba(0, 0, 0, 0.4);
}
```

---

## 3. Color System

### Base Palette

| Token | Hex | Role |
|---|---|---|
| `--color-bg-base` | `#111827` | Primary app background (deepest) |
| `--color-bg-elevated` | `#131f2a` | Panels, cards, input backgrounds |
| `--color-bg-overlay` | `#0d1117` | Modals, full-screen overlays |
| `--color-text-primary` | `#f5f5f5` | Default body text, headings |
| `--color-text-secondary` | `#9ca3af` | Labels, metadata, captions |
| `--color-text-muted` | `#4b5563` | Disabled text, placeholders |

### Section Color Identities

Each section has a **chromatic identity** — a primary hue family that is used for:
- Gradient headings (`background-clip: text`)
- Glow accents on interactive elements
- Tinted glass surface tints
- Scroll-progress indicators

| Section | Family | Representative | Emotional Register |
|---|---|---|---|
| Hero / Resume | Kimberly / Kashmir Blue | `#5777a0` | Trust, ambition, depth |
| About | Gigas | `#9f70dc` | Creativity, introspection |
| Projects | Hopbush | `#b874a7` | Energy, originality, warmth |
| Experience | Wedgewood | `#4682a9` | Clarity, professionalism |
| Contact | Careys Pink | `#c3707d` | Approachability, warmth |
| Certifications | Mantle | `#5b716a` | Stability, growth, nature |

### Gradient Definitions

Gradients are defined as CSS utilities and consumed via Tailwind. Named after their section.

```css
/* In src/index.css, after @theme */

.gradient-hero {
  background: linear-gradient(135deg, #6a6eae 0%, #5777a0 50%, #4a6590 100%);
}
.gradient-about {
  background: linear-gradient(135deg, #9f70dc 0%, #8055c8 100%);
}
.gradient-projects {
  background: linear-gradient(135deg, #c47ab4 0%, #b874a7 60%, #a05d8e 100%);
}
.gradient-experiences {
  background: linear-gradient(135deg, #6097c2 0%, #4682a9 100%);
}
.gradient-contact {
  background: linear-gradient(135deg, #d4878f 0%, #c3707d 100%);
}
.gradient-certifications {
  background: linear-gradient(135deg, #7a9990 0%, #5b716a 100%);
}

/* Gradient text utility (apply to a span inside headings) */
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

**Usage example:**
```jsx
<span className="gradient-hero gradient-text">Cloud Engineer</span>
```

---

## 4. Typography System

### Font Stack

| Variable | Font Family | Weight Range | Role |
|---|---|---|---|
| `--font-heading` | GT Walsheim | 700–900 | Section titles, large display headings |
| `--font-signature` | fourHand W29 | 400 | Cursive sub-headings, section identifiers, artistic accents |
| `--font-accent` | Brandon Text | 500–700 | Button labels, callouts, stat figures, nav items |
| `--font-primary` | Urbanist | 300–600 | Body copy, paragraphs, metadata, captions |

### Type Scale

```css
/* Defined in @theme for Tailwind utility access */
@theme {
  --text-xs:   0.75rem;    /* 12px — Captions, labels */
  --text-sm:   0.875rem;   /* 14px — Secondary body */
  --text-base: 1rem;       /* 16px — Primary body */
  --text-lg:   1.125rem;   /* 18px — Lead / intro text */
  --text-xl:   1.25rem;    /* 20px — Sub-section headings */
  --text-2xl:  1.5rem;     /* 24px — Card headings */
  --text-3xl:  1.875rem;   /* 30px — Section sub-headings */
  --text-4xl:  2.25rem;    /* 36px — Section headings */
  --text-5xl:  3rem;       /* 48px — Hero text */
  --text-6xl:  3.75rem;    /* 60px — Ghost background text */
  --text-9xl:  8rem;       /* 128px — Giant ghost text (opacity ~0.05–0.08) */
}
```

### Typography Rules

- **Section headings**: `font-heading`, 700–900 weight, uppercase or title-case, `tracking-tight`
- **Ghost background text**: Same font-heading string, `text-9xl`, `opacity-[0.05]` to `opacity-[0.08]`, `pointer-events-none select-none`
- **Cursive accent**: `font-signature` at ~`text-3xl` to `text-4xl`, positioned in front of ghost text with gradient-text applied
- **Body copy**: `font-primary`, `text-base` or `text-lg`, `leading-relaxed`
- **Buttons / CTAs**: `font-accent`, `text-sm` or `text-base`, `tracking-wide`

---

## 5. Spacing & Sizing Scale

Uses Tailwind's default rem-based scale. The following are the portfolio-specific conventions:

| Context | Tailwind Class | Rem | Usage |
|---|---|---|---|
| Section vertical padding | `py-24` to `py-32` | 6–8rem | Between major sections |
| Content block gap | `mb-12` to `mb-16` | 3–4rem | Between heading and body content |
| Card internal padding | `p-6` to `p-8` | 1.5–2rem | Inside glass cards |
| Inline element gap | `gap-4` to `gap-6` | 1–1.5rem | Between tags, badges, icons |
| Max content width | `max-w-6xl` | ~72rem | Applied to section wrappers |
| Narrow prose width | `max-w-2xl` to `max-w-3xl` | ~42–48rem | Body text columns |

**Rule:** Never use `px-` or `py-` less than `4` (1rem) on interactive elements. Touch targets must have minimum 44px tap area on mobile.

---

## 6. Motion & Animation System

> **Core rule:** Every animation must earn its place. If you remove it and the interface still communicates clearly, the animation was noise — remove it.

### Tool Roles (Never Overlap)

| Tool | Owns | Never use for |
|---|---|---|
| **Lenis** | Scroll physics, smooth scrolling | Anything else — it is always on, never questioned |
| **GSAP + ScrollTrigger** | Scroll-driven timelines, parallax, pinning, text splits, counters | React lifecycle events |
| **Framer Motion** | Component mount/unmount, hover/tap/drag, page transitions, layout animations | Scroll position math |

### Emotional Tiers

| Tier | Duration | GSAP Ease | Framer Bezier | Used for |
|---|---|---|---|---|
| **Instant feedback** | 80–150ms | `power2.out` | `[0.25, 0.46, 0.45, 0.94]` | Hover highlights, button clicks |
| **Transition** | 300–500ms | `power3.inOut` | `[0.76, 0, 0.24, 1]` | Nav state, element reveals |
| **Cinematic** | 800–1400ms | `expo.out` | `[0.22, 1, 0.36, 1]` | Hero entrance, section reveals |
| **Ambient** | 2000ms+ | `sine.inOut` | — | Floating gradients, breathing glows |

### Section Entrance Pattern (GSAP)

Every section uses a consistent entrance model:
1. Ghost background text: fades in at `opacity 0 → 0.06`, `y: 20 → 0`, `duration: 1.2`, triggered at `top 80%`
2. Cursive sub-heading: slides up from `y: 40`, `duration: 1.0`, `delay: 0.1`
3. Main heading words: split reveal (masked `overflow-hidden` per word), stagger `0.06s`, `expo.out`
4. Body content / cards: staggered fade-up, `y: 48 → 0`, stagger `0.1s`

### Lenis Configuration

```ts
new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Expo ease-out
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 2,
})
```

### Framer Motion — Navbar Active Pill

The active navigation indicator uses `layoutId="nav-pill"` so Framer Motion automatically FLIP-animates the pill between links:

```jsx
<motion.span
  layoutId="nav-pill"
  className="absolute inset-0 rounded-full bg-white/10"
  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
/>
```

### Page Transitions

Use `AnimatePresence` with a clip-path wipe:
```js
initial:  { clipPath: 'inset(0 100% 0 0)', opacity: 0 }
animate:  { clipPath: 'inset(0 0% 0 0)',   opacity: 1 }
exit:     { clipPath: 'inset(0 0 0 100%)', opacity: 0 }
// duration: 0.65s, ease: [0.76, 0, 0.24, 1]
```

### GSAP ↔ Lenis Sync (Required)

```ts
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

---

## 7. Depth & Elevation

### Z-Index Scale

| Layer | Z Value | Elements |
|---|---|---|
| Base | 0 | App background, gradient overlays |
| Content | 10 | Section text, cards |
| Floating | 20 | Tooltips, hover cards |
| Navigation | 40 | Fixed navbar |
| Overlay | 50 | Mobile menu, modals |
| Toast | 60 | Notification toasts |

### Shadow System

**No hard black drop-shadows.** All elevation is expressed through colored, semi-transparent glows matching the section's accent color.

```css
/* Example shadow utilities — vary the color by section */
.shadow-hero     { box-shadow: 0 0 40px rgba(87, 119, 160, 0.25), 0 8px 32px rgba(0,0,0,0.4); }
.shadow-about    { box-shadow: 0 0 40px rgba(159, 112, 220, 0.25), 0 8px 32px rgba(0,0,0,0.4); }
.shadow-projects { box-shadow: 0 0 40px rgba(184, 116, 167, 0.25), 0 8px 32px rgba(0,0,0,0.4); }
```

**On hover:** scale the glow opacity up and translate the element slightly: `y: -4, shadowOpacity: 0.4`.

---

## 8. Surface & Glassmorphism Spec

Glassmorphism is used sparingly and purposefully: navbar, modals, floating cards, mobile menu. It should not be applied to every surface.

### Standard Glass Recipe

```css
.glass-surface {
  background: var(--glass-bg);          /* rgba(15, 23, 42, 0.6) */
  backdrop-filter: blur(var(--glass-blur));   /* 16px */
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);  /* rgba(255,255,255,0.08) */
  box-shadow: var(--glass-shadow);
}

.glass-heavy {
  backdrop-filter: blur(var(--glass-blur-heavy));  /* 24px — mobile menu overlay */
  background: rgba(10, 15, 28, 0.75);
}
```

### Glassmorphism Rules

- ✅ Navbar on scroll: standard glass + `border-b` tint from section color
- ✅ Mobile menu: heavy glass, full-screen overlay
- ✅ Project/experience cards on hover: subtle glass tint
- ❌ Section backgrounds: use solid dark surfaces — glass is reserved for floating layers
- ❌ Ghost text layer: always transparent, no blur

### Tinted Glass (Section-specific)

Cards inside a section can tint their glass background slightly toward the section's accent color:

```css
/* Example — Projects section card */
.glass-projects {
  background: rgba(184, 116, 167, 0.08);
  border-color: rgba(184, 116, 167, 0.15);
}
```

---

## 9. Component Specifications

### CustomHeadings

The primary heading component used in every section. Structure is non-negotiable:

```
[Section container, position: relative]
  ├── [Ghost layer, position: absolute, inset-0]
  │     └── <span> — font-heading, text-9xl, opacity-[0.05], select-none, pointer-events-none
  │           Text: SECTION NAME IN CAPS
  ├── [Foreground layer, position: relative, z-10]
  │     ├── <span> — font-signature, text-3xl to text-4xl, gradient-text + section gradient
  │     │     Text: sub-heading / category label (e.g., "who i am", "what i've built")
  │     └── <h2> — font-heading, text-5xl to text-6xl, font-bold, text-text-primary
  │           Text: Main heading (e.g., "About Me", "Projects")
```

**Animation spec for CustomHeadings (GSAP, scroll-triggered):**
1. Ghost text: `opacity 0 → 0.05`, `y 30 → 0`, duration `1.4s`, ease `expo.out`
2. Signature span: `y 40 → 0`, `opacity 0 → 1`, duration `1.0s`, delay `0.15s`
3. Main `h2` words (split): each word masked, `yPercent 110 → 0`, stagger `0.07s`, ease `expo.out`

### Navbar

**Desktop (fixed, top):**
- Default: transparent background, no border
- On scroll (`scrollY > 60`): transitions to glass surface (`glass-surface`) + thin bottom border tinted to current section color
- Active link: Framer Motion `layoutId="nav-pill"` highlight (spring, stiffness 400, damping 30)
- Z-index: `--z-nav` (40)

**Mobile (hamburger toggle):**
- Hamburger: 3-bar icon with animated morph to ✕ via Framer Motion path variants
- Menu overlay: full-screen, `glass-heavy`, slides in from top or fades in
- Links: stagger fade-up (Framer variants, staggerChildren `0.08s`)
- Touch targets: minimum `h-12` (48px) on all links

### Buttons / CTAs

| Variant | Style | Motion |
|---|---|---|
| Primary | Gradient background (section gradient), `rounded-xl`, `font-accent` | `whileHover: { scale: 1.05, y: -2 }`, colored glow shadow expands |
| Secondary | Transparent, `border` tinted to section color, `rounded-xl` | `whileHover: { scale: 1.03 }`, border brightens |
| Ghost | No border, underline animation on hover | Underline slides in from left via `scaleX` transform |

**Spring config for all button interactions:**
```js
{ type: 'spring', stiffness: 400, damping: 20 }
```

### Cards (Project / Experience / Certification)

```
[Card — glass-surface or glass-{section}]
  ├── [Visual area — gradient-tinted top strip or icon]
  ├── [Content area]
  │     ├── <h3> — font-heading, text-2xl
  │     ├── <p>  — font-primary, text-secondary
  │     └── [Tags / badges — font-accent, text-xs, glass tinted chip]
  └── [Footer — links, dates, duration]
```

**Card hover:**
- `y: -6`, box-shadow scales up (colored glow), border opacity increases
- Use Framer Motion `whileHover` for the lift + CSS transition for shadow (CSS handles shadow better than JS)

### Skill / Tag Chips

- Background: `bg-{section}-500/10`, border: `border-{section}-500/20`
- Text: `font-accent`, `text-xs`, `text-{section}-300`
- Padding: `px-3 py-1`, `rounded-full`

---

## 10. Layout Principles

### Container System

All section content sits in a centered container:
```jsx
<section className="relative w-full py-24 md:py-32">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    {/* Content */}
  </div>
</section>
```

- `max-w-6xl` for full-width sections (hero, experience timeline)
- `max-w-3xl` for prose-heavy sections (about body text)
- `px-6` mobile, `px-12` desktop — consistent gutter

### Grid Patterns

| Section | Layout |
|---|---|
| Hero | Single column, centered or left-aligned with right visual |
| About | Two columns (text left, visual / stat right) → stacks mobile |
| Projects | Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop |
| Experience | Timeline — vertical line with alternating cards |
| Certifications | Grid: 2 col mobile, 3–4 col desktop |
| Contact | Two columns (form left, info right) → stacks mobile |

### Background Decoration

Each section can have subtle background texture. Options (pick one per section, do not combine):
- Radial glow blob: `absolute -z-10`, `w-96 h-96`, `rounded-full`, section color at `opacity-[0.15]`, blurred via `filter blur-3xl`
- Noise grain overlay (CSS, subtle): `opacity-[0.04]`, `mix-blend-mode: overlay`
- Diagonal gradient: from bg-elevated to bg-base, `skew-y-[-6deg]`

---

## 11. Responsive Behavior

### Breakpoints (Tailwind defaults)

| Breakpoint | Min-width | Design intent |
|---|---|---|
| (default) | 0px | Mobile-first base |
| `sm:` | 640px | Large phones, small tablets |
| `md:` | 768px | Tablets — layout switches occur here |
| `lg:` | 1024px | Desktop — full experience |
| `xl:` | 1280px | Wide desktop — max-content lock |

### Key Responsive Transitions

- **Navbar**: horizontal links → hamburger toggle at `md:` threshold
- **Project grid**: 1 col → 2 col at `md:`, → 3 col at `lg:`
- **About/Contact**: stacked → 2-col at `md:`
- **Hero**: text centered mobile → left-aligned desktop
- **Ghost text**: `text-7xl` mobile → `text-9xl` desktop (scale prevents overflow)
- **Section padding**: `py-16` mobile → `py-24` at `md:` → `py-32` at `lg:`

### Touch Targets

- All tappable elements: minimum `min-h-[44px]` or `min-w-[44px]`
- Mobile nav links: `h-12` minimum
- Hamburger toggle: `w-10 h-10` minimum

---

## 12. Accessibility

- **Reduced motion**: Always check `prefers-reduced-motion`. For Framer Motion, use `useReducedMotion()`. For GSAP, check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and skip or minimize animations.
- **Color contrast**: Text on section-tinted backgrounds must meet WCAG AA (4.5:1 for body, 3:1 for large text). Test with the section color token at its 500 level.
- **Focus states**: All interactive elements must have a visible `focus-visible` ring. Use `outline-none focus-visible:ring-2 focus-visible:ring-{section}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base`.
- **Ghost text**: Must have `aria-hidden="true"` and `pointer-events-none select-none` — purely decorative.
- **Motion elements**: Use `role="presentation"` on purely decorative animated elements.
- **Skip link**: Include a visually-hidden "Skip to content" link at the top of the document.

---

## 13. Agent Prompt Guide

When asking an AI to generate or edit components for this project, lead with this context block:

```
I am working on the 'vite-pf' portfolio. Stack: Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + GSAP + Lenis.

Design constraints:
- Dark base: bg token `--color-bg-base` (#111827), text token `--color-text-primary` (#f5f5f5)
- Each section has a dedicated color family — use the correct one (see DESIGN.md §3)
- Use Tailwind utilities derived from @theme tokens — never hardcode hex values
- Animations: GSAP via `useGSAP` (from @gsap/react) for scroll-triggered; Framer Motion for component lifecycle, hover, tap, layout
- Lenis handles all scroll physics — do not use native scroll events or Framer's useScroll with Lenis

For headings: use the `<CustomHeadings />` component or replicate its layered structure:
  - Giant ghost text: font-heading, ~text-9xl, opacity ~0.05, aria-hidden, absolute
  - Cursive accent: font-signature, gradient-text with the section's gradient class
  - Main heading: font-heading, bold, text-text-primary

For glassmorphism: apply `.glass-surface` class or use `var(--glass-bg)`, `var(--glass-blur)`, `var(--glass-border)` tokens.

For buttons: use the CTA spec from DESIGN.md §9 — gradient backgrounds, rounded-xl, spring hover via Framer Motion.

Spacing: max-w-6xl container, py-24 md:py-32 section padding, px-6 md:px-12 gutters.
```

---

## 14. Do's and Don'ts

### DO ✅

- Use `useGSAP` (from `@gsap/react`) for ALL GSAP animations — never `useEffect`
- Sync GSAP + Lenis: `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add(...)`
- Use `clearProps: 'all'` on one-shot GSAP animations to prevent inline style bleed
- Apply `will-change-transform` only to elements that actually animate
- Use `aria-hidden="true"` on decorative elements (ghost text, background glows)
- Respect `prefers-reduced-motion` — offer instant or no-motion fallbacks
- Use section-specific color tokens for the correct sections
- Use Framer Motion `AnimatePresence` for page and component transitions
- Apply `glass-surface` only to floating layers: navbar, modals, mobile menu
- Test every interactive element at mobile touch target sizes (min 44px)
- Add `focus-visible` ring styles to all interactive elements

### DON'T ❌

- **Never hardcode hex values** in components — always use token utilities
- **Never use `useEffect` for GSAP** — use `useGSAP` from `@gsap/react`
- **Never use `ScrollTrigger.scrollerProxy`** with Lenis (deprecated pattern)
- **Never animate layout-affecting CSS** (`width`, `height`, `top`, `left`, `margin`, `padding`) — only `transform` and `opacity`
- **Never use Framer's `useScroll`** for parallax when Lenis is active — all scroll math goes through GSAP
- **Never apply glassmorphism to section backgrounds** — only floating elements
- **Never omit `aria-hidden`** on ghost text and decorative SVGs
- **Never leave `markers: true`** on ScrollTrigger in production
- **Never clutter the layout** — breathing room is intentional, resist filling it
- **Never mix section color tokens** (e.g., don't use Hopbush colors on the Experience section)
