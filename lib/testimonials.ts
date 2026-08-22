export type Testimonial = {
  name: string;
  meta: string;
  quote: string;
  /** Optional paths under /public/testimonials */
  beforePhoto?: string;
  afterPhoto?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Nair",
    meta: "Member since 2024",
    quote:
      "Six months in and I've hit strength numbers I didn't think were possible at 40. The trainers actually track your progress.",
  },
  {
    name: "Arjun Verma",
    meta: "Member since 2023",
    quote:
      "24/7 access is the real deal — I train at 5 AM before work and it's never once been closed or empty of staff.",
  },
  {
    name: "Sneha Gupta",
    meta: "Member since 2024",
    quote:
      "Lost 12kg following the plan my PT built for me. What sold me was how honest they were about realistic timelines.",
  },
];

export const videoTestimonial = {
  title: "Watch: Rohan's 1-Year Transformation",
  description:
    "A member walkthrough of his first year at Fitness Hangover Gym — training split, diet changes, and what actually stuck.",
  embedUrl: "", // TODO: add a YouTube/Vimeo embed URL
};

export const testimonialDisclosure =
  "All transformation photos and video testimonials are shared with explicit written permission from the members featured.";
