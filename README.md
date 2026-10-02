# Menem Labs website

The public website of Menem Labs, in English and Arabic.

Live: <https://menemlabs.tech/> (English) · <https://menemlabs.tech/ar> (Arabic)

Built on [AstroWind](https://github.com/arthelokyo/astrowind) (Astro 7 + Tailwind CSS 4, MIT — see `LICENSE.md`).

## Run it

```bash
npm ci
npm run dev      # http://localhost:4321/
npm run build    # static site in dist/
npm run check    # astro check + ESLint + Prettier — CI runs this on every push
```

Node 22.22.3 or newer.

## How the two languages work

| URL    | Language | Direction |
| ------ | -------- | --------- |
| `/`    | English  | ltr       |
| `/ar/` | Arabic   | rtl       |

- Every visible word lives in `src/i18n/en.ts` and `src/i18n/ar.ts`. Both files have the same shape; TypeScript fails the build if the Arabic file is missing a key the English one has.
- A page is written once as a component that takes `locale` (see `src/components/HomePage.astro`) and is mounted twice: `src/pages/<path>.astro` with `locale="en"` and `src/pages/ar/<path>.astro` with `locale="ar"`.
- On the first visit to `/`, the visitor's browser language decides: if Arabic comes before English in their preferences they are sent to `/ar/`. Clicking the EN / العربية switch in the header stores their choice, and that choice wins from then on.
- Each page links its other-language twin with `hreflang`, and the sitemap lists both, so search engines show the right one.
- Arabic pages use IBM Plex Sans Arabic; English pages use Inter.

## Add a section (a service, clients, …)

1. Add the text under a new key in **both** `src/i18n/en.ts` and `src/i18n/ar.ts`.
2. Pick a widget from `src/components/widgets/` (`Features`, `Brands`, `Testimonials`, `Steps`, `Stats`, …) and place it in `src/components/HomePage.astro`, reading its text from `dict`.
3. `npm run check && npm run build`, then look at both `/` and `/ar/`.

## Deploy

The site runs as a small nginx container on the Hostinger VPS, next to VetDiwan, behind the VPS's Traefik.

1. Every push to `main` builds the image and pushes it to GHCR (`.github/workflows/deploy.yaml`):
   - `ghcr.io/mn3m-cs/menemlabs-website:latest`
   - `ghcr.io/mn3m-cs/menemlabs-website:<commit-sha>` — pin this one to roll back.
2. On the VPS, `deploy/hostinger/compose.yaml` runs it. Traefik routes `menemlabs.tech` and `www.menemlabs.tech` to it and issues the certificate.
3. To ship a new version: pull the image and restart the stack (or set `WEBSITE_IMAGE_TAG` to a commit sha).

### First-time setup on the VPS

```bash
docker compose -p menemlabs-website -f compose.yaml up -d
docker network connect menemlabs-website <traefik-container>
```

Traefik only reaches containers on networks it is attached to, so it must join `menemlabs-website` once — the same way it is attached to VetDiwan's `aleefy-testing` network. If the VPS's Traefik uses different entrypoint or certificate-resolver names, set `TRAEFIK_ENTRYPOINT` / `TRAEFIK_CERTRESOLVER`.

DNS: `menemlabs.tech` and `www.menemlabs.tech` already point at the VPS (31.97.185.167).
