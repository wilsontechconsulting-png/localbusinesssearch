---
title: "Why Your Link Looks Wrong in a Text Message (And the 10-Minute Fix)"
date: 2026-06-17T06:00:00-05:00
draft: false
description: "When you share a website link in a text message, iMessage pulls the og:image. If it's missing or wrong, your site looks unprofessional. Here's how to fix it in 10 minutes."
tags: ["web-development", "seo", "local-business", "conversion", "meta-tags"]
image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop"
image_credit: "Paul Hanaoka on Unsplash"
image_credit_url: "https://unsplash.com/@plhnk"
---

When someone texts your website URL to a friend, iMessage automatically generates a preview card — a small image, title, and description that pop up before the recipient even taps the link.

If you've never set up your Open Graph image, one of two things happens: the platform shows a random screenshot of your page (often ugly), or it shows nothing at all.

Either way, you've already lost the first impression.

## What Is an OG Image?

Open Graph (OG) tags are meta tags in your website's `<head>` that tell social platforms and messaging apps how to display your content when it's shared as a link.

The key tags are:

```html
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your compelling description" />
<meta property="og:image" content="https://yoursite.com/og-image.jpg" />
```

When someone shares your URL:
- **iMessage** reads `og:image` to generate the card preview
- **Facebook/Instagram** use the OG tags for share previews
- **Twitter/X** uses either OG tags or `twitter:card` tags
- **Slack and Discord** read OG tags to generate link unfurls
- **WhatsApp** does the same

If `og:image` is missing, every platform guesses — and the guess is usually wrong.

## The Business Impact

This matters more than most businesses realize. Consider how links actually get shared in a local service business:

- A happy customer texts your URL to a neighbor
- A sales rep shares your site in an email
- You include your link in a Facebook comment
- Someone screenshots your business card and texts the URL

In all of these moments, the recipient's first visual impression of your business is the link preview — not your homepage. If that preview shows a random stock photo, a broken image, or nothing at all, it creates a subconscious trust gap before they've read a single word.

We worked on a home services website recently where the link preview was showing an old photo from a completely different business. The company had updated their site but never touched the OG image. Every time someone shared their URL in a text, it was undermining the new brand they'd just spent money building.

## The Fix: Three Steps

**Step 1: Create your OG image**

Use an actual photo that represents your business well. For a service business, this might be:
- Your best before/after transformation photo
- A high-quality photo of your team or finished work
- A branded graphic with your logo and tagline

Ideal dimensions: **1200 × 630 pixels** (landscape, 1.91:1 ratio). This works across all major platforms. Portrait images (like phone photos) will be center-cropped — they work, but landscape is cleaner.

**Step 2: Add it to your site's metadata**

In Next.js (App Router):
```typescript
export const metadata = {
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};
```

In WordPress, install a plugin like Yoast SEO or Rank Math and upload the image in the social tab for each page.

In Shopify, go to Online Store → Preferences → Social sharing image.

**Step 3: Test it**

Use the [Open Graph Debugger](https://developers.facebook.com/tools/debug/) (Facebook) or [Twitter Card Validator](https://cards-dev.twitter.com/validator) to see exactly what platforms will show.

For iMessage specifically: share the URL to yourself in a new conversation and check the preview on your phone.

**One important note:** Link previews are cached. After you update your OG image, platforms will continue showing the old preview for a while. Facebook's debugger has a "Scrape Again" button to force a refresh. For iMessage, you may need to send the link in a new thread to a new contact to see the updated preview.

## What Your OG Image Should Communicate

Think of the preview card as a tiny billboard. When someone sees it before tapping, they should immediately understand:

1. **Who you are** — Business name or logo visible
2. **What you do** — Photo shows your product, service, or result
3. **Why it looks trustworthy** — Professional photo, not stock imagery

For a local home services company: a real photo of a finished installation works far better than a generic stock image. It communicates "this is what we actually do" in one glance.

## The Bigger Picture

OG images are a 10-minute fix with a surprisingly long tail. Every link share — in texts, emails, social posts, Slack messages — becomes a mini-advertisement for your business. Get it right once and it works everywhere, indefinitely.

Most local businesses have never touched their OG settings. That means getting this right is a small competitive advantage that costs almost nothing.

---

*We handle technical details like OG images, schema markup, and site performance as part of our website builds. [Contact us](/contact) to learn more.*
