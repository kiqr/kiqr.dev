---
title: "Connect apps in one click with kiqr.cloud"
nav: "1-click apps"
description: "How kiqr.cloud links your KIQR agent and connects apps with one click, and what it keeps."
order: 8
section: kiqr.cloud
---

KIQR runs on your computer, at an address only your computer can reach. Many apps will only send a sign-in back to a secure web address, and some need an app secret that cannot ship inside an open-source program. [kiqr.cloud](/cloud) is the small gateway in between. KIQR works without it; with it, connecting an app is a click.

## Linking your agent

In KIQR, choose **Sign in to kiqr.cloud** in the sidebar, next to Settings (or run `kiqr signin kiqr-cloud`).

- **On this computer**, a browser tab opens at kiqr.cloud. Sign in, approve your agent, and the tab comes back to KIQR.
- **On a server or in Docker**, KIQR shows a short code. Enter it at [kiqr.cloud/activate](https://kiqr.cloud/activate).

Each agent registers itself and signs in with OAuth (the code flow with PKCE, or the device flow). The tokens are stored on your computer, in `~/.kiqr/.env`. You can see and unlink your agents under your account at kiqr.cloud.

## One-click apps

Abilities marked **1-click** in the [marketplace](/abilities) connect with a sign-in instead of a key:

- **WordPress.** kiqr.cloud hands your site a secure return address. WordPress's own "Authorize Application" screen creates an application password, and the browser carries it straight on to your KIQR.
- **Google Analytics and Search Console.** kiqr.cloud holds the Google app. Your agent asks Google for read-only access, the consent comes back through kiqr.cloud, and the token goes to your agent. Refreshing the token goes through kiqr.cloud too, so the app secret never leaves it.
- **UnblockingAPI.** Built into KIQR. You sign in with your UnblockingAPI account directly, without kiqr.cloud, and no API key to copy.

## What it keeps

Your account: the email address (encrypted) and a password hash, or the GitHub, Google or Facebook login you chose. It also keeps the agents you linked, as hashed tokens.

What passes through on its way to your agent is not stored: application passwords, app tokens and the answers of the apps. A return address is open for ten minutes and works once. Deleting your account removes it and every link at once.

## The usage ping

Every KIQR, signed in or not, tells kiqr.cloud every 15 minutes that it runs, and once more right after an ability is installed. That is how we know how many people use KIQR and which abilities matter. The ping is anonymous and holds:

- a random id your KIQR made for it, to tell one install from another
- the KIQR version, the operating system and processor type, and whether it runs in Docker
- whether it is signed in to kiqr.cloud (yes or no, not who)
- the ids of the installed abilities that the marketplace lists; abilities you made or installed from elsewhere are only counted, never named

It holds no name, email, computer name, website, project or key, and kiqr.cloud does not keep the address it came from. To see exactly what is sent, run `kiqr telemetry` or open **Settings → General → Usage stats**. To stop it, switch it off there, run `kiqr telemetry off`, or set `KIQR_TELEMETRY=0` (or `DO_NOT_TRACK=1`) where KIQR runs.
