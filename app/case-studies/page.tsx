import React from 'react';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Case Studies | Equantra - Success Stories & Project Examples",
  description: "Explore our portfolio of successful projects and learn how we've helped businesses achieve their digital transformation goals.",
  keywords: [
    "case studies",
    "project portfolio",
    "success stories",
    "client projects",
    "development examples",
    "mobile app projects",
    "web development cases"
  ],
};

const caseStudiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Equantra Case Studies",
  "description": "Collection of successful projects and case studies from Equantra",
  "publisher": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  }
};

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    description: "How we helped a traditional retailer go digital with a modern e-commerce solution",
    category: "Web Development",
    image: "/case-studies/ecommerce.jpg",
    results: ["50% increase in online sales", "30% improvement in user engagement", "Seamless inventory management"]
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Developing a high-performance mobile app for both iOS and Android platforms",
    category: "Mobile Development",
    image: "/case-studies/mobile-app.jpg",
    results: ["1M+ downloads", "4.8 star rating", "99.9% crash-free sessions"]
  },
  {
    title: "Blockchain Supply Chain Solution",
    description: "Implementing blockchain technology for supply chain transparency",
    category: "Blockchain",
    image: "/case-studies/blockchain.jpg",
    results: ["100% traceability", "40% reduction in disputes", "Enhanced supplier trust"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={caseStudiesStructuredData} />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Case Studies</h1>
            </div>
          </div>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve their goals through innovative technology solutions.
          </p>

          <div className="grid grid-cols-1 gap-16 mb-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">
                      {study.category}
                    </div>
                    <h2 className="text-2xl font-bold mt-2 mb-4">{study.title}</h2>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                    <div className="border-t border-gray-800 pt-6">
                      <h3 className="font-semibold mb-3">Key Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
} 