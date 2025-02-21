import Image from "next/image";
import ServicesSection from "./LandingPage/Services";
import ParticlesComponent from "./LandingPage/ParticlesComponent";
import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection"



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
    </div>
  );
}

