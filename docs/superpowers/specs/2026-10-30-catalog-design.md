# Aai Celebration & BS Lawn — Digital Catalog: Design

**Date:** 2026-10-30
**Live URL:** https://catalog.aaicelebration.in
**Source material:** `content/` (3 package posters, rules poster, logo)

---

## 1. Why this exists

Guests and families see a printed QR code (on a banner, visiting card, or at the venue) and scan it with their phone. They should land on a page that, in under a minute, tells them:

1. What the venue looks like (hall and lawn)
2. What each package costs and exactly what's included / extra
3. The booking rules
4. How to call or WhatsApp right now

The page replaces sending 4–5 poster images on WhatsApp. **Success = more people calling / messaging on WhatsApp with a specific package already in mind.**

## 2. Goals, non-goals, anti-goals

**Goals**
- Mobile-first, one scrolling page, fast on 4G.
- Marathi and English, switchable from the top of the page. Marathi is the default.
- Every package has a one-tap "Enquire on WhatsApp" button with the package pre-filled in the message.
- Easy to update: all text, prices, and images live in one file.
- Looks like a premium Indian wedding venue, not a template.

**Non-goals (not building now)**
- Online booking, payments, or date availability calendar
- Admin panel / CMS — prices change rarely; editing one file is enough
- Enquiry form with a backend — WhatsApp does this job better
- Separate pages per venue

**Anti-goals (fail even if it "works")**
- Looks AI-generated: purple/blue gradients, glassmorphism, glowing cards, emoji icons, "Elevate your celebration ✨" copy, generic stock-site layout
- Slow to open after scanning (people close it)
- Any price, inclusion, or rule differs from the posters
- Hard to read for older family members (tiny text, low contrast)

## 3. Content (source of truth)

### Brand
- Name: **आई Celebration & BS Lawn**
- Logo: `content/logo_02.png` (maroon + gold on ivory, circular)
- Occasions line: Weddings · Engagements · Birthdays · All Celebrations
- Tagline (mr): जेव्हा सगळ्या गोष्टी आम्ही सांभाळणार तर तुम्हाला कशाला चिंता, बुकिंग करा आणि मोकळे व्हा
- Tagline (en, draft): "When we take care of everything, why worry? Book with us and relax."

### Contact
- Call: **7507504947**, **9284325413**
- WhatsApp: **9284325413** → `https://wa.me/919284325413?text=...`
- Address: नांदगाव रोड, येनोरा रोड, माँ भवानी माता मंदिर जवळ, हिंगणघाट, जिल्हा वर्धा 442301
- Map: Google Maps search link built from the address (swap for exact pin link when available)

### Packages

| | BS Lawn Package | Wedding Lawn Package | Wedding Hall Package |
|---|---|---|---|
| Price | ₹25,000 | ₹41,000 | ₹51,000 |
| Venue | Lawn | Lawn | Hall |
| **Included** | मॅरेज सोफा | पाहुण्यान करीता 4 रूम | पाहुण्यान करीता 4 AC रूम व 1 Non AC हॉल |
| | स्टेज डेकोरेशन | मॅरेज सोफा | मॅरेज सोफा |
| | लॉन एन्ट्री डेकोरेशन | स्टेज डेकोरेशन | स्टेज डेकोरेशन |
| | पार लाईट आणि सिरीज लाइटिंग | लॉन डेकोरेशन | संपूर्ण डक्टिंग मॅरेज हॉल / डायनिंग हॉल |
| | 150 चेअर आणि 8 नग सोफा (कव्हर सोबत) | पार लाईट आणि सिरीज लाइटिंग | 300 चेअर कव्हर सोबत |
| | एन्ट्री आणि स्टेज वरील कारपेट | 200 चेअर आणि 12 नग सोफा (कव्हर सोबत) | 20 कुशन सोफा |
| | इले. बिल | एन्ट्री आणि स्टेज वरील कारपेट | एन्ट्री आणि स्टेज वरील कारपेट |
| | नाव (थर्मोकॉल) / वेलकम बोर्ड | सेल्फी पॉईंट | साऊंड (2 स्पीकर) |
| | | नाव (थर्मोकॉल) / वेलकम बोर्ड | नाव (थर्मोकॉल) / वेलकम बोर्ड |
| **Extra charges** | सफाई | इले. बिल | सप्तपदी |
| | स्वीपर | सफाई करणाऱ्या बाई | संगीत स्टेज |
| | जेनेरेटर | स्वीपर | इले. बिल |
| | साऊंड | जेनेरेटर | हॉल सफाई करणाऱ्या बाई |
| | | साऊंड | स्वीपर |
| | | | स्पीकर |
| | | | जेनेरेटर |
| | | | हळदी सेटअप |
| | | | हळदी साऊंड |

