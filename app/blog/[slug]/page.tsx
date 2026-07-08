import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../Navbar";
import Footer from "../../LandingPage/Footer";
import BlogLayout, { generateArticleJsonLd } from "../BlogLayout";
import { getPostBySlug, getAllSlugs } from "../posts";

const BASE_URL = "https://equantra.in";

const contentMap: Record<string, React.ComponentType> = {};

function registerContent(slug: string, loader: () => Promise<{ default: React.ComponentType }>) {
  const LazyComponent = async () => {
    const mod = await loader();
    const Content = mod.default;
    return <Content />;
  };
  contentMap[slug] = LazyComponent;
}

registerContent(
  "why-elixir-phoenix-is-the-best-framework-for-saas",
  () => import("../content/elixir-phoenix-saas")
);

registerContent(
  "ruby-on-rails-vs-phoenix-framework-2026",
  () => import("../content/ruby-on-rails-vs-phoenix-2026")
);

registerContent(
  "phoenix-vs-nodejs-2026",
  () => import("../content/phoenix-vs-nodejs-2026")
);

registerContent(
  "phoenix-vs-django-2026",
  () => import("../content/phoenix-vs-django-2026")
);

registerContent(
  "phoenix-liveview-guide-2026",
  () => import("../content/phoenix-liveview-guide-2026")
);

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.ogImage ?? "/og-image.jpg";

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      authors: [post.author],
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  const jsonLd = generateArticleJsonLd(post);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BlogLayout post={post}>
        <Content />
      </BlogLayout>
      <Footer />
    </div>
  );
}
