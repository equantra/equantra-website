import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Scalable Mobile Application Development Company | Equantra - India',
  description: 'We build scalable mobile apps that grow with your business. Trusted mobile application development company for startups and enterprises in India and overseas.',
  keywords: [
    'scalable mobile application development company',
    'mobile app development India',
    'scalable mobile apps',
    'mobile application development company',
    'startup mobile app development',
    'enterprise mobile applications',
    'React Native development',
    'Flutter development',
    'cross-platform mobile apps'
  ],
  openGraph: {
    title: 'Scalable Mobile Application Development Company | Equantra',
    description: 'Build mobile apps that scale with your business. Expert mobile development for startups and enterprises.',
    type: 'website',
    url: 'https://equantra.in/services/scalable-mobile-app-development',
    images: [
      {
        url: '/other/illustration.svg',
        width: 1200,
        height: 630,
        alt: 'Scalable Mobile Application Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://equantra.in/services/scalable-mobile-app-development',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Equantra - Scalable Mobile Application Development Company',
  description: 'Leading mobile application development company specializing in scalable mobile apps for startups and enterprises',
  url: 'https://equantra.in/services/scalable-mobile-app-development',
  logo: 'https://equantra.in/logo-full.svg',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN'
  },
  serviceArea: 'Worldwide',
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Scalable Mobile Application Development',
      description: 'Custom mobile app development that grows with your business'
    }
  }
};

const industries = [
  {
    name: 'Fintech',
    description: 'Secure, compliant mobile banking and payment solutions',
    icon: '💳',
    features: ['Payment Processing', 'Digital Wallets', 'Banking Apps', 'Investment Platforms']
  },
  {
    name: 'E-commerce',
    description: 'Feature-rich shopping apps with seamless user experience',
    icon: '🛒',
    features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking']
  },
  {
    name: 'EdTech',
    description: 'Interactive learning platforms and educational apps',
    icon: '📚',
    features: ['Online Courses', 'Video Streaming', 'Progress Tracking', 'Gamification']
  },
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant health and wellness applications',
    icon: '🏥',
    features: ['Telemedicine', 'Health Records', 'Appointment Booking', 'Fitness Tracking']
  },
  {
    name: 'Food & Delivery',
    description: 'On-demand delivery and restaurant management apps',
    icon: '🍕',
    features: ['Real-time Tracking', 'Payment Integration', 'Restaurant Management', 'Driver App']
  },
  {
    name: 'Social Media',
    description: 'Engaging social platforms with real-time features',
    icon: '📱',
    features: ['Real-time Chat', 'Content Sharing', 'Social Feed', 'Push Notifications']
  }
];

const scalabilityFeatures = [
  {
    title: 'Microservices Architecture',
    description: 'Modular backend services that can be scaled independently based on demand',
    icon: '🏗️',
    benefits: ['Independent scaling', 'Fault isolation', 'Technology flexibility', 'Easy maintenance']
  },
  {
    title: 'Cloud-Native Design',
    description: 'Built for cloud platforms with auto-scaling and load balancing capabilities',
    icon: '☁️',
    benefits: ['Auto-scaling', 'Global distribution', 'High availability', 'Cost optimization']
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized code, caching strategies, and CDN integration for fast performance',
    icon: '⚡',
    benefits: ['Fast loading times', 'Smooth animations', 'Efficient memory usage', 'Battery optimization']
  },
  {
    title: 'Database Scalability',
    description: 'Scalable database solutions with sharding and replication strategies',
    icon: '🗃️',
    benefits: ['Horizontal scaling', 'Data redundancy', 'Query optimization', 'Real-time sync']
  }
];

const clientTestimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'FinPay Solutions',
    role: 'CTO',
    testimonial: 'Equantra delivered a scalable fintech app that handles 100K+ transactions daily. Their expertise in building secure, compliant mobile applications is outstanding.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    company: 'EduLearn Platform',
    role: 'Founder',
    testimonial: 'Our e-learning app built by Equantra scaled from 1,000 to 50,000 users seamlessly. The architecture they designed grows with our business perfectly.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'FoodieExpress',
    role: 'Product Manager',
    testimonial: 'The delivery app they built handles peak hour traffic effortlessly. Real-time tracking and payment integration work flawlessly even during high demand.',
    rating: 5
  }
];

