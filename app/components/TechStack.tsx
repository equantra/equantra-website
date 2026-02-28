"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    label: "Backend & Frameworks",
    techs: [
      "Ruby on Rails",
      "Elixir / Phoenix",
      "Django",
      "Python",
      "Next.js",
      "Node.js",
    ],
  },
  {
    label: "Frontend",
    techs: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    label: "Mobile",
    techs: ["React Native", "Flutter"],
  },
  {
    label: "Databases",
    techs: ["PostgreSQL", "Oracle", "Redis", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech We Use
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            We work with modern, battle-tested technologies to build reliable
            and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto mb-6">
          {categories.map((cat) => (
            <div key={cat.label} className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-violet-400 mb-2">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-slate-800/60 border border-white/10 text-gray-200 text-sm hover:border-violet-500/30 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-16">
          <span className="px-5 py-2.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
            And many more...
          </span>
        </div>

        <div className="relative bg-gradient-to-r from-violet-600/10 via-slate-800 to-violet-600/10 border border-white/10 rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We transform ideas into tools that drive business.
          </h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            When technology adapts to your goals, success is inevitable.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
