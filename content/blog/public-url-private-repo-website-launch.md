---
title: "The Website Link Is Not the GitHub Repo"
date: 2026-06-25T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Web Development"
tags: ["Web Development", "Static Sites", "Website Strategy", "Deployment", "Client Management"]
image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200&q=80&auto=format&fit=crop"
image_credit: "Luca Bravo on Unsplash"
image_credit_url: "https://unsplash.com/@lucabravo"
description: "A private GitHub repository, a local preview, and a public website URL are three different things. Keeping those links straight prevents launch confusion."
summary: "When a website is being built with modern tools, there are usually three links floating around: the local preview, the code repository, and the public deployment. Only one of them is meant for normal visitors."
---

One of the easiest ways to confuse a website launch is to share the wrong link.

Modern websites often have more than one URL during development. There may be a local preview URL, a GitHub repository URL, a staging deployment, a production deployment, and eventually a custom domain.

To a developer, those are obviously different things.

To a business owner reviewing the site, they can all look like "the website link."

That small misunderstanding creates real friction. Someone opens a GitHub repository and sees a login screen or a 404 page. They think the website is broken. Or they open a local preview link that only works on the builder's machine. They think the site cannot be shared. Or they review an older production deployment and assume the latest edits were not made.

The problem is not technical complexity. The problem is unclear handoff.

## There Are Usually Three Links

Most AI-assisted website builds have at least three separate surfaces:

1. The local preview
2. The code repository
3. The public deployment

The local preview is for building. It often looks like `localhost:4321` or another local development address. It is fast, useful, and private to the machine running it. It is not a client-facing link.

The code repository is for source control. It might live on GitHub, GitLab, or another platform. This is where the project files, commits, branches, and deployment connection live. It can be private, and in most client situations it should be private. A normal website visitor does not need access to it.

The public deployment is the actual website preview. This is the link a client, stakeholder, or buyer can open in a browser without developer tools, local setup, or repo permissions.

That third link is the one people usually want.

## Private Repos Are Not Broken Websites

When someone opens a private GitHub repository without access, GitHub may show a 404 page. That can feel like a broken link, but it usually just means the repo is private.

That is normal.

A private repo protects the project source, environment decisions, history, and internal implementation. It should not be treated as the public website.

The public website should live on a deployment platform or hosting environment, such as Vercel, Netlify, Cloudflare Pages, GitHub Pages, or the final production host. That public URL can be shared without giving anyone code access.

The clean rule is simple:

Share the deployment link for review. Share the repo link only with people who need to work on the code.

## Deploy After the Final Review Change

There is one more catch: a public deployment can lag behind local work.

If a title, layout, image, or section was just changed locally, the live site will not reflect that change until it is built and deployed. That is why "I changed it" and "it is live" are not the same statement.

A good launch workflow separates those steps:

1. Make the change locally.
2. Run the build.
3. Commit the change.
4. Push or deploy to production.
5. Open the public URL and verify the exact text or section changed.

That last step matters. Do not assume the deployment updated. Check it.

If the public page still shows the old version, the issue may be caching, a failed build, a disconnected deployment, or a change that never got pushed.

## The Handoff Should Be Plain English

The best client handoff does not need technical language.

It should say:

- "This is the private code repo."
- "This is the local preview, which only works on my machine."
- "This is the public website link you can open and share."
- "The latest edits were deployed at this time."

That clears up almost every review-link problem.

It also helps the builder stay accountable. If the client asks for the live URL, do not send the repo unless they specifically asked for code. If the client asks why GitHub requires a login, explain that GitHub is not the public website.

## The Takeaway

A website project is not truly review-ready just because the code exists.

It is review-ready when the public deployment is current, accessible, and verified.

Keep the repo private. Keep the local preview internal. Share the public URL. Then verify the page after every important change.

That one habit prevents a lot of unnecessary launch confusion.
