import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'End-to-End Web App Development in India | Equantra - Complete Solutions',
  description: 'Get complete web app solutions from design to deployment. We offer end-to-end web app development services in India for startups and enterprises with proven 6-step process.',
  keywords: [
    'end-to-end web app development India',
    'complete web app solutions',
    'web app development services India',
    'full stack web development',
    'web application development company',
    'startup web app development',
    'enterprise web applications',
    'custom web app development'
  ],
  openGraph: {
    title: 'End-to-End Web App Development Services in India | Equantra',
    description: 'Complete web app solutions from planning to deployment. Trusted by startups and enterprises for scalable web applications.',
    type: 'website',
    url: 'https://equantra.in/services/end-to-end-web-app-development',
    images: [
      {
        url: '/other/illustration.png',
        width: 1200,
        height: 630,
        alt: 'End-to-End Web App Development Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://equantra.in/services/end-to-end-web-app-development',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'End-to-End Web App Development',
  description: 'Complete web application development services from planning to deployment and support',
  provider: {
    '@type': 'Organization',
    name: 'Equantra',
    url: 'https://equantra.in'
  },
  areaServed: 'India',
  serviceType: 'Web Application Development',
  offers: {
    '@type': 'Offer',
    description: 'Complete web app development lifecycle management'
  }
};

const developmentProcess = [
  {
    step: 1,
    title: 'Planning & Strategy',
    description: 'We analyze your requirements, define project scope, and create a comprehensive development roadmap.',
    icon: '📋',
    deliverables: ['Project Requirements Document', 'Technical Architecture', 'Timeline & Milestones']
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Create user-centric designs and interactive prototypes to visualize your web application.',
    icon: '🎨',
    deliverables: ['UI/UX Design', 'Interactive Prototypes', 'Design System']
  },
  {
    step: 3,
    title: 'Development & Coding',
    description: 'Build robust, scalable web applications using modern technologies and best practices.',
    icon: '⚡',
    deliverables: ['Frontend Development', 'Backend APIs', 'Database Design']
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing to ensure your web app is bug-free and performs optimally.',
    icon: '🔍',
    deliverables: ['Automated Testing', 'Performance Testing', 'Security Audit']
  },
  {
    step: 5,
    title: 'Deployment & Launch',
    description: 'Deploy your web application to production with proper CI/CD pipelines and monitoring.',
    icon: '🚀',
    deliverables: ['Production Deployment', 'CI/CD Setup', 'Monitoring Tools']
  },
  {
    step: 6,
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your web app running smoothly.',
    icon: '🛠️',
    deliverables: ['24/7 Support', 'Regular Updates', 'Performance Optimization']
  }
];

const technologies = [
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', icon: '▲' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Express.js', category: 'Backend', icon: '🚂' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' }
];

const whyChooseUs = [
  {
    title: 'Proven Expertise',
    description: 'Over 50+ successful web applications delivered across various industries',
    icon: '🏆'
  },
  {
    title: 'Agile Methodology',
    description: 'Flexible development approach with regular updates and client feedback',
    icon: '🔄'
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to handle growth from startup to enterprise scale',
    icon: '📈'
  },
  {
    title: 'Cost-Effective',
    description: '60% more affordable than US-based development teams',
    icon: '💰'
  }
];

export default function EndToEndWebAppDevelopment() {
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
                  <span className="text-white">End-to-End Web App Development</span>
                </nav>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Complete Solutions
                    </span>
                    <span className="text-gray-300">🇮🇳 Made in India</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    End-to-End Web App Development Services in India
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    From concept to deployment, we deliver complete web application solutions that scale with your business. 
                    Our emerging [[memory:6389543]] team follows a proven 6-step process to ensure your success.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="#contact" 
                      className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-center"
                    >
                      Request a Quote
                    </Link>
                    <Link 
                      href="#process" 
                      className="bg-white text-black border border-white font-semibold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 text-center"
                    >
                      View Our Process
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/other/illustration.png"
                    alt="End-to-End Web App Development"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is End-to-End Development */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What is End-to-End Web App Development?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  End-to-end web app development covers the complete software development lifecycle, 
                  from initial planning and design to deployment and ongoing maintenance. It's a comprehensive 
                  approach that ensures every aspect of your web application is professionally handled.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete Ownership</h3>
                  <p className="text-gray-600">We take full responsibility for your project from start to finish, ensuring seamless coordination across all phases.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Faster Time-to-Market</h3>
                  <p className="text-gray-600">Streamlined processes and unified team communication accelerate your web app's journey to market.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Cost Efficiency</h3>
                  <p className="text-gray-600">Single vendor management reduces overhead costs and eliminates coordination complexities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Proven 6-Step Process */}
        <section id="process" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Proven 6-Step Development Process
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We follow a systematic approach that has successfully delivered over 50+ web applications 
                  for startups and enterprises worldwide.
                </p>
              </div>

              <div className="space-y-12">
                {developmentProcess.map((process, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                    <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {process.step}
                        </div>
                        <div className="text-4xl mr-4">{process.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {process.description}
                      </p>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Key Deliverables:</h4>
                        <ul className="text-gray-300 space-y-1">
                          {process.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-white mr-2">✓</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-gray-800 p-8 rounded-xl">
                        <div className="text-6xl text-center mb-4">{process.icon}</div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-2">Step {process.step}</div>
                          <div className="text-lg text-gray-300">{process.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Technologies We Use
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We leverage cutting-edge technologies to build fast, scalable, and maintainable web applications 
                  that grow with your business.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">And many more technologies based on your specific requirements</p>
                <Link 
                  href="#contact" 
                  className="inline-block bg-black text-white border border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Discuss Your Tech Stack
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Equantra */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Equantra for Web Apps
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

              <div className="mt-16 bg-black rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Web Application?</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Join 50+ satisfied clients who chose our end-to-end web app development services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="#contact" 
                    className="bg-black text-white border border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    href="/blog/end-to-end-web-app-development-saves-time-cost" 
                    className="bg-white text-black border border-white font-semibold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Read Our Blog
                  </Link>
                </div>
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
                  Let's Build Your Web Application
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to transform your idea into a powerful web application? Get in touch for a free consultation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                        <option>Select budget range</option>
                        <option>$5,000 - $15,000</option>
                        <option>$15,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Tell us about your web application project..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit"
                      className="bg-black text-white border border-white font-semibold py-4 px-12 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      Request Quote
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
