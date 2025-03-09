import React from 'react';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Portfolio | Equantra - Our Work & Projects",
  description: "Explore Equantra's portfolio of successful projects across web, mobile, blockchain, and custom software development.",
  keywords: [
    "development portfolio",
    "tech projects",
    "mobile apps portfolio",
    "web development examples",
    "blockchain projects",
    "software solutions",
    "IT portfolio India"
  ],
};

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Equantra Portfolio",
  "description": "Showcase of our best work and successful projects",
  "publisher": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  }
};

const projects = [
  {
    title: "HealthTech Mobile App",
    category: "Mobile Development",
    image: "/portfolio/health-app.jpg",
    description: "A comprehensive healthcare management application with telemedicine features.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/portfolio/ecommerce.jpg",
    description: "Modern e-commerce platform with real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#"
  },
  {
    title: "DeFi Platform",
    category: "Blockchain",
    image: "/portfolio/defi.jpg",
    description: "Decentralized finance platform for crypto asset management.",
    technologies: ["Solidity", "Web3.js", "React"],
    link: "#"
  },
  {
    title: "Inventory Management System",
    category: "Custom Software",
    image: "/portfolio/inventory.jpg",
    description: "Enterprise-level inventory tracking and management solution.",
    technologies: ["Python", "Django", "React"],
    link: "#"
  },
  {
    title: "Food Delivery App",
    category: "Mobile Development",
    image: "/portfolio/food-app.jpg",
    description: "Real-time food ordering and delivery tracking application.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    link: "#"
  },
  {
    title: "NFT Marketplace",
    category: "Blockchain",
    image: "/portfolio/nft.jpg",
    description: "Digital marketplace for NFT creation and trading.",
    technologies: ["Ethereum", "IPFS", "Next.js"],
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={portfolioStructuredData} />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Our Portfolio</h1>
            </div>
          </div>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across various technologies and industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
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