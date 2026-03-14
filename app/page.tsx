import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection";
import ServicesSection from "./LandingPage/Services";
import GlowEffect from "./LandingPage/GlowEffect";

const CategoryChooser = dynamic(() => import("./components/CategoryChooser"));
const PricingSection = dynamic(() => import("./components/PricingSection"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
const Portfolio = dynamic(() => import("./LandingPage/CaseStudies"));
const TechStack = dynamic(() => import("./components/TechStack"));
const Footer = dynamic(() => import("./LandingPage/Footer"));

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
        url: "/og-image.jpg",
        width: 2738,
        height: 1664,
        alt: "Equantra - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantra — Custom Software Development Company",
    description:
      "Expert software teams delivering end-to-end custom development, IT consulting, and maintenance for US businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col min-h-screen">
      <GlowEffect />
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
