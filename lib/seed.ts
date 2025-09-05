export type RetreatType = "Wellness" | "Corporate" | "Community" | "MICE";

export type ItineraryDay = {
  dayNumber: number;
  title: string;
  description: string;
  meals?: { B?: boolean; L?: boolean; D?: boolean };
};

export type Departure = {
  startDate: string;
  endDate: string;
  availability: "Available" | "Limited" | "Sold Out";
  priceOverride?: number;
  ctaLabel?: string;
};

export type Package = {
  slug: string;
  title: string;
  retreatType: RetreatType;
  shortSummary: string;
  location: string;
  durationDays: number;
  priceFrom: number;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  wellnessFocus?: string[];
  corporateFocus?: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  departures: Departure[];
};

export const seedPackages: Package[] = [
  {
    slug: "awaken-3-day-mind-body-reset-rishikesh",
    title: "Awaken — 3‑Day Mind‑Body Reset (Rishikesh)",
    retreatType: "Wellness",
    shortSummary:
      "Sunrise yoga, sound healing, Ganga aarti, and forest walks in the Himalayan foothills.",
    location: "Rishikesh, Uttarakhand, India",
    durationDays: 3,
    priceFrom: 18999,
    heroImage: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e",
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
    highlights: ["Sunrise yoga", "Sound healing", "Ganga aarti", "Forest walk"],
    amenities: [
      "Yoga hall",
      "Riverside deck",
      "Vegetarian meals",
      "Airport pickup",
    ],
    wellnessFocus: ["yoga", "breathwork", "sound healing", "nature therapy"],
    inclusions: [
      "Stay",
      "Daily yoga",
      "Breathwork sessions",
      "Sattvic meals",
      "Local transfers",
    ],
    exclusions: ["Flights", "Personal expenses", "Travel insurance"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrival & Grounding",
        description: "Check-in, grounding yoga, intention circle",
        meals: { D: true },
      },
      {
        dayNumber: 2,
        title: "Energy Alignment",
        description: "Shatkriya guidance, pranayama, forest bathing",
        meals: { B: true, L: true, D: true },
      },
      {
        dayNumber: 3,
        title: "Integration",
        description: "Sound healing journey, checkout post-lunch",
        meals: { B: true },
      },
    ],
    departures: [
      {
        startDate: "2025-10-02",
        endDate: "2025-10-04",
        availability: "Available",
      },
      {
        startDate: "2025-11-14",
        endDate: "2025-11-16",
        availability: "Limited",
        priceOverride: 19999,
      },
    ],
  },
  {
    slug: "team-thrive-offsite-goa",
    title: "Team Thrive — Creativity & Resilience Offsite (Goa)",
    retreatType: "Corporate",
    shortSummary:
      "A premium beachfront offsite for leadership alignment and team creativity.",
    location: "Goa, India",
    durationDays: 3,
    priceFrom: 34999,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    gallery: [],
    highlights: ["Leadership workshops", "Team games", "Beach clean-up"],
    amenities: ["Meeting rooms", "AV setup", "Beachfront lawns"],
    corporateFocus: [
      "leadership",
      "creativity",
      "resilience",
      "offsite planning",
    ],
    inclusions: [
      "Stay",
      "Breakfast & dinner",
      "Workshop facilitation",
      "Team activities",
    ],
    exclusions: ["Flights"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrivals & Kickoff",
        description: "Check-in & alignment workshop",
      },
      {
        dayNumber: 2,
        title: "Create & Connect",
        description: "Design sprint + team games",
      },
      {
        dayNumber: 3,
        title: "Reflect & Depart",
        description: "Sunrise beach yoga & closing",
      },
    ],
    departures: [
      {
        startDate: "2025-12-05",
        endDate: "2025-12-07",
        availability: "Available",
      },
    ],
  },
  {
    slug: "community-roots-journey-kerala",
    title: "Community Roots — Backwaters & Culture (Kerala)",
    retreatType: "Community",
    shortSummary:
      "Slow travel through Kerala’s backwaters and village experiences.",
    location: "Alleppey & Kochi, Kerala, India",
    durationDays: 5,
    priceFrom: 27999,
    heroImage:
      "https://images.unsplash.com/photo-1589428757587-47d6c19fef3a?q=80&w=650&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [],
    highlights: ["Houseboat stay", "Village walks", "Kathakali night"],
    amenities: ["Private houseboat", "Local guide"],
    inclusions: ["Stay", "Selected meals", "Transfers"],
    exclusions: ["Flights"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Kochi Arrival",
        description: "Fort Kochi stroll & cafe time",
      },
      {
        dayNumber: 2,
        title: "Backwaters",
        description: "Houseboat cruise & sunset",
      },
      {
        dayNumber: 3,
        title: "Village Life",
        description: "Local craft & cuisine experience",
      },
      {
        dayNumber: 4,
        title: "Culture Night",
        description: "Kathakali & seafood dinner",
      },
      { dayNumber: 5, title: "Depart", description: "Morning walk & checkout" },
    ],
    departures: [
      {
        startDate: "2025-10-20",
        endDate: "2025-10-24",
        availability: "Available",
      },
    ],
  },
  {
    slug: "mice-oman-muscat-3n4d",
    title: "MICE Oman — Muscat 3N/4D",
    retreatType: "MICE",
    shortSummary:
      "Seamless MICE program in Muscat with elegant venues and desert escape.",
    location: "Muscat, Oman",
    durationDays: 4,
    priceFrom: 59999,
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    gallery: [],
    highlights: ["City tour", "Desert camp", "Gala setup"],
    amenities: ["Meeting halls", "On-ground ops team"],
    inclusions: ["Stay", "Transfers", "Venue setup"],
    exclusions: ["Flights"],
    itinerary: [
      {
        dayNumber: 1,
        title: "Arrival & Welcome",
        description: "Airport meet & greet + hotel check-in",
      },
      {
        dayNumber: 2,
        title: "Conference",
        description: "Full-day conference with coffee breaks",
      },
      {
        dayNumber: 3,
        title: "Desert Escape",
        description: "Dunes & dinner under the stars",
      },
      {
        dayNumber: 4,
        title: "City Tour & Depart",
        description: "Grand Mosque & Souq",
      },
    ],
    departures: [
      {
        startDate: "2025-11-01",
        endDate: "2025-11-04",
        availability: "Limited",
      },
    ],
  },
];

export function listPackages() {
  return seedPackages;
}

export function getPackageBySlug(slug: string) {
  return seedPackages.find((p) => p.slug === slug) || null;
}
