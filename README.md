# आई Celebration & BS Lawn — Catalog

The QR-code catalog for the banquet hall and lawn, live at **https://catalog.aaicelebration.in**.
One page, Marathi/English, built with Vite + React (JavaScript), Tailwind CSS and shadcn/ui.

## Change prices, items, rules or text

Everything visitors read is in **`src/content.js`**. Each piece of text has a Marathi (`mr`) and English (`en`) version:

```js
{ mr: "मॅरेज सोफा", en: "Marriage sofa" }
```

- **Price:** change `price: 41000` on the package. It is formatted as ₹41,000 automatically.
- **Add or remove an item:** add or delete a line in that package's `included` or `extras` list.
- **Phone / WhatsApp number:** `contact` near the top of the file.

Then run the tests (they catch a missing translation or a wrong count) and push; the site updates in about a minute.

## Swap in real photos

Photos are Unsplash placeholders right now, created by `photo("<unsplash id>", "मराठी alt", "English alt")`.
To use your own:

1. Export each photo as `.webp` or `.jpg`, about 1600px wide.
2. Put them in `public/photos/` (e.g. `public/photos/hall-stage.webp`).
3. In `src/content.js`, replace a `photo(...)` call with
   `{ src: "/photos/hall-stage.webp", srcSet: "/photos/hall-stage.webp 1600w", alt: { mr: "…", en: "…" } }`.
4. If you change the hero photo, also update the `<link rel="preload" as="image">` in `index.html`.

## Colours

The palette is sampled from the logo and defined once in `src/index.css` (`@theme`):
maroon `#7A0811`, deep maroon `#540305`, gold `#B87A28` / `#CB9544` / `#D1A773`, page `#FBF8F7` (canvas), surface `#F4EEEC` (mist).
Use the Tailwind names (`bg-maroon`, `text-gold-light`, `bg-canvas`, `bg-mist`, …) rather than raw hex values.

Fonts: **Rozha One** for headings and **Anek Devanagari** for text. Both cover Marathi and English.

## Run locally

```bash
npm install
npm run dev
```

```bash
npm test
```

```bash
npm run build
```

## Deploy (Cloudflare Pages)

Pushing to `main` deploys automatically. One-time setup:

1. Cloudflare → Workers & Pages → Create → Pages → connect this GitHub repo.
2. Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
3. Project → Custom domains → add `catalog.aaicelebration.in`. (The domain's nameservers must point to Cloudflare first: Cloudflare → Add site → Free plan, then paste Cloudflare's two nameservers in Hostinger → Domains → Nameservers.)

## QR code

`qr/catalog-qr.svg` (for print and banners) and `qr/catalog-qr.png` (1024px, for WhatsApp/social), maroon with the logo in the centre (error correction H, verified to decode down to 150px).
Both point to `https://catalog.aaicelebration.in`. The URL never changes, so printed codes never need reprinting.
