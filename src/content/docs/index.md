---
title: "What KIQR is"
description: "KIQR is an open-source marketing agent that runs on your own computer. An overview of projects, Seemo, abilities and channels."
order: 1
section: Start
---

KIQR is a marketing team that lives on your machine. Give it your website. It reads the site and builds a **business profile** in which every fact links back to the page it came from. From then on **Seemo**, the marketer built in, writes, designs and schedules with you: posts with their images, articles, emails, a weekly report, and whatever else you teach it.

It runs locally, on your own Claude or Codex subscription or API key. There is no account to create, no database, and no data leaves your machine unless you send it.

## The parts

- **Projects.** One per website. A project holds the business profile, the drafts, the channels and the tasks.
- **Seemo.** The marketer you chat with. Seemo reads the profile and the instructions you gave it, then drafts. Anything with a side effect, like publishing, scheduling or changing settings, goes through a card you approve.
- **Abilities.** What Seemo can do. Some are built in (writing, reading the web, images, tasks). The rest are folders of Markdown and YAML that you install from the [marketplace](/marketplace) or write yourself in plain words. See [Abilities](/docs/abilities).
- **Channels.** Where content goes out: a blog, an email address, a social account. A project can have as many as it likes; two blogs are two channels.
- **Tasks.** Work on a schedule, such as "Every weekday at 10:00, write one LinkedIn post about a different offering". Every run is kept, with its steps and cost.

## Files, not a database

Everything lives in `~/.kiqr` as YAML and Markdown in a local git repository. Every change is a commit with a readable message. You can grep it, diff it and back it up with plain git. KIQR never pushes; add a remote yourself if you want a backup. Secrets live in `~/.kiqr/.env` (mode 0600, ignored by git).

## Open source

KIQR is AGPL-3.0. Nothing in the core is gated. [kiqr.cloud](/cloud) is the optional hosted gateway that lets your agent sign in to apps with one click.

Next: [Install KIQR](/docs/install).
