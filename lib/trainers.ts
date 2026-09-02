export type Trainer = {
  slug: string;
  initials: string;
  name: string;
  specialty: string;
  certs: string[];
  bio: string;
  /** Optional path under /public/trainers — falls back to a placeholder */
  photo?: string;
};

export const trainers: Trainer[] = [
  {
    slug: "yogesh joshi",
    initials: "YJ",
    name: "Yogesh Joshi",
    specialty: "Strength & Conditioning",
    certs: ["ACE-CPT", "CSCS", "8 yrs experience"],
    bio: "Yogesh specializes in powerlifting fundamentals and building strength safely from the ground up — a favorite with anyone new to barbell training.",
  }
];