(Hall: स्वीपर and स्पीकर are **both** separate extra charges — confirmed by owner.)

### Booking rules (नियमावली) — all 13, shown verbatim in Marathi, translated in English
1. Once booked, the date cannot be changed; advance is non-refundable on cancellation.
2. 50% advance of the total to confirm booking.
3. Remaining 100% payment at least 10 days before the booking date.
4. No outside furniture/bedding, decoration, or utensils — the hall has its own.
5. Marriage hall available from 7:00 PM the previous day to 6:00 PM on the wedding day; ₹3,000/hour after that.
6. Lawn timing 12:00 noon to 12:00 midnight; ₹5,000/hour after that.
7. The party is fully responsible for any damage to the hall or lawn.
8. No DJ / band in the hall.
9. Crackers / cold pyro strictly prohibited in the hall; ₹10,000 fine plus full damages.
10. No horse, bullet bike, or any 4-wheeler entry on the lawn.
11. No music of any kind after 10:00 PM.
12. Bring your own lock for rooms; you are responsible for your belongings.
13. Alcohol, smoking, and non-veg strictly prohibited in the hall.

English translations of package items, rules, and UI text are drafted by the builder and **must be reviewed by the owner** before launch.

## 4. Page structure (top to bottom, mobile)

1. **Header** (sticky, slim): logo mark left · `मराठी | EN` segmented toggle right.
2. **Hero**: full-bleed venue photo with dark overlay, brand name, tagline, two buttons — "पॅकेजेस पहा / View Packages" (scrolls) and "Call".
3. **Our Spaces**: two large photo cards — *Banquet Hall* (AC, ducted, 300 seating, 4 AC rooms) and *Lawn* (open-air, lighting, up to 200 seating, 4 rooms). Short facts, no paragraphs.
4. **Packages**: three cards stacked on mobile, three columns on desktop. Each card:
   - Venue tag (Lawn / Hall), package name, big price "₹41,000"
   - "Included" list with check marks
   - "Extra charges" list, visually quieter
   - Button: "WhatsApp वर चौकशी करा / Enquire on WhatsApp" → pre-filled message, e.g. *"नमस्कार, मला Wedding Lawn Package (₹41,000) बद्दल माहिती हवी आहे."*
   - All cards use the logo palette; the venue badge (Lawn / Hall) tells them apart.
5. **Gallery**: tabs Hall / Lawn → swipeable carousel; tap opens full-screen view.
6. **Occasions**: simple row — Weddings, Engagements, Birthdays, All Celebrations.
7. **Booking Rules**: accordion, collapsed by default; key payment rules (advance, refund, timings) visible as short highlights above it.
8. **Location**: address, "Open in Google Maps" button.
9. **Footer**: logo, both numbers, © year.
10. **Fixed bottom bar (mobile only)**: `Call` | `WhatsApp` — always visible. On desktop these sit in the header instead.

Language toggle switches every piece of text, including WhatsApp pre-filled messages. Choice is remembered in `localStorage`; `<html lang>` updates (`mr` / `en`).

## 5. Visual design

**Direction:** "printed wedding invitation, made modern" — ivory paper, maroon ink, gold hairlines, lots of breathing space, large real photos. Editorial, calm, confident.

