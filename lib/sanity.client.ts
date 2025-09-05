import { createClient } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-01",
  useCdn: true,
};

export const client = createClient(sanityConfig);

// Helper to decide whether to fallback to local seed when env missing
export const cmsEnabled = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
