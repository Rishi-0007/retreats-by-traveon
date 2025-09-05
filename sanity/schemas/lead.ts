export default {
  name: "lead",
  title: "Lead",
  type: "document",
  fields: [
    { name: "name", type: "string" },
    { name: "email", type: "string" },
    { name: "phone", type: "string" },
    { name: "message", type: "text" },
    { name: "packageRef", type: "string" },
    { name: "source", type: "string" },
    { name: "createdAt", type: "datetime" },
    { name: "status", type: "string", options: { list: ["New", "In Progress", "Closed"] } }
  ]
}
