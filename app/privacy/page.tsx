import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy | Equantra',
    description: 'Privacy Policy for Equantra - Learn how we collect, use, and protect your personal information.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">Last updated: January 12, 2026</p>

                    <div className="prose prose-lg max-w-none space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Equantra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://equantra.in or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Fill out contact forms</li>
                                <li>Request quotes or consultations</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Communicate with us via email, phone, or WhatsApp</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                This information may include your name, email address, phone number, company name, and project details.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-700 leading-relaxed">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the collected information for various purposes, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Responding to your inquiries and providing customer support</li>
                                <li>Processing and fulfilling service requests</li>
                                <li>Sending you marketing communications (with your consent)</li>
                                <li>Improving our website and services</li>
                                <li>Analyzing website usage and trends</li>
                                <li>Complying with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Access to your personal data</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of your personal data</li>
                                <li>Objection to processing of your data</li>
                                <li>Data portability</li>
                                <li>Withdrawal of consent</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                To exercise these rights, please contact us at <a href="mailto:rahul@equantra.in" className="text-blue-600 hover:underline">rahul@equantra.in</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:rahul@equantra.in" className="text-blue-600 hover:underline">rahul@equantra.in</a></p>
                                <p className="text-gray-700"><strong>Phone:</strong> <a href="tel:+917906551854" className="text-blue-600 hover:underline">+91 7906551854</a></p>
                                <p className="text-gray-700"><strong>WhatsApp:</strong> <a href="https://wa.me/917906551854" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+91 7906551854</a></p>
                                <p className="text-gray-700"><strong>Address:</strong> Delhi NCR, India</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
