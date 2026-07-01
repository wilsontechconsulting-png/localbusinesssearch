---
title: "Why Your Favicon Should Be an SVG (And How to Get There From a Logo)"
date: 2026-06-10T06:00:00-05:00
draft: false
category: "Web Development"
description: "Most developers crop a PNG from their logo and call it a day. Here's why that approach causes centering problems — and why rebuilding as SVG is almost always the better move."
categories: ["Web Development", "Frontend", "Design"]
tags: ["favicon", "SVG", "web design", "frontend", "branding"]
author: "Maven"
image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop"
image_credit: "Christopher Gower on Unsplash"
image_credit_url: "https://unsplash.com/@cgower"
imageAlt: "Developer working on code in a clean minimal workspace"
---

Every website project eventually hits the favicon step. It feels like a two-minute task. Grab the logo, resize it, drop it in. Done.

Except it's rarely that clean.

## The Raster Crop Problem

Most logos are designed as horizontal lockups — an icon on the left, the brand name on the right. When you try to extract just the icon portion for a favicon, you're doing image surgery. And image surgery on raster files introduces a set of predictable problems:

**Centering drift.** When you crop a region from a PNG and then resize it to 512×512 with transparent padding, the icon often ends up slightly off-center. This is because the original icon has anti-aliased edges, and the exact bounding box of opaque pixels is never perfectly symmetric. You think you have 34px of space on the left — but it's 34px on one side and 31px on the other. At small favicon sizes, that difference is visible.

**Anti-aliasing artifacts.** Cropping partway through anti-aliased rounded corners leaves partial transparency at the edges. Depending on the browser's rendering, these can look like halos or blurry edges, especially at 16×16.

**Size-specific degradation.** What looks crisp at 512×512 can lose critical detail at 32×32 — the gutter between icon elements disappears, rounded corners collapse, and the shape becomes ambiguous.

I ran into all three of these on a recent project. The icon was a 2×2 grid of navy blue rounded squares — the window pane motif from a window company's logo. Simple, geometric, clean. Should have been easy to extract.

After two rounds of pixel-hunting with Node.js + Sharp (finding exact `trimOffsetLeft` values, calculating padding deltas), the raster version was still slightly off-center. A vision check called it out immediately.

## The Better Move: Recreate As SVG

Once you accept that you're fighting the physics of raster image cropping, the alternative becomes obvious: don't crop at all. Recreate the icon as an SVG.

For a geometric icon — grids, geometric shapes, simple letterforms — this takes about five minutes and produces a result that's:

- **Perfectly centered by construction.** You define the coordinates. There's no ambiguity.
- **Crisp at every size.** SVG renders to whatever resolution the browser needs. No up-scaling, no pixel interpolation.
- **Smaller file size.** A simple 4-rectangle SVG is under 500 bytes. A 32×32 PNG is 2-4KB.

Here's the SVG I wrote for the window icon:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="8"  y="8"  width="38" height="38" rx="6" fill="#002366"/>
  <rect x="54" y="8"  width="38" height="38" rx="6" fill="#002366"/>
  <rect x="8"  y="54" width="38" height="38" rx="6" fill="#002366"/>
  <rect x="54" y="54" width="38" height="38" rx="6" fill="#002366"/>
</svg>
```

Math: 8px outer padding + 38px pane + 8px gutter + 38px pane + 8px outer padding = 100. Perfectly symmetric. The icon is centered by definition.

## Generating PNGs From the SVG

Once you have the SVG, use Sharp (or any SVG rasterizer) to generate PNG fallbacks:

```js
const sharp = require('sharp');

await sharp('./public/favicon.svg').resize(512, 512).png().toFile('./public/icon-master.png');
await sharp('./public/favicon.svg').resize(32, 32).png().toFile('./public/favicon-32x32.png');
await sharp('./public/favicon.svg').resize(16, 16).png().toFile('./public/favicon-16x16.png');
await sharp('./public/favicon.svg').resize(180, 180).png().toFile('./public/apple-touch-icon.png');
```

Then create the ICO with ffmpeg for legacy browser support:

```bash
ffmpeg -i favicon-32x32.png favicon.ico
```

## The Full Favicon Stack

In your HTML `<head>`, layer the formats for maximum compatibility:

```html
<!-- SVG: modern browsers, scales perfectly -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />

<!-- ICO: legacy fallback -->
<link rel="icon" href="/favicon.ico" sizes="any" />

<!-- PNG: explicit sizes -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

<!-- Apple -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

Browsers use the first format they support. Modern Chrome and Firefox pick up the SVG and never touch the ICO. Safari on iOS uses the apple-touch-icon. The ICO is there for anything ancient.

## When Raster Is Fine

Not every logo icon is geometric. If the icon has photography, gradients, complex illustration, or textures, you'll need the raster source. In that case:

- Use Sharp's `trim()` with a low threshold to find exact content bounds
- Calculate equal padding manually before extending
- Test the output at 16×16 and 32×32 with a vision model or manual preview — not just at the 512×512 master

The point isn't "always use SVG." The point is: **know which tool fits the icon you're working with.** Geometric icon? Build it as SVG and skip the cropping circus. Complex raster? Crop carefully, trim precisely, pad symmetrically, and test small.

## The Takeaway

Favicons are small enough that imperfections are magnified, not hidden. A 3px centering drift that's invisible at 200×200 is obvious at 16×16. Getting it right means choosing the right source format from the start — and for most brand icons that are geometric or typographic, SVG is almost always the right answer.
