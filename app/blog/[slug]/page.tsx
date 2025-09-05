import { notFound } from "next/navigation";
import { PageHeader } from "@/components/site/PageHeader";

const posts: Record<string, { title: string; body: string }> = {
  "wellness-vs-offsite": {
    title: "Wellness Retreat vs Corporate Offsite",
    body: "Both formats can renew teams — wellness retreats focus on individuals while offsites align strategy and collaboration.",
  },
  "planning-a-rishikesh-retreat": {
    title: "Planning a Mind-Body Reset in Rishikesh",
    body: "Choose riverside stays, schedule sunrise yoga, and plan mindful meals for a gentle reset.",
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return notFound();
  return (
    <div className="container py-12">
      <PageHeader title={post.title} />
      <div className="container-prose">{post.body}</div>
    </div>
  );
}
