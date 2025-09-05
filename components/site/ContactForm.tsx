"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  packageRef: z.string().optional(),
  preferredDates: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      alert("Thanks! We'll get back to you soon.");
      reset();
    } else {
      const j = await res.json();
      alert("Error: " + (j.error || "Failed to submit"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name</label>
          <Input {...register("name")} placeholder="Your name" />
          {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <Input type="email" {...register("email")} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Phone</label>
          <Input {...register("phone")} placeholder="+91 98xxxxxxx" />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm">Preferred Dates</label>
          <Input {...register("preferredDates")} placeholder="e.g., 2–4 Oct 2025" />
        </div>
      </div>
      <div>
        <label className="text-sm">Package (optional)</label>
        <Input {...register("packageRef")} placeholder="Package name / link" />
      </div>
      <div>
        <label className="text-sm">Message</label>
        <Textarea {...register("message")} placeholder="Tell us about your ideal retreat..." />
        {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <Button disabled={isSubmitting} type="submit">Submit</Button>
    </form>
  )
}
