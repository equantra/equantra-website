import React from 'react';
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
    linkedin: "#"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/team/jane-smith.jpg",
    bio: "Expert in blockchain and distributed systems",
    linkedin: "#"
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/team/mike-johnson.jpg",
    bio: "Full-stack developer with focus on React and Node.js",
    linkedin: "#"
  },
  {
    name: "Sarah Wilson",
    role: "UI/UX Lead",
    image: "/team/sarah-wilson.jpg",
    bio: "Passionate about creating beautiful user experiences",
    linkedin: "#"
  }
];

const departments = [
  {
    name: "Development",
    count: 8,
    skills: ["React", "Node.js", "Python", "Java", "Blockchain"]
  },
  {
    name: "Design",
    count: 4,
    skills: ["UI/UX", "Visual Design", "Prototyping", "User Research"]
  },
  {
    name: "Project Management",
    count: 3,
    skills: ["Agile", "Scrum", "Risk Management", "Client Relations"]
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <PageSeo structuredData={teamPageStructuredData} />
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="relative flex items-center justify-center w-full mb-12">
            <img className="w-full" src="/other/headingContainer.svg" />
            <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Our Team</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300">
              Meet the passionate individuals who make innovation possible at Equantra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-12 text-center">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-blue-400 mb-4">{dept.count} team members</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team.
              If you're passionate about technology and innovation, we'd love to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
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