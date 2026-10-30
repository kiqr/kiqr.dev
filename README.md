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
| `/abilities` | `src/pages/abilities.astro`, read from the [marketplace index](https://github.com/kiqr/marketplace) at build time (`MARKETPLACE_URL` overrides it) |
| `/docs/*` | Markdown in `src/content/docs/`. `abilities.md` and `publish.md` are copies of `docs/abilities.md` in KIQR and the marketplace README; update them together. |
| `/cloud` | `src/pages/cloud.astro` |
| `/install.sh`, `/install.ps1` | Redirects (`public/_redirects`) to `install.sh` and `install.ps1` on the KIQR repository's `main` |

The look (connect and cloud: teal and periwinkle on deep night, Geist) is
shared with kiqr.cloud: `src/styles/site.css` is its stylesheet, and
`src/styles/dev.css` adds what only this site needs.

## Deploy

Cloudflare (Workers & Pages), connected to this repository. Static files
only: `wrangler.jsonc` serves `dist/` with `public/_headers` and
`public/_redirects`, clean URLs (`/docs/install`) and `404.html`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler versions upload` |
| Root directory | `/` |

Node comes from `.nvmrc`. Every push to `main` deploys; other branches get a
preview URL. `.github/workflows/rebuild.yml` triggers a build every six hours
so new marketplace abilities show up; it needs a deploy hook URL as the
`CF_PAGES_DEPLOY_HOOK` repository secret.

## License

The site's code: AGPL-3.0, like KIQR. Geist fonts: SIL Open Font License
(`public/fonts/LICENSE-Geist.txt`). App marks: see `src/icons/LICENSE.md`.
