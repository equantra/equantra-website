import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Boxes, Zap, Network, Server, RefreshCw, Radio } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import GlowEffect from "../LandingPage/GlowEffect";
import { blogPosts } from "../blog/posts";

const BASE_URL = "https://equantra.in";

export const metadata: Metadata = {
  title: "Hire Elixir Developers — OTP, Concurrency & Backend Experts",
  description:
    "Hire dedicated Elixir developers from Equantra. Senior engineers in OTP, concurrency, distributed systems, and Phoenix — for high-throughput backends and fault-tolerant apps. Onboarded in days, at a fraction of US rates.",
  keywords: [
    "hire elixir developers",
    "elixir developers for hire",
    "dedicated elixir developers",
    "elixir development company",
    "elixir consulting",
    "hire elixir programmers",
    "elixir phoenix developers",
    "hire elixir engineers",
  ],
  alternates: {
    canonical: `${BASE_URL}/hire-elixir-developers`,
  },
  openGraph: {
    title: "Hire Elixir Developers — OTP, Concurrency & Backend Experts | Equantra",
    description:
      "Dedicated Elixir developers for high-concurrency, fault-tolerant backends and Phoenix apps. Onboarded in days.",
    url: `${BASE_URL}/hire-elixir-developers`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 2738, height: 1664, alt: "Hire Elixir Developers at Equantra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Elixir Developers — OTP, Concurrency & Backend Experts | Equantra",
    description:
      "Dedicated Elixir developers for high-concurrency, fault-tolerant backends and Phoenix apps.",
    images: ["/og-image.jpg"],
  },
};

const ELIXIR_RE = /phoenix|elixir|liveview|beam/i;

function getElixirPosts() {
  return blogPosts.filter((post) => {
    const haystack = [post.slug, post.title, post.excerpt, ...post.keywords]
      .join(" ")
      .toLowerCase();
    return ELIXIR_RE.test(haystack);
  });
}

const capabilities = [
  {
    icon: Boxes,
    title: "OTP & Supervision Trees",
    description:
      "GenServers, supervisors, and the actor model that make Elixir systems self-healing — background processing and stateful services without bolt-on queues.",
  },
  {
    icon: Zap,
    title: "High-Concurrency Backends",
    description:
      "Millions of lightweight processes on the BEAM, using every CPU core efficiently. Handle massive concurrent load on modest hardware.",
  },
  {
    icon: Network,
    title: "Distributed & Clustered Systems",
    description:
      "Multi-node Elixir clusters with built-in distribution, hot code deploys, and fault tolerance for systems that must stay up for years.",
  },
  {
    icon: Server,
    title: "Scalable APIs",
    description:
      "High-throughput REST and GraphQL APIs with Ecto data layers and Absinthe — clean, tested, and built to scale.",
  },
  {
    icon: RefreshCw,
    title: "Migrations to Elixir",
    description:
      "Incremental migrations from Rails, Node.js, Django, or PHP — moving your slowest, highest-load services to Elixir first, with zero-downtime cutovers.",
  },
  {
    icon: Radio,
    title: "Phoenix Web Development",
    description:
      "Full web products with the Phoenix Framework — LiveView UIs, Channels, and real-time features. Learn more on our Phoenix development page.",
    href: "/phoenix",
  },
];

const faqs = [
  {
    question: "How much does it cost to hire Elixir developers?",
    answer:
      "Elixir developer rates typically range from $30 to $100+ per hour depending on seniority and location. Equantra offers dedicated senior Elixir engineers at a fraction of typical US rates, with flexible monthly engagements instead of long lock-in contracts.",
  },
  {
    question: "How quickly can your Elixir developers start?",
    answer:
      "After a free consultation to scope your project, we can usually match and onboard a dedicated Elixir developer or team within a few business days — not weeks.",
  },
  {
    question: "Why hire Elixir developers instead of Node.js or Go?",
    answer:
      "Elixir runs on the BEAM, a runtime purpose-built for concurrency and fault tolerance. It handles millions of lightweight processes, recovers from failures automatically via supervisors, and scales across cores and nodes without the callback complexity of Node.js or the manual concurrency management of Go. That usually means fewer servers, less glue infrastructure, and fewer 3am incidents.",
  },
  {
    question: "Is Elixir talent hard to find?",
    answer:
      "Good Elixir engineers are scarcer than Node or Python developers, which is exactly why teams struggle to hire them directly. Equantra maintains a bench of vetted senior Elixir developers, so you skip the months-long search and get productive engineers in days.",
  },
  {
    question: "Do you build with the Phoenix Framework?",
    answer:
      "Yes. Phoenix is the standard web framework for Elixir, and it's a core specialty of ours — LiveView interfaces, Phoenix Channels, and REST/GraphQL APIs. Our Elixir developers ship full products with it. See our dedicated Phoenix Framework development page for details.",
  },
  {
    question: "Can you migrate our existing app to Elixir?",
    answer:
      "Yes. We run incremental migrations: we identify the highest-pain services (slow endpoints, real-time layers, background jobs), move those to Elixir first, and keep the rest of your stack running until each piece is proven in production.",
  },
  {
    question: "Do you provide ongoing maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support engagements covering monitoring, dependency and OTP upgrades, performance tuning, and feature development after the initial build.",
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
  name: "Elixir Development",
  serviceType: "Elixir Software Development & Consulting",
  provider: {
    "@type": "Organization",
    name: "Equantra",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "United States" },
  url: `${BASE_URL}/hire-elixir-developers`,
  description:
    "Hire dedicated Elixir developers for high-concurrency, fault-tolerant backends, distributed systems, OTP, and Phoenix Framework applications.",
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
      name: "Hire Elixir Developers",
      item: `${BASE_URL}/hire-elixir-developers`,
    },
  ],
};

