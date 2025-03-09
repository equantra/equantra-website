import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '../../Navbar';
import Footer from '../../LandingPage/Footer';
import Contact from '../../LandingPage/Contact';
import PageSeo from '../../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Blockchain Development Services | Equantra",
  description: "Expert blockchain development services including smart contracts, DApps, and Web3 integration. Build secure and scalable blockchain solutions.",
  keywords: [
    "blockchain development",
    "smart contracts",
    "DApp development",
    "Web3 integration",
    "cryptocurrency development",
    "NFT development",
    "blockchain solutions"
  ],
};

const blockchainPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Blockchain Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  },
  "description": "Professional blockchain development services and solutions",
  "serviceType": "Blockchain Development"
};

const features = [
  {
    title: "Smart Contracts",
    description: "Secure and efficient smart contracts for various blockchain platforms",
    icon: "/icons/smart-contract.svg"
  },
  {
    title: "DApp Development",
    description: "Decentralized applications with modern user interfaces",
    icon: "/icons/dapp.svg"
  },
  {
    title: "NFT Solutions",
    description: "Custom NFT marketplaces and token implementations",
    icon: "/icons/nft.svg"
  },
  {
    title: "Web3 Integration",
    description: "Seamless integration of Web3 functionality into existing applications",
    icon: "/icons/web3.svg"
  }
];

const technologies = [
  { name: "Ethereum", icon: "/icons/tech/ethereum.svg" },
  { name: "Solidity", icon: "/icons/tech/solidity.svg" },
  { name: "Web3.js", icon: "/icons/tech/web3.svg" },
  { name: "Hardhat", icon: "/icons/tech/hardhat.svg" },
];

export default function BlockchainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Blockchain Development | Equantra"
        description="Build secure and scalable blockchain solutions with Equantra. We specialize in smart contracts, DApps, and Web3 integration."
        structuredData={blockchainPageStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image
              className="w-full"
              src="/other/headingContainer.svg"
              alt="Blockchain Development Header"
              width={1200}
              height={200}
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Blockchain Development</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Build secure and scalable blockchain solutions for your business. We specialize in
              smart contracts, DApps, and Web3 integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
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
            <h2 className="text-2xl font-bold mb-8 text-center">Our Blockchain Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-gray-300">Understanding requirements and choosing the right blockchain</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Architecture</h3>
                <p className="text-gray-300">Designing secure and efficient smart contracts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Implementation and thorough testing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-gray-300">Secure deployment and monitoring</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-2"
                  />
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