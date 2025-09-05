export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "brandName", type: "string" },
    { name: "logo", type: "image" },
    { name: "primaryGradient", type: "string" },
    { name: "contactEmail", type: "string" },
    { name: "phone", type: "string" },
    { name: "address", type: "string" },
    { name: "socialLinks", type: "array", of: [{ type: "url" }] },
    { name: "defaultSeo", type: "seo" }
  ]
}
