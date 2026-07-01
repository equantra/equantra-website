import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Zap, Users, Radio, RefreshCw, Server, Wrench } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import GlowEffect from "../LandingPage/GlowEffect";
import { blogPosts } from "../blog/posts";

const BASE_URL = "https://equantra.in";

export const metadata: Metadata = {
  title: "Hire Phoenix Framework Developers — Elixir & LiveView Experts",
  description:
    "Hire dedicated Phoenix Framework developers from Equantra. Expert Elixir, Phoenix LiveView & OTP engineers for real-time SaaS, dashboards, and fault-tolerant systems — onboarded in days, at a fraction of US rates.",
  keywords: [
    "phoenix framework developers",
    "hire phoenix framework developers",
    "hire elixir phoenix developers",
    "phoenix framework development",
    "elixir development company",
    "phoenix liveview development",
    "real-time application development",
    "elixir consulting",
  ],
  alternates: {
    canonical: `${BASE_URL}/phoenix`,
  },
  openGraph: {
    title: "Hire Phoenix Framework Developers — Elixir & LiveView Experts | Equantra",
    description:
      "Dedicated Phoenix & LiveView development teams for real-time, high-concurrency, fault-tolerant applications. Onboarded in days.",
    url: `${BASE_URL}/phoenix`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 2738, height: 1664, alt: "Hire Phoenix Framework Developers at Equantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Phoenix Framework Developers — Elixir & LiveView Experts | Equantra",
    description:
      "Dedicated Phoenix & LiveView development teams for real-time, high-concurrency, fault-tolerant applications.",
    images: ["/og-image.jpg"],
  },
};

const PHOENIX_RE = /phoenix|elixir|liveview|beam/i;

function getPhoenixPosts() {
  return blogPosts.filter((post) => {
    const haystack = [post.slug, post.title, post.excerpt, ...post.keywords]
      .join(" ")
      .toLowerCase();
    return PHOENIX_RE.test(haystack);
  });
}

const capabilities = [
  {
    icon: Radio,
    title: "Phoenix LiveView Applications",
    description:
      "Rich, real-time interfaces without a heavy JavaScript framework — live dashboards, collaborative tools, and admin panels rendered server-side over WebSockets.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems & Channels",
    description:
      "Chat, notifications, live tracking, and multiplayer features built on Phoenix Channels and Presence, holding hundreds of thousands of concurrent connections.",
  },
  {
    icon: Server,
    title: "Scalable APIs & Backends",
    description:
      "High-throughput JSON and GraphQL APIs with Ecto-backed data layers that make full use of every CPU core — fewer servers, lower infrastructure cost.",
  },
  {
    icon: RefreshCw,
    title: "Migrations to Elixir",
    description:
      "Incremental migrations from Rails, Node.js, Django, or PHP to Phoenix — carving out slow or unreliable services first, with zero-downtime cutovers.",
  },
  {
    icon: Users,
    title: "OTP & Distributed Systems",
    description:
      "Supervision trees, GenServers, and clustered deployments for systems that must self-heal and stay up — background processing without external queues.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Rescue",
    description:
      "Audits, upgrades, and rescue work for existing Elixir codebases — performance tuning, test coverage, and Phoenix/OTP version upgrades.",
  },
];

