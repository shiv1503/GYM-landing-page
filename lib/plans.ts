export type Plan = {
  slug: string;
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    slug: "basic",
    name: "Basic",
    price: 1000,
    features: ["Gym access 6 AM – 10 PM", "Standard equipment", "Locker room access"],
  },
  {
    slug: "premium",
    name: "Premium",
    price: 1200,
    popular: true,
    features: ["24/7 access", "All equipment + classes", "1 PT session / month", "Towel service"],
  },
  {
    slug: "elite",
    name: "Elite",
    price: 1500,
    features: [
      "Everything in Premium",
      "Unlimited PT sessions",
      "Priority class booking",
      "Guest passes",
    ],
  },
];