const developmentApproach = [
  {
    phase: 'Discovery & Planning',
    description: 'Understanding your business requirements and scalability needs',
    duration: '1-2 weeks',
    deliverables: ['Requirements Analysis', 'Technical Architecture', 'Scalability Plan']
  },
  {
    phase: 'MVP Development',
    description: 'Building a minimum viable product with core features',
    duration: '6-10 weeks',
    deliverables: ['Core Features', 'Basic UI/UX', 'Backend APIs']
  },
  {
    phase: 'Scale & Optimize',
    description: 'Adding advanced features and optimizing for performance',
    duration: '8-12 weeks',
    deliverables: ['Advanced Features', 'Performance Optimization', 'Security Implementation']
  },
  {
    phase: 'Launch & Support',
    description: 'App store deployment and ongoing maintenance',
    duration: 'Ongoing',
    deliverables: ['App Store Launch', '24/7 Support', 'Regular Updates']
  }
];

export default function ScalableMobileAppDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <nav className="flex items-center space-x-2 text-gray-300 mb-8">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white">Services</Link>
                <span>/</span>
                <span className="text-white">Scalable Mobile App Development</span>
              </nav>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Scalable Solutions
                    </span>
                    <span className="text-gray-300">📱 Mobile First</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Scalable Mobile Application Development Company
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    We build mobile applications that grow with your business. From startup MVPs to enterprise-scale 
                    solutions, our web development team creates apps that handle millions of users seamlessly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="#contact" 
                      className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-center"
                    >
                      Let's Build Your Mobile App
                    </Link>
                    <Link 
                      href="#industries" 
                      className="border border-purple-300 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-800 transition-colors duration-200 text-center"
                    >
                      View Industries
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/other/illustration.svg"
                    alt="Scalable Mobile App Development"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Scalability is Crucial */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Scalability is Crucial in Mobile Apps
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  In today's fast-paced digital world, your mobile app needs to handle growth from day one. 
                  Scalable architecture ensures your app performs well whether you have 100 or 1 million users.
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                {scalabilityFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section id="industries" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Industries We Serve
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We have deep expertise across various industries, delivering mobile solutions that meet 
                  specific business requirements and compliance standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-5xl mb-4 text-center">{industry.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{industry.name}</h3>
                    <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise in Building Scalable Apps */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Our Expertise in Building Scalable Apps
              </h2>
              <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
                With over 50+ successful mobile applications delivered, we have the experience and 
                expertise to build apps that scale seamlessly with your business growth.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-purple-200">Apps Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-purple-200">Users Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-purple-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-purple-200">Support</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Technologies We Master</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'MongoDB', 'AWS', 'Firebase'].map((tech, index) => (
                    <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="font-semibold">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Client Testimonials
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Don't just take our word for it. Here's what our clients say about our scalable mobile app development services.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {clientTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.role}</div>
                      <div className="text-purple-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Development Approach
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We follow a proven methodology that ensures your mobile app is built for scale from the ground up.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {developmentApproach.map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-purple-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.phase}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="text-sm text-purple-600 font-medium mb-4">{phase.duration}</div>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx}>• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Your Scalable Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of successful businesses who chose our mobile app development services. 
                Let's discuss how we can bring your mobile app idea to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#contact" 
                  className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/blog/build-scalable-mobile-application-from-day-one" 
                  className="border border-purple-300 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-800 transition-colors duration-200"
                >
                  Read Our Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Let's Build Your Mobile App
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to create a mobile app that scales with your business? Get in touch for a free consultation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">App Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select app type</option>
                        <option>E-commerce</option>
                        <option>Social Media</option>
                        <option>Fintech</option>
                        <option>Healthcare</option>
                        <option>EdTech</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Users</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select user range</option>
                        <option>1K - 10K</option>
                        <option>10K - 100K</option>
                        <option>100K - 1M</option>
                        <option>1M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">App Description</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Describe your mobile app idea and key features..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-200"
                    >
                      Get Free Consultation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
