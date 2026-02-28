import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Equantra privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://equantra.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">1. Information We Collect</h2>
            <p>
              When you use our website or contact us, we may collect personal information
              such as your name, email address, phone number, company name, and project details
              that you voluntarily provide through our contact forms.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide our
              services, send project-related communications, and improve our website experience.
              We do not sell or rent your personal information to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">4. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing
              experience and analyze site traffic. You can control cookie preferences through
              your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">5. Third-Party Services</h2>
            <p>
              We may use third-party analytics and hosting services that collect anonymized
              usage data. These services have their own privacy policies governing data use.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@equantra.in" className="text-violet-400 hover:text-violet-300">
                hello@equantra.in
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