export default function HireElixirDevelopersPage() {
  const elixirPosts = getElixirPosts();

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
            Elixir Engineering
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Hire Elixir Developers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get dedicated Elixir developers who build high-concurrency,
            fault-tolerant backends on the BEAM. From OTP and distributed
            systems to Phoenix web apps — senior engineers, onboarded in days,
            at a fraction of US rates.
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
            What Our Elixir Developers Build
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Senior engineers across the Elixir ecosystem — OTP, Ecto, clustered
            deployments, and the Phoenix Framework.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const inner = (
                <>
                  <cap.icon className="w-7 h-7 text-violet-400 mb-4" />
                  <p className="text-white font-semibold mb-2">{cap.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </>
              );
              return cap.href ? (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 hover:border-violet-500/30 transition-colors"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={cap.title}
                  className="rounded-2xl bg-slate-800/60 border border-white/10 p-6"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto prose prose-lg prose-invert prose-headings:text-white prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white">
          <h2>Why Hire Elixir Developers</h2>
          <p>
            Elixir runs on the BEAM&mdash;the runtime built for
            telecommunications systems that need years of uptime and millions of
            concurrent connections. It is a functional, immutable language where
            work runs as millions of cheap, isolated processes. When one crashes,
            supervisors restart it&mdash;the &ldquo;let it crash&rdquo; philosophy
            that produces genuinely self-healing systems.
          </p>
          <p>
            For teams, that translates to fewer servers, lower infrastructure
            cost, and far fewer late-night incidents than an equivalent Node.js,
            Python, or Ruby stack. Whether you are building a high-throughput API,
            a real-time platform, or migrating a service that buckles under load,
            dedicated Elixir developers can take you from architecture to
            production.
          </p>

          <h2>Elixir + Phoenix</h2>
          <p>
            Phoenix is <em>the</em> web framework for Elixir, and it is a core
            specialty of ours. When your Elixir project needs a web layer&mdash;a
            SaaS product, a live dashboard, real-time features, or REST/GraphQL
            APIs&mdash;our developers build it with Phoenix: LiveView for rich
            server-rendered interfaces without a heavy JavaScript framework,
            Phoenix Channels for WebSockets, and Ecto for the data layer. Elixir
            gives you the concurrency and reliability; Phoenix gives you a
            productive, batteries-included way to ship the product on top of it.
          </p>
          <p>
            If your project is primarily web and real-time focused, you can{" "}
            <Link href="/phoenix">hire dedicated Phoenix Framework developers</Link>{" "}
            for a deeper look at how we build with LiveView and Channels.
          </p>

          <h2>How Hiring Works</h2>
          <p>
            <strong>1. Free consultation.</strong> We scope your project, current
            stack, and team gaps in a 30-minute call&mdash;no commitment.
          </p>
          <p>
            <strong>2. Team match.</strong> We propose the engineers and
            engagement model that fit: a dedicated Elixir team that owns delivery
            end to end, staff augmentation embedded in your existing team, or a
            fixed-scope project.
          </p>
          <p>
            <strong>3. Onboard in days.</strong> Your Elixir developers start
            within a few business days, with US time-zone overlap for standups,
            pairing, and incident response. Engagements scale up or down monthly.
          </p>
        </div>
      </section>

      {elixirPosts.length > 0 && (
        <section className="px-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Elixir &amp; Phoenix Guides
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {elixirPosts.map((post) => (
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
              Build With Elixir &amp; Our Team
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Get a dedicated Elixir engineering team that ships fast and scales
              reliably&mdash;at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/phoenix"
                className="inline-block px-8 py-3.5 rounded-full border border-gray-500 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Explore Phoenix Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
