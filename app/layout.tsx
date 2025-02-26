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
  description: "An emerging technology services company in India offering innovative web development, mobile development, game development, UI/UX design, and logo design services with cutting-edge solutions.",
  address: {
    "@type": "Etah Uttar Pradesh",
    addressCountry: "India",
    addressRegion: "India"
  },
  areaServed: {
    "@type": "Country",
    name: "India"
  },
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
  title: "Equantra - Innovative Technology Services Company in India",
  description: "Equantra is an emerging technology company in India offering cutting-edge web development, mobile app development, game development, UI/UX design, and logo design services with innovative solutions.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://equantra.in"),
  keywords: [
    "web development company in India", 
    "mobile development company in India", 
    "game development company in India", 
    "UI/UX design company in India", 
    "logo design company in India",
    "innovative technology services India",
    "cutting-edge solutions",
    "emerging tech company India",
    "professional services",
    "business consulting",
    "technology solutions",
    "strategic growth",
    "innovation",
    "business transformation"
  ],
  authors: [{ name: "Equantra" }],
  creator: "Equantra",
  publisher: "Equantra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://equantra.in",
    title: "Equantra - Innovative Technology Services Company in India",
    description: "Equantra is an emerging technology company in India offering cutting-edge web development, mobile app development, game development, UI/UX design, and logo design services with innovative solutions.",
    siteName: "Equantra",
    images: [
      {
        url: "/logo-full.svg",
        width: 1200,
        height: 630,
        alt: "Equantra - Technology Services Company in India",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equantra - Leading Technology Services Company in India",
    description: "Equantra is a premier technology company in India offering web development, mobile app development, game development, UI/UX design, and logo design services to businesses across India and globally.",
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
