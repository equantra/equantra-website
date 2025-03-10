import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../Navbar';
import Footer from '../../LandingPage/Footer';
import Contact from '../../LandingPage/Contact';
import PageSeo from '../../../components/ui/PageSeo';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Mobile App Development Services | Equantra",
  description: "Expert mobile app development services for iOS and Android using React Native and Flutter. Build high-performance, scalable mobile applications.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter development",
    "cross-platform apps",
    "native mobile apps"
  ],
};

const mobilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  },
  "description": "Professional mobile app development services for iOS and Android platforms",
  "serviceType": "Mobile Application Development"
};

const features = [
  {
    title: "Cross-Platform Development",
    description: "Develop your app once and deploy to both iOS and Android. Save time and resources while maintaining a consistent experience across platforms with technologies like React Native and Flutter.",
    icon: "/icons/cross-platform.svg"
  },
  {
    title: "Native Performance",
    description: "Get blazing-fast performance with optimized native components. Experience smooth animations, instant load times, and efficient resource usage that matches platform-specific standards.",
    icon: "/icons/performance.svg"
  },
  {
    title: "Custom UI/UX Design",
    description: "Create engaging user experiences with custom animations, intuitive navigation patterns, and platform-specific design elements. From iOS-style buttons to Material Design components on Android.",
    icon: "/icons/design.svg"
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof your app with modular architecture that scales. Support millions of users, handle complex data relationships, and easily add new features without compromising performance.",
    icon: "/icons/scalable.svg"
  }
];

const technologies = [
  { name: "React Native", icon: "/icons/tech/react-native.svg" },
  { name: "Flutter", icon: "/icons/tech/flutter.svg" },
  { name: "Firebase", icon: "/icons/tech/firebase.svg" },
  { name: "Tauri", icon: "/icons/tech/tauri.svg" }
];

export default function MobilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Mobile App Development | Equantra"
        description="Custom mobile application development for iOS and Android. Build high-performance, user-friendly mobile apps with our expert team."
        structuredData={mobilePageStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image 
              className="w-full" 
              src="/other/headingContainer.svg" 
              alt="Mobile Development Header" 
              width={1200}
              height={200}
              priority
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Mobile App Development</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Transform your ideas into powerful mobile applications. We specialize in creating
              high-performance, scalable apps for both iOS and Android platforms.
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
            <h2 className="text-2xl font-bold mb-8 text-center">Our Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-gray-300">Understanding your requirements and planning the solution</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300">Creating intuitive UI/UX and technical architecture</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Building your app with latest technologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-gray-300">Testing, launching, and maintaining your app</p>
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
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-2"
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