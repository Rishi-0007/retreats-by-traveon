export type RetreatCategory = "Wellness" | "Corporate" | "Community" | "MICE";

export type MealPlan = {
  breakfast?: boolean;
  lunch?: boolean;
  dinner?: boolean;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  meals?: MealPlan;
  activities?: string[];
  stay?: string;
};

export type Departure = {
  startDate: string;
  endDate: string;
  availability: "Available" | "Limited" | "Sold Out";
  price?: number;
  ctaLabel?: string;
  isFeatured?: boolean;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  category: RetreatCategory;
  summary: string;
  location: string;
  duration: number;
  basePrice: number;
  currency?: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  focusTags?: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  departures: Departure[];
  rating?: number;
  leaders?: {
    name: string;
    bio: string;
    image: string;
    expertise: string[];
  }[];
  partner?: string;
  partnerLogo?: string;
  isFeatured?: boolean;
};

export const seedPackages: Package[] = [
  // --- Magical Muscat ---
  {
    id: "magical-muscat-5d",
    slug: "magical-muscat-5d4n",
    title: "Magical Muscat — 5 Days / 4 Nights",
    category: "Community",
    summary:
      "Experience Muscat's stunning mosques, souqs, wadis, dolphin watching, and desert adventures with curated luxury stays.",
    location: "Muscat, Oman",
    duration: 5,
    basePrice: 39999,
    currency: "INR",
    heroImage: "/muscat/1.jpg",
    gallery: [
      "/muscat/2.jpg",
      "/muscat/3.jpg",
      "/muscat/4.jpg",
      "/muscat/5.jpg",
      "/muscat/6.jpg",
      "/muscat/7.jpg",
      "/muscat/8.jpg",
    ],
    highlights: [
      "Muscat City Tour",
      "Nizwa Fort",
      "Al Hoota Cave",
      "Dolphin Watching",
      "Wadi Bani Khalid",
      "Desert Safari",
    ],
    amenities: ["4★ hotel stay", "Breakfasts", "Transfers", "Guided tours"],
    inclusions: [
      "4 nights accommodation at Royal Tulip or similar",
      "All transfers",
      "Breakfasts",
      "Half-day Muscat city tour",
      "Nizwa Fort & Al Hoota Cave entry",
      "2 hours Dolphin Watching tour",
    ],
    exclusions: [
      "Airfare",
      "Tips, drinks, minibar",
      "Room service, laundry, calls",
      "Early check-in / late check-out",
      "Anything not mentioned in inclusions",
      "GST 5% & TCS as per govt norms",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Muscat City Tour",
        description:
          "Morning: Airport pickup, hotel check-in. Afternoon: Muscat tour covering Qurum Park, Mutrah Souq, Corniche, National Museum.",
        meals: { breakfast: true },
      },
      {
        day: 2,
        title: "Nizwa Fort & Al Hoota Cave",
        description:
          "Breakfast at hotel, visit Nizwa Fort and Al Hoota Cave. Evening return to hotel.",
        meals: { breakfast: true },
      },
      {
        day: 3,
        title: "Dolphin Watching & Leisure",
        description:
          "Morning dolphin watching boat tour. Afternoon free for leisure.",
        meals: { breakfast: true },
      },
      {
        day: 4,
        title: "Leisure & Optional Tours",
        description:
          "Relax at hotel or choose optional tours (Wahiba Sands desert safari, Wadi Bani Khalid).",
        meals: { breakfast: true },
      },
      {
        day: 5,
        title: "Departure & Optional Activities",
        description:
          "Checkout and transfer to airport. Optional: Coastal tour to Sur or shopping.",
        meals: { breakfast: true },
      },
    ],
    departures: [
      {
        startDate: "2025-11-10",
        endDate: "2025-11-14",
        availability: "Available",
      },
      {
        startDate: "2025-12-05",
        endDate: "2025-12-09",
        availability: "Limited",
      },
    ],
    partner: "Traveon Ventures LLP",
    partnerLogo: "/muscat/traveon.png",
    isFeatured: true,
  },

  // --- Nirvana with Arunanand Saraswati ---
  {
    id: "nirvana-arunanand-4d",
    slug: "nirvana-holistic-wellness-arunanand",
    title: "Nirvana — A Holistic Wellness Retreat",
    category: "Wellness",
    summary:
      "4 days of yoga, meditation, sound healing, and conscious living led by Arunanand Saraswati in the Himalayas.",
    location: "Tapovan, Rishikesh, Uttarakhand, India",
    duration: 4,
    basePrice: 28999,
    currency: "INR",
    heroImage: "/rishikesh/1.jpg",
    gallery: ["/rishikesh/2.jpg", "/rishikesh/3.jpg", "/rishikesh/4.jpg"],
    highlights: [
      "Daily yoga & pranayama",
      "Shatkriyas detox practices",
      "Sound healing journeys",
      "Vision board & Sankalpa",
      "Sacred Ganga Aarti",
      "Agni Hotra (fire ritual)",
    ],
    amenities: [
      "Ashram stay",
      "Sattvic meals",
      "Meditation hall",
      "Sacred river access",
    ],
    focusTags: ["yoga", "sound healing", "chakra work", "spirituality"],
    inclusions: [
      "3 nights stay",
      "All meals (sattvic)",
      "Workshops & guided meditations",
      "Nature walks",
      "Group ceremonies",
    ],
    exclusions: ["Flights", "Personal Reiki/Attunement sessions"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Grounding",
        description:
          "Check-in, orientation, walking meditation, sound healing, sattvic dinner.",
      },
      {
        day: 2,
        title: "Energy Alignment",
        description: "Shatkriya, pranayama, chakra workshop, Ganga Aarti.",
      },
      {
        day: 3,
        title: "Expansion",
        description:
          "Chakra yoga, vision board, cyclic meditation, Agni Hotra ceremony.",
      },
      {
        day: 4,
        title: "Integration & Farewell",
        description:
          "Closing yoga, gratitude meditation, sharing circle, check-out.",
      },
    ],
    departures: [
      {
        startDate: "2025-10-18",
        endDate: "2025-10-21",
        availability: "Available",
      },
      {
        startDate: "2025-11-22",
        endDate: "2025-11-25",
        availability: "Limited",
      },
    ],
    leaders: [
      {
        name: "Arunanand Saraswati",
        bio: "Spiritual practitioner, energy healer, Reiki Grand Master, Lama Fera practitioner, and author of 'Transform Lives with Energy Healing'.",
        image: "/rishikesh/arunanand.jpg",
        expertise: [
          "Ashtanga Yoga",
          "Kundalini Yoga",
          "Energy Healing",
          "Swar Yoga",
        ],
      },
    ],
    partner: "Yogved Hospitality & Resort",
    partnerLogo: "/rishikesh/anantam.png",
  },

  // --- Seychelles Group Tour ---
  {
    id: "seychelles-4d",
    slug: "seychelles-group-tour-4d3n",
    title: "Seychelles — Fixed Departure Group Tour",
    category: "Community",
    summary:
      "4 days of island-hopping in Seychelles with guided Mahé, Praslin, and La Digue tours, flights included.",
    location: "Mahé, Seychelles",
    duration: 4,
    basePrice: 130000,
    currency: "INR",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gallery: [
      "/seychelles/1.jpg",
      "/seychelles/2.jpg",
      "/seychelles/3.jpg",
      "/seychelles/4.jpg",
      "/seychelles/5.jpg",
      "/seychelles/6.jpg",
      "/seychelles/7.jpg",
      "/seychelles/8.jpg",
    ],
    highlights: [
      "Mahé Island guided tour",
      "Bel Ombre & Beau Vallon Beach",
      "Praslin Coco de Mer palms",
      "La Digue island cycling",
      "Victoria city shopping",
    ],
    amenities: [
      "Flights ex-Mumbai",
      "3★ hotel stay",
      "Airport transfers",
      "Daily breakfast",
    ],
    inclusions: [
      "Return flights (ex-Mumbai)",
      "3 nights stay in Mahé",
      "Breakfasts",
      "Guided Mahé island tour with lunch",
      "Full-day Praslin & La Digue tour with buffet lunch",
      "Speedboat transfers",
    ],
    exclusions: [
      "Personal expenses",
      "Early check-in / late check-out",
      "Meals not mentioned",
      "GST 5% & TCS as per govt rules",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Leisure",
        description: "Arrive Mahé, transfer to hotel, rest or explore.",
      },
      {
        day: 2,
        title: "Mahé Island Tour",
        description:
          "Bel Ombre, Beau Vallon, colonial landmarks, Venn's Town, Sauzier Waterfall, Creole lunch.",
      },
      {
        day: 3,
        title: "Praslin & La Digue",
        description:
          "Coco de Mer, Anse Lazio, La Digue cycling, beaches, giant tortoises.",
      },
      {
        day: 4,
        title: "Victoria City & Departure",
        description: "Shopping in Victoria markets, airport transfer.",
      },
    ],
    departures: [
      {
        startDate: "2025-10-02",
        endDate: "2025-10-06",
        availability: "Available",
        isFeatured: true,
      },
      {
        startDate: "2025-11-10",
        endDate: "2025-11-14",
        availability: "Limited",
      },
    ],
    partner: "Traveon Ventures LLP",
    partnerLogo: "/seychelles/traveon.png",
    isFeatured: true,
  },

  // --- Nirvana with Anant Gogia ---
  {
    id: "nirvana-anant-4d",
    slug: "nirvana-inner-journey-anant",
    title: "Nirvana — Inner Journey Meditation & Healing",
    category: "Wellness",
    summary:
      "A 4-day retreat in Rishikesh led by Anant Gogia, blending yoga, sound healing, Mystic Rose meditation, and sacred Himalayan rituals.",
    location: "Tapovan, Rishikesh, Uttarakhand, India",
    duration: 4,
    basePrice: 26999,
    currency: "INR",
    heroImage: "/anant/1.jpg",
    gallery: ["/anant/2.jpg", "/anant/3.jpg", "/anant/4.jpg", "/anant/5.jpg"],
    highlights: [
      "Yoga & Pranayama in nature",
      "Mystic Rose meditation",
      "Sound healing sessions",
      "Village trek & picnic",
      "Ganga Aarti at Rishikesh",
      "Bonfire storytelling nights",
    ],
    amenities: [
      "Nature-facing rooms",
      "Sattvic meals",
      "Group activities",
      "Forest walks",
    ],
    focusTags: [
      "meditation",
      "theta healing",
      "sound therapy",
      "spiritual growth",
    ],
    inclusions: [
      "3 nights stay",
      "All meals",
      "Daily yoga & meditation",
      "2 sound healing sessions",
      "Sunrise temple trip",
      "Village trek & Ganga Aarti",
    ],
    exclusions: ["Flights", "Personal therapies"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Grounding",
        description:
          "Check-in, herbal tea, opening circle, evening yoga, bonfire & live music.",
      },
      {
        day: 2,
        title: "Himalayan Sunrise & Sound Journey",
        description:
          "Sunrise temple meditation, Mystic Rose practice, sound healing, yoga nidra, bonfire storytelling.",
      },
      {
        day: 3,
        title: "Village Trek & Ganga Aarti",
        description:
          "Morning yoga, picnic lunch in Himalayan village, sound healing, evening Ganga Aarti in Rishikesh.",
      },
      {
        day: 4,
        title: "Integration & Departure",
        description:
          "Closing yoga, gratitude meditation, farewell circle, checkout.",
      },
    ],
    departures: [
      {
        startDate: "2025-12-01",
        endDate: "2025-12-04",
        availability: "Available",
      },
      {
        startDate: "2026-01-15",
        endDate: "2026-01-18",
        availability: "Available",
      },
    ],
    leaders: [
      {
        name: "Anant Gogia",
        bio: "Certified Theta Meditation Instructor, Past Life Regression Therapist, Sound Healer, Tarot & Astrology teacher.",
        image: "/anant/anant.jpg",
        expertise: [
          "Theta Meditation",
          "Past Life Regression",
          "Tarot & Astrology",
          "Sound Healing",
        ],
      },
    ],
    partner: "Peaceful Poses Yoga Retreat Centre",
    partnerLogo: "/anant/partnerlogo.png",
    isFeatured: true,
  },
];

export function listPackages() {
  return seedPackages;
}

export function getPackageBySlug(slug: string) {
  return seedPackages.find((p) => p.slug === slug) || null;
}
