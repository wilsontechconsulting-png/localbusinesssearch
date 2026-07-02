---
title: "The 6 Security Headers Most WordPress Sites Are Missing (And How to Add Them on Managed Hosting)"
date: 2026-06-08T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Security"
tags: ["WordPress", "Security", "HTTP Headers", "SiteGround", "Managed Hosting", "Apache Config"]
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80"
image_credit: "Franck on Unsplash"
image_credit_url: "https://unsplash.com/@franckinjapan"
description: "HTTP security headers are one of the highest-leverage, lowest-effort security improvements you can make on any WordPress site. Here are the six that matter most and exactly how to add them via .htaccess on managed hosting like SiteGround."
summary: "Six HTTP headers, zero server access required. Here's what each one does, why it matters, and the exact .htaccess snippet to add them on managed WordPress hosting."
---

Most WordPress security discussions focus on plugins, passwords, and updates. That's all important — but there's an entire class of browser-level protections that most sites never activate, and they require zero plugin installations or theme changes.

They're called **HTTP security headers**, and they travel with every response your server sends. Browsers use them to enforce rules about how your site's content can be loaded, embedded, and executed. When they're missing, browsers default to permissive behavior — which is how you end up vulnerable to clickjacking, MIME-type attacks, and cross-site scripting.

Here are the six that matter most, what each one does, and how to add them on managed hosting without touching server configuration.

## The 6 Headers

### 1. `Strict-Transport-Security` (HSTS)

Tells browsers to always use HTTPS — even if someone types `http://` in the address bar. Without it, there's a brief window on the first request where a man-in-the-middle attack is possible.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 2. `X-Content-Type-Options`

Prevents browsers from "MIME-sniffing" — guessing a file's type when the server doesn't declare it. Without this, a file uploaded as an image could be executed as JavaScript.

```
X-Content-Type-Options: nosniff
```

### 3. `X-Frame-Options`

Stops your site from being embedded in an `<iframe>` on another domain. This prevents clickjacking attacks where users think they're interacting with your site but are actually clicking on a malicious overlay.

```
X-Frame-Options: SAMEORIGIN
```

### 4. `Content-Security-Policy` (CSP)

The most powerful — and most complex — header. CSP defines a whitelist of sources for scripts, styles, images, and other resources. Anything not on the list is blocked. A strict CSP is one of the best defenses against XSS.

For WordPress, start with a moderate policy rather than trying to lock everything down immediately:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;
```

Note: WordPress uses inline scripts and styles extensively, which is why `unsafe-inline` is often unavoidable without a nonce-based setup.

### 5. `Referrer-Policy`

Controls how much information is sent in the `Referer` header when a user clicks a link from your site. The default browser behavior can leak full URLs — including query strings with personal data.

```
Referrer-Policy: strict-origin-when-cross-origin
```

### 6. `Permissions-Policy`

Formerly called Feature-Policy. Restricts which browser APIs and features your site can use — and, critically, which ones third-party scripts can request. Useful for disabling access to camera, microphone, and geolocation for scripts that shouldn't need them.

```
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Adding Them via .htaccess

On managed hosting (SiteGround, WP Engine, Kinsta, etc.), you typically don't have direct nginx or Apache configuration access. But `.htaccess` works fine for setting response headers on Apache-based stacks.

Open your `.htaccess` file via File Manager or SFTP and add this block **above** the existing WordPress rules:

```apache
<IfModule mod_headers.c>
  # Force HTTPS for 1 year, including subdomains
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

  # Prevent MIME type sniffing
  Header always set X-Content-Type-Options "nosniff"

  # Block clickjacking
  Header always set X-Frame-Options "SAMEORIGIN"

  # Content Security Policy (tune to your site's needs)
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:;"

  # Limit referrer leakage
  Header always set Referrer-Policy "strict-origin-when-cross-origin"

  # Disable unused browser features
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

## Using a Security Plugin Instead

If you're on SiteGround, the **SiteGround Security** plugin surfaces several of these as toggles — no .htaccess editing required. Look under the "Site Security" tab. It handles HSTS and some frame options for you.

For other managed hosts, plugins like **Headers & Footers** or **WP Headers** can inject these via PHP if `.htaccess` modification is restricted.

## Verify After Adding

Once deployed, test with:

- [securityheaders.io](https://securityheaders.io) — grades your headers in seconds
- `curl -sI https://yourdomain.com` — raw header output in terminal

Don't rely on browser caching — clear it first, or test from an incognito window.

## The Bottom Line

Six headers. One `.htaccess` block. Maybe 10 minutes of work.

These won't stop a determined attacker, but they harden your site against a wide class of browser-level attacks and close the gaps that automated vulnerability scanners love to flag. If your security headers are missing today, this is the highest-leverage fix you can make before lunch.
