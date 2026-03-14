import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — Boutique Software Development Agency",
  description:
    "Equantra is a boutique software development agency delivering custom digital solutions for US businesses. Meet our team, learn our process, and discover why clients trust us.",
  keywords: [
    "boutique software development agency",
    "US software development partner",
    "custom software company about",
    "software engineering team",
    "dedicated development team",
  ],
  alternates: {
    canonical: "https://equantra.in/about",
  },
  openGraph: {
    title: "About Equantra — Boutique Software Development Agency",
    description:
      "We make software development easy and personal. Meet our team and learn how we deliver custom solutions.",
    url: "https://equantra.in/about",
    images: [{ url: "/og-image.jpg", width: 2738, height: 1664, alt: "About Equantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Equantra — Boutique Software Development Agency",
    description:
      "We make software development easy and personal. Meet our team and learn how we deliver custom solutions.",
    images: ["/og-image.jpg"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Equantra",
  url: "https://equantra.in/about",
  description:
    "Equantra is a boutique software development agency delivering custom digital solutions for US businesses.",
  mainEntity: {
    "@type": "Organization",
    name: "Equantra",
    url: "https://equantra.in",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Custom Software Development",
      "Mobile App Development",
      "IT Consulting",
      "AI & Automation",
      "Software Maintenance",
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
