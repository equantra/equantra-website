"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  TabletSmartphone,
  MonitorCog,
  Users,
  Wrench,
  Brain,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import GlowEffect from "../LandingPage/GlowEffect";

interface ServiceDetail {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "software-development",
    icon: Monitor,
    title: "Custom Software Development",
    description:
      "We craft custom websites and software solutions designed to meet your unique business needs. From SaaS platforms to enterprise resource planning systems, our team delivers scalable, secure, and maintainable software using modern tech stacks.",
    items: [
      "Web Applications",
      "SaaS Platforms",
      "ERP/CMS Solutions",
      "API Development & Integration",
      "Cloud-Native Applications",
      "Database Architecture",
    ],
  },
  {
    id: "mobile-development",
    icon: TabletSmartphone,
    title: "Mobile App Development",
    description:
      "Building intuitive, high-performance mobile apps for iOS and Android platforms. We specialize in cross-platform development that delivers native-quality experiences while reducing development time and cost.",
    items: [
      "iOS Applications",
      "Android Applications",
      "React Native Development",
      "Flutter Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
    ],
  },
  {
    id: "desktop-development",
    icon: MonitorCog,
    title: "Desktop Application Development",
    description:
      "Powerful, responsive desktop software solutions that enhance productivity and streamline operations. We build cross-platform applications that work seamlessly across Windows, macOS, and Linux.",
    items: [
      "Cross-Platform Desktop Apps",
      "Enterprise Software",
      "Database Applications",
      "System Integration Tools",
      "Productivity Software",
      "Legacy Desktop Modernization",
    ],
  },
  {
    id: "consulting",
    icon: Users,
    title: "IT Consulting & Fractional CTO",
    description:
      "Get experienced software engineering consultants who integrate with your team. Whether you need a fractional CTO for your startup or strategic technology guidance for digital transformation, we provide the expertise without the full-time executive cost.",
    items: [
      "Fractional CTO Services",
      "Technology Strategy & Roadmaps",
      "Architecture Review & Design",
      "Tech Stack Selection",
      "Digital Transformation",
      "Team Building & Hiring Strategy",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Software Maintenance & Support",
    description:
      "Keep your existing applications running at peak performance with our dedicated maintenance and support team. From legacy application modernization to ongoing monitoring, we ensure your software stays reliable, secure, and up to date.",
    items: [
      "Legacy Application Modernization",
      "Bug Fixes & Patches",
      "Performance Optimization",
      "24/7 Monitoring & Alerting",
      "SLA-Based Support Plans",
      "Security Updates & Compliance",
    ],
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI & Automation Solutions",
    description:
      "Streamline workflows and enhance efficiency with tailored automation and AI solutions. We help businesses leverage artificial intelligence to automate repetitive tasks, extract insights from data, and build intelligent systems that scale.",
    items: [
      "AI Integration & Enhancement",
      "Business Process Automation",
      "Workflow Optimization",
      "Intelligent Data Pipelines",
      "Machine Learning Solutions",
      "Document Processing & OCR",
    ],
  },
];

const ServiceBlock: React.FC<{
  service: ServiceDetail;
  index: number;
  isInView: boolean;
}> = ({ service, index, isInView }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${
        index > 0 ? "border-t border-white/10" : ""
      }`}
    >
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 bg-violet-500/15 flex items-center justify-center rounded-2xl">
            <service.icon className="h-7 w-7 text-violet-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {service.title}
          </h2>
        </div>
        <p className="text-gray-300 leading-relaxed mb-8">
          {service.description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className={isEven ? "" : "lg:order-1"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/60 border border-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500 shrink-0" />
              <span className="text-gray-200 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesContent: React.FC = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="pt-24 pb-8 px-6 relative overflow-visible">
        <GlowEffect className="z-0" insetClassName="-inset-40" size={760} top="35%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            End-to-end custom software development services tailored for
            businesses across the United States. From idea to deployment and
            ongoing support.
          </p>
        </div>
      </section>

      <section ref={ref} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {serviceDetails.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-violet-600/10 via-slate-800 to-violet-600/10 border border-white/10 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We transform ideas into tools that drive business.
          </h2>
          <p className="text-gray-300 mb-8">
            When technology adapts to your goals, success is inevitable.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
