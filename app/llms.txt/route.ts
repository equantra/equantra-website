import { blogPosts } from "../blog/posts";

const BASE_URL = "https://equantra.in";

export const dynamic = "force-static";
export const revalidate = 86400; // 1 day

export function GET() {
  const blogLines = blogPosts
    .map(
      (post) =>
        `- [${post.title}](${BASE_URL}/blog/${post.slug}): ${post.excerpt}`
    )
    .join("\n");

  const body = `# Equantra

> Equantra is a custom software development company offering end-to-end solutions for US businesses: web & mobile development, IT consulting, software maintenance, and AI automation. Core engineering specialties include Elixir Phoenix, Ruby on Rails, Django, and Next.js.

## Services
- [Software Development Services](${BASE_URL}/services): Custom software, mobile apps, IT consulting & fractional CTO, software maintenance, and AI automation.
- [Phoenix Framework Development](${BASE_URL}/phoenix): Real-time, high-concurrency, fault-tolerant application development with Elixir, Phoenix, and LiveView.

## Pages
- [About Equantra](${BASE_URL}/about): Who we are, our team model, and how we work.
- [Contact](${BASE_URL}/contact): Get a free consultation about your project.

## Blog
${blogLines}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
