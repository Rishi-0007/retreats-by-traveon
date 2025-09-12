import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CorporateRetreatsPage() {
  const whatsappUrl =
    "https://wa.me/9540111307?text=Hi! I'm interested in planning a corporate retreat.";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#44B3C4]/90 to-[#6BC273]/90 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2949&q=80')",
          }}
        ></div>
        <div className="relative z-10 page-center py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Corporate <span className="text-[#F6B93B]">Retreats</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Transform your team dynamics with purposeful retreats that combine
              strategic planning, wellness, and immersive experiences
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#44B3C4] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg inline-flex items-center gap-3 hover:scale-105 hover:shadow-xl"
              >
                <FaWhatsapp className="w-7 h-7" />
                Plan Your Retreat
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 gradient-hero" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="page-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beyond Ordinary Offsites
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Retreats by Traveon, we design corporate retreats that go
              beyond ordinary offsites. Our retreats combine strategic planning,
              wellness, team-building, and immersive experiences to enhance
              collaboration, boost morale, and achieve organizational goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#44B3C4] p-2 rounded-lg shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Purposeful Design
                    </h3>
                    <p className="text-gray-600">
                      Every retreat is strategically designed to meet your
                      specific organizational objectives and team dynamics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#6BC273] p-2 rounded-lg shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Professional Execution
                    </h3>
                    <p className="text-gray-600">
                      Experienced planners and trusted local partners ensure
                      seamless logistics and flawless delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#F6B93B] p-2 rounded-lg shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Measurable Impact
                    </h3>
                    <p className="text-gray-600">
                      Retreats that strengthen relationships, boost engagement,
                      and enhance team performance with lasting results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#F6B93B] fill-current" />
                  <span className="font-semibold text-gray-900">
                    98% Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Corporate Retreats Matter */}
      <section className="py-20 bg-white">
        <div className="page-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Corporate Retreats Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Corporate retreats are powerful opportunities to transform your
              team and organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                color: "bg-[#44B3C4]",
                title: "Strengthen Team Cohesion",
                description:
                  "Build deeper connections and improve communication across all team levels",
              },
              {
                icon: Lightbulb,
                color: "bg-[#6BC273]",
                title: "Inspire Innovation",
                description:
                  "Foster creativity and fresh thinking through collaborative experiences",
              },
              {
                icon: Heart,
                color: "bg-[#F6B93B]",
                title: "Recognize & Reward",
                description:
                  "Show appreciation for your team's hard work and dedication",
              },
              {
                icon: Target,
                color: "bg-[#44B3C4]",
                title: "Align with Goals",
                description:
                  "Ensure everyone is working towards shared organizational objectives",
              },
              {
                icon: TrendingUp,
                color: "bg-[#6BC273]",
                title: "Build Resilience",
                description:
                  "Develop personal wellbeing and stress management capabilities",
              },
              {
                icon: CheckCircle,
                color: "bg-[#F6B93B]",
                title: "Achieve Results",
                description:
                  "Create lasting positive change in team dynamics and performance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`${item.color} p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="page-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Corporate Retreat Offerings
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to meet diverse organizational
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Team-Building Experiences",
                description:
                  "Enhance collaboration and trust through structured activities, challenges, and workshops that foster problem-solving, communication, and leadership skills.",
                image:
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                gradient: "from-[#44B3C4] to-[#44B3C4]/70",
              },
              {
                title: "Wellness & Mindfulness Sessions",
                description:
                  "Rejuvenate teams with yoga, meditation, stress-management workshops, and nature-based therapies to boost energy, focus, and overall wellbeing.",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                gradient: "from-[#6BC273] to-[#6BC273]/70",
              },
              {
                title: "Strategic Workshops & Knowledge Sessions",
                description:
                  "Combine learning and planning with experiential workshops, brainstorming sessions, and leadership development activities aligned with corporate goals.",
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80",
                gradient: "from-[#F6B93B] to-[#F6B93B]/70",
              },
              {
                title: "Cultural & Experiential Activities",
                description:
                  "Immerse your team in local culture, cuisine, and community interactions to promote engagement, creativity, and shared experiences outside the office environment.",
                image:
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                gradient: "from-[#44B3C4] to-[#6BC273]",
              },
            ].map((offering, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="page-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic process ensuring every retreat delivers maximum
              impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#44B3C4] to-[#6BC273] rounded-full hidden lg:block"></div>

            <div className="space-y-10 sm:space-y-12 md:space-y-16">
              {[
                {
                  step: "01",
                  title: "Consultation & Planning",
                  description:
                    "Understand your goals, team dynamics, and desired outcomes through comprehensive discovery sessions.",
                  icon: Calendar,
                  side: "left",
                },
                {
                  step: "02",
                  title: "Customized Itinerary Design",
                  description:
                    "Curate workshops, activities, wellness sessions, and experiential learning programs tailored to your needs.",
                  icon: MapPin,
                  side: "right",
                },
                {
                  step: "03",
                  title: "Execution & Support",
                  description:
                    "Professional on-ground management and seamless coordination ensuring flawless delivery.",
                  icon: Users,
                  side: "left",
                },
                {
                  step: "04",
                  title: "Evaluation & Feedback",
                  description:
                    "Measure impact and ensure lasting benefits for your team and organization through detailed assessment.",
                  icon: TrendingUp,
                  side: "right",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    phase.side === "right" ? "lg:text-right" : ""
                  }`}
                >
                  {/* Text block */}
                  <div
                    className={`${phase.side === "right" ? "lg:order-2" : ""}`}
                  >
                    <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                      <div className="bg-gradient-to-br from-[#44B3C4] to-[#6BC273] text-white text-lg sm:text-xl font-bold w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                        {phase.step}
                      </div>
                      <div className="lg:hidden">
                        <phase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#44B3C4]" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Icon block (only visible on large screens) */}
                  <div
                    className={`hidden lg:block ${
                      phase.side === "right" ? "lg:order-1" : ""
                    } relative`}
                  >
                    <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl">
                      <phase.icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#44B3C4] mx-auto" />
                    </div>
                    {/* Timeline dot */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-[#F6B93B] rounded-full border-4 border-white shadow-lg"
                      style={{
                        [phase.side === "right" ? "left" : "right"]: "-2.5rem",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#44B3C4] to-[#6BC273] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="page-center relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              We promise retreats that are thoughtfully curated, professionally
              executed, and designed to leave participants inspired, energized,
              and more connected—both personally and professionally.
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#44B3C4] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
              >
                <FaWhatsapp className="w-7 h-7" />
                Start Planning on WhatsApp
              </a>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F6B93B] mb-2">
                  500+
                </div>
                <div className="text-white/80">Successful Retreats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F6B93B] mb-2">
                  98%
                </div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F6B93B] mb-2">
                  50+
                </div>
                <div className="text-white/80">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
