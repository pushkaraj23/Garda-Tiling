import ContactForm from "@/components/Contact/ContactForm";
import CmsPageIntro from "@/components/cms/CmsPageIntro";

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <CmsPageIntro slug="contact" fallbackTitle="Contact Us" />
      <ContactForm />
    </div>
  );
}