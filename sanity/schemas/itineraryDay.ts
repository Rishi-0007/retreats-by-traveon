export default {
  name: "itineraryDay",
  title: "Itinerary Day",
  type: "object",
  fields: [
    { name: "dayNumber", type: "number" },
    { name: "title", type: "string" },
    { name: "description", type: "array", of: [{ type: "block" }] },
    {
      name: "meals",
      type: "object",
      fields: [
        { name: "B", type: "boolean", title: "Breakfast" },
        { name: "L", type: "boolean", title: "Lunch" },
        { name: "D", type: "boolean", title: "Dinner" },
      ]
    }
  ]
}
