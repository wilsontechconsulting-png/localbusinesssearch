---
title: "What a 4-Dimensional AI Visibility Audit Actually Looks Like"
date: 2026-06-04T08:15:00-05:00
author: "Jed Wilson"
category: "AI Automation"
tags: ["GEO", "Audit", "AI Visibility", "Structured Data", "Content Strategy"]
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
image_credit: "Luke Chesser"
image_credit_url: "https://unsplash.com/@lukechesser"
description: "Most GEO audits are a checklist. A real audit measures four distinct dimensions — and which one is weakest tells you more about a site than the total score does."
summary: "Technical. Content. Schema. Brand. A real AI visibility audit measures all four — and the breakdown tells you more than the total score. Here's what each dimension measures and the common patterns we see."
---

When people talk about AI visibility audits, they usually mean one of two things: a generic checklist someone downloaded from a blog, or a single score from a tool with no explanation of what it measures.

Neither of those tells you where to spend your time.

A real AI visibility audit measures four distinct dimensions. Each one captures a different aspect of how AI systems find, read, and cite a website. The breakdown — not the total — is what drives the fix.

---

## The 4 Dimensions

### 1. Technical (How well can AI crawlers reach and read your content?)

Technical measures everything that happens before an AI model reads a single word of your content:

- Is the site fast enough that crawlers don't time out?
- Is content present in the initial HTML, or does it require JavaScript execution?
- Are canonical URLs set correctly so AI systems know which version of a page is authoritative?
- Is the `robots.txt` blocking any crawlers it shouldn't?
- Are `og:image` and metadata present for rich previews?
- Is `llms.txt` in place for AI-specific navigation?

Technical scores tend to be the highest dimension for most sites. If a business has invested in modern web infrastructure — fast hosting, HTTPS, a CMS with good defaults — technical often scores in the 80s or 90s out of 100.

**What low technical scores look like:** Sites built entirely in JavaScript with no server-side rendering, missing canonical tags, blocked crawlers, slow page loads (>3s), no `llms.txt`.

### 2. Content (Does your content answer questions the way AI needs to answer them?)

Content measures whether the information on your site is structured in a way that AI systems can extract and use as a citation:

- Are service/product pages specific enough to be useful, or are they vague and generic?
- Is there statistical density — real numbers, measurements, outcomes — or only qualitative claims?
- Do pages address specific user questions, or only describe the business?
- Is content attributed to a real author, or anonymous?
- Is the reading level appropriate for the intended audience?
- Are there FAQ patterns that map directly onto query formats?

Content is where most sites have the most room to grow. It's also the slowest dimension to improve, because it requires actual writing.

**What low content scores look like:** Service pages with three paragraphs of vague descriptions, blog posts attributed to "Admin" or the company name, no specific outcomes or numbers, no FAQ structure.

### 3. Schema (Is the machine-readable identity layer complete?)

Schema measures the structured data layer — the `@type` blocks that tell AI systems and search engines *what* every page is and *who* the business is:

- Is there an `Organization` root entity with a stable `@id`?
- Are service pages using `FAQPage` schema?
- Are blog posts using `Article` or `BlogPosting` with `author`, `datePublished`, and `Speakable`?
- Is there a `Person` entity for key professionals?
- Is there a `BreadcrumbList` on interior pages?
- Are `sameAs` arrays populated with real, verified social profiles?
- Is there a Wikidata entity linked in `sameAs`?

Schema is almost always the weakest dimension for local businesses. A site can be technically excellent and have great content, but if the machine-readable layer is a single `LocalBusiness` block from 2019, the schema score will reflect that.

**What low schema scores look like:** One schema type, no `sameAs` links, no `Person` entities, no `FAQPage`, no `Speakable`, no Wikidata entry.

### 4. Brand (How consistently does the business present itself across the web?)

Brand measures external entity coherence — whether the business looks the same across all the places AI systems check:

- Is the business name identical on the website, Google Business Profile, Yelp, Facebook, LinkedIn, and social media?
- Does the NAP (Name, Address, Phone) match everywhere it appears?
- Are there conflicting or outdated profiles still live?
- Are reviews present and recent on multiple platforms?
- Is there a Wikipedia or Wikidata entry?

Brand is almost always the ceiling. You can have perfect technical scores, excellent content, and complete schema — but if AI systems see four different versions of the business name across the web, they'll treat them as different entities and fail to consolidate the signals.

**What low brand scores look like:** DBA names vs. legal names mixed across platforms, outdated addresses on old directory listings, multiple Google Business profiles from different eras, social accounts with different handles than the official website.

---

## The Common Pattern

Across multiple audits, the pattern is consistent:

- **Technical:** Usually the highest (80s–90s if the site is reasonably modern)
- **Schema:** Usually the lowest (30s–50s for businesses that haven't invested in structured data)
- **Content:** Middle range, with high variance depending on how much the business has invested in writing
- **Brand:** Often higher than schema, but with a few fixable inconsistencies dragging it down

The implication: for most local businesses, the first fix is schema. It's entirely within the business's control, it can be done in a single session, and the impact on the overall score is immediate and measurable.

---

## The Audit → Fix → Re-Audit Workflow

The reason to run the audit *before* fixing anything is to establish a baseline. Without a before score, you can't measure impact.

The workflow:

1. **Audit** — run the 4-dimensional assessment, note each dimension score
2. **Prioritize** — fix the lowest dimension first (usually schema)
3. **Implement** — make the changes
4. **Re-audit** — run the assessment again with the same methodology
5. **Measure** — compare dimension scores before and after

This workflow turns GEO work from a vague "improve AI visibility" effort into a measurable, repeatable process. In a recent session, implementing schema fixes moved a structured data score from 35 to 93 — a 58-point gain. That's only visible because there was a baseline to compare against.

---

## The Real Takeaway

Running the audit before fixing is what lets you measure actual impact.

A single overall score is useful as a summary. The 4-dimensional breakdown is what tells you what to do next. And the before/after comparison is what tells you whether it worked.

GEO without measurement is just guessing. The audit is what makes it engineering.
