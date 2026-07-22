# AKSIEMAN — aksieman.com

Personal brand site for Jaco Janse van Rensburg.

**Passionate about possibilities. Turning ideas into reality.**

One-page static site: warm paper palette, burnt orange accent, expanded Archivo display type with Newsreader serif body, and a trail-route signature — checkpoint markers (START → CP 01–06 → FINISH) guide the scroll like a marked race route.

## Structure

- `public/index.html` — the whole page (hero, story, possibilities, projects, adventures, lessons, gallery placeholders, contact)
- `public/styles.css` — design tokens + all styling
- `public/script.js` — scroll reveals, route-rail scrollspy, mobile nav
- `wrangler.jsonc` — Cloudflare Worker (assets-only) config

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

## Still to do

- Real photography for the gallery (placeholders in place)
- Social links (currently `#`)
- Confirm contact email (`hello@aksieman.com` used as placeholder)
- Bind aksieman.com custom domain
