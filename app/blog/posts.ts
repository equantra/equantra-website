export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  keywords: string[];
  ogImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-elixir-phoenix-is-the-best-framework-for-saas",
    title:
      "Why Elixir Phoenix Is the Best Framework for Building SaaS Applications",
    description:
      "Discover why Elixir Phoenix outperforms Rails, Node.js, and Django for SaaS development. Learn about the BEAM VM, fault tolerance, LiveView, and real-world performance benchmarks.",
    excerpt:
      "Choosing the right backend framework can make or break your SaaS product. Here is why Elixir Phoenix gives you an unfair advantage in concurrency, uptime, and long-term cost efficiency.",
    date: "2026-03-01",
    author: "Equantra",
    readingTime: "10 min read",
    category: "Engineering",
    keywords: [
      "elixir phoenix SaaS",
      "best framework for SaaS",
      "phoenix vs rails",
      "elixir for SaaS development",
      "phoenix framework advantages",
      "BEAM VM SaaS",
      "elixir phoenix real-time",
      "phoenix LiveView",
      "fault tolerant web framework",
      "scalable SaaS backend",
    ],
  },
  {
    slug: "ruby-on-rails-vs-phoenix-framework-2026",
    title:
      "Ruby on Rails vs. Phoenix Framework in 2026: The Ultimate Guide for Web Developers",
    description:
      "Discover the ultimate comparison between Ruby on Rails and the Phoenix Framework in 2026. Explore performance, scalability, developer experience, and real-world case studies to choose the best backend for your next web application.",
    excerpt:
      "Rails or Phoenix in 2026? A deep comparison of architecture, performance, real-time frontends (Hotwire vs LiveView), ecosystem, and ideal use cases to pick the right backend.",
    date: "2026-06-19",
    author: "Equantra",
    readingTime: "14 min read",
    category: "Engineering",
    keywords: [
      "Ruby on Rails vs Phoenix Framework",
      "web development frameworks 2026",
      "Elixir vs Ruby",
      "Rails 8 features",
      "Phoenix LiveView",
      "backend frameworks comparison",
      "Hotwire vs LiveView",
      "elixir vs ruby",
      "phoenix liveview vs hotwire",
      "rails 8 solid queue",
      "best backend framework 2026",
      "phoenix framework performance",
    ],
  },
  {
    slug: "phoenix-vs-nodejs-2026",
    title:
      "Phoenix vs Node.js in 2026: Concurrency, Real-Time, and Fault Tolerance Compared",
    description:
      "Phoenix (Elixir) vs Node.js for real-time backends in 2026. Compare the BEAM vs the event loop, WebSocket density, fault tolerance, ecosystem, and when to choose each.",
    excerpt:
      "Node.js runs on a single-threaded event loop; Phoenix runs on the BEAM. Here is how they compare on concurrency, WebSocket scale, fault tolerance, and ecosystem — and when to pick each.",
    date: "2026-06-29",
    author: "Equantra",
    readingTime: "9 min read",
    category: "Engineering",
    keywords: [
      "phoenix vs node",
      "phoenix vs nodejs",
      "elixir vs node",
      "elixir vs nodejs",
      "BEAM vs event loop",
      "real-time backend framework",
      "websocket scalability",
      "best backend framework 2026",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
