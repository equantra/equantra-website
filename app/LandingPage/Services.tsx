"use client"

import React, { useRef, useState, useEffect } from "react";
import { TabletSmartphone, Computer, Gamepad2, LayoutTemplate } from 'lucide-react'
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
      "We build fast, responsive mobile apps using cutting-edge technologies like React Native and Flutter. Our global team delivers custom app development, cross-platform solutions, UI/UX design, app maintenance, and performance optimization using agile methodology backed by years of industry experience.",
    icon: TabletSmartphone,
    url: "https://equantra.in/services/mobile-development"
  },
  {
    title: "Web Development",
    description:
      "Equantra creates powerful, scalable, and user-friendly web applications with innovative approaches for clients worldwide. Our agile teams excel in custom web apps, e-commerce solutions, progressive web apps, content management systems, and API development with proven expertise across diverse industries.",
    icon: Computer,
    url: "https://equantra.in/services/web-development"
  },
  {
    title: "Blockchain Development",
    description:
      "We're at the forefront of blockchain technology globally, helping businesses leverage its potential for enhanced security, transparency, and efficiency. Our experienced teams use agile practices to deliver smart contracts, DApp development, tokenization solutions, and private blockchain networks.",
    icon: Gamepad2,
    url: "https://equantra.in/services/blockchain-development"
  },
  {
    title: "UI/UX Design",
    description:
      "Equantra delivers intuitive, beautiful, and functional designs using the latest design methodologies for clients around the world. Our agile design process includes user research, wireframing, prototyping, visual design, and usability testing, backed by extensive experience creating exceptional digital experiences.",
    icon: LayoutTemplate,
    url: "https://equantra.in/services/ui-ux-design"
  },
  {
    title: "Desktop Development",
    description:
      "We create powerful, scalable, and user-friendly desktop applications with innovative approaches for global clients. Our experienced teams use agile methodology to deliver custom desktop apps, enterprise solutions, system utilities, and specialized tools tailored to your specific business requirements.",
    icon: Computer,
    url: "https://equantra.in/services/desktop-development"
  },
  {
    title: "SAP Development",
    description:
      "Equantra provides comprehensive SAP development services worldwide, leveraging agile practices and deep technical expertise. We specialize in SAP customization, integration, implementation, module development, and performance optimization to help businesses maximize their SAP investments.",
    icon: Computer,
    url: "https://equantra.in/services/sap-development"
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
