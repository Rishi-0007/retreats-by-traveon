"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { PageHeader } from "@/components/site/PageHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <div className="container py-12">
        <PageHeader
          title="About Retreats by Traveon"
          subtitle="Where Connection Meets Purpose"
        />

        {/* Hero Section with Animation */}
        <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl mb-16">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-purple-600/10" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base lg:text-lg tracking-wide">
                  THE EXPERIENCES ARM OF TRAVEON VENTURES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We exist to help people{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  connect
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Within themselves, within teams, and within communities through
                thoughtfully curated experiences that blend local culture,
                nature, and premium hospitality.
              </p>
            </div>

            {/* Right Animation */}
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <DotLottieReact
                  src="https://lottie.host/72ce7fc3-d4e2-4c6d-86c6-55aa4a458754/vP13hNoG1q.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {[
            {
              title: "Community Tours",
              icon: "🌍",
              desc: "Immersive cultural journeys that connect you with local communities",
            },
            {
              title: "Wellness Retreats",
              icon: "🧘",
              desc: "Transformative experiences focused on mindfulness and wellbeing",
            },
            {
              title: "Corporate Offsites",
              icon: "💼",
              desc: "Strategic retreats that strengthen teams and drive results",
            },
            {
              title: "MICE Programs",
              icon: "🎯",
              desc: "Large-format meetings and events delivered with precision",
            },
          ].map((item, index) => (
            <div key={index} className="group h-full">
              <div className="flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 rounded-3xl p-6 sm:p-10 lg:p-16 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Philosophy
            </h2>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 text-left">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Thoughtful Curation
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every detail is carefully selected to create meaningful
                      connections and lasting memories.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Seamless Operations
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Professional execution with transparent budgets and no
                      surprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Local Integration
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Authentic experiences that honor local culture, nature,
                      and hospitality traditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Purpose-Driven
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                      Every itinerary is built around your specific goals for
                      connection, wellbeing, and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Spectrum */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Sunrise to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's sunrise yoga by the sea or executive strategy
              sessions, we create experiences that people remember for the right
              reasons.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl text-white mb-4">🌅</div>
                <h3 className="text-2xl font-bold text-white">
                  Wellness Journeys
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sunrise yoga, mindfulness practices, and nature therapy designed
                to rejuvenate body and mind.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl text-white mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-white">
                  Cultural Exploration
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Knowledge-rich community tours that offer deep insights into
                local traditions and heritage.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl text-white mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white">
                  Executive Outcomes
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Strategic offsites and large-format meetings that drive team
                alignment and business results.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Quality */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                Built on Trust
              </h2>
              <p className="text-base lg:text-xl text-gray-600 px-4">
                Our commitment to excellence is reflected in every aspect of our
                service delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
              <div className="space-y-3 lg:space-y-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">🤝</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Partner Network
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Trusted on-ground partners who share our commitment to quality
                  and authenticity.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="bg-green-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Safety Standards
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Rigorous safety protocols ensuring peace of mind throughout
                  your journey.
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="bg-purple-600 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto">
                  <span className="text-white text-lg lg:text-2xl">💎</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                  Transparent Pricing
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Clear budgets with no hidden costs—just beautifully run
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
