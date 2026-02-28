"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  TabletSmartphone,
  Monitor,
  MonitorCog,
  Brain,
  Wrench,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            End-to-End Software Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From concept to deployment and beyond&mdash;we provide flexible,
            high-quality development services tailored to your business.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
            >
              <Link
                href={`/services#${service.anchor}`}
                className="group block p-8 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-violet-500/30 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-violet-500/15 flex items-center justify-center rounded-xl group-hover:bg-violet-500/25 transition-colors">
                    <service.icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  anchor: string;
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "Web applications, SaaS platforms, ERP/CMS systems, and API development built to your exact specifications with modern tech stacks.",
    icon: Monitor,
    anchor: "software-development",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android apps using React Native, Flutter, and native technologies. Cross-platform solutions that scale.",
    icon: TabletSmartphone,
    anchor: "mobile-development",
  },
  {
    title: "Desktop Application Development",
    description:
      "Cross-platform desktop applications, enterprise solutions, and database-driven tools that enhance productivity and streamline operations.",
    icon: MonitorCog,
    anchor: "desktop-development",
  },
  {
    title: "IT Consulting & Fractional CTO",
    description:
      "Technology strategy, architecture reviews, tech stack selection, and digital transformation roadmaps from experienced engineering consultants.",
    icon: Users,
    anchor: "consulting",
  },
  {
    title: "Software Maintenance & Support",
    description:
      "Legacy application modernization, bug fixes, performance optimization, 24/7 monitoring, and SLA-based support for your existing systems.",
    icon: Wrench,
    anchor: "maintenance",
  },
  {
    title: "AI & Automation Solutions",
    description:
      "AI integration, business process automation, workflow optimization, and intelligent data pipelines to streamline your operations.",
    icon: Brain,
    anchor: "ai-automation",
  },
];

export default ServicesSection;
