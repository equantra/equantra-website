import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';

export const metadata: Metadata = {
    title: 'About Equantra | India\'s Emerging Web Development Agency',
    description: 'Learn about Equantra, founded by Rahul Rajput. With 8 years of software development experience, our growing team of 4 delivers innovative mobile and web solutions across India and overseas.',
    keywords: [
        'about Equantra',
        'web development agency India',
        'mobile app development team',
        'Rahul Rajput',
        'software development company Delhi NCR'
    ],
    openGraph: {
        title: 'About Equantra | India\'s Emerging Web Development Agency',
        description: 'Meet the team behind Equantra - expert developers delivering innovative technology solutions.',
        type: 'website',
        url: 'https://equantra.in/about',
    },
    alternates: {
        canonical: 'https://equantra.in/about',
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-black text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About Equantra
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            India's emerging web development agency dedicated to building scalable,
                            innovative solutions that transform businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Founded in 2024, Equantra emerged from a vision to deliver world-class software
                                solutions from the heart of India. We recognized the gap between ambitious businesses
                                and the technology expertise needed to bring their ideas to life.
                            </p>
                            <p>
                                Today, we're a growing team of 4 passionate developers committed to building scalable
                                mobile apps, web applications, and desktop solutions that drive real business results.
                                Our focus isn't just on writing code—it's on understanding your challenges and crafting
                                solutions that scale with your growth.
                            </p>
                            <p>
                                Based in Delhi NCR, we serve clients across India and overseas, combining technical
                                excellence with transparent communication and a commitment to delivering on time and
                                within budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Meet Our Founder
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-6xl font-bold">RR</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Rahul Rajput
                                </h3>
                                <p className="text-lg text-blue-600 mb-4">Founder & CEO</p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    With 8 years of experience in software development, Rahul has worked across diverse
                                    technologies and industries—from healthcare to finance, e-commerce to real estate.
                                    His hands-on approach and deep technical expertise ensure every project at Equantra
                                    meets the highest standards of quality and scalability.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Rahul's vision for Equantra is simple: build a team that clients trust, deliver
                                    solutions that exceed expectations, and create long-term partnerships based on
                                    transparency and results.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/company/equantra/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                    <a
                                        href="mailto:rahul@equantra.in"
                                        className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                    >
                                        Email Rahul
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Growing Team
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            We're a lean, efficient team of 4 developers and growing. Every team member brings
                            specialized expertise in modern technologies and a shared commitment to client success.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <div className="text-4xl mb-4">💻</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Developers</h3>
                                <p className="text-gray-700">
                                    Full-stack developers proficient in React, Node.js, Python, React Native, and more.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Focused Approach</h3>
                                <p className="text-gray-700">
                                    Small team means direct communication, faster decisions, and personalized attention.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Agile Methodology</h3>
                                <p className="text-gray-700">
                                    We use modern agile practices to deliver quality software iteratively and efficiently.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <div className="text-4xl mb-4">📈</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Growing With You</h3>
                                <p className="text-gray-700">
                                    As we grow, we're carefully expanding our team to serve more clients without compromising quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            What Drives Us
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                                <p className="text-gray-300">
                                    We never compromise on code quality, testing, or best practices.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                                <p className="text-gray-300">
                                    Clear communication, honest timelines, and no hidden surprises.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold mb-3">Speed & Agility</h3>
                                <p className="text-gray-300">
                                    Fast iterations, quick decisions, and rapid deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Let's discuss your project and how we can help you build something amazing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Get in Touch
                            </Link>
                            <a
                                href="https://wa.me/917906551854"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
