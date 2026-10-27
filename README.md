# kiqr.dev

The home of KIQR, Seemo the open-source AI CMO that runs on your own
computer: the landing page, the docs, the marketplace and the page about
[kiqr.cloud](https://kiqr.cloud) (the gateway that connects your agent with
apps; kiqr.cloud itself is only sign-in and accounts).

A static [Astro](https://astro.build) site on Cloudflare Pages.

```sh
npm ci
npm run dev        # http://localhost:4321
npm run build      # dist/
```

## Where things are

| Page | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/marketplace` | `src/pages/marketplace.astro`, read from the [marketplace index](https://github.com/kiqr/marketplace) at build time (`MARKETPLACE_URL` overrides it) |
| `/docs/*` | Markdown in `src/content/docs/`. `abilities.md` and `publish.md` are copies of `docs/abilities.md` in KIQR and the marketplace README; update them together. |
| `/cloud` | `src/pages/cloud.astro` |
| `/install.sh` | `public/install.sh`, a copy of `install.sh` in the KIQR repository |

The look (connect and cloud: teal and periwinkle on deep night, Geist) is
shared with kiqr.cloud: `src/styles/site.css` is its stylesheet, and
`src/styles/dev.css` adds what only this site needs.

## Deploy

Cloudflare Pages, connected to this repository: build command `npm run build`,
output directory `dist`, Node from `.nvmrc`. Every push to `main` deploys.
`.github/workflows/rebuild.yml` triggers a build every six hours, so new
marketplace abilities show up; it needs the Pages deploy hook URL as the
`CF_PAGES_DEPLOY_HOOK` repository secret.

## License

The site's code: AGPL-3.0, like KIQR. Geist fonts: SIL Open Font License
(`public/fonts/LICENSE-Geist.txt`). App marks: see `src/icons/LICENSE.md`.
