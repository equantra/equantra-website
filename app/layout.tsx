import type { Metadata } from "next";
import { Montserrat, Josefin_Sans, Tilt_Neon } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Equantra - Professional Services Company",
  description: "We provide professional services to help businesses grow and succeed.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={josefinSans.className}>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
