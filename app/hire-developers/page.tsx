import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hire Scalable Web Application Developers Near You | Equantra India',
  description: 'Looking for scalable web application developers near you? Equantra offers expert devs to build high-performance, future-ready web apps. Flexible hiring models available.',
  keywords: [
    'scalable web application developers near me',
    'hire web app developers India',
    'scalable web developers',
    'web application development team',
    'hire dedicated developers',
    'remote web developers India',
    'web app developers near me',
    'scalable web development services'
  ],
  openGraph: {
    title: 'Hire Scalable Web Application Developers Near You | Equantra',
    description: 'Expert web application developers in India. Flexible hiring models for scalable, high-performance web apps.',
    type: 'website',
    url: 'https://equantra.in/hire-developers',
    images: [
      {
        url: '/other/illustration.png',
        width: 1200,
        height: 630,
        alt: 'Hire Scalable Web Application Developers',
      },
    ],
  },
  alternates: {
    canonical: 'https://equantra.in/hire-developers',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hire Scalable Web Application Developers',
  description: 'Professional web application developers available for hire with flexible engagement models',
  provider: {
    '@type': 'Organization',
    name: 'Equantra',
    url: 'https://equantra.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India'
    }
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India'
    },
    {
      '@type': 'Country',
      name: 'United States'
    },
    {
      '@type': 'Country',
      name: 'United Kingdom'
    }
  ],
  serviceType: 'Web Application Development',
  availableLanguage: ['English', 'Hindi']
};

const indianCities = [
  {
    name: 'Delhi NCR',
    description: 'Serving businesses in Delhi, Noida, Gurgaon, and Faridabad',
    icon: '🏛️',
    timezone: 'IST (GMT+5:30)'
  },
  {
    name: 'Bangalore',
    description: 'India\'s Silicon Valley with top-tier tech talent',
    icon: '💻',
    timezone: 'IST (GMT+5:30)'
  },
  {
    name: 'Mumbai',
    description: 'Financial capital with enterprise-grade solutions',
    icon: '🏢',
    timezone: 'IST (GMT+5:30)'
  },
  {
    name: 'Hyderabad',
    description: 'HITEC City - Major IT hub with skilled developers',
    icon: '🌆',
    timezone: 'IST (GMT+5:30)'
  },
  {
    name: 'Chennai',
    description: 'Detroit of India with strong engineering talent',
    icon: '⚙️',
    timezone: 'IST (GMT+5:30)'
  },
  {
    name: 'Pune',
    description: 'IT hub with excellent educational institutions',
    icon: '🎓',
    timezone: 'IST (GMT+5:30)'
  }
];

const hiringModels = [
  {
    title: 'Dedicated Development Team',
    description: 'Get a full-time team of developers exclusively working on your project',
    icon: '👥',
    features: [
      'Full-time dedicated resources',
      'Direct communication with team',
      'Scalable team size',
      'Long-term commitment',
      'Cost-effective for large projects'
    ],
    idealFor: 'Large projects, ongoing development, product companies'
  },
  {
    title: 'Project-Based Development',
    description: 'Complete project delivery with defined scope, timeline, and budget',
    icon: '📋',
    features: [
      'Fixed scope and timeline',
      'Predictable costs',
      'End-to-end delivery',
      'Quality assurance included',
      'Post-launch support'
    ],
    idealFor: 'Specific features, MVP development, one-time projects'
  },
  {
    title: 'Remote Collaboration',
    description: 'Flexible remote developers who integrate with your existing team',
    icon: '🌍',
    features: [
      'Flexible working hours',
      'Seamless integration',
      'Your project management tools',
      'Direct communication',
      'Scalable engagement'
    ],
    idealFor: 'Augmenting existing teams, specific expertise, short-term needs'
  }
];

const whyLocalDevelopers = [
  {
    title: 'Time Zone Advantage',
    description: 'Work continues while you sleep with our 12-hour time difference advantage',
    icon: '🕐',
    benefit: '24/7 Development Cycle'
  },
  {
    title: 'Cost Effectiveness',
    description: '60-70% cost savings compared to US/European developers without compromising quality',
    icon: '💰',
    benefit: 'Save $50K+ Annually'
  },
  {
    title: 'English Proficiency',
    description: '95% of our developers are fluent in English with excellent communication skills',
    icon: '🗣️',
    benefit: 'Seamless Communication'
  },
  {
    title: 'Technical Expertise',
    description: 'Deep expertise in modern web technologies and scalable architecture patterns',
    icon: '🚀',
    benefit: 'Latest Technologies'
  }
];

const developerSkills = [
  {
    category: 'Frontend Technologies',
    skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    icon: '🎨'
  },
  {
    category: 'Backend Technologies',
    skills: ['Node.js', 'Python', 'Java', 'PHP', 'Go', '.NET'],
    icon: '⚙️'
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Elasticsearch'],
    icon: '🗄️'
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    icon: '☁️'
  },
  {
    category: 'Architecture Patterns',
    skills: ['Microservices', 'Serverless', 'Event-Driven', 'Clean Architecture', 'DDD', 'CQRS'],
    icon: '🏗️'
  },
  {
    category: 'Development Practices',
    skills: ['Agile/Scrum', 'TDD', 'Code Reviews', 'Git Workflows', 'Documentation', 'Testing'],
    icon: '📋'
  }
];

