import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Web Development & Mobile App Development Services | Equantra India',
  description: 'Comprehensive web development and mobile app development services in India. From startups to enterprises, we deliver scalable, fast, and secure digital solutions.',
  keywords: [
    'web development services India',
    'mobile app development services',
    'custom software development',
    'scalable web applications',
    'end-to-end development',
    'React development',
    'Node.js development',
    'mobile app development company'
  ],
  openGraph: {
    title: 'Web Development & Mobile App Development Services | Equantra',
    description: 'Complete digital solutions from an emerging technology company in India.',
    type: 'website',
    url: 'https://equantra.in/services',
  },
  alternates: {
    canonical: 'https://equantra.in/services',
  },
};

const services = [
  {
    title: 'End-to-End Web App Development',
    description: 'Complete web application solutions from planning to deployment. We handle every aspect of your web app development journey.',
    icon: '🌐',
    link: '/services/end-to-end-web-app-development',
    features: ['Full-Stack Development', 'Scalable Architecture', 'Modern Tech Stack', '24/7 Support'],
    targetKeyword: 'end-to-end web app development India'
  },
  {
    title: 'Scalable Mobile App Development',
    description: 'Build mobile applications that grow with your business. Expert development for iOS, Android, and cross-platform apps.',
    icon: '📱',
    link: '/services/scalable-mobile-app-development',
    features: ['Cross-Platform Apps', 'Native Development', 'Cloud Integration', 'Performance Optimization'],
    targetKeyword: 'scalable mobile application development company'
  },
  {
    title: 'Fast Website Development',
    description: 'Lightning-fast websites optimized for performance and SEO. Perfect for businesses looking to establish strong online presence.',
    icon: '⚡',
    link: '/services/fast-website-development',
    features: ['Speed Optimization', 'SEO-Friendly', 'Responsive Design', 'Modern Framework'],
    targetKeyword: 'hire web developer for fast website India'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailored software solutions for your unique business needs. From desktop applications to complex enterprise systems.',
    icon: '💻',
    link: '/services/custom-software-development',
    features: ['Custom Development', 'Enterprise Solutions', 'API Integration', 'Legacy Modernization'],
    targetKeyword: 'custom software development India'
  }
];

const whyChooseUs = [
  {
    title: 'Emerging Technology Experts',
    description: 'Stay ahead with cutting-edge technologies and modern development practices',
    icon: '🚀'
  },
  {
    title: 'Proven Track Record',
    description: '50+ successful projects delivered across various industries',
    icon: '🏆'
  },
  {
    title: 'Cost-Effective Solutions',
    description: '60% more affordable than US-based development teams',
    icon: '💰'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support and maintenance for your applications',
    icon: '🛡️'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                Complete Solutions
              </span>
              <span className="text-gray-300">🇮🇳 Made in India</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Web Development & Mobile App Development Services
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              From startups to enterprises, we deliver scalable, fast, and secure digital solutions. 
              Our web development team specializes in modern web and mobile technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#services" 
                className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Explore Our Services
              </Link>
              <Link 
                href="#contact" 
                className="bg-white text-black border border-white font-semibold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We offer comprehensive development services designed to meet your specific business needs 
                and help you achieve your digital transformation goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  href={service.link}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
                >
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {service.targetKeyword}
                    </span>
                    <span className="text-black font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Equantra for Your Development Needs
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We're not just another development company. We're your technology partners committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies We Master
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We use cutting-edge technologies to build fast, scalable, and maintainable applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'React Native', icon: '📱' },
                { name: 'Flutter', icon: '🦋' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Python', icon: '🐍' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'GraphQL', icon: '📊' }
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="font-semibold text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you build amazing web and mobile applications that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/blog" 
                className="bg-white text-black border border-white font-semibold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
