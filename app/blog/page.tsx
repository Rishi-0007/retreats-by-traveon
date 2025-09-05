import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";

const posts = [
  { slug: "wellness-vs-offsite", title: "Wellness Retreat vs Corporate Offsite — Which one is right for you?" },
  { slug: "planning-a-rishikesh-retreat", title: "Planning a Mind-Body Reset in Rishikesh" },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      <PageHeader title="Journal" subtitle="Ideas, insights, and guides" />
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p.slug}>
            <Link className="underline text-primary" href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
