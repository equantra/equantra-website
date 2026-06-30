import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import GlowEffect from "../LandingPage/GlowEffect";
import { blogPosts } from "../blog/posts";

const BASE_URL = "https://equantra.in";

export const metadata: Metadata = {
  title: "Phoenix Framework Development — Elixir Experts",
  description:
    "Equantra builds real-time, high-concurrency applications with Elixir and the Phoenix Framework. Hire a dedicated Phoenix & LiveView development team for SaaS, dashboards, and fault-tolerant systems.",
  keywords: [
    "phoenix framework development",
    "hire elixir phoenix developers",
    "elixir development company",
    "phoenix liveview development",
    "real-time application development",
    "elixir consulting",
  ],
  alternates: {
    canonical: `${BASE_URL}/phoenix`,
  },
  openGraph: {
    title: "Phoenix Framework Development — Elixir Experts | Equantra",
    description:
      "Real-time, high-concurrency, fault-tolerant applications built with Elixir and Phoenix. Dedicated Phoenix & LiveView teams.",
    url: `${BASE_URL}/phoenix`,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 2738, height: 1664, alt: "Equantra Phoenix Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Framework Development — Elixir Experts | Equantra",
    description:
      "Real-time, high-concurrency, fault-tolerant applications built with Elixir and Phoenix.",
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
    "Real-time, high-concurrency, fault-tolerant application development with Elixir and the Phoenix Framework, including Phoenix LiveView.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Phoenix Framework Development",
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
            Phoenix Framework Development
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We build real-time, high-concurrency, fault-tolerant applications
            with Elixir and the Phoenix Framework. From LiveView dashboards to
            systems that hold hundreds of thousands of live connections, Phoenix
            is one of our core specialties.
          </p>
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
