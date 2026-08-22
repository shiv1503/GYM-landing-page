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
    slug: "rahul-kapoor",
    initials: "RK",
    name: "Rahul Kapoor",
    specialty: "Strength & Conditioning",
    certs: ["ACE-CPT", "CSCS", "8 yrs experience"],
    bio: "Rahul specializes in powerlifting fundamentals and building strength safely from the ground up — a favorite with anyone new to barbell training.",
  },
  {
    slug: "ananya-sharma",
    initials: "AS",
    name: "Ananya Sharma",
    specialty: "HIIT & Functional Training",
    certs: ["NASM-CPT", "Precision Nutrition", "6 yrs experience"],
    bio: "Ananya builds high-intensity programs that adapt to your fitness level — pushing hard without wrecking your joints.",
  },
  {
    slug: "vikram-mehta",
    initials: "VM",
    name: "Vikram Mehta",
    specialty: "Yoga & Mobility",
    certs: ["RYT-500", "FRC Mobility", "10 yrs experience"],
    bio: "Vikram focuses on the recovery side of training — mobility work that keeps you lifting and running injury-free for years, not months.",
  },
];