const clientSuccess = [
  {
    client: 'TechCorp USA',
    project: 'E-commerce Platform',
    result: '300% increase in performance, handled 1M+ users during Black Friday',
    duration: '8 months',
    team: '6 developers',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    client: 'FinanceApp UK',
    project: 'Banking Application',
    result: 'Reduced transaction time by 75%, achieved 99.9% uptime',
    duration: '12 months',
    team: '8 developers',
    technologies: ['Angular', 'Java', 'PostgreSQL', 'Azure']
  },
  {
    client: 'HealthTech Germany',
    project: 'Telemedicine Platform',
    result: 'Scaled from 1K to 100K users, HIPAA compliant',
    duration: '10 months',
    team: '5 developers',
    technologies: ['Vue.js', 'Python', 'MySQL', 'Docker']
  }
];

export default function HireDevelopersPage() {
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
                <span className="text-white">Hire Developers</span>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Available Now
                    </span>
                    <span className="text-gray-300">🇮🇳 Based in India</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Hire Scalable Web Application Developers Near You
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Looking for expert developers to build high-performance, future-ready web applications?
                    Our web development team of scalable web app developers is ready to transform your ideas into reality.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="#contact"
                      className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-center"
                    >
                      Schedule a Call
                    </Link>
                    <Link
                      href="#hiring-models"
                      className="bg-white text-black border border-white font-semibold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200 text-center"
                    >
                      View Hiring Options
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/other/illustration.png"
                    alt="Hire Scalable Web Application Developers"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why You Need Local Web App Developers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why You Need Local Web App Developers
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Working with developers who understand your market, timezone, and business needs
                  makes all the difference in project success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyLocalDevelopers.map((reason, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{reason.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600 mb-4">{reason.description}</p>
                    <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {reason.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Scalable Web App Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Scalable Web App Solutions
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We specialize in building web applications that grow with your business,
                  from startup MVPs to enterprise-scale solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developerSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4 text-center">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Hiring Models */}
        <section id="hiring-models" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Flexible Hiring Models
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Choose the engagement model that best fits your project requirements,
                  timeline, and budget constraints.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {hiringModels.map((model, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-5xl mb-6 text-center">{model.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{model.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{model.description}</p>

                    <div className="space-y-3 mb-6">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-green-500 mr-3">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-indigo-600 mb-2">Contact Us for Pricing</div>
                        <div className="text-sm text-gray-500">Ideal for: {model.idealFor}</div>
                      </div>
                      <Link
                        href="#contact"
                        className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                      >
                        Get Custom Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Coverage - Indian Metro Cities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Contact Developers Near You
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Our development teams are strategically located across major Indian tech hubs,
                  ensuring proximity to talent and infrastructure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {indianCities.map((city, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-3xl mb-4 text-center">{city.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{city.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 text-center">{city.description}</p>
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs text-center">
                      {city.timezone}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Integration */}
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Centers</h3>
                <p className="text-gray-600 mb-6">
                  With development centers across India, we're always close to you.
                  Our main offices are located in the heart of major tech hubs.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <div className="text-gray-500 text-sm mb-2">🗺️ Interactive Map Coming Soon</div>
                  <div className="text-gray-400 text-xs">
                    Primary Locations: Delhi NCR • Bangalore • Mumbai • Hyderabad • Chennai • Pune
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Client Success Stories
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  See how our scalable web application developers have helped businesses
                  achieve remarkable results.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {clientSuccess.map((success, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{success.client}</h3>
                      <div className="text-indigo-600 font-medium">{success.project}</div>
                    </div>

                    <div className="mb-6">
                      <div className="text-gray-700 font-medium mb-2">Results Achieved:</div>
                      <p className="text-gray-600">{success.result}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <div className="text-gray-500">Duration</div>
                        <div className="font-medium">{success.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Team Size</div>
                        <div className="font-medium">{success.team}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-500 text-sm mb-2">Technologies Used:</div>
                      <div className="flex flex-wrap gap-2">
                        {success.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
                Ready to Hire Your Scalable Web App Development Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 100+ satisfied clients who chose our scalable web application developers.
                Let's discuss your project requirements and find the perfect team for you.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-gray-300">Web Apps Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="bg-black text-white border border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/blog/qualities-scalable-web-app-developers-near-you"
                  className="bg-white text-black border border-white font-semibold py-4 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
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
                  Let's Discuss Your Project
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to hire scalable web application developers? Fill out the form below
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Hiring Model</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option>Select hiring model</option>
                        <option>Dedicated Team</option>
                        <option>Project-Based</option>
                        <option>Remote Collaboration</option>
                        <option>Not Sure - Need Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option>Select timeline</option>
                        <option>ASAP (Rush Project)</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                        <option>Ongoing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Team Size Needed</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option>Select team size</option>
                        <option>1-2 developers</option>
                        <option>3-5 developers</option>
                        <option>6-10 developers</option>
                        <option>10+ developers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Describe your web application project, required technologies, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-black text-white border border-white font-semibold py-4 px-12 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      Schedule Call
                    </button>
                    <p className="text-gray-500 text-sm mt-3">
                      We'll respond within 24 hours with a customized proposal
                    </p>
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
