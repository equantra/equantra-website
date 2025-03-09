"use client"

import React, { useRef, useState, useEffect } from "react";
import { TabletSmartphone, Computer, Gamepad2, LayoutTemplate, Palette } from 'lucide-react'
import { motion } from "framer-motion";
import JsonLd from "../../components/ui/JsonLd";

// Define TypeScript types for services
interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  url?: string;
}

// Define services array with proper types
const services: Service[] = [
  {
    title: "Mobile Development",
    description:
      "As an innovative mobile development company in India, we build fast, responsive mobile apps using cutting-edge technologies like React Native and Flutter. Our services include custom app development, cross-platform solutions, UI/UX design, app maintenance, and performance optimization.",
    icon: TabletSmartphone,
    url: "https://equantra.in/services/mobile-development"
  },
  {
    title: "Web Development",
    description:
      "Equantra is an emerging web development company in India creating powerful, scalable, and user-friendly web applications with innovative approaches. Our services include custom web apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: Computer,
    url: "https://equantra.in/services/web-development"
  },
  {
    title: "Blockchain Development",
    description:
      "We're at the forefront of blockchain technology, helping businesses leverage its potential for enhanced security, transparency, and efficiency. Our services include smart contracts, DApp development, tokenization solutions, and private blockchain networks.",
    icon: Gamepad2,
    url: "https://equantra.in/services/blockchain-development"
  },
  {
    title: "UI/UX Design",
    description:
      "Equantra offers innovative UI/UX design services in India, delivering intuitive, beautiful, and functional designs using the latest design methodologies. Our services include user research, wireframing, prototyping, visual design, and usability testing.",
    icon: LayoutTemplate,
    url: "https://equantra.in/services/ui-ux-design"
  },
  {
    title: "Desktop Development",
    description:
      "Equantra offers desktop development services in India, creating powerful, scalable, and user-friendly desktop applications with innovative approaches. Our services include custom desktop apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: Computer,
  },
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
    <section >
      <JsonLd data={servicesStructuredData} />
      <section id="services" className="bg-white relative space-y-10 pb-20">
        <div className="relative flex items-center justify-center w-full">
          <img className="w-full" src="./other/headingContainer.svg" />
          <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
            <h2 className="text-white text-xl  md:text-3xl">Services</h2>
          </div>
        </div>
        <div className="container mx-auto w-full flex justify-center">

          <div ref={ref} className="w-full m-4 md:m-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  key={index}
                  className="p-6 drop-shadow-xl hover:drop-shadow-hover_xl cursor-pointer rounded-xl bg-white"
                >
                  <div className="flex space-x-4 items-center">
                    <div className="mb-6 h-12 w-12 bg-black flex justify-center items-center rounded-md">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-900">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Carousel Dots */}

          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
