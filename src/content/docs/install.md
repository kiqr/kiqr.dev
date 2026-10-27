---
title: "Install"
description: "Install KIQR with one command, run it in Docker, or build it from source."
order: 2
section: Start
---

## One command

```sh
curl -fsSL https://kiqr.dev/install.sh | sh
```

This builds KIQR from source with Cargo (installing Rust if needed), puts `kiqr` on your PATH and starts the daemon at login. Set `KIQR_REF` to install a branch or tag.

Then add your first site:

```sh
kiqr project add https://your-site.com --watch
```

Or open [http://127.0.0.1:7777](http://127.0.0.1:7777) and paste the URL there.

## Docker

```sh
docker run -d -p 7777:7777 -v kiqr-data:/data --env-file .env ghcr.io/kiqr/kiqr
```

The container runs on API keys (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`) or a subscription token from `claude setup-token` (`CLAUDE_CODE_OAUTH_TOKEN`).

## From source

```sh
cd web && npm ci && npm run build && cd ..
cargo build --release
./target/release/kiqr daemon
```

## Models

KIQR uses the model you already pay for. Pick one per task in `~/.kiqr/config.yaml` as `provider/model`, for example `claude-cli/haiku`, `anthropic/claude-sonnet-5-5`, `openai/gpt-5-mini` or `codex-cli/gpt-5`.

Next: [Your first project](/docs/first-project).
