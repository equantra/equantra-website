import React from 'react';
import Image from 'next/image';
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
    results: ["50% increase in online sales", "30% improvement in user engagement", "Seamless inventory management"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "/case-studies/ecommerce-platform"
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Developing a high-performance mobile app for both iOS and Android platforms",
    category: "Mobile Development",
    image: "/case-studies/mobile-app.jpg",
    results: ["1M+ downloads", "4.8 star rating", "99.9% crash-free sessions"],
    technologies: ["React Native", "Firebase", "Redux", "Jest"],
    link: "/case-studies/cross-platform-app"
  },
  {
    title: "Blockchain Supply Chain Solution",
    description: "Implementing blockchain technology for supply chain transparency",
    category: "Blockchain",
    image: "/case-studies/blockchain.jpg",
    results: ["100% traceability", "40% reduction in disputes", "Enhanced supplier trust"],
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
    link: "/case-studies/blockchain-supply-chain"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Case Studies | Equantra"
        description="Explore how Equantra has helped businesses transform their digital presence and achieve their goals through innovative technology solutions."
        structuredData={caseStudiesStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image
              className="w-full"
              src="/other/headingContainer.svg"
              alt="Case Studies Header"
              width={1200}
              height={200}
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Case Studies</h1>
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            Explore how we&apos;ve helped businesses transform their digital presence and achieve their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={study.link} className="text-blue-400 hover:text-blue-300">Read case study →</a>
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