export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "coverImage", type: "image" },
    { name: "publishedAt", type: "datetime" },
    { name: "body", type: "array", of: [{ type: "block" }] },
    { name: "seo", type: "seo" }
  ]
}
