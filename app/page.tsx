import ServicesSection from "./LandingPage/Services";
import ParticlesComponent from "./LandingPage/ParticlesComponent";
import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection";
import CaseStudies from "./LandingPage/CaseStudies";
import Blog from "./LandingPage/Blog";
import Clients from "./LandingPage/Clients";
import Contact from "./LandingPage/Contact";
import Footer from "./LandingPage/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
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

