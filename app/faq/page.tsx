"use client";

"use client";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQAccordion } from "@/components/site/FAQAccordion";
export default function FAQPage() {
  return (
    <div className="container py-12">
      <PageHeader title="FAQs" subtitle="Quick answers to common questions" />
      <FAQAccordion />
    </div>
  );
}
