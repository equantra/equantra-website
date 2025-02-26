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
  title: "Equantra - Innovative Business Solutions & Professional Services",
  description: "Equantra delivers transformative business solutions, strategic consulting, and cutting-edge technology services to help organizations innovate, scale, and thrive in today's competitive landscape.",
  keywords: ["business solutions", "professional services", "strategic consulting", "technology services", "innovation", "digital transformation"],
};

// Structured data for the homepage
const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Equantra - Innovative Business Solutions",
  description: "Equantra delivers transformative business solutions, strategic consulting, and cutting-edge technology services to help organizations innovate, scale, and thrive in today's competitive landscape.",
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
    description: "A leading provider of professional services and business solutions"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <PageSeo structuredData={homePageStructuredData} />
      
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

