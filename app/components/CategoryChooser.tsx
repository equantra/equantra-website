"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, UserCheck, Wrench } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "startup",
    icon: Rocket,
    title: "Early Stage — Idea to MVP",
    description:
      "You have a vision and need a technical team to bring it to life. We handle everything from architecture and design to building your first product, so you can focus on validating your market.",
    services: [
      "MVP development",
      "Product design & prototyping",
      "Technical architecture",
      "Investor-ready demos",
    ],
    cta: "Launch Your MVP",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Established & Looking to Scale",
    description:
      "Your business is growing and your current systems can't keep up. We help you scale with custom software, performance optimization, and modern infrastructure that grows with you.",
    services: [
      "Platform scaling",
      "Performance optimization",
      "Feature development",
      "System integration",
    ],
    cta: "Scale Your Business",
  },
  {
    id: "consultant",
    icon: UserCheck,
    title: "Need a Technology Consultant",
    description:
      "Get a fractional CTO or senior engineering consultant who integrates with your team. Strategic tech leadership without the full-time executive cost.",
    services: [
      "Fractional CTO services",
      "Architecture review",
      "Tech stack selection",
      "Digital transformation",
    ],
    cta: "Get Expert Guidance",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Software Maintenance & Support",
    description:
      "Keep your existing applications running smoothly with our dedicated maintenance team. Bug fixes, updates, monitoring, and legacy modernization at a fraction of in-house costs.",
    services: [
      "24/7 monitoring",
      "Bug fixes & patches",
      "Legacy modernization",
      "SLA-based support",
    ],
    cta: "Get Support",
  },
];

const CategoryChooser: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Choose Your Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How Can We Help You?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 ${
                  active === i
                    ? "bg-violet-600/10 border border-violet-500/30"
                    : "bg-slate-800/50 border border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`h-10 w-10 flex items-center justify-center rounded-lg shrink-0 ${
                    active === i ? "bg-violet-600" : "bg-white/10"
                  }`}
                >
                  <cat.icon
                    className={`h-5 w-5 ${
                      active === i ? "text-white" : "text-gray-300"
                    }`}
                  />
                </div>
                <span
                  className={`font-medium ${
                    active === i ? "text-white" : "text-gray-300"
                  }`}
                >
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/60 border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {categories[active].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {categories[active].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {categories[active].services.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-block w-fit px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
              >
                {categories[active].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CategoryChooser;
