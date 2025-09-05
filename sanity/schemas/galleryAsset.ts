export default {
  name: "galleryAsset",
  title: "Gallery Asset",
  type: "document",
  fields: [
    { name: "image", type: "image" },
    { name: "videoUrl", type: "url" },
    { name: "caption", type: "string" },
    { name: "credit", type: "string" },
    { name: "tags", type: "array", of: [{ type: "string" }] }
  ]
}
