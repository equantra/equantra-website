import type { Metadata } from "next";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Equantra terms of service — the terms governing use of our website and services.",
  alternates: { canonical: "https://equantra.in/terms" },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Equantra website and services, you agree to be bound
              by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">2. Services</h2>
            <p>
              Equantra provides custom software development, IT consulting, software
              maintenance, and related technology services. Specific terms for individual
              projects are outlined in separate service agreements.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is
              the property of Equantra and is protected by intellectual property laws. Work
              product created for clients is governed by individual project agreements.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">4. Confidentiality</h2>
            <p>
              We treat all client information as confidential. Non-Disclosure Agreements (NDAs)
              are provided for all engagements to protect your proprietary information and
              intellectual property.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">5. Limitation of Liability</h2>
            <p>
              Equantra shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our website or services, except as outlined in
              specific service agreements.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws.
              Any disputes shall be resolved through good-faith negotiation before pursuing
              formal resolution.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-10">7. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
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
