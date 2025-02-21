import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className=" bg-white relative space-y-10">
      <div className="relative inline-block flex items-center justify-center">
        <img src="./other/headingContainer.svg" />
        {/* <h2 className="text-center top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 text-white text-3xl font-bold text-white">
          Services
        </h2> */}
        <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
          <h2 className="text-white text-3xl">Services</h2>
        </div>
      </div>
      <div className="container mx-auto w-full flex justify-center">
        
        <div className="w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="mb-6">
                {React.createElement(service.icon, { className: "h-12 w-12 text-black" })}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

// Define TypeScript types for services
interface Service {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

// Define services array with proper types
const services: Service[] = [
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 18h-1.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H12m0 3v-3m0 3v3m0-3h1.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H12m-7 2h-.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Unity Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m14.5 9-5 6m0-6 5 6m-2.5-3h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 12h4m-2-2v4m7-5 1.5-1.5m-3 1.5h4M12 4v2m0 12v2M4 12H2m20 0h-2M6.34 17.66l-1.41 1.41m12.73 0 1.41-1.41M6.34 6.34 4.93 4.93m12.73 0 1.41 1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default ServicesSection;
