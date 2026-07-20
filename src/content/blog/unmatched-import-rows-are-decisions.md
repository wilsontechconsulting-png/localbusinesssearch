---
title: "Unmatched Import Rows Are Decisions, Not Errors"
date: 2026-07-20T06:00:00-05:00
draft: false
author: "Jed Wilson"
category: "Business Systems"
tags: ["Automation", "Operations", "Data Quality", "Workflow", "Business Tools"]
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"
image_credit: "Carlos Muza on Unsplash"
image_credit_url: "https://unsplash.com/@kmuza"
description: "When an import leaves rows unmatched, the safest automation treats those rows as decisions to review, not errors to force into the closest match."
summary: "Unmatched import rows should trigger review, not guesswork. Good automation separates exact matches, preserves source-only rows, and adds missing rows only when the business rule is clear."
---

The most dangerous row in a data import is often the one that almost matches.

When an operational report pulls in inventory, orders, leads, costs, or production data, the easy rows are not the problem. Exact matches are straightforward. The source has an identifier. The destination has the same identifier. The value lands where it belongs.

The risk starts with the rows that are close.

Maybe a source item has a suffix. Maybe the destination has the base item only. Maybe the source includes color, finish, size, location, packaging, or revision details. Maybe the destination report never had that row because nobody needed it before.

At that point, automation has a choice.

It can guess.

Or it can stop and turn the unmatched row into a decision.

The second option is almost always better.

## Close Is Not The Same As Correct

Humans are good at seeing patterns. That can be useful, but it can also be dangerous during imports.

If a source row looks similar to an existing destination row, it is tempting to merge the value into the closest match. This feels efficient. It keeps the report tidy. It avoids adding new rows.

But tidy is not the same as accurate.

A suffix might be meaningless in one system and meaningful in another. It might describe a packaging style, a production method, a finish, a customer-specific version, or a completely separate sellable item. If the import collapses those distinctions without confirmation, the final report may look clean while hiding the wrong answer.

The automation should not treat similarity as permission.

## Preserve The Unmatched List

A good import workflow keeps unmatched rows visible.

Instead of throwing them away or forcing them into the nearest destination row, save them into a review list. The list should show the source identifier, description, value, and the reason it did not match.

That review list becomes the decision surface.

Some rows may be irrelevant to the report. Some may need new destination rows. Some may need a new mapping rule. Some may reveal that the destination report is missing a real item the team now needs to track.

The point is that the team can decide intentionally.

If the unmatched rows disappear, nobody knows what was skipped. If they get forced into existing rows, nobody knows what was assumed. If they are preserved, the import becomes auditable.

## Add Rows Only When The Rule Is Clear

Sometimes the correct answer is to add missing rows to the destination report.

That should still be done carefully.

The new row needs to land in the right section. It needs the right formatting. It needs the same formulas as surrounding rows. If the destination report uses grouped or collapsed sections, the new row should respect that structure. If the row has no future activity but does have inventory, it may belong under a collapsed review section instead of the active working area.

Adding rows is safer than misplacing values, but only when the placement rule is clear.

This is where automation earns its keep. Once the business decision is made, the script can add the row consistently, copy formulas, apply formatting, and verify that nothing broke.

## Verify What Stayed Blank

Import verification should not only count what changed.

It should also check what stayed blank.

If a section is supposed to remain untouched, confirm that it stayed untouched. If formulas are supposed to remain present across the planning window, count them. If unmatched rows were intentionally left for review, list them clearly instead of pretending the import was complete.

The best import reports say:

- Here is what updated
- Here is what stayed blank on purpose
- Here is what was added
- Here is what still needs a decision

That is much more useful than "import complete."

## The Takeaway

Unmatched rows are not failures.

They are decision points.

The goal of import automation is not to eliminate every exception by guessing. The goal is to make the safe matches fast, preserve the questionable rows, and give the team a clean path to decide what should happen next.

When the automation is honest about uncertainty, the final report is easier to trust.
