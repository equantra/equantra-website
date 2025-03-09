import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Services | Equantra - Web, Mobile & Blockchain Development",
  description: "Explore Equantra's comprehensive range of services including web development, mobile app development, blockchain solutions, and custom software development.",
  keywords: [
    "web development services",
    "mobile app development",
    "blockchain development",
    "software development company",
    "IT services India",
    "custom software solutions",
    "technology consulting"
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Equantra Services",
  "description": "Comprehensive technology services including web, mobile, blockchain, and software development",
  "provider": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  }
};

const services = [
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications built with React Native and Flutter for iOS and Android platforms.",
    icon: "/icons/mobile.svg",
    link: "/mobile"
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications using Next.js, React, and other cutting-edge technologies.",
    icon: "/icons/web.svg",
    link: "/web-development"
  },
  {
    title: "Blockchain Solutions",
    description: "Smart contracts, DApps, and blockchain integration services for various business needs.",
    icon: "/icons/blockchain.svg",
    link: "/blockchain"
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business requirements and challenges.",
    icon: "/icons/desktop.svg",
    link: "/desktop"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Our Services | Equantra"
        description="Comprehensive technology services including web, mobile, blockchain, and software development"
        structuredData={servicesStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image
              className="w-full"
              src="/other/headingContainer.svg"
              alt="Services Header"
              width={1200}
              height={200}
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Our Services</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              We offer a comprehensive range of technology services to help businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <a href={service.link} className="text-blue-400 hover:text-blue-300">Learn more →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Equantra?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">Skilled developers and designers with years of industry experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Modern Technology</h3>
                <p className="text-gray-300">Latest tools and frameworks to build scalable solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
                <p className="text-gray-300">Dedicated support and clear communication throughout the project</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
} 