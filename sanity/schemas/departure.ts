export default {
  name: "departure",
  title: "Departure",
  type: "object",
  fields: [
    { name: "startDate", type: "date" },
    { name: "endDate", type: "date" },
    { name: "availability", type: "string", options: { list: ["Available", "Limited", "Sold Out"] } },
    { name: "priceOverride", type: "number" },
    { name: "ctaLabel", type: "string" },
  ]
}
