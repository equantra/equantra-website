import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../LandingPage/Footer';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar overlay={true} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
