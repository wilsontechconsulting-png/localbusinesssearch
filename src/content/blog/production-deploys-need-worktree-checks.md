---
title: "Production Deploys Need Worktree Checks"
date: 2026-08-13T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Web Development"
tags: ["Web Development", "Deployment", "Quality Control", "Workflow"]
image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200&q=80&auto=format&fit=crop"
image_credit: "Luca Bravo on Unsplash"
image_credit_url: "https://unsplash.com/@lucabravo"
description: "Before shipping a small website edit, check the whole local worktree. The deploy sends the current project state, not only the line you meant to change."
summary: "A one-line website update can accidentally ship a lot more if the project has old modified files sitting around. A quick worktree check turns production deploys from guesswork into controlled releases."
---

Small website changes feel harmless.

Make the headline bigger. Swap a photo. Fix a button label. Adjust a hero line. Build passes. Deploy.

That is usually fine, unless the local project already has other modified files sitting in the worktree.

Modern deployment tools do not read your intent. They do not know that you meant to ship only the tiny text change. They package the current project state and send it to production.

That means a "quick edit" can quietly include old experiments, half-finished page work, image changes, generated files, or local cleanup that was never meant to go live.

The fix is simple: make the worktree check part of the deployment habit.

## A Small Edit Is Not Always a Small Deploy

When a project has a clean git status, the deployment story is easy. You can look at one small diff, build it, ship it, and verify the live URL.

When the worktree is dirty, the story changes.

Now the question is not "Did this one change work?"

The question is "What else is being shipped with it?"

That difference matters for client websites, internal tools, ecommerce pages, lead-generation forms, and any public site where the live version needs to be predictable.

If five files were already modified before the requested change, the deploy may include all six. If a folder is untracked but imported somewhere, it may matter. If a generated asset changed weeks ago, it may ride along with today's tiny fix.

None of that is automatically bad. Sometimes those existing changes are intentional and ready. The problem is deploying them without naming them.

## The Deployment Checklist

Before a production deploy, check four things:

1. What files changed?
2. Which changed files are part of this request?
3. Which changed files are unrelated but will still be included?
4. Did the live URL verify after deployment?

That checklist takes less than a minute, and it prevents a lot of vague debugging later.

The important part is not just running `git status`. It is reading the result like a release note.

If the site has unrelated modified files, say that before deploying. If the owner approves the full current state, ship it. If not, isolate the intended change first.

## Build Passing Is Not the Same as Release Control

A successful build proves the project compiles.

It does not prove the deploy contains only what you intended.

That is why production work needs two layers of verification:

- Local build verification
- Live deployment verification

After deploy, open the production URL or fetch the live HTML and confirm the specific change is present. If the deployment platform creates both a generated deployment URL and a clean alias, check the clean alias too. That is the link real visitors will use.

## The Real Rule

Deployments should be explicit.

If the worktree is clean, say what changed and ship it.

If the worktree is dirty, say what else is included before shipping.

That one habit keeps small website fixes from turning into mystery releases.

The takeaway: a production deploy ships the current project, not your mental summary of the project. Check the worktree, build, deploy, and verify the live URL.
