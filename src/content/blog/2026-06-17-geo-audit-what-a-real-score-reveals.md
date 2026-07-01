---
title: "We Ran a Real GEO Audit. The Score Was 56/100. Here's What That Means."
date: 2026-06-17T06:00:00-05:00
draft: false
description: "A real Generative Engine Optimization audit across four dimensions — technical, citability, schema, and brand. Here's what the scores actually revealed and what to do about them."
tags: ["geo", "ai-search", "ai-visibility", "schema", "structured-data", "seo"]
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
image_credit: "Luke Chesser on Unsplash"
image_credit_url: "https://unsplash.com/@lukechesser"
---

We ran a full GEO audit on a modern SaaS + hardware site this week. Four dimensions scored independently, then weighted into a composite. The final score: **56/100 — Grade C: Developing.**

Here's the breakdown that actually surprised us — and what it means for any business trying to get cited by AI search engines.

## The Four Dimensions (And How They Were Weighted)

GEO audits aren't a single score. They're four independent analyses combined:

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| Technical Accessibility | 20% | Can AI crawlers actually reach and read your content? |
| Content Citability | 35% | Would an AI engine cite your content when answering a question? |
| Structured Data | 20% | Do you have JSON-LD schema so machines can extract facts? |
| Entity & Brand Signals | 25% | Do third-party sources confirm your brand is a real, trustworthy entity? |

Content citability carries the most weight — and rightly so. A site that's technically perfect but has nothing worth citing is invisible to AI engines regardless of crawlability.

## The Surprise: Technical Was 93. Schema Was 10.

The site we audited runs on Shopify. Shopify's infrastructure is excellent — server-side rendering, fast CDN, clean robots.txt with no AI crawler blocks, valid sitemap index, HTTPS, mobile viewport. Technical score: **93/100.**

Schema score: **10/100.**

The gap between those two numbers is the core insight. The site was technically accessible to every AI crawler on the planet. But there was almost nothing for those crawlers to extract as structured facts:

- No Organization schema → AI engines can't identify the brand as a verified entity
- No FAQPage schema → 9 homepage FAQ questions existed in HTML but were invisible to structured retrieval
- No Article schema on blog posts → no author, no date, no speakable property
- No SoftwareApplication or Product schema with AggregateRating → product data is invisible to knowledge graphs
- No WebSite + SearchAction → no search signal

This is a common pattern. Platforms like Shopify, Squarespace, and WordPress handle the infrastructure well. But they don't inject the JSON-LD that AI engines need to understand *what* the site is, *who* runs it, and *what* it offers. That has to be added manually — and most sites never do it.

## What Citability at 73/100 Actually Looks Like

The content on this site was genuinely strong. It had:

- A clear, self-contained product definition ("X is a Y that does Z")
- Specific pricing statistics ($1,499 one-time, $10–50/month ongoing)
- A comparison table with concrete feature-by-feature data
- Blog posts with question-format H2 headings that lead with direct answers
- A 9-question FAQ section on the homepage

That's why citability scored 73 — good structure, good answers, specific numbers.

But it lost points on expertise signals. Every blog post was attributed to "[Brand] Team" rather than a named individual. AI citation engines treat "Company Team" the same as anonymous copy. Expert-sourced content is statistically 41% more likely to be cited by AI systems. One fix — naming a real author with a title and bio on blog posts — would meaningfully move this score.

## Brand at 39: The Entity Recognition Problem

This is where the real gap lives for newer brands.

The site had strong first-party signals: verified customer testimonials with real company names, a Skool community, partner portal, and multiple social profiles. But AI engines don't just read your site — they look across the web for third-party confirmation that your brand exists as a real entity.

That requires:
- A Wikipedia article or Wikidata entry
- A LinkedIn company page
- Listings on ProductHunt, G2, Capterra, or relevant directories
- Reddit discussions or forum mentions
- Press coverage that names the brand specifically

The site had almost none of these. The brand was real, the product was real, the customers were real — but AI engines couldn't corroborate any of it from third-party sources. Without that corroboration, citation confidence stays low.

## The Composite Score Hides the Story

A 56/100 sounds like a middling overall performance. But the real story is an extreme imbalance:

- Technical: 93 (excellent infrastructure, zero crawl barriers)
- Citability: 73 (solid content, fixable expertise gap)
- Schema: 10 (almost entirely missing — highest ROI fix available)
- Brand: 39 (young brand, needs third-party footprint building)

Fixing schema alone — adding Organization, WebSite, FAQPage, and Article JSON-LD — would add an estimated 12–15 points to the composite score. That's one afternoon of work. It would move this site from a 56 to roughly a 70 without touching a single word of content.

## The Takeaway

A GEO audit isn't a pass/fail test. It's a prioritization tool. When you see a 93 in technical and a 10 in schema, you know exactly where to spend the next four hours. When you see a 73 in citability but the expertise signal sub-score is 5/13, you know exactly what kind of content change matters most.

The question for any site isn't "are we GEO-ready?" It's "which of the four dimensions is the current bottleneck?" Start there.

---

*We run GEO audits for clients as part of our AI visibility practice. [Contact us](/contact) to discuss an audit for your site.*
