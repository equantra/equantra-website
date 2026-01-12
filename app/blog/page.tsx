import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - Web Development & Mobile App Development Insights | Equantra',
  description: 'Read expert insights on web development, mobile app development, scalable applications, and hiring developers in India. Stay updated with the latest tech trends.',
  keywords: [
    'web development blog',
    'mobile app development insights',
    'hire web developers India',
    'scalable web applications',
    'tech blog India',
    'software development tips'
  ],
  openGraph: {
    title: 'Blog - Web Development & Mobile App Development Insights | Equantra',
    description: 'Expert insights on web development, mobile app development, and tech trends from Equantra team.',
    type: 'website',
    url: 'https://equantra.in/blog',
  },
  alternates: {
    canonical: 'https://equantra.in/blog',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'hire-web-developer-fast-website-india',
    title: 'Top 5 Benefits of Hiring Web Developers in India for Fast Websites',
    description: 'Discover why Indian web developers are the perfect choice for building lightning-fast websites. Learn about cost benefits, expertise, and proven strategies.',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    imageUrl: '/other/blogSampleImg.png',
    featured: true
  },
  {
    slug: 'end-to-end-web-app-development-saves-time-cost',
    title: 'Why End-to-End Web App Development Saves Time and Cost for Startups',
    description: 'Learn how comprehensive web app development approach reduces complexity, saves money, and accelerates time-to-market for startups.',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    category: 'Startup Solutions',
    imageUrl: '/other/blogSampleImg.png',
    featured: true
  },
  {
    slug: 'build-scalable-mobile-application-from-day-one',
    title: 'How to Build a Scalable Mobile Application from Day One',
    description: 'Essential strategies and best practices for developing mobile apps that can grow with your business. Architecture, tech stack, and planning tips.',
    publishDate: '2024-01-05',
    readTime: '10 min read',
    category: 'Mobile Development',
    imageUrl: '/other/blogSampleImg.png',
    featured: true
  },
  {
    slug: 'qualities-scalable-web-app-developers-near-you',
    title: 'Top Qualities to Look for in Scalable Web App Developers Near You',
    description: 'A comprehensive guide to identifying and hiring the right web app developers for your scalable application needs.',
    publishDate: '2024-01-01',
    readTime: '7 min read',
    category: 'Hiring Guide',
    imageUrl: '/other/blogSampleImg.png',
    featured: true
  },
  {
    slug: 'future-mobile-app-development-trends',
    title: 'The Future of Mobile App Development: Trends to Watch',
    description: 'Explore emerging trends in mobile development, from cross-platform frameworks to AI integration shaping the next generation of mobile applications.',
    publishDate: '2023-12-28',
    readTime: '9 min read',
    category: 'Technology Trends',
    imageUrl: '/other/blogSampleImg.png'
  },
  {
    slug: 'blockchain-technology-enterprise-solutions',
    title: 'Blockchain Technology in Enterprise: Beyond Cryptocurrencies',
    description: 'Discover how businesses leverage blockchain for supply chain management, secure data sharing, and transforming enterprise operations.',
    publishDate: '2023-12-20',
    readTime: '8 min read',
    category: 'Blockchain',
    imageUrl: '/other/blogSampleImg.png'
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Startup Solutions', 'Hiring Guide', 'Technology Trends', 'Blockchain'];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Insights on Web & Mobile Development
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest trends, best practices, and expert tips from our emerging [[memory:6389543]] development team
            </p>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-black font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-black font-medium group-hover:underline text-sm">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-8">
              Get expert tips on web development, mobile apps, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-3 bg-black hover:bg-white text-white hover:text-black border border-white rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
