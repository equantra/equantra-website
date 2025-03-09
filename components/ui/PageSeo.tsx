import { Metadata } from "next";
import JsonLd from "./JsonLd";

interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; alt: string; width?: number; height?: number }>;
  };
  structuredData?: Record<string, unknown>;
}

export function generateMetadata({
  title,
  description,
  canonical,
  openGraph,
}: PageSeoProps): Metadata {
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: openGraph ? {
      title: openGraph.title || title,
      description: openGraph.description || description,
      images: openGraph.images,
    } : undefined,
  };
}

export default function PageSeo({ structuredData }: PageSeoProps) {
  return structuredData ? <JsonLd data={structuredData} /> : null;
} 