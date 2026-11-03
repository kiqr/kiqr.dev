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
kiqr vault ls|rm <id>                                       credentials on this machine
kiqr vault add <template> <domains...> [--label <text>]     values are prompted, never args
kiqr vault set <id> <field>
kiqr vault signin|signout <slug> <id>
kiqr vault activity <id>
kiqr vault recommend <slug> <id>                            abilities that can use it
kiqr access ls <slug>
kiqr access allow|revoke <slug> <ability> <credential>
kiqr channels ls <slug>
kiqr channels add <slug> <link|site|kind> [field=value] [--publisher <credential>] [--label <text>] [--third-party]
kiqr channels set <slug> <channel> publish|reply off|ask|auto
kiqr channels set <slug> <channel> read|learn on|off
kiqr channels set <slug> <channel> publisher <credential>|none
kiqr channels set <slug> <channel> label <text>
kiqr channels accept|learn|rm <slug> <channel>
kiqr lists ls|add|import|unsubscribe|rm <slug> …             the people you email (lists are channels)
kiqr memory ls <slug>                                       what Seemo remembers here
kiqr memory add <slug> <text> [--kind rule|preference|fact|lesson] [--scope everywhere|own|others]
kiqr memory keep|rm <slug> <id>
kiqr publish <slug> <type>/<id> <channel>
kiqr email <slug> <to|-> <subject> <text> [--list <list>] [--from <sender>]
kiqr secrets set <NAME> [--project <slug>]
kiqr signin [kiqr-cloud|unblockingapi]    list sign-ins, or sign in (a code to enter, or a link to open)
kiqr signout <kiqr-cloud|unblockingapi>
```
