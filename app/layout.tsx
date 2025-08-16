import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://equantra.in'),
  title: "Scalable Website Solutions & Custom Software Development | Equantra",
  description: "Equantra is an emerging web development agency in India, specializing in mobile app development, web applications, and digital solutions. Expert developers delivering innovative technology services across India and overseas.",
  keywords: [
    "best web development agency",
    "best web development agency in India", 
    "best mobile development agency in India and overseas",
    "web development services",
    "mobile app development",
    "custom software development",
    "React Native development",
    "Next.js development",
    "desktop application development"
  ],
  authors: [{ name: "Equantra Team" }],
  creator: "Equantra",
  publisher: "Equantra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://equantra.in',
    siteName: 'Equantra',
    title: 'Emerging Web Development Agency in India | Equantra - Mobile & Web Solutions',
    description: 'Emerging web development agency specializing in mobile app development, web applications, and digital solutions. Expert developers delivering innovative technology services across India and overseas.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Equantra - Emerging Web Development Agency in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerging Web Development Agency in India | Equantra',
    description: 'Expert web & mobile app development services across India and overseas. Custom software solutions with cutting-edge technology.',
    images: ['/twitter-image.svg'],
    creator: '@equantra',
  },
  alternates: {
    canonical: 'https://equantra.in',
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Equantra",
    "alternateName": "Equantra Technology Services",
    "url": "https://equantra.in",
    "logo": "https://equantra.in/logo-full.svg",
    "description": "Emerging web development agency in India specializing in mobile app development, web applications, and custom software development.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/equantra",
      "https://twitter.com/equantra"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development using modern technologies like React, Next.js, and Node.js"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Cross-platform mobile application development using React Native and Flutter"
        }
      },

      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desktop Application Development",
          "description": "Cross-platform desktop applications and enterprise solutions"
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Equantra",
    "image": "https://equantra.in/logo-full.svg",
    "description": "Emerging web development agency in India offering mobile app development, web applications, and digital transformation services.",
    "url": "https://equantra.in",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.7041",
      "longitude": "77.1025"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={josefinSans.className}>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
