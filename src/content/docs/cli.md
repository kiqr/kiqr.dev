---
title: "CLI"
description: "Every kiqr command, from running the daemon to chatting with Seemo in the terminal."
order: 4
section: Using KIQR
---

The `kiqr` binary is the daemon, the CLI that talks to it, and an MCP server (`kiqr mcp`) so Seemo runs as a Claude Code session with KIQR's own tools and nothing else.

```
kiqr daemon                      run the daemon (serves the web UI)
kiqr status                      providers, connections, home directory
kiqr project add <url> [--watch]
kiqr project list
kiqr crawl <slug> [--watch] [--max-pages N]
kiqr profile <slug> [--yaml]
kiqr synthesize <slug>
kiqr history <slug>
kiqr events [--project <slug>]
kiqr chat <slug>                 talk to Seemo from the terminal
kiqr todo <slug>                 what waits for you: approvals, drafts, publishes coming up
kiqr plan <slug>                 the marketing plan: objectives, targets, campaigns
kiqr performance <slug> [--refresh]
                                 each KPI against its target, per source
kiqr assets ls|show|approve|publish|schedule|unpublish|archive|rm
kiqr abilities ls|show|teach|install|update|pause|resume|rm
kiqr accounts add <slug> <ability>
kiqr secrets set <NAME> [--project <slug>]
kiqr signin [kiqr-cloud|unblockingapi]    list sign-ins, or sign in (a code to enter, or a link to open)
kiqr signout <kiqr-cloud|unblockingapi>
```
