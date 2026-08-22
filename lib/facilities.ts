export type Facility = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  /** Optional path under /public/facilities — falls back to a placeholder pattern */
  image?: string;
  /** Larger card in the staggered grid */
  featured?: boolean;
};

export const facilities: Facility[] = [
  {
    slug: "weight-room",
    tag: "01 · MAIN FLOOR",
    title: "Weight Room",
    description: "Full free-weight range, power racks, and platforms built for serious lifting.",
    featured: true,
  },
  {
    slug: "cardio-zone",
    tag: "02",
    title: "Cardio Zone",
    description: "Rows of treadmills, bikes and rowers with skyline views.",
  },
  {
    slug: "group-studios",
    tag: "03",
    title: "Group Studios",
    description: "Two dedicated studios for HIIT, spin, and everything between.",
  },
  {
    slug: "recovery-zone",
    tag: "04",
    title: "Recovery Zone",
    description: "Stretching area, foam rollers, and cool-down space.",
  },
  {
    slug: "locker-rooms",
    tag: "05",
    title: "Locker Rooms",
    description: "Full-service lockers, showers, and towel service.",
  },
];
