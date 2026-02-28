import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Software Development Quote",
  description:
    "Get in touch with Equantra for a free consultation. Hire a dedicated software development team, get a custom quote for your project, or discuss your technology needs.",
  keywords: [
    "hire software development team",
    "get software development quote",
    "custom software development consultation",
    "contact software development company",
    "hire dedicated development team",
  ],
  alternates: {
    canonical: "https://equantra.in/contact",
  },
  openGraph: {
    title: "Contact Equantra — Get a Free Quote",
    description:
      "Start your project with a free consultation. Custom software development, IT consulting, and maintenance services.",
    url: "https://equantra.in/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Equantra",
  url: "https://equantra.in/contact",
  description:
    "Get in touch with Equantra for a free software development consultation and quote.",
  mainEntity: {
    "@type": "Organization",
    name: "Equantra",
    url: "https://equantra.in",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
      areaServed: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
