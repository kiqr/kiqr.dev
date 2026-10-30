---
title: "Install"
description: "Install KIQR with one command on macOS, Linux or Windows, keep it up to date, run it in Docker, or build it from source."
order: 2
section: Start
---

## One command

On macOS or Linux:

```sh
curl -fsSL https://kiqr.dev/install.sh | sh
```

On Windows, in PowerShell:

```powershell
irm https://kiqr.dev/install.ps1 | iex
```

The installer downloads the latest KIQR release for your machine and checks its SHA-256. It puts `kiqr` on your PATH and starts the daemon at login: with systemd on Linux, launchd on macOS and Task Scheduler on Windows. Builds cover x86_64 and arm64 on all three.

Then open [http://127.0.0.1:4040](http://127.0.0.1:4040) and paste your website's address.

| Variable | What it does |
|---|---|
| `KIQR_VERSION` | Install a specific release, such as `v0.3.0` or a pre-release like `v0.4.0-rc.1`. Default: the latest. |
| `KIQR_BIN_DIR` | Where the binary goes. Default: `~/.local/bin`, or `%LOCALAPPDATA%\kiqr\bin` on Windows. |
| `KIQR_NO_SERVICE=1` | Don't register the daemon as a service; start it with `kiqr start` when you want it. |
| `KIQR_HOME` | Where KIQR keeps its data. Default: `~/.kiqr`. |
| `KIQR_AUTO_UPDATE=1` | Install new releases on their own from now on. |
| `KIQR_FROM_SOURCE=1` | Build from source with Cargo instead (macOS and Linux). `KIQR_REF` picks the branch or tag. |

## Running in the background

KIQR runs as a background service and starts when you log in, so there is no terminal to keep open. You manage it with the same commands everywhere:

```sh
kiqr status     # running or not, the version, how it is started, the models
kiqr stop
kiqr start
kiqr restart
```

Underneath, the service is a systemd user service on Linux (`journalctl --user -u kiqr` has its log), a launchd agent on macOS and a Task Scheduler task on Windows. On a Linux without systemd, `kiqr start` runs it in the background until you log out, logging to `~/.kiqr/daemon.log`.

## On a server

The same command installs KIQR on a Linux server over SSH. With no desktop session, the installer also keeps KIQR running after you log out (`loginctl enable-linger`; when that needs root it tells you the `sudo` command).

KIQR listens on the server itself only. From your computer, open it through an SSH tunnel:

```sh
ssh -L 4040:127.0.0.1:4040 you@your-server
```

then go to [http://127.0.0.1:4040](http://127.0.0.1:4040). To reach it from your network instead, change **Settings → Network** to "Every device on your network". KIQR has no password, so only do that on a network you trust. To keep the server current without logging in, run `kiqr update --auto on` once, or install with `KIQR_AUTO_UPDATE=1`.

To use another port, or to open KIQR from other devices on your network, change the address under **Settings → Network**. KIQR restarts on the new address and the page follows it. `KIQR_PORT` and `KIQR_HOST` in the environment override what Settings says.

## Updating

KIQR checks for a new version a few times a day. When one is out it says so in Settings and in `kiqr status`. To install it, click **Update** in Settings or run:

```sh
kiqr update
```

The daemon downloads the new release, checks it and restarts as the new version. You can also run the installer again, which updates KIQR in place and says so when you already have the latest.

KIQR doesn't update without asking unless you tell it to. To have it install new releases on its own, which suits a server, run:

```sh
kiqr update --auto on
```

or switch on **Updates** in Settings. It then installs a new version within a few hours of its release, at a moment when Seemo isn't working. Set `KIQR_UPDATE_CHECK=0` to stop it checking. In Docker, update by pulling the new image.

Releases follow [semver](https://semver.org). Before 1.0, a minor release (0.x.0) brings new features and may change how `~/.kiqr` is laid out, and a patch release only fixes things. Every release is listed on [GitHub](https://github.com/kiqr/kiqr/releases).

## Docker

```sh
docker run -d -p 4040:4040 -v kiqr-data:/data --env-file .env ghcr.io/kiqr/kiqr
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
