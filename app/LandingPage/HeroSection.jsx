"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Smile, Clock, Headphones } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import LaserFlow from "../components/LaserFlow";
import GlowEffect from "./GlowEffect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <GlowEffect
        position="fixed"
        insetClassName="inset-0"
        className="z-[1]"
        size={650}
        top="18%"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-900 to-slate-800" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[54%] opacity-70">
        <LaserFlow
          className="absolute inset-0 opacity-70"
          style={{ width: "100%", height: "100%" }}
          color="#8b5cf6"
          horizontalBeamOffset={0}
          verticalBeamOffset={0.0}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <p className="text-violet-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-6">
          Expert Software Teams. Fractional Cost.
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Your Dev Team.
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            On Demand.
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Custom software development, IT consulting, and ongoing
          maintenance&mdash;with a dedicated team that scales with your business
          needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors duration-200 text-base"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full border border-gray-500 text-white font-medium hover:bg-white/5 transition-colors duration-200 text-base"
          >
            Our Services
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2}}
        className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center"
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="flex items-center justify-center gap-2">
              <stat.icon className="h-6 w-6 text-violet-300" aria-hidden />
              <div className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-1">
                {stat.intValue ? (
                  <>
                    <AnimatedCounter from={0} to={stat.intValue} />
                    <span>{stat.symbol}</span>
                  </>
                ) : (
                  stat.value
                )}
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const stats = [
  { intValue: 10, value: "10+", symbol: "+", label: "Projects Delivered", icon: Briefcase },
  { intValue: 98, value: "98%", symbol: "%", label: "Client Satisfaction", icon: Smile },
  { intValue: 7, value: "7+", symbol: "+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Support Available", icon: Headphones },
];

export default HeroSection;
