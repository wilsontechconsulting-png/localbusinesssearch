---
title: "A Website Is Not Live Until DNS Says So"
date: 2026-06-30T06:00:00-05:00
draft: false
description: "A clean production deployment can still point visitors to the wrong place. Launch QA should verify DNS, custom domains, redirects, robots.txt, and sitemaps from the public URL."
tags: ["deployment", "web development", "website QA", "dns", "technical seo"]
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop"
image_credit: "Taylor Vick on Unsplash"
image_credit_url: "https://unsplash.com/@tvick"
summary: "A site can build successfully, deploy successfully, and still not be live on the domain customers will actually use. DNS is part of launch QA, not a separate admin chore."
---

A production deployment is not the same thing as a live website.

That sounds obvious until you are in the last mile of a launch. The build passes. The deployment platform says production is ready. The preview URL works. The homepage loads. The sitemap is there. The robots file responds.

Then someone opens the real domain and sees the old host.

Nothing is wrong with the code. Nothing is wrong with the build. The problem is that the public domain is still pointing somewhere else.

That is why DNS belongs on the launch checklist.

Modern website projects usually have several URLs floating around at once:

- a local development URL
- a staging or preview deployment
- a production deployment URL
- the final custom domain
- sometimes a `www` version of the same domain

Only one of those is the address customers, voters, patients, homeowners, buyers, or donors are supposed to remember. If that domain is not pointing at the current production deployment, the site is not really live.

The dangerous part is that this failure can look like success from the developer side.

A platform like Vercel, Netlify, Cloudflare Pages, or GitHub Pages can report a clean production deployment. The generated URL can return `200 OK`. The app can serve every route correctly. But if the domain registrar or DNS host still has an old `A` record, `CNAME`, or nameserver setting, visitors will keep landing on the previous server.

For a serious launch, the QA pass should include the domain itself, not just the deployment dashboard.

At minimum, check:

- Does the apex domain load the new site?
- Does the `www` domain load or redirect correctly?
- Do `/robots.txt` and `/sitemap.xml` return `200 OK` on the real domain?
- Does the page source show the current title, metadata, and canonical URL?
- Are social images and schema using the final domain, not a preview URL?
- Is the old host still answering requests?

Those checks catch the difference between "deployed" and "reachable."

DNS also affects trust. Search engines, AI crawlers, social platforms, and real users all read the public domain. If the deployment URL works but the canonical domain is stale, metadata and schema may point to a version of the site that visitors cannot actually reach.

That is where launch confusion starts.

Someone says, "The new site is live." Another person opens the domain and sees the old page. A third person checks a preview link and sees the new page. Everyone is technically looking at a real URL, but they are not looking at the same website.

The fix is not complicated. It is discipline.

After every production push, verify the final domain from outside the build tool. Use the browser. Use `curl`. Check DNS records. Confirm the custom domain is attached to the deployment project. Confirm the registrar or DNS provider points to the host that is actually serving the new site.

The final takeaway: do not call a launch finished when the deployment succeeds.

Call it finished when the public domain, redirects, metadata, robots file, sitemap, and visible content all agree.

That is the moment the site is actually live.
