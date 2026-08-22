# Fitness Hangover Gym — Landing Page (Next.js)

A production-ready gym landing page built with the Next.js App Router,
TypeScript, and Tailwind CSS. Same dark / electric-blue / lime design as
the standalone HTML prototype, split into reusable, data-driven components.

## Structure

```
app/
  layout.tsx              Root layout — fonts, global metadata
  page.tsx                Homepage — assembles all sections
  globals.css              Design tokens (CSS vars) + shared component classes
  opengraph-image.tsx      OG image (generated at build time)

components/
  Nav.tsx                  Sticky header, scroll state, mobile menu
  Hero.tsx                 Headline + CTAs + signature "access card" element
  StatsBar.tsx              Scroll-triggered count-up stats
  Facilities.tsx / FacilityCard.tsx     Staggered gallery grid
  Membership.tsx / PlanCard.tsx         3-tier pricing
  Schedule.tsx / ClassCard.tsx          Filterable weekly class grid
  Trainers.tsx / TrainerBlock.tsx       Alternating trainer profiles
  Testimonials.tsx / TestimonialCard.tsx  Before/after + quotes + video block
  Location.tsx              Map placeholder, hours, accessibility
  LeadCapture.tsx            Free trial signup form
  Footer.tsx

lib/
  site.ts          Name, contact info, nav links, stats
  facilities.ts     Facilities grid data
  plans.ts          Membership tiers
  classes.ts         Weekly class schedule + filter types
  trainers.ts         Trainer profiles
  testimonials.ts      Member testimonials + video testimonial
  location.ts          Hours, accessibility features, location dropdown options

public/
  facilities/, trainers/, testimonials/    Drop real photos here (see below)
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customizing content

Everything client-facing lives in `lib/`, not in the components:

- **Contact info, nav links, stats** → `lib/site.ts`
- **Facilities grid** → `lib/facilities.ts` (first entry is the large
  featured card — set `featured: true` on whichever one should be)
- **Membership pricing** → `lib/plans.ts` (set `popular: true` on one plan
  for the "Most Popular" badge)
- **Class schedule** → `lib/classes.ts` — add/remove classes freely, the
  filter pills and grid update automatically
- **Trainers** → `lib/trainers.ts` — cards alternate photo-left/photo-right
  automatically based on order
- **Testimonials** → `lib/testimonials.ts`
- **Hours / location** → `lib/location.ts`

## Adding real photos

Drop images into the matching `public/` folder, then set the `image` /
`photo` field on that item:

```ts
// lib/facilities.ts
{
  slug: "weight-room",
  image: "/facilities/weight-room.jpg",
  ...
}
```

Each card component (`FacilityCard`, `TrainerBlock`, `TestimonialCard`)
automatically swaps the CSS placeholder pattern for a real `next/image`
render once `image`/`photo` is set.

## Wiring up the lead capture form

`components/LeadCapture.tsx` is currently a UI-only template (it shows an
alert on submit). To make it functional:

- Point it at a form endpoint service (Formspree, Getform, EmailJS), or
- Add a Next.js API route (`app/api/lead/route.ts`) that emails you or
  writes to a CRM/database, and `fetch()` it from the form's `onSubmit`.

## SEO / metadata

- Global metadata lives in `app/layout.tsx`.
- `siteConfig.url` in `lib/site.ts` should be updated to your real deployed
  domain before shipping — it's used as `metadataBase` for OG/canonical URLs.
- The OG image is generated at build time via `next/og` — no external image
  asset required. Edit `app/opengraph-image.tsx` to restyle it.

## Deployment

Push to GitHub, then import the repo at [vercel.com](https://vercel.com) —
zero config needed for Next.js. Update `siteConfig.url` to match your live
domain and redeploy.

## Notes / TODOs left in the code

- `lib/site.ts` — phone, email, and address are placeholder values.
- `lib/testimonials.ts` — `videoTestimonial.embedUrl` is empty; add a real
  YouTube/Vimeo embed URL.
- All photos across facilities, trainers, and testimonials are CSS
  placeholder patterns until real images are added (see above).
