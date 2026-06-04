---
title: "From 35 to 93: What Actually Moves Structured Data Scores for Local Businesses"
date: 2026-06-04T08:00:00-05:00
author: "Jed Wilson"
category: "AI Automation"
tags: ["GEO", "Structured Data", "Schema", "Local SEO", "AI Visibility"]
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80"
image_credit: "Jordan Harrison"
image_credit_url: "https://unsplash.com/@jordanharrison"
description: "Most local businesses have one schema type and call it done. Here's what it looks like to go from a skeleton structured data setup to a complete machine-readable identity layer — and why 58 points of improvement matters for AI visibility."
summary: "A single LocalBusiness block was the standard in 2015. In 2026, AI systems need a complete identity layer — Organization, FAQPage, Article with Speakable, Person, BreadcrumbList, and sameAs arrays. Here's what that actually looks like."
---

Most local businesses have some version of structured data. A `LocalBusiness` block, maybe a star rating, possibly a phone number. They added it years ago because an SEO checklist said to. And it hasn't been touched since.

That's the problem. That's why structured data scores for local businesses tend to cluster in the 30–40 range — not because the schema is wrong, but because it's incomplete. A single type covers one narrow slice of what AI systems need to understand a business.

Here's what it actually looks like to fix that.

---

## The Starting Point: One Type, No Depth

A typical local business schema setup looks like this:

```json
{
  "@type": "LocalBusiness",
  "name": "Business Name",
  "telephone": "555-000-0000",
  "address": { ... }
}
```

That's technically valid. It tells a search engine what kind of business it is and where it's located. For 2015 Google crawlers, that was plenty.

For AI systems in 2026? It's the equivalent of a business card with no website, no social profiles, and no way to verify the entity is real.

When we ran an audit on a local services website with this kind of setup, the structured data dimension scored **35 out of 100**. Technical score was 95 — the site was fast, secure, and well-built. But the machine-readable identity layer was essentially empty.

---

## What We Added (And Why Each One Matters)

### 1. Organization as the Root Entity

`LocalBusiness` is a subtype of `Organization`. Adding an explicit `Organization` entity with a proper `@id` gives AI systems an anchor — a stable URL they can treat as the canonical identifier for the business across the web.

Without it, every page looks like an isolated signal. With it, the schema forms a connected graph.

### 2. FAQPage on Service Pages

AI systems — particularly retrieval-augmented generation systems — love FAQ structure. A question-and-answer format maps directly onto how AI assembles responses to user queries. If your page says "How long does this service take?" and answers it in a `Question`/`Answer` pair, that's the exact format a language model needs to cite you accurately.

We added `FAQPage` schema to the site's primary service pages. Each question was pulled from actual content already on the page — not fabricated. The structured version just made it machine-readable.

### 3. Article / BlogPosting with Speakable

For the site's blog content, we upgraded from unstructured HTML to `Article` or `BlogPosting` schema with key fields: `author`, `datePublished`, `dateModified`, `headline`, and `speakableSpecification`.

The `Speakable` field is specifically designed to tell AI what portion of a page is worth reading aloud or extracting as a summary. It's one of the most underused properties in structured data, and one of the most directly relevant to AI citation behavior.

### 4. Person Schema for the Lead Professional

AI systems — especially those assembling responses about professional services — try to verify expertise. A `Person` entity linked to the lead clinician, consultant, or professional, with a `sameAs` pointing to their LinkedIn profile, is E-E-A-T signal made machine-readable.

This is especially important in health, legal, and financial categories where AI is trained to prioritize author credibility.

### 5. BreadcrumbList on Interior Pages

Breadcrumbs help AI understand site structure. They tell a crawler not just what a page is about, but where it fits in the overall site hierarchy. A service page with a clear path — Home → Services → Specific Service — is far easier for a model to contextualize than a standalone URL.

### 6. sameAs Arrays with Verified Social Profiles

Every `Organization` entity should have a `sameAs` array listing the business's verified presences: Facebook Business Page, LinkedIn, YouTube, Yelp, Google Business Profile, Wikidata. These are corroboration links — they let AI systems cross-reference the entity and confirm it's a real, established business with presence across the web.

Most businesses skip this entirely. It's one of the highest-leverage additions in the entire schema stack.

---

## The Result: 35 → 93 in One Session

After implementing all of these changes — plus adding canonical URLs and `og:image` tags to all pages — the structured data dimension score jumped from **35 to 93**.

That's a 58-point improvement. The overall site score moved from 66/100 (Grade C) to 83/100 (Grade B).

The technical work was already done. The content was already there. The schema just needed to be built around it.

---

## The Real Takeaway

Structured data isn't just an SEO checkbox. It's the machine-readable identity layer that AI systems use to understand, verify, and cite a business.

A `LocalBusiness` block tells AI what you are. `Organization` + `Person` + `FAQPage` + `Article` + `sameAs` tells AI *who you are*, where you can be verified, what you know, and how to summarize you.

That's the difference between showing up in an AI-generated answer and being invisible to it.

If your structured data score is below 50, you haven't built the identity layer yet. Everything else — content, links, reviews — is harder to leverage without it.
