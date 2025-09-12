"use client";

import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12 lg:py-20">
      <PageHeader
        title="Contact Us"
        subtitle="Tell us about your ideal retreat, or find us on the map."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
        {/* Left Column: Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-6">
            We'll reply to you directly on WhatsApp.
          </p>
          <ContactForm />
        </div>

        {/* Right Column: Map */}
        <div className="w-full h-[400px] lg:h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Location
          </h2>
          <div
            className="relative w-full overflow-hidden rounded-xl shadow-lg"
            style={{ paddingTop: "56.25%" }} // 16:9 ratio
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9088110861585!2d77.15071971001613!3d28.69237428126092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c9a539885%3A0x6eeaa336893a5c65!2sD%20Mall!5e0!3m2!1sen!2sin!4v1757674504646!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
