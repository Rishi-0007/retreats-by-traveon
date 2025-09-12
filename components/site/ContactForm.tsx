"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { FaWhatsapp } from "react-icons/fa";

// Validation schema
const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  packageRef: z.string().optional(),
  preferredDates: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// Contact Form Component
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const whatsappNumber = "919540111307"; // Your WhatsApp number with country code

    const messageLines = [
      `*New Retreat Inquiry*`,
      `-------------------------`,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone}`,
      `*Preferred Dates:* ${data.preferredDates || "Not specified"}`,
      `*Package Reference:* ${data.packageRef || "Not specified"}`,
      `-------------------------`,
      `*Message:*`,
      `${data.message}`,
    ];

    const message = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect user to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <Input id="name" {...register("name")} placeholder="Your name" />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="+91 98xxxxxxx"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="preferredDates"
            className="text-sm font-medium text-gray-700"
          >
            Preferred Dates
          </label>
          <Input
            id="preferredDates"
            {...register("preferredDates")}
            placeholder="e.g., 2–4 Oct 2025"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="packageRef"
          className="text-sm font-medium text-gray-700"
        >
          Package (optional)
        </label>
        <Input
          id="packageRef"
          {...register("packageRef")}
          placeholder="Package name / link"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your ideal retreat..."
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="inline-flex items-center justify-center gap-2 text-base py-6"
      >
        <FaWhatsapp className="h-5 w-5" />
        Send via WhatsApp
      </Button>
    </form>
  );
}

// Main Page
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
          <h2 className="text-2xl font-bold text-gray-800">
            Send us a Message
          </h2>
          <p className="text-gray-600 mt-2">
            We'll reply to you directly on WhatsApp.
          </p>
          <ContactForm />
        </div>

        {/* Right Column: Map */}
        <div className="w-full h-full min-h-[400px]">
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
