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
  lastModified?: string;
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
  {
    slug: "phoenix-vs-django-2026",
    title:
      "Phoenix vs Django in 2026: Concurrency, Real-Time, and Productivity Compared",
    description:
      "Phoenix (Elixir) vs Django (Python) for web development in 2026. Compare the BEAM vs GIL-bound workers, LiveView vs Django Channels, Ecto vs the Django ORM, and when to choose each.",
    excerpt:
      "Django runs Python on worker processes; Phoenix runs Elixir on the BEAM. Here is how they compare on concurrency, real-time, the data layer, fault tolerance, and ecosystem — and when to pick each.",
    date: "2026-06-30",
    author: "Equantra",
    readingTime: "9 min read",
    category: "Engineering",
    keywords: [
      "phoenix vs django",
      "django vs phoenix",
      "elixir vs python",
      "django vs elixir",
      "liveview vs django channels",
      "ecto vs django orm",
      "real-time backend framework",
      "best backend framework 2026",
    ],
  },
  {
    slug: "phoenix-liveview-guide-2026",
    title:
      "Phoenix LiveView: The Complete Guide to Real-Time UIs in 2026",
    description:
      "Phoenix LiveView vs React, a full tutorial with code, plus testing, deployment, and scaling. A practical guide to real-time, server-rendered UIs in Elixir for 2026.",
    excerpt:
      "Phoenix LiveView vs React, explained: build rich, real-time UIs in server-rendered Elixir with no separate JavaScript front-end or API. Full tutorial with code, testing, and deployment.",
    date: "2026-06-30",
    lastModified: "2026-07-08",
    author: "Equantra",
    readingTime: "16 min read",
    category: "Engineering",
    keywords: [
      "phoenix liveview vs react",
      "phoenix liveview tutorial",
      "phoenix liveview example",
      "how does phoenix liveview work",
      "phoenix liveview deployment",
      "phoenix liveview forms",
      "phoenix liveview testing",
      "phoenix liveview",
      "what is liveview",
      "liveview guide 2026",
      "elixir real-time",
      "phoenix framework",
    ],
  },
  {
    slug: "elixir-vs-go-2026",
    title:
      "Elixir vs Go in 2026: Concurrency, Real-Time, and Fault Tolerance Compared",
    description:
      "Elixir vs Go for backend development in 2026: concurrency models, error handling, real-time, performance, ecosystem, and hiring. A practical guide to choosing between them.",
    excerpt:
      "Elixir vs Go, compared head to head: goroutines vs the BEAM, error handling, real-time workloads, performance, and hiring. Here is how to choose the right one for your backend.",
    date: "2026-07-11",
    author: "Equantra",
    readingTime: "14 min read",
    category: "Engineering",
    keywords: [
      "elixir vs go",
      "elixir vs golang",
      "go vs elixir concurrency",
      "beam vs goroutines",
      "elixir real-time",
      "backend concurrency 2026",
      "phoenix framework",
      "fault tolerance",
    ],
  },
  {
    slug: "what-is-the-beam-and-otp",
    title:
      "What Is the BEAM and OTP? Elixir's Concurrency Model Explained",
    description:
      "A clear explanation of the BEAM VM and OTP: lightweight processes, schedulers, GenServer, supervisors, and 'let it crash'. The foundation of Elixir and Phoenix concurrency.",
    excerpt:
      "The BEAM and OTP are why Elixir handles massive concurrency and self-heals from failure. Here is how processes, schedulers, GenServer, and supervision trees actually work.",
    date: "2026-07-11",
    author: "Equantra",
    readingTime: "13 min read",
    category: "Engineering",
    keywords: [
      "what is the beam",
      "otp explained",
      "genserver",
      "what is genserver",
      "beam vm",
      "elixir concurrency",
      "supervisor tree",
      "let it crash",
      "phoenix framework",
    ],
  },
  {
    slug: "is-elixir-worth-learning-2026",
    title:
      "Is Elixir Worth Learning in 2026? Jobs, Demand, and Real-World Use",
    description:
      "Is Elixir worth learning in 2026? An honest look at job demand, salaries, what Elixir is good at, the learning path, and who should invest in it.",
    excerpt:
      "Is Elixir worth learning in 2026? A practical, honest take on demand, jobs, salaries, what it is great at, and how to learn it — plus who should and should not bother.",
    date: "2026-07-11",
    author: "Equantra",
    readingTime: "12 min read",
    category: "Engineering",
    keywords: [
      "is elixir worth learning",
      "learn elixir 2026",
      "elixir jobs",
      "elixir salary",
      "why learn elixir",
      "elixir demand",
      "phoenix framework",
      "elixir real-time",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
