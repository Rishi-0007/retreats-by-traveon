import { Accordion } from "@/components/ui/accordion";

const faqs = [
  { title: "What’s included in a typical wellness retreat?", content: "Stay, yoga/breathwork sessions, selected meals, and local transfers." },
  { title: "Do you customize corporate offsites?", content: "Yes — leadership outcomes, creativity workshops, and team experiences are tailored." },
  { title: "Which destinations do you operate in?", content: "India, Oman, and Seychelles." },
];

export function FAQAccordion() {
  return <Accordion items={faqs} />
}
