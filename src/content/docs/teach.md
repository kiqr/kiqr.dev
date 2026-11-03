---
title: "The Vault, channels and abilities"
description: "Keep credentials in the Vault, say what Seemo may do on each channel, install abilities from the marketplace or teach Seemo your own, and allow each ability the credentials it needs."
order: 5
section: Using KIQR
---

There are three things to know. The **Vault** holds your credentials: logins, API keys, app passwords and sign-ins. A **channel** is anywhere your people are, and says what Seemo may do there. An **ability** is something Seemo knows how to do, and uses the credentials you allow it.

## The Vault

Open **Setup → Vault** and choose Add. Signed-in apps come first: "Sign in with Google" or "Sign in with GitHub" goes through [kiqr.cloud](/docs/cloud), and the key never passes through your hands. The others are a login, an API key, an app password, a mail server (SMTP) or custom fields.

Each credential is scoped to one or more domains, and the first one gives it its icon. Its values only ever go to those domains. The Vault is machine-wide and encrypted, and it knows nothing about abilities, channels or projects. A value is never shown again once saved.

A credential lists the abilities that can use it, by host.

## Channels

Open **Marketing → Channels**. A channel is a place your business's people are: **owned**, like your X profile, your company page, your blog or a mailing list, or **third-party**, like a subreddit or a forum. When Seemo crawls your site, it adds the profiles of yours it finds as owned channels.

Each channel says what Seemo may do there. Read is on or off. Publish and Reply & engage are **off**, **ask me first** or **on its own**. Learn, on owned channels, is on or off. Its **publisher** is who Seemo posts as: a credential from the Vault. Picking the publisher also allows that ability to use the credential.

A channel shows the one thing it is missing, with the fix: install the ability for its site, pick a publisher, or sign the publisher back in.

Anywhere that is not a channel, Seemo always asks first, and your yes adds it as a channel.

## Built in

Writing, the business profile, reading the web, images with the built-in renderer, tasks on a schedule and the marketing plan ship inside KIQR. Core abilities can be switched off per project but never removed.

## From the marketplace

Open **Setup → Abilities** to browse the [marketplace](/abilities): publishing to WordPress, email over SMTP, Google Analytics, Search Console, Plausible, images with fal.ai or OpenAI, and more. An ability says the hosts it works on and the credentials it would like, such as "a login for x.com" or "an API key for fal.ai", but never owns one.

"Recommended for your credentials" suggests abilities for what is already in the Vault: a Google sign-in suggests Google Analytics and Search Console, with "Install and allow".

## Access

Each ability has an **Access** tab. Allow it credentials from the Vault per project with a switch, add a new one there (the Vault's Add panel, filled in for you), or use a one-click sign-in: "Sign in with Google", or an ability's own, like "Connect with WordPress", which makes an app password credential for your site.

What a project picks once for an ability, such as a GA4 property, a WordPress site's address or a GitHub repository, is a setting on the ability.

## Teach your own

How you write a product update, how to publish to your blog, what the Monday report contains: write it once on the Abilities page under "Teach Seemo something", and Seemo follows it every time. It is saved as a `SKILL.md` you can edit.

## Sites behind a login

Some sites have no API, or sit behind your login or a paywall. Add a login for the site in the Vault: Seemo gets a real browser of its own for it, headless, signed in as you, with the session kept on the login credential for the whole machine. X and Reddit come as abilities on that browser: Seemo reads your timeline or a subreddit, searches, and replies and posts as you, as each channel allows. A reply or a post is a goal Seemo reaches page by page, typing only the text you approved and reading it back before it sends; a way that worked is remembered for next time. Save the user name, password, and the one-time code secret if the site asks for a code, and Seemo signs in by itself. Only Seemo's sign-in runner ever types those values; no ability call receives them. When a site asks for a person (a captcha, a device check), the credential shows **Needs a hand**: "Take the controls" on it in the Vault shows the browser in your KIQR and sends your clicks and keys to it, from anywhere you can reach KIQR. The browser comes with KIQR. The first time you need it, KIQR names the two programs behind it and asks before installing them into its own folder, checked against their published checksums, and shows what the install does as it runs. On Linux it needs Xvfb, a virtual display from your system's own packages: the installer offers it, and if it is missing the app shows the one command for your machine or installs it for you. Linux and Windows for now.

## Seemo's memory

Open **Seemo → Memory** to see what Seemo keeps for this project, read before every chat and task. A memory is one sentence: a **rule** or a **preference** of yours, or a **fact** or a **lesson** Seemo learned. Each holds everywhere, on your own channels, or in other people's places, so "promote the product" can hold on your own profile while "help, never promote" holds in a subreddit.

Tell Seemo how things should always be done ("never use hashtags on LinkedIn") and it notes it, with a "Noted" line in the chat. After chats and task runs, Seemo saves what it learned from how things went. A lesson from a task run waits for your **Keep**, since tasks read pages anyone can write. Add, edit and delete anything on the page, or switch learning off.

## Change anything by asking

Whatever you can change in KIQR's pages, you can ask Seemo to change: "make our X account the publisher for every channel", "let the GitHub ability use the new token", "pause Plausible", "stop learning from chats". Seemo shows the change on a card, before and after, and makes it when you say yes. Secret values, the people on a list and your own decisions (answering a card, keeping a lesson) stay yours.

## Email and lists

Email goes from a mail server credential to an address or to a list. A list is a channel of kind list, under **Marketing → Channels**, and holds the people you email. They are kept on your machine, never in git. A send to a list is one message per person, and each message ends with a line saying why it came and how to leave.

From the terminal, `kiqr vault`, `kiqr access`, `kiqr channels` and `kiqr lists` cover the same ground. See the [command line](/docs/cli).

Building one for others? See [Ability format](/docs/abilities) and [Publish to the marketplace](/docs/publish).
