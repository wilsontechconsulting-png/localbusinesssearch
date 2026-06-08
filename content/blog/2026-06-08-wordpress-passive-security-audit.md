---
title: "How to Run a Passive Security Audit on Any WordPress Site"
date: 2026-06-08T06:00:00-05:00
author: "Jed Wilson"
category: "Security"
tags: ["WordPress", "Security", "Audit", "DevOps", "Web Security"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
image_credit: "Markus Spiske on Unsplash"
image_credit_url: "https://unsplash.com/@markusspiske"
description: "You don't need to exploit anything to find real security problems on a WordPress site. Here's a practical, non-destructive audit workflow using curl, your browser, and a few targeted requests."
summary: "A passive security audit means no active exploitation — just methodical observation. Here's how to run one on any WordPress site and what to look for."
---

Security auditing doesn't require hacking. The most valuable information is often sitting in plain sight — exposed files, missing headers, version disclosures — waiting to be read by anyone who knows where to look.

A **passive audit** means you're observing, not exploiting. No brute force, no injection, no active attacks. Just methodical reconnaissance using tools and requests that any browser or crawler might make. It's legal, non-destructive, and surprisingly revealing.

Here's how to run one on any WordPress site.

## Start with HTTP Response Headers

Your first stop is the HTTP headers returned by the server. These tell you a lot about how the site is (or isn't) protected.

```bash
curl -sI https://example.com
```

Look for these security headers — or more importantly, note which ones are missing:

- `X-Content-Type-Options`
- `X-Frame-Options`
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `Permissions-Policy`
- `Referrer-Policy`

Most unaudited WordPress sites are missing most of these. Missing headers aren't vulnerabilities per se, but they remove layers of defense-in-depth that protect real users.

## Check for Exposed Files

WordPress leaves several files in predictable locations. Check these manually:

```
/readme.html          ← Discloses WordPress version
/license.txt          ← Sometimes also version-revealing
/wp-cron.php          ← Should not be publicly accessible
/xmlrpc.php           ← Legacy API, common brute force target
/wp-login.php         ← Worth checking response codes
```

A `200 OK` on `readme.html` is a red flag — it tells attackers exactly what version they're targeting. A properly locked-down site returns `403` or `404` on all of these.

Plugin readme files are another exposure point. Check:

```
/wp-content/plugins/[plugin-name]/readme.txt
```

These disclose plugin names and versions, making targeted vulnerability scanning trivially easy.

## Look for Version Disclosure

Even if `readme.html` is blocked, the WordPress version might be leaking through the HTML `<meta>` generator tag:

```bash
curl -s https://example.com | grep -i "generator"
```

Expected bad output: `<meta name="generator" content="WordPress 6.x.x" />`

This tag should be removed. A simple `functions.php` filter handles it:

```php
remove_action('wp_head', 'wp_generator');
```

## Check for Mixed Content

If a site has migrated from HTTP to HTTPS at some point, there's a good chance hardcoded `http://` URLs survive in the database — particularly in image `src` attributes. These cause browser warnings and CSP failures.

```bash
curl -s https://example.com | grep -o 'src="http://[^"]*"' | head -20
```

Any `http://` asset URL on an HTTPS page is a mixed content issue. These need to be updated in the database, not just the theme (which is why superficial find-replaces miss them).

## What a Passive Audit Tells You

After this walkthrough, you'll have a picture of:

1. **Surface area** — what files and endpoints are reachable
2. **Header posture** — how many browser-level protections are active
3. **Version exposure** — whether attackers can fingerprint your stack
4. **Protocol hygiene** — whether the HTTPS migration is actually complete

None of this requires elevated access. All of it is visible to any bot that crawls your site.

## Practical Takeaways

- **Run the curl header check first** — it's the fastest single signal on overall security posture
- **Check exposed files on every new client site** — readme.html and wp-cron.php are almost always there
- **Document what you find before you fix it** — screenshots or curl output give you a before/after baseline
- **Prioritize by exposure** — version disclosure and exposed cron are higher priority than a missing Referrer-Policy
- **Repeat after fixes** — cache layers mean some changes take time to propagate; recheck a day later

Passive auditing takes about 15 minutes and surfaces problems that have often existed for years. The fixes are usually simple. The impact is real.
