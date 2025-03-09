import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../Navbar';
import Footer from '../../LandingPage/Footer';
import Contact from '../../LandingPage/Contact';
import PageSeo from '../../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Custom Desktop Development Services | Equantra",
  description: "Expert custom desktop development services for businesses. Build scalable, secure, and efficient software solutions tailored to your needs.",
  keywords: [
    "custom desktop development",
    "enterprise solutions",
    "software consulting",
    "cloud applications",
    "API development",
    "database design",
    "system integration"
  ],
};

const softwarePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  },
  "description": "Professional custom software development services",
  "serviceType": "Software Development"
};

const features = [
  {
    title: "Enterprise Solutions",
    description: "Scalable software solutions for large organizations",
    icon: "/icons/enterprise-solutions.svg"
  },
  {
    title: "Cloud Applications",
    description: "Cloud-native applications with high availability",
    icon: "/icons/cloud.svg"
  },
  {
    title: "System Integration",
    description: "Seamless integration with existing systems",
    icon: "/icons/system-integration.svg"
  },
  {
    title: "Data Analytics",
    description: "Business intelligence and data analytics solutions",
    icon: "/icons/data-analytics.svg"
  }
];

const technologies = [
  { name: "Electron", icon: "/icons/tech/electron.png" },
  { name: "Kubernetes", icon: "/icons/tech/kubernetes.svg" },
  { name: "Postgresql", icon: "/icons/tech/postgresql.svg" },
  { name: "Tauri", icon: "/icons/tech/tauri.svg" }
];

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={softwarePageStructuredData} />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Custom Software Development</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Transform your business with custom software solutions. We build scalable,
              secure, and efficient applications tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-gray-300">Understanding business requirements</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300">System architecture and database design</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Agile development and testing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-gray-300">Implementation and maintenance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
                  <span className="text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
} 