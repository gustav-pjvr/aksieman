# AKSIEMAN | aksieman.com

Personal brand site for Jaco Janse van Rensburg.

**Passionate about possibilities. Turning ideas into reality.**

One-page static site: warm paper palette, burnt orange accent, expanded Archivo
display type with a Newsreader serif body, and a trail-route signature.
Checkpoint markers (START, then CP 01 to CP 06, then FINISH) guide the scroll
like a marked race route.

## Structure

- `public/index.html`: the whole page (hero, story, possibilities, projects, adventures, lessons, gallery, contact)
- `public/styles.css`: design tokens and all styling
- `public/script.js`: scroll reveals, route-rail scrollspy, mobile nav, gallery lightbox
- `public/images/`: photography, resized and converted to WebP (originals are not kept in the repo)
- `wrangler.jsonc`: Cloudflare deploy config

## Photos

Source photos are optimized before committing: EXIF-rotated, resized to roughly
1000 to 1500px on the long edge, and saved as WebP. That took the current set
from 1.8MB down to 1.0MB. Add new ones the same way and keep them lazy-loaded.

Where they are used:

- `sunrise-cave.webp`: background of the Adventures band
- `runners-world.webp`: press feature in My Story
- the remaining ten: the gallery bento grid, which opens a lightbox on click

## Develop

Open `public/index.html` directly, or:

```bash
npx wrangler dev
```

## Deploy

```bash
npx wrangler deploy
```

Deploys to Cloudflare, serving aksieman.com and www.aksieman.com. The
workers.dev subdomain is not in use now that the custom domains are bound.

If a change does not appear straight away, Cloudflare may still be serving a
cached copy of `/`. It clears within a minute or two; a hard refresh
(Ctrl+F5) confirms the new version is live.

The site is public. Until launch it sat behind a cookie-based preview gate (a
Worker plus a coming-soon page); that was removed on 5 August 2026 and lives on
in git history if it is ever needed again.

## Still to do

- More photography as it comes in
