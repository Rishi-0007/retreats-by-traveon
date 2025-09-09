"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  packageTitle: string;
  travelDate: string;
  verified: boolean;
}

// Sample testimonials - you can replace with real data
const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b0e3?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review:
      "The Nirvana wellness retreat was absolutely transformative. Arunanand's guidance through meditation and sound healing helped me find inner peace I didn't know I was looking for. The ashram setting by the Ganges was perfect.",
    packageTitle: "Nirvana — A Holistic Wellness Retreat",
    travelDate: "October 2024",
    verified: true,
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Delhi, India",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review:
      "Magical Muscat exceeded all expectations! The desert safari was breathtaking, and dolphin watching was unforgettable. Our guide was knowledgeable and the hotel was luxurious. Perfect family vacation.",
    packageTitle: "Magical Muscat — 5 Days / 4 Nights",
    travelDate: "November 2024",
    verified: true,
  },
  {
    id: "3",
    name: "Sneha Patel",
    location: "Bangalore, India",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review:
      "Seychelles was like paradise on earth! The group tour was perfectly organized, and La Digue island cycling was so much fun. The beaches were pristine and the local culture fascinating.",
    packageTitle: "Seychelles — Fixed Departure Group Tour",
    travelDate: "October 2024",
    verified: true,
  },
  {
    id: "4",
    name: "Amit Agarwal",
    location: "Pune, India",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    review:
      "The Inner Journey retreat with Anant was deeply healing. The combination of yoga, sound therapy, and Himalayan village trek created a perfect balance of spirituality and adventure. Highly recommended!",
    packageTitle: "Nirvana — Inner Journey Meditation & Healing",
    travelDate: "December 2024",
    verified: true,
  },
];

interface TestimonialsSectionProps {
  packageId?: string;
  limit?: number;
  className?: string;
}

export function TestimonialsSection({
  packageId,
  limit = 3,
  className = "",
}: TestimonialsSectionProps) {
  // Filter testimonials by package if specified
  const filteredTestimonials = packageId
    ? sampleTestimonials.filter((t) =>
        t.packageTitle.toLowerCase().includes(packageId.toLowerCase())
      )
    : sampleTestimonials;

  const displayTestimonials = filteredTestimonials.slice(0, limit);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real experiences from real people who have traveled with us
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-500 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Package Info */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-600 line-clamp-1">
                    {testimonial.packageTitle}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Traveled in {testimonial.travelDate}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      {testimonial.verified && (
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-0"
                        >
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Reviews Link */}
      {filteredTestimonials.length > limit && (
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View All Reviews ({filteredTestimonials.length - limit} more)
          </button>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>500+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>4.8/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>100% Verified Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
