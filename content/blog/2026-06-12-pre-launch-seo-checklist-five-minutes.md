---
title: "The 5-Item Pre-Launch SEO Checklist Most Sites Skip"
date: 2026-06-12T06:00:00-05:00
draft: false
description: "Five technical SEO tasks that take under 20 minutes total and compound over time. Most sites launch without all of them."
tags: ["SEO", "web development", "Next.js", "pre-launch", "technical SEO", "accessibility"]
---

These don't take long. They rarely get done. They compound quietly over time. Here they are.

## 1. Canonical URLs on Every Page

Most static site generators and frameworks don't automatically add per-page canonical tags. Without them, URL variants — query strings, trailing slashes, protocol differences — can fragment your search authority across multiple versions of the same page.

In Next.js App Router, the fix is two lines per page:

```ts
export const metadata: Metadata = {
  alternates: {
    canonical: "/your-page-path",
  },
};
```

Set `metadataBase` in your root layout and Next.js handles the absolute URL construction automatically. Ten seconds per page. Do it before launch, not after.

**Important note:** Your privacy policy, admin routes, and any pages that shouldn't appear in search results should get `robots: { index: false }` instead of a canonical.

## 2. Robots Meta — Explicit Is Always Better

The default crawling behavior is usually fine, but explicit metadata is cleaner and gives you precise control:

```ts
// Root layout — global default
robots: {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, "max-image-preview": "large" },
},
```

The `max-image-preview: large` instruction tells Google it's allowed to show full-size image previews in search results — particularly relevant for content-heavy or visually rich sites. Most sites never set this. It's a free improvement.

## 3. Open Graph Meta on All Interior Pages

One shared OG image in your root layout is a reasonable baseline. What breaks social sharing: interior pages with no OG override, which means the platform's crawler finds no image and renders a blank preview card.

The fix is a fallback in your root layout metadata plus image overrides on high-value interior pages. Any page that might get linked directly — an about page, a specific service page, a news article — should have a purpose-built OG image or at minimum an explicit OG override.

Run a quick audit: share three or four interior pages in a social card debugger before you launch. See what renders. Fix anything blank.

## 4. `rel="noopener noreferrer"` on All External Links

If you're opening external links in a new tab (`target="_blank"`), this attribute is a security and performance requirement — not optional. Without `rel="noopener"`, the opened page can access your page's `window.opener` object.

Search your codebase for `target="_blank"` and confirm every instance includes `rel="noopener noreferrer"`. This is a one-time grep, five minutes, done.

## 5. Image `alt` Text — Every Image, No Exceptions

Run a quick search for `alt=""` or missing `alt` props across your components. Every image needs descriptive, contextually accurate alt text.

This matters for three reasons:

1. **Accessibility** — screen reader users depend on alt text to understand visual content
2. **SEO** — search engines use alt text to understand image context and rank in image search
3. **AI visibility** — AI search tools use image descriptions to build page context, especially for people, places, and visual proof points

Alt text shouldn't be keyword-stuffed. It should describe what the image actually shows, clearly and briefly. "Judge Patrick King speaking at the Madison County Courthouse" is correct. "Best judge Illinois circuit court 2026 election" is not.

---

None of these take more than 20 minutes combined. All of them compound over time. None are optional on a site you care about.

The pattern is consistent across every site audit: the technical fundamentals get skipped in the rush to launch, and then they become months of catch-up work. Thirty minutes before go-live prevents all of it.

Check the list. Ship clean.
