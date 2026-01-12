import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';

export const metadata: Metadata = {
    title: 'Terms of Service | Equantra',
    description: 'Terms of Service for Equantra - Understand the terms and conditions for using our services.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-600 mb-8">Last updated: January 12, 2026</p>

                    <div className="prose prose-lg max-w-none space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing or using the services provided by Equantra ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Equantra provides software development services, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Mobile application development</li>
                                <li>Web application development</li>
                                <li>Desktop application development</li>
                                <li>Custom software solutions</li>
                                <li>Technical consulting</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Engagement and Scope</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All project engagements will be defined through a separate Statement of Work (SOW) or contract that outlines:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Project scope and deliverables</li>
                                <li>Timeline and milestones</li>
                                <li>Payment terms and pricing</li>
                                <li>Acceptance criteria</li>
                                <li>Support and maintenance terms</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Pricing</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Pricing for our services will be agreed upon in writing before the commencement of any project. All fees are quoted in Indian Rupees (INR) or US Dollars (USD) as specified in the contract.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Payment Schedule</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Unless otherwise agreed, payment terms are typically:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Initial deposit: 30-50% upon project commencement</li>
                                <li>Milestone payments: As defined in the contract</li>
                                <li>Final payment: Upon project completion and acceptance</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.3 Late Payments</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Late payments may result in suspension of services and may incur late fees as specified in the contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Client IP</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Upon full payment, all custom code and deliverables specifically created for the client will be transferred to the client, unless otherwise specified in the contract.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.2 Our IP</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We retain ownership of:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Our pre-existing tools, frameworks, and libraries</li>
                                <li>General methodologies and processes</li>
                                <li>Reusable components not specific to the client's project</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.3 Third-Party Components</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Projects may include third-party open-source components, which remain subject to their respective licenses.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the engagement. This includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Business strategies and plans</li>
                                <li>Technical specifications</li>
                                <li>Source code and proprietary systems</li>
                                <li>Customer data and user information</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                A separate Non-Disclosure Agreement (NDA) may be executed for additional protection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Warranties and Disclaimers</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Our Warranties</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We warrant that:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>Services will be performed in a professional and workmanlike manner</li>
                                <li>Deliverables will substantially conform to agreed specifications</li>
                                <li>We have the right to provide the services and transfer the deliverables</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">7.2 Disclaimers</h3>
                            <p className="text-gray-700 leading-relaxed">
                                EXCEPT AS EXPRESSLY PROVIDED, WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC PROJECT GIVING RISE TO THE CLAIM. WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Termination by Client</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The client may terminate the engagement with written notice. The client will be responsible for payment for all work completed up to the termination date.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.2 Termination by Us</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We may terminate the engagement if the client fails to make payments when due or breaches any material term of the agreement.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.3 Effect of Termination</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Upon termination, the client must pay for all work completed. We will deliver all work in progress in its current state.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Support and Maintenance</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Post-launch support and maintenance services are available under separate agreements. Typical support includes bug fixes, updates, and technical assistance as defined in the support contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including natural disasters, war, terrorism, labor disputes, or government actions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                These Terms shall be governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Delhi NCR, India.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Both parties agree to attempt to resolve disputes through good faith negotiations before pursuing legal action.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify these Terms at any time. We will notify clients of any material changes. Continued use of our services after changes constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms, together with any signed contracts or Statements of Work, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For questions about these Terms of Service, please contact us:
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
