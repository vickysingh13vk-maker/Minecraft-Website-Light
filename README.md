# Demand Distribution × Minecraft Drinks UK

Cinematic landing page for the official UK distribution partnership between Demand Distribution Ltd. and Minecraft Drinks. London market focus, enterprise distribution credentials, voxel-inspired premium gaming visual language.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS 3
- Framer Motion 11
- Lucide icons
- Google Fonts (Inter / Space Grotesk / JetBrains Mono)

No external images required — all visuals (voxel landscape, bottles, particles, charts) rendered with SVG + CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx          Section composition
  globals.css       Tailwind + custom utilities (glass, neon-border, voxel-edge)
components/
  Nav.tsx           Fixed nav with scroll state + mobile drawer
  Hero.tsx          Cinematic voxel landscape + floating bottles + parallax
  VoxelScene.tsx    Reusable voxel landscape, particles, fog, pixel grid
  Bottle.tsx        Pure-SVG bottle (3 variants: Diamond Blue / Emerald / Nether)
  TrustMarquee.tsx  Infinite retailer logo strip
  AboutDrinks.tsx   Interactive 3-SKU product showcase
  AboutDistribution.tsx Enterprise feature grid + live dashboard mockup
  Stats.tsx         Animated counters
  Partnership.tsx   Scroll-triggered connection diagram
  Contact.tsx       Glassmorphism trade form
  FinalCTA.tsx      Animated voxel skyline conversion section
  Footer.tsx        Multi-column footer + certifications + legal
tailwind.config.ts  Brand palette + custom animations
```

## Brand tokens (Minecraft.net inspired)

| Token | Value |
| --- | --- |
| `primary` | `#44A148` (brand grass green) |
| `primary.300` | `#7CBD6B` |
| `primary.700` | `#2E6B22` |
| `navy.900` | `#0A120A` (dark forest bg) |
| `navy.800` | `#0F1A0E` |
| `navy.600` | `#1F3D1A` |
| `accent.glow` | `#A8E063` |
| `accent.gold` | `#F5D14B` |
| `accent.dirt` | `#6B4A2A` |

## Fonts

Headline display face = **MinecraftTen**. Drop the font binary at one of:

```
public/fonts/MinecraftTen-VF.woff2   (variable, preferred)
public/fonts/MinecraftTen.woff2
public/fonts/MinecraftTen.ttf
```

`@font-face` rule in `app/globals.css` falls back to Space Grotesk if the file isn't present, so layout never breaks.

## Performance

- Server-rendered shell, hydrated only where motion lives (`"use client"` per component)
- `next/font` for self-hosted Google fonts with `display: swap`
- `optimizePackageImports` for `framer-motion` + `lucide-react`
- `prefers-reduced-motion` honored globally

## SEO

- Semantic `<section>` + `<h1>`/`<h2>` hierarchy
- Open Graph + Twitter cards
- `Organization` JSON-LD with UK postal address + contact point
- Canonical URL + `en-GB` locale
