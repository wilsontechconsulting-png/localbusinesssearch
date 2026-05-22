# Marketing Email System

## Goal

Create an owned email system for Local Business Search that can send a branded marketing email to subscribers when new blog posts are published, without using newsletter platforms like Mailchimp.

The system should be simple, controlled, and tied into the existing Hugo + GitHub Pages publishing workflow.

## Recommended Stack

- **Site:** Hugo static site on GitHub Pages
- **Subscriber storage:** Supabase table
- **Email delivery:** Resend
- **Automation trigger:** GitHub Actions after successful deploy
- **Email source:** Blog post front matter and generated URL

This keeps the system lightweight and avoids paying for a full newsletter platform before we need one.

## How It Should Work

1. A visitor signs up through a newsletter/email form on Local Business Search.
2. The signup form stores the email address in Supabase.
3. A new blog post is added to `content/blog/`.
4. GitHub Actions builds and deploys the Hugo site.
5. A second workflow step detects the new published blog post.
6. The workflow creates a branded marketing email using the post title, description, image, category, and link.
7. Resend sends the email to active subscribers.
8. The system logs the send so the same post is not emailed twice.

## Subscriber Table

Potential Supabase table: `email_subscribers`

Suggested fields:

- `id`
- `email`
- `first_name`
- `source`
- `status` (`pending`, `active`, `unsubscribed`, `bounced`)
- `confirmed_at`
- `unsubscribed_at`
- `created_at`
- `updated_at`

## Send Log Table

Potential Supabase table: `email_sends`

Suggested fields:

- `id`
- `post_slug`
- `post_title`
- `post_url`
- `subject`
- `recipient_count`
- `status`
- `resend_broadcast_id`
- `sent_at`
- `created_at`

This prevents duplicate sends and gives us a basic history of what went out.

## Email Template

The email should feel like Local Business Search, not a generic newsletter.

Recommended structure:

1. Logo or simple brand header
2. Category label
3. Strong subject/title
4. Short intro paragraph
5. Featured image
6. Three to five key takeaways
7. Primary button linking to the blog post
8. Short business-focused closing line
9. Unsubscribe link

## Example Subject Lines

- New article: What real-time transcription changes for local businesses
- Turning conversations into business action
- How voice data becomes operational data

## Required Guardrails

- Include an unsubscribe link in every email.
- Do not email people without clear consent.
- Add a test/preview mode before sending live.
- Log every send.
- Do not send the same blog post twice.
- Add UTM tracking to blog links.
- Include a plain-text fallback.
- Keep client names and client-specific details out of automated marketing emails.

## GitHub Actions Concept

The current deploy workflow can remain responsible for building and deploying the site.

Later, add a second workflow or post-deploy job that:

1. Checks the latest commit for new files in `content/blog/`.
2. Reads the new post front matter.
3. Confirms `draft: false`.
4. Checks Supabase `email_sends` to make sure the post has not already been sent.
5. Sends a test email first when in preview mode.
6. Sends to active subscribers when approved or when auto-send is enabled.
7. Writes the send result to Supabase.

## Recommended First Version

Start with a manual-send version before full automation.

Phase 1:

- Add signup form.
- Store subscribers in Supabase.
- Create reusable email template.
- Add a script that sends one post email manually.
- Test with internal addresses only.

Phase 2:

- Add send logs.
- Add unsubscribe handling.
- Add GitHub Actions integration.
- Send automatically after deploy.

Phase 3:

- Add segmentation.
- Add weekly digest option.
- Add performance tracking.
- Add admin preview/approval.

## Notes

This should be treated as an owned marketing channel, not just a blog notification feature.

The real value is building a direct audience for Local Business Search and creating a lightweight system we can later reuse for other business sites.
