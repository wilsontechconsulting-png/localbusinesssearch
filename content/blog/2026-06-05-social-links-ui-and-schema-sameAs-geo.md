---
title: "Your Social Links Need to Live in Two Places (And Most Sites Only Have One)"
date: 2026-06-05T08:00:00-05:00
author: "Jed Wilson"
category: "GEO"
tags: ["GEO", "Schema", "Local SEO", "Structured Data", "Social Media"]
image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&auto=format&fit=crop&q=80"
image_credit: "Alexander Shatov on Unsplash"
image_credit_url: "https://unsplash.com/@alexbemore"
description: "Adding social profiles to your website footer isn't enough for GEO. Learn why your Instagram and TikTok links also need to be in your JSON-LD schema's sameAs array — and why both sides working together is what AI actually reads."
summary: "Most sites add social icons to the footer and call it done. But for AI search engines and GEO, you need those same links in your structured data too — and here's exactly why."
---

Most websites have a footer with little social icons. Instagram. Facebook. TikTok. Maybe LinkedIn. You click them, they go to the right profiles. Job done, right?

Not quite — at least not from a GEO (Generative Engine Optimization) perspective.

The footer is for humans. The schema is for machines. And if you only do one, you're leaving half the signal on the table.

## What the Schema sameAs Property Actually Does

JSON-LD structured data has a property called `sameAs`. It's part of the Schema.org vocabulary, and its job is to tell AI systems, search engines, and knowledge graphs: *these other profiles on the web are all the same entity as the one described here.*

Here's what it looks like for a local business:

```json
{
  "@type": "LocalBusiness",
  "name": "Example Chiro",
  "url": "https://example.com",
  "sameAs": [
    "https://www.instagram.com/examplechiro/",
    "https://www.tiktok.com/@examplechiro",
    "https://www.facebook.com/examplechiro"
  ]
}
```

This tells Google, Bing, ChatGPT, Perplexity, and any other AI that parses your page: "All of these are the same real-world business." It creates an identity graph, not just a list of links.

## Why You Need Both

The footer link helps a human click through to your Instagram. It's good for UX.

The `sameAs` entry helps an AI confirm your entity's social presence when generating an answer about your business. When someone asks ChatGPT "does [business name] have an Instagram?" — the AI is reading your structured data, not clicking your footer icons.

They serve completely different audiences:

| Channel | Audience | How It's Consumed |
|---|---|---|
| Footer icon | Human visitor | Clicked manually |
| sameAs in schema | AI / search crawler | Parsed at index time |

If you only have footer icons, you're invisible to the machine layer.
If you only have schema links and no visible UI, you have a trust problem — humans won't see any social proof.

You need both.

## The Three Entities Rule

This gets more nuanced for businesses that have multiple JSON-LD entities on a page. A typical local business website might have:

1. **Organization** — the legal business entity
2. **LocalBusiness** (or a subtype like MedicalBusiness) — the location/service entity
3. **WebSite** — the site itself

A lot of schema implementations add `sameAs` to one of these and forget the others. But if a crawler parses your page and assembles an entity graph, it sees three separate things. The social profiles connected to only one of them don't automatically transfer to the others in every knowledge graph implementation.

Best practice: add the same `sameAs` array to all relevant entities on the page. It's redundant by design — and redundancy in structured data is a feature, not a bug.

## The Build Pattern That Makes This Easy

The reason this often gets missed is that social links tend to live in two completely separate places in a codebase:

1. A UI component (footer, contact section, about page)
2. A schema utility or metadata function

They're written once, maintained separately, and drift apart the moment someone adds a new social profile to the footer but forgets to update the schema.

The fix is to source both from a single config. In a Next.js project, that looks something like this:

```js
// config/social.js
export const socialLinks = [
  { platform: "Instagram", url: "https://instagram.com/yourbusiness", label: "Instagram" },
  { platform: "TikTok", url: "https://tiktok.com/@yourbusiness", label: "TikTok" },
  { platform: "Facebook", url: "https://facebook.com/yourbusiness", label: "Facebook" },
];

export const sameAsUrls = socialLinks.map(s => s.url);
```

Then your UI component maps over `socialLinks` for icons, and your schema generator maps over `sameAsUrls` for the `sameAs` array. One source. No drift. Add a new platform once, it shows up everywhere automatically.

## The GEO Payoff

The reason this matters more than it did two years ago: AI assistants are increasingly answering "tell me about [business]" queries by synthesizing from multiple sources. Your structured data is one of the clearest signals they can parse.

When your entity is clearly connected to its Instagram, TikTok, and Facebook profiles — in machine-readable form — you're giving the AI more confident ground to cite your business with the right details. That's not just SEO. That's entity authority.

And entity authority is what GEO is built on.

---

**Bottom line:** Add your social profiles to your website footer. Then add them to your schema's `sameAs` array. Then wire them to the same data source so they never drift apart. It's a 30-minute project that pays compound interest every time an AI answers a question about your business.