const faqs = [
  {
    question: "How much does it cost to hire Phoenix Framework developers?",
    answer:
      "Rates for Phoenix developers typically range from $30 to $100+ per hour depending on seniority and location. Equantra offers dedicated senior Elixir & Phoenix engineers at a fraction of typical US rates, with flexible monthly engagements instead of long lock-in contracts.",
  },
  {
    question: "How quickly can your Phoenix developers start?",
    answer:
      "After a free consultation to scope your project, we can usually match and onboard a dedicated Phoenix developer or team within a few business days — not weeks.",
  },
  {
    question: "Do I need React or another JavaScript framework with Phoenix?",
    answer:
      "Often not. Phoenix LiveView delivers rich, real-time interactivity rendered on the server, which removes the need for a separate frontend framework for most dashboards, SaaS tools, and internal apps. Where a heavy client is justified, our teams also integrate Phoenix APIs with React or Vue frontends.",
  },
  {
    question: "Why choose Phoenix over Node.js or Rails for a new product?",
    answer:
      "Phoenix runs on the BEAM, the same runtime behind telecom systems with years of uninterrupted uptime. It handles massive concurrency on modest hardware, has first-class WebSocket support, and recovers from failures automatically via supervisors. That usually means fewer servers, less glue infrastructure, and fewer 3am incidents than an equivalent Node.js or Rails stack.",
  },
  {
    question: "Can you migrate our existing Rails or Node.js application to Phoenix?",
    answer:
      "Yes. We run incremental migrations: we identify the highest-pain services (slow endpoints, WebSocket layers, background jobs), move those to Phoenix first, and keep the rest of your stack running until each piece is proven in production.",
  },
  {
    question: "Do you provide ongoing maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support engagements covering monitoring, dependency and Phoenix/OTP upgrades, performance tuning, and feature development after the initial build.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Three models: a dedicated development team (full ownership of delivery), staff augmentation (our Phoenix engineers embedded in your team), and fixed-scope projects. All start with a free consultation and can scale up or down monthly.",
  },
  {
    question: "Do your developers overlap with US time zones?",
    answer:
      "Yes. Our engineers maintain significant overlap with US business hours for standups, pairing, and incident response, and all written communication happens in English.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Phoenix Framework Development",
  serviceType: "Elixir & Phoenix Framework Development",
  provider: {
    "@type": "Organization",
    name: "Equantra",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${BASE_URL}/phoenix`,
  description:
    "Hire dedicated Phoenix Framework developers for real-time, high-concurrency, fault-tolerant application development with Elixir, Phoenix LiveView, and OTP.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hire Phoenix Framework Developers",
      item: `${BASE_URL}/phoenix`,
    },
  ],
};

export default function PhoenixHubPage() {
  const phoenixPosts = getPhoenixPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      <section className="pt-24 pb-12 px-6 relative overflow-visible">
        <GlowEffect className="z-0" size={700} top="35%" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Elixir &amp; Phoenix
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hire Phoenix Framework Developers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get dedicated Phoenix Framework developers who build real-time,
            high-concurrency, fault-tolerant applications with Elixir. From
            LiveView dashboards to systems holding hundreds of thousands of live
            connections — onboarded in days, at a fraction of US rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            What Our Phoenix Developers Build
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Senior Elixir engineers covering the full Phoenix stack — LiveView,
            Channels, Ecto, OTP, and clustered deployments.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl bg-slate-800/60 border border-white/10 p-6"
              >
                <cap.icon className="w-7 h-7 text-violet-400 mb-4" />
                <p className="text-white font-semibold mb-2">{cap.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-invert prose-headings:text-white prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white">
          <h2>Why We Build With Phoenix</h2>
          <p>
            Phoenix runs Elixir on the BEAM&mdash;the runtime that powers systems
            requiring years of uptime and millions of concurrent connections. For
            modern products that depend on real-time interactivity and reliability,
            it is an unfair advantage: native WebSockets via Phoenix Channels and
            LiveView, supervisor-based fault tolerance, and efficient use of every
            CPU core. The result is fewer servers, lower cost, and self-healing
            systems.
          </p>
          <p>
            Whether you are launching a new SaaS product, building a live dashboard
            or collaborative tool, or migrating a slow service to Elixir for
            better concurrency, our dedicated team can take you from architecture
            to production.
          </p>

          <h2>How Hiring Works</h2>
          <p>
            <strong>1. Free consultation.</strong> We scope your project, current
            stack, and team gaps in a 30-minute call&mdash;no commitment.
          </p>
          <p>
            <strong>2. Team match.</strong> We propose the engineers and
            engagement model that fit: a dedicated Phoenix team that owns delivery
            end to end, staff augmentation embedded in your existing team, or a
            fixed-scope project.
          </p>
          <p>
            <strong>3. Onboard in days.</strong> Your Phoenix developers start
            within a few business days, with US time-zone overlap for standups,
            pairing, and incident response. Engagements scale up or down monthly.
          </p>
        </div>
      </section>

      {phoenixPosts.length > 0 && (
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Phoenix &amp; Elixir Guides
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {phoenixPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl bg-slate-800/60 border border-white/10 hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/20 text-violet-400 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-500 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-slate-800/60 border border-white/10 open:border-violet-500/30 transition-colors"
              >
                <summary className="cursor-pointer list-none p-6 text-white font-semibold flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-violet-400 transition-transform group-open:rotate-90">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-violet-600/10 via-slate-800 to-violet-600/10 border border-white/10 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Build Your Phoenix Application With Us
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Get a dedicated Elixir &amp; Phoenix engineering team that ships
              fast and scales reliably&mdash;at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services#software-development"
                className="inline-block px-8 py-3.5 rounded-full border border-gray-500 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
