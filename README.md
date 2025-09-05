# Retreats by Traveon — Starter (Next.js + Tailwind + shadcn-style + Sanity + Framer Motion)

A production-ready starter aligned with your spec. It ships with:
- Next.js App Router + TypeScript
- Tailwind (custom tokens + container)
- shadcn-style UI primitives (Button w/ `asChild`, Card, Input, Textarea, Accordion, Badge)
- Framer Motion micro-interactions (Hero)
- Sanity Studio mounted at `/studio` (optional; falls back to local seed data if CMS env is missing)
- Seed packages for Wellness, Corporate, Community, and MICE
- Contact form (Zod validation) + Nodemailer SMTP
- API stub for "Download PDF Itinerary" (replace with real PDF later)
- Basic pages/routes per IA

## Quick Start

```bash
pnpm i    # or npm i / yarn
cp .env.example .env.local
pnpm dev  # http://localhost:3000
```

> If you don't set SANITY env vars, the app renders using local seed data.

### Environment Variables

See `.env.example`. Minimum needed for email auto-replies:
```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Retreats by Traveon <noreply@yourdomain.com>"
```

Optional Sanity (recommended):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-06-01
```

### Sanity Studio

- Runs at `/studio`. Login with your Sanity account after setting env vars.
- Schemas include: RetreatType, Package, ItineraryDay, Departure, FaqItem, Testimonial, BlogPost, GalleryAsset, SiteSettings, Lead, SEO.

### Notes

- `Button` supports `asChild`, so you can safely do:
  ```tsx
  <Button asChild><Link href="/retreats/wellness">Explore</Link></Button>
  ```
- The product detail page lives under `/(category)/[slug]` with a hero, highlights, itinerary, inclusions, and dates sidebar.
- Replace the itinerary text file response in `/api/itinerary` with a real PDF generator (e.g. `pdf-lib`, `puppeteer` or server-side HTML to PDF).

### Next Steps (phases)
1. Wire Sanity data fetching (queries) to replace seed fallback.
2. Add filters for budget/month/location on listing pages.
3. Build newsletter integration (Brevo/Mailchimp).
4. Add structured data (Product, Organization) via `generateMetadata`.
5. Add dark theme (optional).

---

**License**: MIT
