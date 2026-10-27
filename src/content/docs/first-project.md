---
title: "Your first project"
description: "Add your website, let KIQR build the business profile, and approve your first posts with Seemo."
order: 3
section: Start
---

## Add your site

```sh
kiqr project add https://your-site.com --watch
```

KIQR reads up to 200 pages and builds the business profile: what you sell, to whom, in what voice, each fact linked to the page it came from. `--watch` keeps it current when the site changes. Pages that block crawlers or need JavaScript are retried through [UnblockingAPI](https://unblockingapi.com) if you connect it, and reported as unreadable otherwise.

## Talk to Seemo

Open [http://127.0.0.1:7777](http://127.0.0.1:7777). The library guide offers to write your first three social posts. Approve them for a channel, or tell Seemo what you would rather have:

> Write two Facebook posts for Halloween, with images.

Seemo reads your profile and its instructions for social posts, saves two drafts with a designed image each and shows them in the chat as they will look.

## Approve and publish

One click approves a draft for a channel. Publish now or pick a time; the daemon sends it on schedule. Seemo asks before publishing until you flip a switch on a channel. After that it publishes there on its own, and the chat records what went out.

## Images from day one

No image API is needed. Seemo designs on-brand cards and renders them locally, from your site's own colours, fonts and logo. Add fal.ai or OpenAI from the [marketplace](/marketplace) when you want photos.

## Put it on a schedule

> Every weekday at 10:00, write one LinkedIn post about a different offering.

Seemo proposes the task on a card and you say yes once. The **To do** page collects what waits for you: approvals, drafts and publishes coming up.
