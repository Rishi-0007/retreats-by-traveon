export default {
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  fields: [
    { name: "question", type: "string" },
    { name: "answer", type: "array", of: [{ type: "block" }] }
  ]
}
