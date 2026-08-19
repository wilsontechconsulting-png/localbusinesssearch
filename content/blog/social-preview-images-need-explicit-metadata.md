---
title: "Social Preview Images Need Explicit Metadata"
date: 2026-08-19T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Web Development"
tags: ["Web Development", "SEO", "Social Media", "Content Strategy", "Quality Control"]
image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80&auto=format&fit=crop"
image_credit: "Alexander Shatov on Unsplash"
image_credit_url: "https://unsplash.com/@alexbemore"
description: "Adding an image to a blog post is not enough to control how that link appears when it is shared. Social previews need explicit Open Graph and Twitter metadata."
summary: "A blog image has two jobs: improve the page itself and represent the link everywhere it gets shared. That second job only works when the page outputs the right preview metadata."
---

A blog post image has two different jobs.

The first job is obvious: make the article itself better. A good image gives the reader context, breaks up the page, and makes the post feel more complete.

The second job is easier to miss: represent the link everywhere else.

When someone shares a blog URL in a text message, Slack thread, Facebook post, LinkedIn update, or X post, the platform usually does not care what image looks nice inside the article body. It reads the page metadata and builds a preview card from that. If the metadata is missing or pointing at the wrong asset, the shared link may show a logo, a random image, or no image at all.

That is why adding the image to the page is only half the work.

## The Page And The Preview Are Different Surfaces

Website builders often treat an article image like content. That makes sense inside the CMS or markdown file. The post has a title, date, author, body, and image.

Social platforms treat the same URL like a data object.

They look for fields such as:

- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `twitter:card`
- `twitter:image`

Those tags live in the HTML head, not in the visible article layout. A visitor may never notice them, but link preview crawlers depend on them.

This creates a common failure pattern. The post looks perfect in the browser. The image is visible. The article is published. Then the link gets shared, and the preview card is wrong.

Nothing is broken from the reader's point of view. The distribution layer is broken.

## Every Shareable Page Needs A Preview Contract

The fix is to treat link previews as part of the page contract.

For a blog post, that contract should usually include:

1. A visible featured image near the article.
2. An absolute `og:image` URL for social platforms.
3. A matching `twitter:image` tag.
4. A concise description that works outside the website.
5. A preview image with reliable dimensions, usually close to 1200 by 630 pixels.

The word "absolute" matters. Some platforms handle relative image paths. Some do not. If the image URL starts with `/images/example.jpg`, it may work in the browser but fail when a crawler tries to resolve it from outside the site. A full URL is safer:

```html
<meta property="og:image" content="https://example.com/images/example.jpg">
```

That one detail prevents a lot of silent preview failures.

## Test The Link Like A Stranger Would

After publishing, do not only reload the blog post.

Copy the public URL and test the share behavior. Paste it somewhere that renders rich previews. Use social debugger tools when available. Fetch the live HTML and confirm the preview tags are present.

The basic source check is simple:

```bash
curl -L https://example.com/blog/post-slug | grep "og:image"
```

If the expected image URL is not in the live HTML, the platform has nothing reliable to read.

Also remember that social platforms cache previews. If an old card is already cached, updating the website may not instantly update the preview everywhere. Debugger tools can usually refresh the scraped version, but the real requirement is still the same: the live page needs correct metadata first.

## The Takeaway

A blog image should not only make the article look better.

It should make the link travel better.

For any content worth sharing, verify both surfaces: the visible page and the invisible metadata. The reader sees the first one. Social platforms read the second one. A finished blog post needs both.
