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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
