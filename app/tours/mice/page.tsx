import React from "react";
import {
  Briefcase,
  Gift,
  Presentation,
  Users,
  Settings,
  Plane,
  Globe,
  TrendingUp,
  MessageCircle,
  DraftingCompass,
  Truck,
  ClipboardCheck,
  Quote,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MicePage() {
  const whatsappUrl =
    "https://wa.me/9540111307?text=Hi! I'm interested in planning a MICE tour.";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#44B3C4]/90 to-[#6BC273]/90 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
          }}
        ></div>
        <div className="relative z-10 container py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              MICE <span className="text-[#F6B93B]">Tours</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Seamless meetings, incentives, conferences, and exhibitions
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#44B3C4] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg inline-flex items-center gap-3 hover:scale-105 hover:shadow-xl"
              >
                <FaWhatsapp className="w-7 h-7" />
                Plan Your MICE Tour
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 gradient-hero" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Business Objectives, Immersive Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Retreats by Traveon, our MICE Tours are designed to combine
              business objectives with immersive travel experiences. We create
              programs that integrate corporate meetings, incentive trips,
              conferences, and team-building events with cultural exploration,
              wellness, and leisure—ensuring participants are engaged,
              motivated, and inspired.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80"
                alt="Corporate team meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Settings,
                  color: "#44B3C4",
                  title: "Tailored Programs",
                  description:
                    "Each tour is customized to meet your corporate objectives, team dynamics, and desired outcomes.",
                },
                {
                  icon: Plane,
                  color: "#6BC273",
                  title: "Seamless Logistics",
                  description:
                    "End-to-end planning, professional on-ground support, and trusted local partners ensure smooth execution.",
                },
                {
                  icon: Globe,
                  color: "#F6B93B",
                  title: "Immersive Experiences",
                  description:
                    "We combine culture, nature, and wellness to create meaningful and memorable journeys.",
                },
                {
                  icon: TrendingUp,
                  color: "#44B3C4",
                  title: "Impactful Outcomes",
                  description:
                    "MICE tours designed to boost engagement, strengthen teams, and leave lasting impressions.",
                },
              ].map((item) => (
                <div className="flex items-start space-x-4" key={item.title}>
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our MICE Tour Offerings */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our MICE Tour Offerings
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every corporate need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Executive & Leadership Tours",
                description:
                  "Curated tours that combine strategic meetings, workshops, and networking with wellness, sightseeing, and cultural immersion.",
                image:
                  "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80",
                gradient: "from-[#44B3C4] to-[#44B3C4]/70",
              },
              {
                icon: Gift,
                title: "Incentive Travel Programs",
                description:
                  "Motivate and reward your top performers with luxury travel, adventure, and unforgettable cultural excursions.",
                image:
                  "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                gradient: "from-[#6BC273] to-[#6BC273]/70",
              },
              {
                icon: Presentation,
                title: "Conference & Seminar Tours",
                description:
                  "We integrate professional learning into engaging travel experiences with venue selection, event support, and blended activities.",
                image:
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                gradient: "from-[#F6B93B] to-[#F6B93B]/70",
              },
              {
                icon: Users,
                title: "Team-Building & Offsite Tours",
                description:
                  "Build collaboration and morale through experiential activities, wellness sessions, and outdoor adventures.",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
                gradient: "from-[#44B3C4] to-[#6BC273]",
              },
            ].map((offering) => (
              <div key={offering.title} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${offering.gradient} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div
                      className={`bg-white/20 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <offering.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic process ensuring every MICE tour delivers maximum
              impact and value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: MessageCircle,
                title: "Consultation & Goal Definition",
                description:
                  "Understanding corporate objectives, audience, and outcomes.",
              },
              {
                icon: DraftingCompass,
                title: "Custom Itinerary Design",
                description:
                  "Blending business with cultural and wellness experiences.",
              },
              {
                icon: Truck,
                title: "Execution & On-Ground Support",
                description:
                  "Professional logistics, local coordination, and seamless management.",
              },
              {
                icon: ClipboardCheck,
                title: "Post-Tour Evaluation",
                description:
                  "Measuring impact, collecting feedback, and ensuring lasting value.",
              },
            ].map((step, index) => (
              <div key={step.title} className="flex flex-col items-center p-6">
                <div className="bg-gradient-to-br from-[#44B3C4] to-[#6BC273] text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {`0${index + 1}`}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Our MICE tour with Traveon was flawless. We combined business meetings, team bonding, and cultural exploration seamlessly.",
              "The incentive tour was a perfect reward for our top performers—luxurious, engaging, and unforgettable.",
              "Every detail was managed professionally, making our conference-tour a truly memorable experience for all participants.",
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-[#44B3C4] mb-4" />
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#44B3C4] to-[#6BC273] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-26%2016v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6%208v-4h-2v4H0v2h4v4h2V10h4V8H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Transform corporate programs into immersive, engaging, and
              rewarding experiences with Retreats by Traveon.
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#44B3C4] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
              >
                <FaWhatsapp className="w-7 h-7" />
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
