import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Image
              src="/logo-full.svg"
              alt="Equantra"
              width={140}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Custom software development company delivering end-to-end
              solutions for businesses across the United States.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#software-development"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile-development"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#process"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                hello@equantra.in
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-3 px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-sm">
            Copyright &copy; {new Date().getFullYear()} Equantra. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 text-sm hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 text-sm hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
