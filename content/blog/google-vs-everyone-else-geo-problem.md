---
title: "The Google vs. Everyone Else GEO Problem"
date: 2026-06-04T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "AI Automation"
tags: ["GEO", "llms.txt", "ClaudeBot", "Perplexity", "ChatGPT", "AI Visibility"]
image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&auto=format&fit=crop&q=80"
image_credit: "Rubaitul Azad"
image_credit_url: "https://unsplash.com/@rubaitulazad"
description: "Google says llms.txt isn't required for AI Overviews. ClaudeBot can't render JavaScript. Perplexity and ChatGPT both use llms.txt. Here's why optimizing for the hardest crawler covers everything."
summary: "Don't drop llms.txt just because Google said it's optional. Google is one AI platform out of many — and the most forgiving one. Optimize for the hardest crawler and everything else gets covered."
---

In May 2026, Google published an AI optimization guide. Buried in the guidance was a statement that's been misread by a lot of SEOs and business owners: `llms.txt` is **not required** for Google's AI Overviews.

Some people read that and stopped there. "Google doesn't need llms.txt, so I don't need llms.txt."

That's only true if Google is the only AI platform you care about. And in 2026, Google is one AI platform out of many.

---

## The Platform Reality

Here's what actually matters, broken down by platform:

| Platform | Renders JavaScript? | Uses llms.txt? | Chunking Sensitivity |
|---|---|---|---|
| Google AI Overviews | Yes | Not required | Medium |
| ClaudeBot (Anthropic) | **No** | Yes | High |
| Perplexity | Partial | **Yes** | High |
| ChatGPT / Bing | Partial | **Yes** | Medium |
| Grok / xAI | Partial | Emerging | Medium |

Google's crawler is among the most capable on the web. It has JavaScript rendering, full DOM access, and a sophisticated entity graph built over two decades. It can work around a missing `llms.txt` because it has the infrastructure to understand a site anyway.

ClaudeBot does not render JavaScript. At all.

If your site's primary content depends on client-side rendering — React, Next.js with dynamic routes, Vue, any SPA — ClaudeBot may be crawling essentially empty pages. It sees the HTML that the server returns before JavaScript executes. If that HTML is a shell with a `<div id="root">` and nothing else, that's what ClaudeBot indexes.

---

## The `llms.txt` Situation

`llms.txt` is a plain-text file that sits at the root of your site (e.g., `yourdomain.com/llms.txt`) and tells AI crawlers what to read, in what order, and which parts of the site are worth their attention.

Perplexity uses it. ChatGPT/Bing use it. ClaudeBot uses it. Grok is moving toward it.

Google doesn't require it — but Google also has the most sophisticated crawler on the planet. Every other AI system is working with more limited crawling infrastructure. `llms.txt` is a map that helps them do a better job.

Dropping `llms.txt` because Google said it's optional is like removing bilingual signage from your store because most of your customers already speak English. The customers who needed the signage don't stop existing.

---

## The Rule: Optimize for the Hardest Crawler

The right mental model here is: **optimize for the hardest constraint, and everything else gets covered.**

ClaudeBot has the most demanding requirements:
- No JavaScript rendering → content must be server-side rendered or in static HTML
- Uses `llms.txt` for navigation
- Sensitive to large HTML payloads and deeply nested structures
- Prefers structured, clean, scannable content

If your site satisfies ClaudeBot's requirements, you're covered for every other AI platform:
- Your content is in static HTML → Google can read it anyway, but so can everyone else
- Your `llms.txt` is present → ChatGPT and Perplexity use it, Google ignores it, nobody's hurt
- Your HTML is clean and well-structured → all chunking-sensitive systems handle you better

The inverse isn't true. If you optimize only for Google, you may have a JavaScript-heavy site with no `llms.txt` that Perplexity and ClaudeBot struggle with. You've captured one platform and left the others underserved.

---

## Practical Checklist

**Serve real HTML:**
- If you're running a JavaScript-heavy framework, verify that server-side rendering is enabled and that primary content is in the initial HTML payload
- Use `curl -A "Mozilla/5.0" https://yoursite.com/key-page` to see what a basic crawler sees — that's roughly what ClaudeBot sees

**Maintain your `llms.txt`:**
- List your most important pages
- Include brief descriptions of each section
- Update it when you publish new cornerstone content
- Format: plain text, one URL per line with optional description

**Structure your content:**
- Use headers (`h1`, `h2`, `h3`) hierarchically
- Keep important content above the fold in the HTML source, not loaded on scroll
- Use `Speakable` schema on pages you want AI to summarize

**Don't A/B test Google-specific features against AI readability:**
- Lazy loading that hides key content? Fine for user experience, bad for ClaudeBot
- Infinite scroll for content discovery? Worth considering a static sitemap alternative

---

## The Real Takeaway

Don't drop `llms.txt` just because Google said it's optional. They're one platform out of many — and the most forgiving one at that.

The AI visibility landscape includes Perplexity, ChatGPT, ClaudeBot, Grok, and whatever comes next. They all have different capabilities and different limitations. The smart move is to optimize for the lowest common denominator — the hardest crawler — and everything harder than that is already covered.

Google's advanced capabilities are a gift. Don't let them make you sloppy for everyone else.
