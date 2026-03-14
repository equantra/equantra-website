import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://equantra.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Equantra — Custom Software Development Company | End-to-End Solutions",
    template: "%s | Equantra",
  },
  description:
    "Equantra is a custom software development company offering end-to-end solutions: web & mobile development, IT consulting, software maintenance, and AI automation for US businesses.",
  keywords: [
    "custom software development services",
    "software engineering consultants",
    "dedicated development team",
    "mobile app development company",
    "IT consulting services",
    "software maintenance services",
    "fractional CTO for startups",
    "end to end software development company",
    "hire dedicated development team",
    "custom web application development services",
  ],
  authors: [{ name: "Equantra" }],
  creator: "Equantra",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Equantra",
    title: "Equantra — Custom Software Development Company",
    description:
      "End-to-end software development, IT consulting, and maintenance services for US businesses. Expert teams, fractional cost.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Equantra - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantra — Custom Software Development Company",
    description:
      "End-to-end software development, IT consulting, and maintenance services. Expert teams, fractional cost.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Equantra",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "Custom software development company offering end-to-end solutions for US businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [],
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Consulting & Fractional CTO",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Maintenance & Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation Solutions",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <GoogleAnalytics />
        <main id="main-content" className="min-h-screen bg-background">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
