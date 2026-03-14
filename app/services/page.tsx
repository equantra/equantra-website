import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import ServicesContent from "../services/ServicesContent";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Custom software development services including web & mobile apps, IT consulting, fractional CTO, software maintenance, and AI automation. Expert engineering consultants for US businesses.",
  keywords: [
    "custom software development services",
    "software engineering consultants",
    "mobile app development company",
    "IT consulting services",
    "software maintenance services",
    "fractional CTO for startups",
    "desktop application development services",
    "AI automation solutions",
    "custom web application development services",
    "dedicated development team",
  ],
  alternates: {
    canonical: "https://equantra.in/services",
  },
  openGraph: {
    title: "Software Development Services | Equantra",
    description:
      "End-to-end custom software development, IT consulting, and maintenance services for US businesses.",
    url: "https://equantra.in/services",
    images: [{ url: "/og-image.jpg", width: 2738, height: 1664, alt: "Equantra Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Equantra",
    description:
      "End-to-end custom software development, IT consulting, and maintenance services for US businesses.",
    images: ["/og-image.jpg"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Equantra Software Development Services",
  url: "https://equantra.in/services",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Custom Software Development",
        description:
          "Custom websites and software solutions — SaaS platforms, enterprise systems, and scalable web applications.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Desktop Application Development",
        description:
          "High-performance desktop applications for Windows, macOS, and Linux using Electron, .NET, and Tauri.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "IT Consulting & Fractional CTO",
        description:
          "Strategic technology consulting, architecture reviews, and fractional CTO services for startups and growing businesses.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Software Maintenance & Support",
        description:
          "Ongoing support, bug fixes, performance optimization, security patches, and legacy system modernization.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "AI & Automation Solutions",
        description:
          "AI-powered tools, workflow automation, chatbots, and machine learning integrations to accelerate business processes.",
        provider: { "@type": "Organization", name: "Equantra" },
        areaServed: "US",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />
      <ServicesContent />
      <Footer />
    </div>
  );
}
