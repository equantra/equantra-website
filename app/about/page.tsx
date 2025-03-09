import React from 'react';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "About Us | Equantra - Innovation Through Technology",
  description: "Learn about Equantra's mission, values, and commitment to delivering innovative technology solutions. Discover our journey and what makes us different.",
  keywords: [
    "about Equantra",
    "tech company India",
    "software development company",
    "IT services provider",
    "technology innovation",
    "development team",
    "company values"
  ],
};

const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Equantra",
  "description": "Learn about Equantra and our mission to deliver innovative technology solutions",
  "publisher": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  }
};

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies",
    icon: "/icons/innovation.svg"
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in everything we do",
    icon: "/icons/quality.svg"
  },
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty",
    icon: "/icons/integrity.svg"
  },
  {
    title: "Client Focus",
    description: "We prioritize our clients' success above all else",
    icon: "/icons/client.svg"
  }
];

const stats = [
  { number: "50+", label: "Successful Projects" },
  { number: "30+", label: "Happy Clients" },
  { number: "15+", label: "Team Members" },
  { number: "5+", label: "Years Experience" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={aboutPageStructuredData} />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">About Us</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Equantra was founded with a vision to deliver innovative technology solutions that empower
                businesses to thrive in the digital age. We combine technical expertise with creative
                problem-solving to help our clients achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src={value.icon} alt={value.title} className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-300">Skilled professionals with deep technical expertise</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-gray-300">Consistent delivery of successful projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Innovation Focus</h3>
                <p className="text-gray-300">Always ahead with latest technologies</p>
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