- **Colours**
  - Ivory background `#F8F4ED`, paper surface `#F3ECE2` (logo background)
  - Maroon primary `#7A0811`, deep maroon `#540305` (sampled from logo)
  - Gold `#B87A28` / soft `#CB9544` / light `#D1A773` (from logo; lines and small details only — never big gold blocks)
  - No separate lawn colour: one logo palette everywhere (owner request)
  - Ink text `#2B1A17`, muted text `#6E5A55`
- **Type**
  - Headings: *Tiro Devanagari Marathi* (Devanagari serif) + *Cormorant Garamond* (Latin serif) — feels like the posters, not like a SaaS site
  - Body: *Mukta* (designed for Devanagari + Latin, very readable)
  - Body text ≥ 16px; prices large and bold
- **Details that keep it human**
  - Thin gold rule with a small ornament between sections (single inline SVG)
  - Real rupee formatting with Indian grouping (₹25,000)
  - Square-ish corners (4–6px radius), no heavy shadows, no gradients except the photo overlay
  - Motion: subtle fade-up on scroll (CSS only, respects `prefers-reduced-motion`)
- **Accessibility**: AA contrast, 44px tap targets, alt text on all images, keyboard-usable accordion/tabs/carousel (shadcn/Radix provides this).

## 6. Tech stack

- **Vite + React (JavaScript/JSX, no TypeScript — owner preference)** — static site, no server needed
- **Tailwind CSS v4** with theme tokens for the colours above
- **shadcn/ui** components: Button, Card, Badge, Tabs, Accordion, Carousel (Embla), Dialog, ToggleGroup
- **lucide-react** icons (Phone, MessageCircle, MapPin, Check, Plus)
- Fonts from Google Fonts (`display=swap`, only the needed weights)
- **No** i18n library, router, state library, or CMS — a small React context + one content file covers it

### Project layout
```
/                       ← this folder (Aai Celebration Catlog)
  content/              ← original posters & logo (not shipped)
  public/
    logo.png            ← optimised from content/logo_02.png
    og-image.jpg        ← WhatsApp/Facebook share preview (1200×630)
    favicon.svg / .png
  src/
    main.tsx
    App.tsx             ← composes sections in order
    content.ts          ← ALL text, packages, rules, contact, image URLs (mr + en)
    lang.tsx            ← language context, toggle, useT() helper
    sections/           ← Header, Hero, Spaces, Packages, Gallery,
                          Occasions, Rules, Location, Footer, ContactBar
    components/ui/      ← shadcn generated
    index.css           ← Tailwind + theme tokens + fonts
  index.html            ← meta tags, OG tags, lang
```

### Content model (`content.ts`)
Every user-visible string is `{ mr: string; en: string }`. Packages are an array:
```ts
{ id: "wedding-lawn", venue: "lawn", price: 41000,
  name: { mr, en }, included: { mr, en }[], extras: { mr, en }[] }
```
Changing a price or item = edit one line, push, live in ~1 minute.

### Images
- **Now:** placeholder photos from Unsplash (Indian wedding stage, banquet hall, lawn with lights), referenced by URL in `content.ts`, with Unsplash size params for responsive loading.
- **Later:** real photos dropped into `src/assets/` and swapped in `content.ts`. Exported as WebP, ~1600px wide max.
- All below-the-fold images `loading="lazy"`; hero image preloaded.

### Performance targets
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95
- First load JS ≤ ~150 KB gzipped

### SEO / sharing
- Title: "आई Celebration & BS Lawn — Hinganghat | Wedding Hall & Lawn Packages"
- Meta description in Marathi + English keywords (Hinganghat, Wardha, wedding hall, lawn)
- Open Graph image so the link looks good when shared on WhatsApp
- LocalBusiness JSON-LD (name, address, phone)

## 7. Hosting & domain

