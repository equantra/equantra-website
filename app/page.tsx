import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-4 md:px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Equantra Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors">
              Contact us
            </button>
            <button className="p-2 text-white md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="geometric-pattern opacity-20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            EQUANTRA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          </p>
          <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
            Get in touch →
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            SERVICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 0 ? "bg-white" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m14.5 9-5 6m0-6 5 6m-2.5-3h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
