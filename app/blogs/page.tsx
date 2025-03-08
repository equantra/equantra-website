import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Blog | Equantra - Technology Insights and Innovations",
  description: "Explore the latest technology trends, development insights, and innovative solutions from Equantra's expert team. Stay updated with our blog on web, mobile, and game development.",
  keywords: [
    "technology blog India",
    "mobile development blog",
    "web development insights",
    "React Native vs Flutter",
    "development trends",
    "technology insights",
    "app development blog"
  ],
};

// Structured data for the blog page
const blogPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Equantra Technology Blog",
  "description": "Insights and articles about web development, mobile app development, game development, and UI/UX design from Equantra's expert team.",
  "url": "https://equantra.in/blogs",
  "publisher": {
    "@type": "Organization",
    "name": "Equantra",
    "logo": {
      "@type": "ImageObject",
      "url": "https://equantra.in/logo.svg"
    }
  }
};

// Blog post data
const blogPosts = [
  {
    id: 'react-native-vs-flutter',
    title: 'When to Use React Native or Flutter for Mobile App Development',
    description: 'A comprehensive comparison of React Native and Flutter frameworks to help you choose the right technology for your mobile app development project.',
    date: 'February 26, 2024',
    imageUrl: '/other/react-native-vs-flutter.jpg',
    category: 'Mobile Development'
  },
  {
    id: 'future-mobile-app-development',
    title: 'The Future of Mobile App Development',
    description: 'Explore emerging trends in mobile development, from cross-platform frameworks to AI integration. Learn how these innovations are shaping the next generation of mobile applications.',
    date: 'February 20, 2024',
    imageUrl: '/other/blogSampleImg.png',
    category: 'Mobile Development'
  },
  {
    id: 'blockchain-enterprise',
    title: 'Blockchain Technology in Enterprise',
    description: 'Discover how businesses are leveraging blockchain beyond cryptocurrencies. From supply chain management to secure data sharing, blockchain is transforming enterprise operations.',
    date: 'February 15, 2024',
    imageUrl: '/other/blogSampleImg.png',
    category: 'Blockchain'
  },
  {
    id: 'ui-ux-best-practices',
    title: 'UI/UX Design Best Practices',
    description: 'Master the fundamentals of creating intuitive user experiences. We cover essential principles of modern interface design, accessibility considerations, and user-centric development.',
    date: 'February 10, 2024',
    imageUrl: '/other/blogSampleImg.png',
    category: 'UI/UX Design'
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={blogPageStructuredData} />

      {/* Navigation */}
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Equantra Blog</h1>
            </div>
          </div>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Insights and articles about web development, mobile app development, game development, and UI/UX design from our expert team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link href={`/blogs/${post.id}`} key={post.id}>
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-800">
                  <div className="h-48 bg-gray-800 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                    <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
                    <p className="text-gray-300">{post.description.substring(0, 120)}...</p>
                  </div>
                  <div className="px-6 pb-4">
                    <div className="text-blue-400 font-semibold">Read more →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
} 