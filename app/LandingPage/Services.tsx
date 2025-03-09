"use client"

import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import JsonLd from "../../components/ui/JsonLd";

// Define TypeScript types for services
interface Service {
  title: string;
  description: string;
  icon: string;
  url?: string;
}

// Define services array with proper types
const services: Service[] = [
  {
    title: "Mobile Development",
    description:
      "As an innovative mobile development company in India, we build fast, responsive mobile apps using cutting-edge technologies like React Native and Flutter. Our services include custom app development, cross-platform solutions, UI/UX design, app maintenance, and performance optimization.",
    icon: "/icons/mobile.svg",
    url: "https://equantra.in/services/mobile-development"
  },
  {
    title: "Web Development",
    description:
      "Equantra is an emerging web development company in India creating powerful, scalable, and user-friendly web applications with innovative approaches. Our services include custom web apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: "/icons/web.svg",
    url: "https://equantra.in/services/web-development"
  },
  {
    title: "Blockchain Development",
    description:
      "We're at the forefront of blockchain technology, helping businesses leverage its potential for enhanced security, transparency, and efficiency. Our services include smart contracts, DApp development, tokenization solutions, and private blockchain networks.",
    icon: "/icons/blockchain.svg",
    url: "https://equantra.in/services/blockchain-development"
  },
  {
    title: "UI/UX Design",
    description:
      "Equantra offers innovative UI/UX design services in India, delivering intuitive, beautiful, and functional designs using the latest design methodologies. Our services include user research, wireframing, prototyping, visual design, and usability testing.",
    icon: "/icons/ui-ux-design.svg",
    url: "https://equantra.in/services/ui-ux-design"
  },
  {
    title: "Desktop Development",
    description:
      "Equantra offers desktop development services in India, creating powerful, scalable, and user-friendly desktop applications with innovative approaches. Our services include custom desktop apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: "/icons/desktop.svg",
    url: "https://equantra.in/services/desktop-development"
  }
];

// Generate structured data for services
const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: service.url || `https://equantra.in/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
      provider: {
        "@type": "Organization",
        name: "Equantra",
        url: "https://equantra.in",
        areaServed: {
          "@type": "Country",
          name: "India"
        }
      }
    }
  }))
};

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-50px", threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-20 bg-black">
      <JsonLd data={servicesStructuredData} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of technology services to help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a href={service.url} className="text-blue-400 hover:text-blue-300">Learn more →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
