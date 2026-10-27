---
title: "What KIQR is"
description: "KIQR is Seemo, an open-source AI CMO that runs on your own computer. An overview of the profile, the plan, the numbers, abilities and channels."
order: 1
section: Start
---

KIQR gives you **Seemo**, a CMO that runs on your own computer. Give it your website. Seemo reads it and builds a **business profile** in which every fact links back to the page it came from. Then it does what a CMO does: proposes a **marketing plan** with objectives, KPIs and targets, reads your **analytics** every morning, and runs the **campaigns** that move the numbers: articles, posts, emails and their images, through the channels you connect. You approve every step.

It runs locally, on your own Claude or Codex subscription or API key. There is no account to create, no database, and no data leaves your machine unless you send it.

## The parts

- **Projects.** One per website. A project holds the profile, the plan, the numbers, the drafts, the channels and the tasks.
- **Seemo.** The CMO you talk to. Direct and specific, with opinions it explains. It answers from the profile, the plan and the numbers, and never invents facts about the business. Before it changes the plan, starts a campaign, publishes or changes a setting, it asks you first.
- **The plan.** Two to four objectives for the period, each with one KPI (organic traffic, signups, qualified leads, rank positions, published) and a target, plus the campaigns under them. Seemo proposes it; you approve it or edit it on the Plan page.
- **Performance.** Google Analytics, Search Console and Plausible are read once a day into snapshots. The Performance page shows each KPI against its target and the last 7 days against the 7 before. Every link KIQR publishes carries UTM tags, so the numbers line up with campaigns.
- **Abilities.** What Seemo can do. Some are built in (the profile, the plan, writing, reading the web, images, tasks). The rest are folders of Markdown and YAML that you install from the [marketplace](/abilities) or write yourself in plain words. See [Abilities and channels](/docs/teach).
- **Channels.** Where content goes out: a blog, an email address, a social account. A project can have as many as it likes.
- **Tasks.** Work on a schedule: a daily look at the numbers, a weekly review, "every weekday at 10:00, one LinkedIn post about a different offering". Every run is kept, with its steps and cost.

## Files, not a database

Everything lives in `~/.kiqr` as YAML and Markdown in a local git repository: the profile, `marketing/plan.yaml`, the campaigns, the metrics snapshots. Every change is a commit with a readable message. You can grep it, diff it and back it up with plain git. KIQR never pushes; add a remote yourself if you want a backup. Secrets live in `~/.kiqr/.env` (mode 0600, ignored by git).

## Open source

KIQR is AGPL-3.0. Nothing in the core is gated. [kiqr.cloud](/cloud) is the optional gateway that lets Seemo connect to apps with one click.

Next: [Install KIQR](/docs/install).
