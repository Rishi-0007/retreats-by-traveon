export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "authorName", type: "string" },
    { name: "authorRole", type: "string" },
    { name: "content", type: "array", of: [{ type: "block" }] },
    { name: "avatar", type: "image" },
    { name: "relatedPackages", type: "array", of: [{ type: "reference", to: [{ type: "package" }] }] }
  ]
}
