import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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
    icon: "/logo.svg",
    apple: "/logo.svg",
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
        url: "/logo-full.svg",
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
    images: ["/logo-full.svg"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <main className="min-h-screen bg-background">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
