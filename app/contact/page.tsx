import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <PageHeader title="Contact Us" subtitle="Tell us about your ideal retreat" />
      <ContactForm />
    </div>
  )
}
