import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogHeroProps {
    category: string;
    readTime: string;
    publishDate: string;
    title: string;
    description: string;
    breadcrumbTitle: string;
}

export default function BlogHero({
    category,
    readTime,
    publishDate,
    title,
    description,
    breadcrumbTitle,
}: BlogHeroProps) {
    return (
        <div className="bg-black text-white pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center space-x-2 text-gray-300 mb-8">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span className="text-white">{breadcrumbTitle}</span>
                    </nav>

                    <div className="flex items-center space-x-4 mb-6">
                        <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {category}
                        </span>
                        <span className="text-gray-300">{readTime}</span>
                        <span className="text-gray-300">{publishDate}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        {title}
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