- **Code:** GitHub repository (private is fine).
- **Hosting:** **Cloudflare Pages (free plan)**, connected to the GitHub repo — every push to `main` builds and deploys automatically. Free forever, commercial use allowed, unlimited bandwidth, free SSL, edge servers in Mumbai/Chennai/Delhi. No credit card.
  - Build command `npm run build`, output folder `dist`.
- **Domain:** `aaicelebration.in` bought at Hostinger (registrar only — no Hostinger hosting plan).
- **DNS:** point Hostinger's nameservers to **Cloudflare (free DNS plan)**. Reason: several subdomains are coming (see section 12) and the root domain will host the website; managing all of them in Cloudflare is simpler and lets the root domain run on Pages too.
  1. Cloudflare → Add site → `aaicelebration.in` → Free plan → copy the two nameservers.
  2. Hostinger hPanel → Domains → `aaicelebration.in` → Nameservers → "Change" → paste Cloudflare's two.
  3. Wait for Cloudflare to show "Active" (minutes to a few hours).
  4. Pages project → Custom domains → add `catalog.aaicelebration.in` (DNS record is created automatically).
- Owner/developer logs into GitHub, Cloudflare, and Hostinger themselves; the builder provides exact steps.
- Alternatives considered: AWS Amplify (free tier is time-limited, then bills), Vercel (free plan is non-commercial only).

## 8. QR code

- Encodes exactly `https://catalog.aaicelebration.in` (never changes, so prints never need redoing).
- Generated once with the `qrcode` npm CLI → SVG (for print/banners) and 1024px PNG (for WhatsApp/social).
- Error correction level **H**, maroon on ivory with quiet zone, tested with Android + iPhone cameras before printing.
- Saved to `qr/` in this folder.

## 9. Build order

1. Scaffold Vite + React + TS, Tailwind v4, shadcn/ui, fonts, colour tokens
2. Write `content.ts` with all poster data (mr) + English drafts
3. Language context + header toggle
4. Sections: Hero → Packages → Contact bar → Spaces → Gallery → Rules → Location → Footer → Occasions
5. WhatsApp pre-filled links per package and language
6. Meta, OG image, favicon, JSON-LD
7. Check on mobile sizes (360px, 390px, 768px, desktop), Lighthouse pass
8. Deploy to Cloudflare Pages, connect `catalog.aaicelebration.in`
9. Generate and test QR code

## 10. Decisions made by the builder (owner may override)

- Subdomain `catalog.aaicelebration.in` over `/catalog` path — independent deploy, no risk to main site.
- Vite over Next.js — static content, no server features needed.
- Cloudflare Pages over AWS / Vercel — the only one that is free forever and allows commercial use.
- DNS moved to Cloudflare (domain stays registered at Hostinger) — needed anyway for the future subdomains.
- Marathi is the default language.
- No enquiry form — WhatsApp + Call only.
- "Banquet Hall" = Aai Celebration hall; "Lawn" = BS Lawn (assumed from naming; adjust labels if wrong).
- Map uses an address search link until an exact Google Maps pin is provided.

## 11. Still needed from owner (not blocking the build)

- Review English translations before launch
- Real photos of hall and lawn
- Google Maps pin link (optional)
- Access to GitHub / Cloudflare / Hostinger at deploy time

## 12. Future roadmap (context only — not part of this build)

The client plans more products on the same domain:

| URL | What | Hosting (likely) |
|---|---|---|
| `aaicelebration.in` | Main website | Cloudflare Pages (static, free) |
| `catalog.aaicelebration.in` | This catalog | Cloudflare Pages (free) |
| `admin.aaicelebration.in` | BMS — booking management (bookings, dates, payments, customers) | Needs a backend + database; decide when that project starts (e.g. Cloudflare Workers + D1 free tier) |

What this changes for the catalog **now**:
- All subdomains use `.in`. `.com` is optional and, if bought, only redirects to `.in`.
- Colours, fonts, and the content model live in clearly separated files (`index.css` tokens, `content.ts`) so the website can reuse them and the BMS can later supply packages/prices instead of `content.ts`.
- Nothing else is built for the future — no shared monorepo, API, or login until those projects actually start.
