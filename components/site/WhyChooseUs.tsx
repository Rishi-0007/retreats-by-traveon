import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Heart, Globe, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Curated Wellness Programs",
    description:
      "Yoga, breathwork, sound healing, and nature therapy designed by certified practitioners",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Proven Corporate Outcomes",
    description:
      "Enhanced creativity, resilience, and strategic alignment through immersive team experiences",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Shield,
    title: "Trusted Operations",
    description:
      "Seamless logistics, safety protocols, and local expertise across India, Oman, and Seychelles",
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Globe,
    title: "Authentic Cultural Connections",
    description:
      "Meaningful interactions with local communities and genuine cultural immersion",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Award-winning retreat design and 4.9-star guest satisfaction across all programs",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Sparkles,
    title: "Personalized Experiences",
    description:
      "Tailored itineraries that match your goals, whether personal growth or business objectives",
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Why <span className="text-gradient">Traveon</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Four years of creating transformative experiences, with deep local
            knowledge and a commitment to authentic, sustainable, and impactful
            journeys.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`group p-8 hover:shadow-floating transition-spring bg-gradient-to-br ${feature.gradient} border-0 text-center`}
              >
                <CardContent className="p-0 space-y-4">
                  <div className="inline-flex p-4 rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary text-white font-medium">
            <Award className="w-5 h-5 mr-2" />
            Trusted by 50+ corporations and 2,500+ individual travelers
          </div>
        </div>
      </div>
    </section>
  );
}
