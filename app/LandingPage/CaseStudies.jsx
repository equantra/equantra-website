"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
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
    <section id="portfolio" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Some of Our Work
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            A selection of projects we&apos;ve delivered across industries.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 hover:border-violet-500/20 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-violet-600/20 to-slate-800 flex items-center justify-center">
                <span className="text-4xl">{item.emoji}</span>
              </div>
              <div className="p-6">
                <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-white font-semibold text-lg mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-violet-400 text-sm font-medium group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const portfolioItems = [
  {
    emoji: "\u{1F4F1}",
    category: "Mobile Development",
    title: "Cross-Platform Health App",
    description:
      "A React Native health tracking application serving 10k+ users with real-time data sync and HIPAA compliance.",
  },
  {
    emoji: "\u{1F310}",
    category: "Web Development",
    title: "E-Commerce SaaS Platform",
    description:
      "Custom multi-tenant SaaS platform processing $2M+ in transactions with automated inventory management.",
  },
  {
    emoji: "\u{1F916}",
    category: "AI & Automation",
    title: "Intelligent Document Processing",
    description:
      "AI-powered document extraction system reducing manual data entry by 85% for a financial services firm.",
  },
  {
    emoji: "\u{1F5A5}",
    category: "Desktop Application",
    title: "Enterprise Inventory System",
    description:
      "Cross-platform desktop application managing 50k+ SKUs with barcode scanning and real-time reporting.",
  },
  {
    emoji: "\u{1F527}",
    category: "Maintenance & Support",
    title: "Legacy System Modernization",
    description:
      "Migrated a 15-year-old monolith to microservices architecture, reducing downtime by 99% and costs by 60%.",
  },
  {
    emoji: "\u{1F4CB}",
    category: "Consulting",
    title: "Startup Technical Strategy",
    description:
      "Provided fractional CTO services for a Series A startup, defining architecture and hiring the engineering team.",
  },
];

export default Portfolio;
