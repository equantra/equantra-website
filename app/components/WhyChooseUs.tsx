"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Handshake,
  DollarSign,
  Code2,
  Zap,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "US-Timezone Availability",
    description:
      "We align with your working hours. Direct communication with senior engineers—no generic support tickets.",
  },
  {
    icon: Handshake,
    title: "We Handle It All",
    description:
      "From architecture to deployment, we proactively manage your project so you can focus on your core business.",
  },
  {
    icon: DollarSign,
    title: "Fractional Cost, Full Quality",
    description:
      "Get senior-level talent at a fraction of US hiring costs. Transparent pricing with no hidden fees.",
  },
  {
    icon: Code2,
    title: "Custom Hand-Coded Development",
    description:
      "No cookie-cutter templates. Every project is custom-built, responsive, and designed to scale with your business.",
  },
  {
    icon: Zap,
    title: "Fast & Optimized Performance",
    description:
      "Clean, modern code optimized for speed. We build for performance from day one, not as an afterthought.",
  },
  {
    icon: ShieldCheck,
    title: "Your IP is Protected",
    description:
      "Every engagement includes NDA and Non-Compete agreements. Your intellectual property stays yours.",
  },
];

const WhyChooseUs: React.FC = () => {
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
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Make Software Development Easy
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don&apos;t stress—we handle everything so you can focus on growing
            your business with confidence.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-900 border border-white/10 hover:border-violet-500/20 transition-colors duration-300"
            >
              <reason.icon className="h-8 w-8 text-violet-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
