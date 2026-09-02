export type ClassType = "hiit" | "yoga" | "spin" | "strength" | "zumba";
export type SpotsLevel = "high" | "low" | "full";

export type GymClass = {
  day: string;
  name: string;
  time: string;
  instructor: string;
  spots: string;
  level: SpotsLevel;
  type: ClassType;
};

export const classFilters: { value: ClassType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hiit", label: "HIIT" },
  { value: "yoga", label: "Yoga" },
  { value: "spin", label: "Spin" },
  { value: "strength", label: "Strength" },
  { value: "zumba", label: "Zumba" },
];

export const classes: GymClass[] = [
  { day: "Mon", name: "HIIT Burn", time: "6:00 AM", instructor: "Yogesh Joshi", spots: "3 spots left", level: "low", type: "hiit" },
  { day: "Mon", name: "Power Yoga", time: "7:30 AM", instructor: "Yogesh Joshi", spots: "8 spots left", level: "high", type: "yoga" },
  { day: "Mon", name: "Strength 101", time: "6:00 PM", instructor: "Yogesh Joshi", spots: "Full", level: "full", type: "strength" },
  { day: "Tue", name: "Spin Sprint", time: "6:30 AM", instructor: "Yogesh Joshi", spots: "5 spots left", level: "high", type: "spin" },
  { day: "Tue", name: "Zumba Party", time: "7:00 PM", instructor: "Yogesh Joshi", spots: "10 spots left", level: "high", type: "zumba" },
  { day: "Wed", name: "HIIT Burn", time: "6:00 AM", instructor: "Yogesh Joshi", spots: "2 spots left", level: "low", type: "hiit" },
  { day: "Wed", name: "Strength 101", time: "6:00 PM", instructor: "Yogesh Joshi", spots: "4 spots left", level: "low", type: "strength" },
  { day: "Thu", name: "Restorative Yoga", time: "7:30 AM", instructor: "Yogesh Joshi", spots: "9 spots left", level: "high", type: "yoga" },
  { day: "Thu", name: "Spin Sprint", time: "6:30 PM", instructor: "Yogesh Joshi", spots: "Full", level: "full", type: "spin" },
  { day: "Fri", name: "HIIT Burn", time: "6:00 AM", instructor: "Yogesh Joshi", spots: "6 spots left", level: "high", type: "hiit" },
  { day: "Fri", name: "Zumba Party", time: "7:00 PM", instructor: "Yogesh Joshi", spots: "5 spots left", level: "low", type: "zumba" },
  { day: "Sat", name: "Strength 101", time: "9:00 AM", instructor: "Yogesh Joshi", spots: "3 spots left", level: "low", type: "strength" },
];
