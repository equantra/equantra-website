"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, BadgeCheck } from "lucide-react";
import Link from "next/link";

type PricingTier = "fixed" | "hourly";

interface PriceRow {
  service: string;
  fixed: string;
  hourly: string;
}

const prices: PriceRow[] = [
  {
    service: "Consultation",
    fixed: "Free",
    hourly: "Free",
  },
  {
    service: "Custom Software Development",
    fixed: "$2,000+",
    hourly: "$30+",
  },
  {
    service: "Mobile App Development",
    fixed: "$1,500+",
    hourly: "$30+",
  },
  {
    service: "Desktop Development",
    fixed: "$2,000+",
    hourly: "$35+",
  },
  {
    service: "IT Consulting / Fractional CTO",
    fixed: "$1,000+",
    hourly: "$60+",
  },
  {
    service: "Software Maintenance & Support",
    fixed: "$500+",
    hourly: "$20+",
  },
  {
    service: "AI & Automation",
    fixed: "$1,000+",
    hourly: "$50+",
  },
];

const tierInfo: Record<PricingTier, { subtitle: string; bullets: string[] }> = {
  fixed: {
    subtitle: "Project-based pricing",
    bullets: [
      "Payment upon phase completion",
      "Milestone checkpoints",
      "20% initial deposit",
    ],
  },
hourly: {
    subtitle: "Pay as you go",
    bullets: [
      "No long-term contracts",
      "Flat hourly rate",
      "Flexible engagement",
    ],
  },
};

const PricingSection: React.FC = () => {
  const [tier, setTier] = useState<PricingTier>("fixed");

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent Pricing for Every Budget
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Choose from fixed or hourly tiers. Every engagement
            includes a free consultation.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-800 border border-white/10 rounded-full p-1">
            {(["fixed", "hourly"] as PricingTier[]).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                  tier === t
                    ? "bg-violet-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tier}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/60 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="p-8 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white capitalize mb-1">
              {tier}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {tierInfo[tier].subtitle}
            </p>
            <ul className="flex flex-wrap gap-4">
              {tierInfo[tier].bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="divide-y divide-white/5">
            {prices.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-8 py-4 hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-gray-200 text-sm">{row.service}</span>
                <span
                  className={`font-semibold text-sm ${
                    row[tier] === "Free" ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {row[tier]}
                </span>
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-white/10">
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
            >
              Get Started
            </Link>
            
          </div>
        </motion.div>

        <div className="flex items-center justify-between gap-4 mt-6 px-6 py-4 rounded-xl bg-violet-600/10 border border-violet-500/20">
          <p className="text-gray-300 text-sm">
            <span className="text-white font-medium">Need ongoing support?</span>{" "}
            Custom monthly plans are available for maintenance and long-term engagements — tailored to your team and budget.
          </p>
          <Link
            href="/contact"
            className="shrink-0 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap"
          >
            Contact Us →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-800/50 border border-white/10"
            >
              <badge.icon className="h-8 w-8 text-violet-400 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">
                  {badge.title}
                </p>
                <p className="text-gray-400 text-xs">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const badges = [
  {
    icon: BadgeCheck,
    title: "Lifetime Warranty",
    subtitle: "Free minor updates & fixes",
  },
  {
    icon: Shield,
    title: "Legal Protection",
    subtitle: "IP, NDA & Non-Compete included",
  },
  {
    icon: Clock,
    title: "Timely Deliverables",
    subtitle: "Set deadlines & meet them",
  },
];

export default PricingSection;
