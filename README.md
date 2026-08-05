# AKSIEMAN — aksieman.com

Personal brand site for Jaco Janse van Rensburg.

**Passionate about possibilities. Turning ideas into reality.**

One-page static site: warm paper palette, burnt orange accent, expanded Archivo display type with Newsreader serif body, and a trail-route signature — checkpoint markers (START → CP 01–06 → FINISH) guide the scroll like a marked race route.

## Structure

- `public/index.html` — the whole page (hero, story, possibilities, projects, adventures, lessons, gallery, contact)
- `public/styles.css` — design tokens + all styling
- `public/script.js` — scroll reveals, route-rail scrollspy, mobile nav, gallery lightbox
- `public/images/` — photography, resized and converted to WebP (originals are not kept in the repo)
- `public/coming-soon.html` — what visitors see until launch
- `src/worker.js` — preview gate (cookie-based), see below
- `wrangler.jsonc` — Cloudflare Worker config

## Photos

Source photos are optimized before committing: EXIF-rotated, resized to about
1000 to 1500px on the long edge, and saved as WebP (roughly 1.8MB to 1.0MB for
the current set). Add new ones the same way and keep them lazy-loaded.

Where they are used:

- `sunrise-cave.webp` — background of the Adventures band
- `runners-world.webp` — press feature in My Story
- the remaining ten — the gallery bento grid, click to open the lightbox

## Develop

Open `public/index.html` directly, or:

```bash
npx wrangler dev
```

## Deploy

```bash
npx wrangler deploy
```

Deploys to the `aksieman` Worker (aksieman.gustavpjvr.workers.dev). Custom domain `aksieman.com` to be bound via the Cloudflare dashboard once the domain is on the account.

## Preview gate

Visitors get `coming-soon.html`. To see the real site, open
`/unlock?key=<PREVIEW_KEY>` once per device: it sets a year-long cookie.
`/lock` clears it. The key lives in a Cloudflare secret (`PREVIEW_KEY`), never
in this repo. Remove the gate at launch by dropping `run_worker_first` and
`main` from `wrangler.jsonc`.

## Still to do

- Lift the preview gate when the site goes public
- More photography as it comes in
