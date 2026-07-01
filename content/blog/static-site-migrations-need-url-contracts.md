---
title: "Static Site Migrations Need a URL Contract Before a Redesign"
date: 2026-07-01T06:00:00-05:00
draft: false
description: "A static-site migration should start with a complete URL contract. Before redesigning anything, preserve every page, feed, image, sitemap, and hidden route so the new build does not quietly break the old site."
category: "Web Development"
tags: ["Static Sites", "Web Development", "Migration", "SEO", "Quality Control"]
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"
image_credit: "Carlos Muza on Unsplash"
image_credit_url: "https://unsplash.com/@kmuza"
summary: "Framework migrations get risky when teams start with components instead of URLs. A URL contract makes the old site measurable before the new one gets redesigned."
---

The riskiest part of a static-site migration is not the framework.

It is the assumption that the new build contains everything the old build contained.

That sounds simple until you look at a real site. The homepage and service pages are easy to remember. Blog posts are usually obvious. But static sites also accumulate category archives, tag archives, RSS feeds, XML files, sitemaps, robots files, social images, noindex pages, thank-you pages, private proposal pages, and old routes that still get crawled or shared.

If the migration starts with, "Let's rebuild the homepage," those details get missed.

A better migration starts with a URL contract.

Before changing the design, export the current build's public surface area. That means every generated HTML file, every XML feed, every static text file, and every important image path. Save that inventory somewhere permanent. It becomes the contract the new build has to satisfy.

This changes the whole project.

Instead of asking, "Does the new site look better?" the first question becomes, "Does the new site preserve the same public promises?"

That includes routes like:

- `/blog/example-post/`
- `/categories/topic/`
- `/tags/topic/`
- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/images/social-card-default.png`

Those paths may not matter to a designer looking at the first screen. They matter to search engines, AI crawlers, social previews, old links, browser bookmarks, and anyone who copied a URL six months ago.

The workflow is straightforward.

First, build the old site into a temporary output folder. Do not rely on memory or the navigation menu. The nav only shows what humans are meant to click. The build output shows what the web can reach.

Second, generate a sorted inventory of public files. Keep it boring and mechanical. You want a list that can be compared later, not a polished document.

Third, scaffold the new framework beside the old one. Do not delete the working site just because the first new page renders. The old build is your fallback until the new build proves parity.

Fourth, migrate content and routing before redesign. This is the part that feels slower but saves the project. Dynamic routes, taxonomy pages, feeds, canonical URLs, images, and hidden noindex pages should be working before the visual system gets ambitious.

Fifth, compare the old inventory to the new output. The best result is not "close enough." The best result is zero missing URLs and zero accidental extras.

Only then should the redesign become the main event.

This order also makes the design work better. Once the migration is measurable, the team can redesign without worrying that every visual decision might be hiding a broken route. The homepage can change. The header can improve. The blog cards can get cleaner. The site can feel new without losing the web history it already earned.

There is a second benefit: broken links surface early.

During a migration check, it is common to find internal links that were already broken in the old site. That is not a migration failure. It is useful evidence. The new build can correct those links instead of faithfully preserving old mistakes.

The clear takeaway:

Do not start a static-site migration with a design mockup.

Start with a URL contract.

Then migrate the structure, prove parity, fix broken links, and redesign from a stable foundation.
