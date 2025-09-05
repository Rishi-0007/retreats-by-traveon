import { PageHeader } from "@/components/site/PageHeader";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <PageHeader title="About Retreats by Traveon" subtitle="Nature + Luxury + Professionalism" />
      <div className="container-prose space-y-6">
        <p>
          We craft immersive wellness retreats, inspiring corporate offsites, community journeys, and
          seamless MICE programs across India, Oman, and Seychelles.
        </p>
        <p>
          Our programs integrate yoga, breathwork, sound healing, nature therapy, and leadership outcomes,
          delivered with calm precision and premium hospitality.
        </p>
      </div>
    </div>
  )
}
