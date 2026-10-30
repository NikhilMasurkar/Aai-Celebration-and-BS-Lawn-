# आई Celebration & BS Lawn

All software for आई Celebration & BS Lawn (Aai Celebration Palace, Aai Lawn and BS Lawn — Hinganghat, Wardha), one folder per project.

| Folder | What | Live at |
|---|---|---|
| [`catalog/`](catalog/) | QR-code package catalog (Marathi / English) | `catalog.aaicelebration.in` |
| `website/` | Main website — planned | `aaicelebration.in` |
| `admin/` | Business / booking management system — planned | `admin.aaicelebration.in` |

Each folder is a separate app with its own `package.json` and README; run commands from inside that folder.

## Shared brand

- **Colours** (from the logo): maroon `#7A0811`, deep maroon `#540305`, gold `#B87A28` / `#CB9544` / `#D1A773`, page `#FBF8F7`, surface `#F4EEEC`. The source of truth is the `@theme` block in [`catalog/src/index.css`](catalog/src/index.css).
- **Fonts:** Rozha One (headings) + Anek Devanagari (text) — both cover Marathi and English.
- **Code:** React + Vite in JavaScript, Tailwind CSS, shadcn/ui.
- **Contact:** 7507504947 · 9284325413 (WhatsApp: 9284325413).

## Hosting

Static apps deploy on Cloudflare Pages, each as its own Pages project pointing at this repo with **Root directory** set to its folder (e.g. `catalog`). DNS for `aaicelebration.in` is managed in Cloudflare; the domain is registered at Hostinger.
