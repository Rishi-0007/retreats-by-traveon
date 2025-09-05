export default {
  name: "retreatType",
  title: "Retreat Type",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: { list: ["Wellness", "Corporate", "Community", "MICE"] },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
  ]
}
