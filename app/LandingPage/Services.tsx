"use client"

import React, {useRef, useState, useEffect} from "react";
import { TabletSmartphone, Computer, Gamepad2, LayoutTemplate } from 'lucide-react'


import { motion } from "framer-motion";

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
    <section id="services" className=" bg-white relative space-y-10 pb-20">
      <div className="relative inline-block flex items-center justify-center w-full">
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
              transition={{ duration: 0.8 }}
              key={index}
              className="p-8 drop-shadow-xl hover:drop-shadow-hover_xl cursor-pointer rounded-xl bg-white"
            >
                <div className="flex space-x-4 items-center">
                  <div className="mb-6 h-12 w-12 bg-black flex justify-center items-center rounded-md">
                    <service.icon className="h-8 w-8 text-white"/>
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
  );
};

// Define TypeScript types for services
interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Define services array with proper types
const services: Service[] = [
  {
    title: "Mobile Development",
    description:
      "We build fast, responsive mobile apps using React Native and Flutter. Our services include custom app development, cross-platform solutions, UI/UX design, app maintenance, and performance optimization.",
    icon: TabletSmartphone
  },
  {
    title: "Web Development",
    description:
      "We create powerful, scalable, and user-friendly web applications that help businesses establish a strong online presence. Our services include custom web apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: Computer
  },
  {
    title: "Blockchain Development",
    description:
      "We're at the forefront of blockchain technology, helping businesses leverage its potential for enhanced security, transparency, and efficiency. Our services include smart contracts, DApp development, tokenization solutions, and private blockchain networks.",
    icon: Gamepad2
  },
  {
    title: "Desktop Development",
    description:
      "Our desktop application development services deliver powerful, responsive, and user-friendly software solutions that enhance productivity and streamline operations, including cross-platform applications, enterprise solutions, and database applications.",
    icon: LayoutTemplate
  },
];

export default ServicesSection;
