// Shared event data — consumed by ActivitiesSection (home) and Events page

export type EventStatus = "upcoming" | "past";
export type EventCategory =
  | "Workshop"
  | "Competition"
  | "Expansion"
  | "Summit"
  | "Hackathon"
  | "Outreach"
  | "Research";

export interface OrgEvent {
  id: number;
  category: EventCategory;
  status: EventStatus;
  date: string;        // display string, e.g. "Dec 2025"
  isoDate: string;     // for sorting, e.g. "2025-12"
  title: string;
  excerpt: string;
  location: string;
  country: string;
  flag: string;
  registrationOpen?: boolean;
}

export const events: OrgEvent[] = [
  // ── Upcoming ──────────────────────────────────────────────
  {
    id: 5,
    category: "Hackathon",
    status: "upcoming",
    date: "Aug 2026",
    isoDate: "2026-08",
    title: "Global Robotics Hackathon",
    excerpt:
      "48-hour build sprint challenging teams to design autonomous robots capable of real-world disaster response.",
    location: "Dhaka",
    country: "Bangladesh",
    flag: "🇧🇩",
    registrationOpen: true,
  },
  {
    id: 6,
    category: "Summit",
    status: "upcoming",
    date: "Jun 2026",
    isoDate: "2026-06",
    title: "AI Sovereignty Summit",
    excerpt:
      "International forum on ethical AI deployment, autonomous systems governance, and youth-led policy frameworks.",
    location: "Astana",
    country: "Kazakhstan",
    flag: "🇰🇿",
    registrationOpen: true,
  },
  {
    id: 7,
    category: "Workshop",
    status: "upcoming",
    date: "May 2026",
    isoDate: "2026-05",
    title: "Pakistan STEM Bootcamp",
    excerpt:
      "Intensive 5-day program training 100 students across Karachi and Lahore in embedded systems and robotics fundamentals.",
    location: "Karachi · Lahore",
    country: "Pakistan",
    flag: "🇵🇰",
    registrationOpen: false,
  },

  // ── Past ──────────────────────────────────────────────────
  {
    id: 1,
    category: "Workshop",
    status: "past",
    date: "Dec 2025",
    isoDate: "2025-12",
    title: "Mini Robot Workshop 2025",
    excerpt:
      "Hands-on session introducing 200+ students to circuit design, sensors, and autonomous logic.",
    location: "Dhaka",
    country: "Bangladesh",
    flag: "🇧🇩",
  },
  {
    id: 2,
    category: "Competition",
    status: "past",
    date: "Nov 2025",
    isoDate: "2025-11",
    title: "National Robotics Challenge",
    excerpt:
      "Our teams competed in line-follower, maze-solver, and AI-powered rescue robot categories.",
    location: "Dhaka",
    country: "Bangladesh",
    flag: "🇧🇩",
  },
  {
    id: 3,
    category: "Expansion",
    status: "past",
    date: "Oct 2025",
    isoDate: "2025-10",
    title: "Kazakhstan Chapter Launch",
    excerpt:
      "Official onboarding of our third regional chapter, led by local student leaders in Central Asia.",
    location: "Almaty",
    country: "Kazakhstan",
    flag: "🇰🇿",
  },
  {
    id: 4,
    category: "Outreach",
    status: "past",
    date: "Sep 2025",
    isoDate: "2025-09",
    title: "Bangladesh Schools STEM Tour",
    excerpt:
      "Mobile robotics lab visited 12 secondary schools across Dhaka division, reaching 1,500+ students.",
    location: "Dhaka Division",
    country: "Bangladesh",
    flag: "🇧🇩",
  },
];

// Convenience: the 3 most recent past events for the home page Field Notes section
export const recentFieldNotes = events
  .filter((e) => e.status === "past")
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
  .slice(0, 3);
