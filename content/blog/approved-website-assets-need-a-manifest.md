---
title: "Approved Website Assets Need a Manifest"
date: 2026-07-07T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Web Development"
tags: ["Web Design", "Website Strategy", "Content Strategy", "Static Sites", "Workflow"]
image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&q=80&auto=format&fit=crop"
image_credit: "Hal Gatewood on Unsplash"
image_credit_url: "https://unsplash.com/@halgatewood"
description: "Before using approved website images in a redesign, collect them into a clean asset archive with folders, hashes, friendly filenames, and a rename map."
summary: "Approved images are only useful if the team can find, trust, and reuse them. A simple manifest turns a loose pile of downloaded files into a working design asset library."
---

Most website image problems are not creative problems.

They are asset management problems.

A business may already have plenty of useful visuals: product photos, installation examples, facility shots, detail images, diagrams, logos, and older website graphics. The issue is that those assets are often scattered across pages, uploads folders, PDFs, galleries, and theme directories. Everyone assumes the images are "on the website," but nobody knows what exists, what is duplicated, what is broken, or what should be reused.

That is how redesigns end up using worse images than the old site already had.

Before design starts, approved website assets need to be treated like source material.

## Preserve The Original Context

The first mistake is dumping every downloaded image into one flat folder.

That feels clean for about five minutes. Then you realize a thumbnail, a gallery photo, a product diagram, and a background texture all have similar names. The original folder path often gives important clues about how the file was used.

If an image came from a gallery folder, a product category, a design tool, or a literature preview, that context matters. It tells the designer or developer what kind of image they are looking at before they open it.

Keep the folder structure first. Rename later.

## Create A Manifest

A manifest is a simple file that lists every asset with basic details:

- file path
- file size
- file type
- hash or checksum
- original URL, when available

That last part is useful because downloaded websites often contain duplicates. The same image may appear in multiple places with different names, or the same filename may point to different files in different folders.

A hash makes duplication visible. It also gives the team confidence that a file did not change accidentally during cleanup.

This does not need to be complicated. A spreadsheet or tab-separated file is enough. The point is to make the archive inspectable.

## Rename For Humans, But Keep A Map

Original web filenames are rarely friendly. They may look like `img_0421.jpg`, `th_uas_200.png`, or `background-final-new2.jpeg`.

For a working design library, friendlier names help. A consistent pattern such as `brand service category 001.jpg` makes files easier to browse, search, and hand off.

But renaming creates one risk: you lose the trail back to the source.

The fix is a rename map. Keep a small file with two columns: old path and new path. Now the assets are easier to use without erasing where they came from.

## Separate Useful Assets From Noise

Not every image on a website deserves to be reused.

A crawl may capture icons, carousel controls, spacer images, tiny thumbnails, tracking pixels, favicons, and broken references. Some of those files are technically images, but they are not design assets.

That is why the archive should include notes for blocked, missing, or rejected files. The cleanup process should answer:

- What was captured?
- What failed?
- What was skipped on purpose?
- Which folder should the team actually use?

That final question matters. A clean `images` folder is much easier to work from than a mixed download folder full of PDFs, scripts, thumbnails, and failed requests.

## The Takeaway

Approved images are only valuable if the team can find them, understand them, and trust them.

Before dropping old website visuals into a new design, build a small asset intake system: preserve folders, generate a manifest, rename files consistently, and keep a rename map.

It is not glamorous work, but it prevents a lot of confusion later. More importantly, it lets the redesign start from real business proof instead of another round of generic stock photos.
