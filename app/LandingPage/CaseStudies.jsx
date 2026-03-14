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
              <div className="aspect-video bg-gradient-to-br from-violet-600/20 to-slate-800 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-4xl">{item.emoji}</span>
                )}
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
                {item.detailsEnabled && (
                  <div className="flex items-center gap-2 text-violet-400 text-sm font-medium group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </div>
                )}
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
    emoji: "📱",
    category: "React Native · Mobile Development",
    title: "Real Estate Investment App",
    description:
      "Cross-platform React Native app for a real estate investment firm. Investors can browse properties, track portfolio performance, and receive deal alerts — on iOS and Android from a single shared codebase.",
    image: "/real-state-mobile.webp",
    detailsEnabled: false,
  },
  {
    emoji: "🌐",
    category: "Web Development",
    title: "Real Estate Investment Website",
    description:
      "Marketing and lead generation website for the same firm, featuring property listings, investment opportunity showcases, and an integrated inquiry system to capture and qualify investor leads.",
    image: "/real-state-client.webp",
    detailsEnabled: false,
  },
  {
    emoji: "🏢",
    category: "Web / SaaS",
    title: "Administo.com | Space Management Solution",
    description:
      "Web platform to manage and optimise physical space utilisation. Includes booking flows, occupancy tracking, and reporting dashboards for administrators and end users.",
    image: "/administo.webp",
    detailsEnabled: false,
  },
  {
    emoji: "🖥️",
    category: "Desktop · Mobile",
    title: "Billing & Inventory POS - Shopkeeper",
    description:
      "Full-featured point-of-sale system with real-time inventory tracking, order request management, and product cataloguing. Supports mobile billing workflows and multi-location stock visibility.",
    image: "/lokocity.webp",
    detailsEnabled: false,
  },
  {
    emoji: "🤖",
    category: "AI & Automation",
    title: "Telegram Inventory Bot",
    description:
      "AI-powered Telegram bot that removes the need for a traditional inventory interface. Suppliers photograph an item and send it directly in Telegram — the bot identifies the product and updates inventory records automatically.",
    image: "/telegram-bot.webp",
    detailsEnabled: false,
  },
];

export default Portfolio;
