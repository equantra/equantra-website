import React from 'react';
import Image from 'next/image';
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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="About Us | Equantra"
        description="Learn about Equantra - an innovative technology company delivering cutting-edge solutions for businesses worldwide."
        structuredData={aboutPageStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image
              className="w-full"
              src="/other/headingContainer.svg"
              alt="About Us Header"
              width={1200}
              height={200}
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">About Us</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-300 mb-6">
              Equantra is an emerging technology company dedicated to delivering innovative solutions that help businesses thrive in the digital age.
            </p>
            <p className="text-gray-300 mb-6">
              Founded in 2020, we&apos;ve quickly established ourselves as a trusted partner for businesses seeking cutting-edge technology solutions. Our team of experienced developers, designers, and strategists work together to create custom solutions that address our clients&apos; unique challenges.
            </p>
            <p className="text-gray-300">
              We believe in the power of technology to transform businesses and improve lives. That&apos;s why we&apos;re committed to staying at the forefront of technological innovation and delivering solutions that not only meet our clients&apos; current needs but also position them for future success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300">
                We strive to be a trusted partner for our clients, delivering exceptional value through our expertise, creativity, and commitment to excellence.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 mb-4">
                To be a global leader in technology innovation, recognized for our ability to transform businesses through cutting-edge solutions.
              </p>
              <p className="text-gray-300">
                We envision a world where technology enables businesses of all sizes to achieve their full potential and make a positive impact on society.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
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