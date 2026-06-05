---
title: "The Typo That Silently Breaks Your Static Site (And How to Catch It)"
date: 2026-06-05T08:30:00-05:00
author: "Jed Wilson"
category: "Web Development"
tags: ["Hugo", "Static Sites", "Debugging", "Frontmatter", "Web Development"]
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop&q=80"
image_credit: "Shahadat Rahman on Unsplash"
image_credit_url: "https://unsplash.com/@hishahadat"
description: "A wrong frontmatter key in your static site generator won't throw an error — it will just silently do nothing. Here's the story of a missing blog image and what it teaches about debugging config-driven systems."
summary: "Static site generators fail gracefully — sometimes too gracefully. A wrong frontmatter key produces no error, no warning, just a missing feature. Here's how to debug it and what to do about it."
---

Here's a debugging scenario that'll feel familiar if you've spent any time with Hugo, Jekyll, or any config-driven static site generator:

A blog post is missing its featured image. You check the file. The image URL is right there in the frontmatter. The file exists. The path is correct. Nothing is broken. And yet — no image.

No error. No warning in the build output. Just... nothing.

Welcome to the silent failure mode of frontmatter key mismatches.

## What Happened

The frontmatter on the blog post looked like this:

```yaml
---
title: "My Blog Post"
featured_image: "https://example.com/photo.jpg"
---
```

The Hugo theme was looking for this:

```yaml
---
title: "My Blog Post"
image: "https://example.com/photo.jpg"
---
```

One key: `featured_image`. Other key: `image`. Same URL, different variable name.

Hugo's template called `.Params.image`. The frontmatter had `.Params.featured_image`. Hugo evaluated `.Params.image`, got nil, didn't render the image tag, and moved on. No complaints.

Completely valid behavior. Completely silent failure.

## Why Static Site Generators Fail This Way

Static site generators are designed to be flexible. Frontmatter is essentially a free-form YAML dictionary — you can put whatever keys you want in there, and templates just look up what they need. This is powerful and intentional.

The tradeoff is that there's no schema enforcement. Unlike a form validation or a typed API, nothing checks whether the keys in your frontmatter match what the templates expect. The template asks for a variable, doesn't find it, returns empty, and the feature quietly disappears.

This is different from most software bugs where something breaks visibly. Here, the software works perfectly — it just doesn't do the thing you wanted.

## The Debugging Pattern

When you encounter a "feature is missing, nothing is broken" problem in a static site, the fastest path to resolution is:

**1. Check the theme documentation or template source for the exact variable name.**

Don't guess. Open the theme's layout files and search for `.Params.` to see exactly what keys the template expects. In Hugo, that's usually in `layouts/` or the theme's `layouts/` folder.

```bash
grep -r "\.Params\." themes/your-theme/layouts/
```

**2. Check your frontmatter against that list.**

Look for close-but-not-right matches: `featured_image` vs `image`, `cover` vs `thumbnail`, `hero_image` vs `header_image`. These variants are extremely common across different Hugo themes.

**3. Search your content directory for inconsistent usage.**

Once you find the right key, check whether other posts also use the wrong one:

```bash
grep -r "featured_image:" content/
```

If this was a mistake on one post, it's probably a mistake on several.

## The Broader Pattern: Config-Driven Silent Failures

This isn't a Hugo-specific problem. It's a pattern that shows up across every config-driven or template-driven system:

- **Env variables with wrong names** — your app expects `API_KEY`, you set `APIKEY`, it falls back to undefined and uses a default or fails quietly
- **Wrong JSON key names in schema** — you pass `streetAddress` but the property is `street_address`, so it's ignored
- **CSS class names that don't match** — your JS adds `is-active`, your CSS targets `.active`, nothing happens
- **Webhook payload field names** — your code reads `event.user_id`, the payload sends `event.userId`, the field is nil

The common thread: the system doesn't know what you *meant* to configure. It only knows what you *actually* configured. And when those don't match, it moves on silently.

## Preventing It

A few habits that help:

**Use autocomplete-aware tools when possible.** VS Code extensions for Hugo, Jekyll, and similar tools can provide frontmatter key completions based on your theme. Use them.

**Keep a frontmatter template.** For any theme you use regularly, maintain a snippet or template file with all the valid keys. Copy-paste from that when creating new posts instead of typing from memory.

**Add a content audit step.** Periodically grep your content directory for variant key names. It takes 30 seconds and catches drift before it accumulates across 20 posts.

**When something silently disappears, look at the config first.** Resist the urge to debug the code. In config-driven systems, 80% of "feature stopped working" issues are key name mismatches, not actual bugs.

---

The fix here was a single word: changing `featured_image` to `image`. Two minutes from diagnosis to resolution. The investigation took longer than the fix — which is usually how it goes with silent failures.

The lesson isn't that static site generators are fragile. It's that config-driven systems require a different debugging instinct: when nothing is broken but something is missing, check the vocabulary before you check the logic.
