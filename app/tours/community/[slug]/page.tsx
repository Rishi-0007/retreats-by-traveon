// app/tours/community/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/lib/seed";
import { PackageDetailPage } from "@/components/site/PackageDetailPage";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: `${pkg.title} | Community Tours`,
    description: pkg.summary,
    openGraph: {
      title: pkg.title,
      description: pkg.summary,
      images: [pkg.heroImage],
      type: "website",
    },
  };
}

export default async function CommunityTourPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg || pkg.category !== "Community") {
    notFound();
  }

  return <PackageDetailPage pkg={pkg} />;
}

export async function generateStaticParams() {
  const { seedPackages } = await import("@/lib/seed");

  return seedPackages
    .filter((pkg) => pkg.category === "Community")
    .map((pkg) => ({
      slug: pkg.slug,
    }));
}
