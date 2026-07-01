---
title: "Your Static Site Build Should Not Rewrite Every Page"
date: 2026-06-26T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Web Development"
tags: ["Hugo", "Static Sites", "Web Development", "Deployment", "Quality Control"]
image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop"
image_credit: "Kevin Ku on Unsplash"
image_credit_url: "https://unsplash.com/@ikukevk"
description: "A static site build that rewrites every page creates noisy deployments. Here's why deterministic output matters and how to keep generated files under control."
summary: "Static site generators are supposed to make deployment boring. But if every build rewrites hundreds of generated files, it becomes harder to see what actually changed."
---

Static sites are supposed to make deployment simple.

You change a Markdown file, run the build, review the generated output, and ship. The source change should explain the deployment. The diff should be boring.

But there is a quiet failure mode that shows up in Hugo, Jekyll, Eleventy, Next static exports, and plenty of custom build systems:

You make one small change, run the build, and suddenly 200 generated files are modified.

Nothing is broken. The site still builds. The pages still load. But your deployment diff is now noisy enough that nobody can tell what actually changed.

That matters.

## The Problem With Noisy Builds

A noisy build usually happens when generated output includes a value that changes every time the build runs. Common examples:

- a timestamp-based CSS cache-buster
- a generated build ID
- a changing asset hash that is not tied to file contents
- sitemap timestamps based on build time instead of content time
- template output that depends on local environment state

The result is a repo full of changed files even when the source content barely moved.

That creates three practical problems.

First, code review gets harder. If 200 HTML files changed because `/css/style.css?v=123` became `/css/style.css?v=456`, the real content change is buried.

Second, deployments become less trustworthy. A client or stakeholder asks what changed, and the honest answer becomes, "Mostly generated output." That is not useful.

Third, rollback gets messier. When a commit mixes content edits with broad generated noise, reverting the right thing takes more attention than it should.

## Deterministic Output Is a Quality Control Feature

Build output should be as deterministic as possible. If the source did not change, the generated files should not change either.

That does not mean cache-busting is bad. Cache-busting is useful. But the value should usually be based on the asset content, the asset modification time, or a deliberate release version. It should not change just because someone ran the build again.

A healthier pattern looks like this:

1. Change source content.
2. Run the build.
3. Review the generated diff.
4. Confirm the generated diff maps to the source change.
5. Commit only meaningful output.

If step three shows hundreds of unrelated file changes, stop and find out why.

## What To Check

When a static build rewrites too much, look for template code that injects moving values:

```go-html-template
{{ now.Unix }}
```

That kind of value guarantees churn. Every build gets a new number.

Instead, prefer something stable:

- a fingerprinted asset pipeline
- a content hash
- a manually controlled site version
- a file modification time when that is truly what you want

The goal is simple: the diff should tell the truth.

## The Takeaway

A static site build passing is not the same thing as a clean build.

Passing means the site can be generated. Clean means the generated output is understandable, reviewable, and tied to real changes.

For small business websites, that matters because most teams do not have time to inspect giant technical diffs. The build process should make confidence easier, not harder.

If one sentence changed, one sentence should be easy to find.

When every page changes, the build system is asking humans to do too much work.
