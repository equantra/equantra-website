"use client"

import React, {useRef, useState, useEffect} from "react";
import { TabletSmartphone, Computer, LayoutTemplate } from 'lucide-react'


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
      <img className="w-full" src="./other/headingContainer.svg" alt="Services section heading container - emerging web development agency" loading="lazy" />
        <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
          <h2 className="text-white text-xl  md:text-3xl">Our Services</h2>
        </div>
      </div>
      <div className="container mx-auto w-full flex justify-center">
        
        <div ref={ref} className="w-full m-4 md:m-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              key={index}
              className="p-6 lg:p-8 drop-shadow-xl hover:drop-shadow-hover_xl cursor-pointer rounded-xl bg-white transition-all duration-300 hover:scale-105 h-full flex flex-col"
            >
                <div className="flex flex-col items-start mb-4">
                  <div className="mb-4 h-14 w-14 bg-black flex justify-center items-center rounded-lg">
                    <service.icon className="h-8 w-8 text-white"/>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-black">{service.title}</h3>
                </div>
              <p className="text-gray-700 leading-relaxed flex-grow">{service.description}</p>
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
    title: "Mobile App Development",
    description:
      "As an emerging mobile development agency in India and overseas, we build fast, responsive mobile apps using React Native and Flutter. Our expert mobile app development services include custom app development, cross-platform solutions, UI/UX design, app maintenance, and performance optimization.",
    icon: TabletSmartphone
  },
  {
    title: "Web Development",
    description:
      "As an emerging web development agency in India, we create powerful, scalable, and user-friendly web applications that help businesses establish a strong online presence. Our comprehensive web development services include custom web apps, e-commerce solutions, progressive web apps, content management systems, and API development.",
    icon: Computer
  },
  {
    title: "Desktop Application Development",
    description:
      "Our expert desktop application development services deliver powerful, responsive, and user-friendly software solutions that enhance productivity and streamline operations across India and overseas. We specialize in cross-platform applications, enterprise solutions, and database applications.",
    icon: LayoutTemplate
  },
];

export default ServicesSection;
