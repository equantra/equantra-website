import ServicesSection from "./LandingPage/Services";
import ParticlesComponent from "./LandingPage/ParticlesComponent";
import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection";
import CaseStudies from "./LandingPage/CaseStudies";
import Blog from "./LandingPage/Blog";
import Clients from "./LandingPage/Clients";
import Contact from "./LandingPage/Contact";
import Footer from "./LandingPage/Footer";
import PageSeo from "../components/ui/PageSeo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equantra - Innovative Technology Services Company in India",
  description: "Equantra is an emerging technology company in India offering cutting-edge web development, mobile app development, blockchain development, UI/UX design and game development services with innovative solutions.",
  keywords: [
    "web development company in India",
    "mobile development company in India",
    "game development company in India",
    "blockchain development company in India",
    "UI/UX design company in India",
    "innovative technology services India",
    "cutting-edge solutions",
    "emerging tech company India"
  ],
};

// Structured data for the homepage
const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Equantra - Innovative Technology Services Company in India",
  description: "Equantra is an emerging technology company in India offering cutting-edge web development, mobile app development, blockchain development, UI/UX design and game development services with innovative solutions.",
  url: "https://equantra.in",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-title"]
  },
  mainEntity: {
    "@type": "Organization",
    name: "Equantra",
    url: "https://equantra.in",
    logo: "https://equantra.in/logo.svg",
    description: "An emerging provider of innovative technology services in India",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "India"
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <PageSeo
        title="Equantra - Innovative Technology Services Company in India"
        description="Equantra is an emerging technology company in India offering cutting-edge web development, mobile app development, blockchain development, UI/UX design and game development services with innovative solutions."
        structuredData={homePageStructuredData}
      />

      <div className="z-0">
        <ParticlesComponent />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      <CaseStudies />

      <Blog />

      <Clients />

      <Contact />

      <Footer />
    </div>
  );
}

