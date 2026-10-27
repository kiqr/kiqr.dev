---
title: "Abilities and channels"
description: "Install abilities from the marketplace, teach Seemo your own in plain words, and add channels where content goes out."
order: 5
section: Using KIQR
---

An **ability** is something Seemo can do. A **channel** is where a project's content goes out.

## Built in

Writing, the business profile, reading the web, images with the built-in renderer, tasks on a schedule and the marketing plan ship inside KIQR. Core abilities can be switched off per project but never removed.

## From the marketplace

Open **Setup → Abilities** to browse the [marketplace](/abilities): publishing to WordPress, email over SMTP, Google Analytics, Search Console, Plausible, images with fal.ai or OpenAI, and more. Installing puts the ability on your computer with no keys. Each project then switches it on and adds its own **accounts** of it.

Some abilities connect with one click: you sign in to the app and approve, and the key never passes through your hands. Those go through [kiqr.cloud](/docs/cloud). The others take a key you paste once.

## Teach your own

How you write a product update, how to publish to your blog, what the Monday report contains: write it once on the Abilities page under "Teach Seemo something", and Seemo follows it every time. It is saved as a `SKILL.md` you can edit.

## Channels

A channel is one account of an ability that publishes, plus a destination: an email address, a blog, a social account. A project can have as many as it wants of each kind, and two blogs are two channels with their own keys. Publishing always asks first, until you switch a channel to publish on its own.

## Accounts are per project

Keys belong to a project's accounts, never to the ability. They are kept in `~/.kiqr/projects/<slug>/connections/<id>/.env` (mode 0600, never committed). With more than one account of a service, Seemo picks the default unless you name another.

Building one for others? See [Ability format](/docs/abilities) and [Publish to the marketplace](/docs/publish).
