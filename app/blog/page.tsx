import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Software Development Insights & Guides",
  description:
    "Technical articles, framework comparisons, and software engineering insights from the Equantra team. Learn about Elixir, Rails, Django, React, and building scalable SaaS applications.",
  keywords: [
    "software development blog",
    "elixir phoenix tutorials",
    "SaaS development guides",
    "web framework comparison",
    "software engineering insights",
  ],
  alternates: {
    canonical: "https://equantra.in/blog",
  },
  openGraph: {
    title: "Blog — Software Development Insights | Equantra",
    description:
      "Technical articles and guides from expert software engineers. Frameworks, architecture, SaaS, and more.",
    url: "https://equantra.in/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technical deep-dives, framework comparisons, and practical guides
            from our engineering team.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
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

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors leading-snug">
                    {post.title}
                  </h2>

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

      <Footer />
    </div>
  );
}
