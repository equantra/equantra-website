import Navbar from "./Navbar";
import HeroSection from "./LandingPage/HeroSection";
import ServicesSection from "./LandingPage/Services";
import CategoryChooser from "./components/CategoryChooser";
import PricingSection from "./components/PricingSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./LandingPage/CaseStudies";
import TechStack from "./components/TechStack";
import Footer from "./LandingPage/Footer";

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
