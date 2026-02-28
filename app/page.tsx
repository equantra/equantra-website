import type { Metadata } from "next";
import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection";
import ServicesSection from "./LandingPage/Services";
import CategoryChooser from "./components/CategoryChooser";
import PricingSection from "./components/PricingSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./LandingPage/CaseStudies";
import TechStack from "./components/TechStack";
import Footer from "./LandingPage/Footer";

export const metadata: Metadata = {
  title:
    "Equantra — Custom Software Development Company | End-to-End Solutions",
  description:
    "Equantra is a custom software development company offering end-to-end solutions: web & mobile development, IT consulting, software maintenance, and AI automation for US businesses.",
  keywords: [
    "custom software development company",
    "dedicated development team",
    "end to end software development",
    "hire software development team",
    "custom software development services",
    "software engineering consultants",
    "mobile app development company",
    "fractional CTO for startups",
  ],
  openGraph: {
    title: "Equantra — Custom Software Development Company",
    description:
      "Expert software teams delivering end-to-end custom development, IT consulting, and maintenance for US businesses. Fractional cost, full commitment.",
    url: "https://equantra.in",
    images: [
      {
        url: "/logo-full.svg",
        width: 1200,
        height: 630,
        alt: "Equantra - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantra — Custom Software Development Company",
    description:
      "Expert software teams delivering end-to-end custom development, IT consulting, and maintenance for US businesses.",
    images: ["/logo-full.svg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CategoryChooser />
      <PricingSection />
      <WhyChooseUs />
      <Portfolio />
      <TechStack />
      <Footer />
    </div>
  );
}
