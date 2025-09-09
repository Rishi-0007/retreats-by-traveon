// app/tours/community/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/lib/seed";
import { PackageDetailPage } from "@/components/site/PackageDetailPage";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
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

export default function PackagePage({ params }: PageProps) {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg || pkg.category !== "Community") {
    notFound();
  }

  return <PackageDetailPage pkg={pkg} />;
}

// Generate static paths for better performance
export async function generateStaticParams() {
  // This would typically fetch from your CMS/database
  // For now, we'll use the seed data
  const { seedPackages } = await import("@/lib/seed");

  return seedPackages
    .filter((pkg) => pkg.category === "Community")
    .map((pkg) => ({
      slug: pkg.slug,
    }));
}
