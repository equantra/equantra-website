import Link from 'next/link';

interface BlogCTAProps {
    title: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export default function BlogCTA({
    title,
    description,
    primaryButtonText = "Get Free Consultation",
    primaryButtonHref = "/#contact",
    secondaryButtonText = "View Our Services",
    secondaryButtonHref = "/#services",
}: BlogCTAProps) {
    return (
        <div className="bg-black text-white p-8 rounded-lg my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
                {title}
            </h3>
            <p className="text-gray-400 mb-6">
                {description}
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link
                    href={primaryButtonHref}
                    className="inline-block bg-black text-white border border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
                >
                    {primaryButtonText}
                </Link>
                <Link
                    href={secondaryButtonHref}
                    className="inline-block bg-white text-black border border-white font-semibold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                >
                    {secondaryButtonText}
                </Link>
            </div>
        </div>
    );
}
