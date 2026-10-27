---
title: "Your first project"
description: "Add your website, check the profile Seemo builds, get a marketing plan with KPIs, connect your analytics and run the first campaign."
order: 3
section: Start
---

## Add your site

```sh
kiqr project add https://your-site.com --watch
```

Seemo reads up to 200 pages and builds the business profile: what you sell, to whom, against whom, in what voice, each fact linked to the page it came from. `--watch` keeps it current when the site changes. Pages that block crawlers or need JavaScript are retried through [UnblockingAPI](https://unblockingapi.com) if you connect it, and reported as unreadable otherwise.

Open [http://127.0.0.1:7777](http://127.0.0.1:7777). Seemo summarises the profile and lists the fields worth a look. Lock the ones you correct: locked fields are ground truth for everything after.

## Get a plan

Ask for one:

> What should our marketing focus on this quarter?

Seemo starts from the profile's positioning and audience, gives two or three options with their trade-offs, recommends one, and proposes the **marketing plan** on a card: two to four objectives, each with one KPI and a target, the channels in play and the first campaigns. Approve it, or change it under Your business → Plan. `kiqr plan <slug>` shows it in the terminal.

## Connect the numbers

Install **Google Analytics**, **Search Console** or **Plausible** from the [marketplace](/abilities) and add the project's account. KIQR reads them every morning into `metrics/`. The **Performance** page shows each KPI against its target and the last 7 days against the 7 before, with the top queries and pages. `kiqr performance <slug>` shows the same.

Every link KIQR publishes to your own site carries `utm_source`, `utm_medium=kiqr` and `utm_campaign`, so your analytics show which campaign brought whom.

## Run a campaign

Campaigns sit under an objective, and everything Seemo makes for one joins it. Connect a channel (a blog, an email account, a social account), then let Seemo propose the work, or ask:

> Write two Facebook posts for Halloween, with images.

Drafts land in the chat as they will look, images included. No image API is needed: Seemo designs on-brand cards and renders them locally from your site's own colours, fonts and logo. Approve a draft for a channel, publish now or pick a time. Seemo asks before publishing until you switch a channel to publish on its own.

## Keep a rhythm

> Every Monday at 9:00, review last week's numbers against the plan and tell me what to change.

Seemo proposes the task on a card and you say yes once. Every run is kept with its steps and cost. The **To do** page collects what waits for you: approvals, drafts and publishes coming up.
