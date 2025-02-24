import React from "react";
import { TabletSmartphone, Computer, Gamepad2, LayoutTemplate } from 'lucide-react'
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <section className=" bg-white relative space-y-10 pb-20">
      <div className="relative inline-block flex items-center justify-center">
        <Image 
          src="/other/headingContainer.svg" 
          alt="Services heading container"
          width={300}
          height={100}
        />
        <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
          <h2 className="text-white text-3xl">Services</h2>
        </div>
      </div>
      <div className="container mx-auto w-full flex justify-center">
        
        <div className="w-full m-20">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
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
            </div>
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: TabletSmartphone
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Computer
  },
  {
    title: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: Gamepad2
  },
  {
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: LayoutTemplate
  },
];

export default ServicesSection;
