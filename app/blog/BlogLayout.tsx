import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "./posts";
import { blogPosts } from "./posts";

const BASE_URL = "https://equantra.in";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);
}

export function generateArticleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Equantra",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Equantra",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <div>
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/20 text-violet-400 text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm border-b border-white/10 pb-8">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {post.author}
            </div>
          </div>
        </div>
      </section>

      <article className="px-6 pb-16">
        <div className="max-w-3xl mx-auto prose prose-lg prose-invert prose-headings:text-white prose-a:text-violet-400 hover:prose-a:text-violet-300 prose-strong:text-white prose-code:text-violet-400 prose-pre:bg-slate-800/60 prose-pre:border prose-pre:border-white/10 prose-table:border-collapse prose-th:bg-slate-800/60 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-white prose-th:border prose-th:border-white/10 prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-gray-300 prose-td:border prose-td:border-white/10">
          {children}
        </div>
      </article>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-violet-600/10 via-slate-800 to-violet-600/10 border border-white/10 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Your SaaS?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Our team specializes in Elixir Phoenix, Ruby on Rails, Django, and
              Next.js. Let us help you ship faster with a dedicated engineering
              team at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-3.5 rounded-full border border-gray-500 text-white font-medium hover:bg-white/5 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="block p-6 rounded-xl bg-slate-800/60 border border-white/10 hover:border-violet-500/30 transition-all"
                >
                  <span className="text-xs text-violet-400 font-medium">
                    {rp.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                    {rp.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {rp.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
