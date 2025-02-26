import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/ui/JsonLd";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

// JSON-LD structured data
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Equantra",
  url: "https://equantra.in",
  logo: "https://equantra.in/logo.svg",
  sameAs: [
    "https://twitter.com/equantra",
    "https://linkedin.com/company/equantra",
    "https://facebook.com/equantra"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-123-456-7890",
    contactType: "customer service",
    email: "contact@equantra.com"
  }
};

export const metadata: Metadata = {
  title: "Equantra - Innovative Professional Services & Business Solutions",
  description: "Equantra delivers cutting-edge professional services, strategic consulting, and technology solutions to help businesses scale, innovate, and succeed in today's competitive market.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://equantra.in"),
  keywords: ["professional services", "business consulting", "technology solutions", "strategic growth", "innovation", "business transformation"],
  authors: [{ name: "Equantra" }],
  creator: "Equantra",
  publisher: "Equantra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://equantra.in",
    title: "Equantra - Transforming Businesses Through Innovation",
    description: "Equantra delivers cutting-edge professional services, strategic consulting, and technology solutions to help businesses scale, innovate, and succeed in today's competitive market.",
    siteName: "Equantra",
    images: [
      {
        url: "/logo-full.svg",
        width: 1200,
        height: 630,
        alt: "Equantra Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantra - Transforming Businesses Through Innovation",
    description: "Equantra delivers cutting-edge professional services, strategic consulting, and technology solutions to help businesses scale, innovate, and succeed in today's competitive market.",
    images: ["/logo-full.svg"],
    creator: "@equantra",
    site: "@equantra",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationData} />
      </head>
      <body className={josefinSans.className}>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
