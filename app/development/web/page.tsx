import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../Navbar';
import Footer from '../../LandingPage/Footer';
import Contact from '../../LandingPage/Contact';
import PageSeo from '../../../components/ui/PageSeo';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Web Development Services | Modern Web, E-commerce & API Solutions | Equantra",
  description: "Expert web development services specializing in high-performance realtime applications, modern web apps with Next.js & React, e-commerce solutions, and scalable API development using Phoenix, Rails, and FastAPI.",
  keywords: [
    "web development",
    "Next.js development",
    "React development",
    "Phoenix framework",
    "Ruby on Rails",
    "realtime applications",
    "e-commerce solutions",
    "API development",
    "high-performance web apps",
    "responsive websites",
    "progressive web apps"
  ],
};

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  },
  "description": "Professional web development services specializing in high-performance realtime applications, modern web apps, e-commerce solutions, and scalable API development.",
  "serviceType": "Web Development",
  "offers": {
    "@type": "Offer",
    "itemOffered": [
      {
        "@type": "Service",
        "name": "High Performance Realtime Applications",
        "description": "Scalable real-time applications using Elixir Phoenix for high concurrency, WebSockets, and live updates."
      },
      {
        "@type": "Service",
        "name": "Modern Web Apps",
        "description": "Fast, responsive, and SEO-friendly applications using Next.js and React."
      },
      {
        "@type": "Service",
        "name": "E-commerce Solutions",
        "description": "Custom online stores built with Ruby on Rails or Phoenix, featuring product catalogs, shopping carts, and secure payment gateways."
      },
      {
        "@type": "Service",
        "name": "API Development",
        "description": "Robust and scalable backend services and APIs using Fast API and Phoenix."
      }
    ]
  }
};

const features = [

  {
    title: "High Performance Realtime Applications",
    description: "Scalable real-time applications using Elixir Phoenix for high concurrency, WebSockets, and live updates - perfect for chat systems, dashboards, and collaborative tools",
    icon: "/icons/realtime.svg"
  },
  {
    title: "Modern Web Apps",
    description: "Fast, responsive, and SEO-friendly applications using Next.js and React. Examples include corporate websites, web portals, content management systems (CMS), and progressive web apps (PWAs) that work offline.",
    icon: "/icons/modern-web.svg"
  },
  {
    title: "Performant E-commerce Solutions",
    description: "Custom online stores built with Ruby on Rails or Phoenix, featuring product catalogs, shopping carts, secure payment gateways, inventory management, and order tracking. Examples include B2C marketplaces, B2B portals, and subscription-based platforms.",
    icon: "/icons/ecommerce.svg"
  },
  {
    title: "Scalable API Development",
    description: "Robust and scalable backend services and APIs using Fast API and Phoenix. Examples include payment processing APIs, data aggregation services, third-party integrations, and microservices architectures with features like rate limiting and caching.",
    icon: "/icons/api.svg"
  }
];

const technologies = [
  { name: "Django / Fast API", icon: "/icons/tech/django.svg" },
  { name: "Ruby on Rails", icon: "/icons/tech/rails.svg" },
  { name: "Phoenix Framework", icon: "/icons/tech/phoenix.svg" },
  { name: "React / Next.js", icon: "/icons/tech/react.svg" },
];

export default function WebPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Web Development Services | Equantra"
        description="Professional web development services specializing in high-performance realtime applications, modern web apps, e-commerce solutions, and scalable API development."
        structuredData={webPageStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image 
              className="w-full" 
              src="/other/headingContainer.svg" 
              alt="Web Development Header" 
              width={1200}
              height={200}
              priority
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Web Development</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Create powerful web applications with modern technologies. We build fast,
              scalable, and user-friendly web solutions for your business.
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
            <h2 className="text-2xl font-bold mb-8 text-center">Our Web Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-gray-300">Requirements gathering and architecture planning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300">UI/UX design and prototyping</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Frontend and backend implementation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <h3 className="text-lg font-semibold mb-2">Launch</h3>
                <p className="text-gray-300">Testing, deployment, and maintenance</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={160}
                    height={128}
                    className="w-40 h-32 mb-2"
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