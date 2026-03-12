"use client";

import React from "react";
import { Mail, MessageSquare, Clock } from "lucide-react";
import GlowEffect from "../LandingPage/GlowEffect";

const ContactContent: React.FC = () => {
  return (
    <>
      <section className="pt-24 pb-16 px-6 relative overflow-visible">
        <GlowEffect className="z-0" size={700} top="35%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your project? Get a free consultation and a custom
            quote tailored to your needs.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a full development team, a fractional CTO, or
                ongoing maintenance support&mdash;we&apos;re here to help. Every
                engagement starts with a free consultation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-white/10"
                >
                  <info.icon className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {info.title}
                    </p>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Request a Free Quote
              </h3>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-300 text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-300 text-sm mb-2">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-company" className="block text-gray-300 text-sm mb-2">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-gray-300 text-sm mb-2">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500/50 transition-colors text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-budget" className="block text-gray-300 text-sm mb-2">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white outline-none focus:border-violet-500/50 transition-colors text-sm appearance-none"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-gray-300 text-sm mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white outline-none focus:border-violet-500/50 transition-colors text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Custom Software Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="desktop">Desktop Application Development</option>
                    <option value="consulting">IT Consulting / Fractional CTO</option>
                    <option value="maintenance">Software Maintenance & Support</option>
                    <option value="ai">AI & Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-300 text-sm mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-violet-500/50 transition-colors text-sm resize-none"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "rahul@equantra.in",
  },
  {
    icon: MessageSquare,
    title: "Free Consultation",
    value: "Every engagement starts with a free discovery call",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "We respond within 24 hours, typically much sooner",
  },
];

export default ContactContent;
