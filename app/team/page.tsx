import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';
import Contact from '../LandingPage/Contact';
import PageSeo from '../../components/ui/PageSeo';

export const metadata: Metadata = {
  title: "Our Team | Equantra - Meet Our Experts",
  description: "Meet the talented team behind Equantra. Our experts bring together years of experience in technology, design, and business strategy.",
  keywords: [
    "Equantra team",
    "tech experts",
    "development team",
    "IT professionals",
    "technology leaders",
    "software developers",
    "design team"
  ],
};

const teamPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Equantra Team",
  "description": "Meet our team of technology experts and professionals",
  "publisher": {
    "@type": "Organization",
    "name": "Equantra",
    "url": "https://equantra.in"
  }
};

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    bio: "15+ years of experience in technology and business leadership",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "Twitter", url: "https://twitter.com/johndoe" }
    ]
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/team/jane-smith.jpg",
    bio: "Expert in blockchain and distributed systems",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/janesmith" },
      { platform: "Github", url: "https://github.com/janesmith" }
    ]
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/team/mike-johnson.jpg",
    bio: "Full-stack developer with focus on React and Node.js",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/mikejohnson" },
      { platform: "Github", url: "https://github.com/mikejohnson" }
    ]
  },
  {
    name: "Sarah Wilson",
    role: "UI/UX Lead",
    image: "/team/sarah-wilson.jpg",
    bio: "Award-winning designer with a passion for user-centered design",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/sarahwilson" },
      { platform: "Dribbble", url: "https://dribbble.com/sarahwilson" }
    ]
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo
        title="Our Team | Equantra"
        description="Meet the talented team behind Equantra - passionate technologists dedicated to creating exceptional digital experiences."
        structuredData={teamPageStructuredData}
      />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <Image
              className="w-full"
              src="/other/headingContainer.svg"
              alt="Our Team Header"
              width={1200}
              height={200}
            />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Our Team</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              We&apos;re a team of passionate technologists dedicated to creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        <span className="sr-only">{link.platform}</span>
                        <i className={`fab fa-${link.platform.toLowerCase()}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 mb-20">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-300 mb-6">
              We&apos;re always looking for talented individuals to join our team.
              If you&apos;re passionate about technology and innovation, we&apos;d love to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
} 