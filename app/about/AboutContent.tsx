"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, UserCircle2 } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discover",
    description:
      "We listen and examine your idea to reveal the core of your product's value proposition. We analyze your business, competitors, and target market.",
  },
  {
    step: 2,
    icon: Palette,
    title: "Design",
    description:
      "We create lean mockups and prototypes that best support the user experience. Every design decision is backed by research and best practices.",
  },
  {
    step: 3,
    icon: Code2,
    title: "Develop",
    description:
      "Our engineering team writes clean, tested, and scalable code with precision. Regular check-ins keep you informed without wasting your time.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Deploy",
    description:
      "We launch the product, monitor performance, and partner with you for future iterations. Post-launch support ensures a smooth transition.",
  },
];

const teamMembers = [
  {
    name: "Rahul",
    role: "Founder & Lead Engineer",
    description:
      "Full-stack engineer with expertise in building scalable software solutions.",
  },
  {
    name: "Engineering Team",
    role: "Software Engineers",
    description:
      "Experienced developers across web, mobile, desktop, and cloud technologies.",
  },
  {
    name: "Design Team",
    role: "UX/UI Designers",
    description:
      "Creating intuitive experiences that turn visitors into customers.",
  },
  {
    name: "QA Team",
    role: "Quality Assurance",
    description:
      "Ensuring every release meets the highest standards of quality and reliability.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Custom Development" },
  { value: "5+", label: "Years of Experience" },
  { value: "98%", label: "Client Retention" },
];

const AboutContent: React.FC = () => {
  const processRef = useRef(null);
  const [processInView, setProcessInView] = useState(false);
  const teamRef = useRef(null);
  const [teamInView, setTeamInView] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => setProcessInView(entry.isIntersecting),
      { rootMargin: "-50px", threshold: 0.1 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => setTeamInView(entry.isIntersecting),
      { rootMargin: "-50px", threshold: 0.1 }
    );
    if (processRef.current) observer1.observe(processRef.current);
    if (teamRef.current) observer2.observe(teamRef.current);
    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We&apos;re a boutique software development agency passionate about
            creating custom digital solutions. By working with a select number
            of clients, we ensure each project gets the time, care, and
            expertise it deserves.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We Make Development Easy and Personal
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We take the extra time to holistically analyze your business,
                understanding your unique challenges and goals, so we can craft
                relevant solutions that help you outcompete competitors in your
                niche.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is simple: to craft beautiful, high-performing
                software that drives real results for businesses. With a personal
                touch and a focus on quality over quantity, we&apos;re here to
                bring your vision to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-800/60 border border-white/10 text-center"
                >
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Process
            </h2>
          </div>

          <div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-gray-900 border border-white/10"
              >
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-violet-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Our People
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Team
            </h2>
          </div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/60 border border-white/10 text-center"
              >
                <UserCircle2 className="h-16 w-16 text-violet-400/50 mx-auto mb-4" />
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-violet-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-violet-600/10 via-slate-800 to-violet-600/10 border border-white/10 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
