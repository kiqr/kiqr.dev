---
title: "Accounts, abilities and lists"
description: "Install abilities from the marketplace, teach Seemo your own in plain words, and connect the accounts Seemo signs in to, and keep lists of the people you email."
order: 5
section: Using KIQR
---

There are three things to know. An **account** is something Seemo signs in to: a mail account, a blog, a social account, an analytics property. An **ability** is something Seemo knows how to do. A **list** is the people you email, kept under Audience.

## Built in

Writing, the business profile, reading the web, images with the built-in renderer, tasks on a schedule and the marketing plan ship inside KIQR. Core abilities can be switched off per project but never removed.

## From the marketplace

Open **Setup → Abilities** to browse the [marketplace](/abilities): publishing to WordPress, email over SMTP, Google Analytics, Search Console, Plausible, images with fal.ai or OpenAI, and more. Installing puts the ability on your computer with no keys. Each project then switches it on and adds its own **accounts** of it.

Some abilities connect with one click: you sign in to the app and approve, and the key never passes through your hands. Those go through [kiqr.cloud](/docs/cloud). The others take a key you paste once.

## Teach your own

How you write a product update, how to publish to your blog, what the Monday report contains: write it once on the Abilities page under "Teach Seemo something", and Seemo follows it every time. It is saved as a `SKILL.md` you can edit.

## Accounts

Open **Setup → Accounts** and choose "Connect an account". You get a grid of services: Social, Website and blog, Email, Numbers, Passwords and Sites behind a login. Sign in, or fill in a few fields, and then choose what Seemo may do there.

Each account has its own setting for each thing Seemo can do through it. Posting, replying and managing are **on its own**, **ask me first** or **off**. Asking first is the default. Reading, learning about the business and measuring are on or off. A project can have as many accounts of a service as it wants, and two blogs are two accounts with their own keys.

Abilities that reach a service show as "via your X account".

## Publishing and places

Publishing goes to an account, and to a place in it where the service has several: a subreddit, a branch, a list. Seemo asks first, unless you let that account post on its own.

## Email and lists

Email goes from your mail account to an address or to a list. A list lives under **Audience** and holds the people you email. A send to a list is one message per person, and each message ends with a line saying why it came and how to leave.

From the terminal, `kiqr accounts` and `kiqr lists` cover the same ground. See the [command line](/docs/cli).

## Accounts are per project

Keys belong to a project's accounts, never to the ability. They are kept in `~/.kiqr/projects/<slug>/connections/<id>/.env` (mode 0600, never committed). With more than one account of a service, Seemo picks the default unless you name another.

Building one for others? See [Ability format](/docs/abilities) and [Publish to the marketplace](/docs/publish).
