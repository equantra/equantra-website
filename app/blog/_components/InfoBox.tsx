import { ReactNode } from 'react';

type InfoBoxVariant = 'dark-blue' | 'light' | 'dark-gray' | 'green' | 'yellow';

interface InfoBoxProps {
    variant?: InfoBoxVariant;
    title?: string;
    children: ReactNode;
    className?: string;
}

const variantStyles: Record<InfoBoxVariant, string> = {
    'dark-blue': 'bg-blue-900 border-l-4 border-blue-600 text-white',
    'light': 'bg-gray-50 border border-gray-200 text-gray-700',
    'dark-gray': 'bg-gray-800 text-gray-200',
    'green': 'bg-green-50 border border-green-200 text-green-900',
    'yellow': 'bg-yellow-50 border border-yellow-200 text-yellow-900',
};

const titleStyles: Record<InfoBoxVariant, string> = {
    'dark-blue': 'text-white',
    'light': 'text-gray-900',
    'dark-gray': 'text-white',
    'green': 'text-green-900',
    'yellow': 'text-yellow-900',
};

const contentStyles: Record<InfoBoxVariant, string> = {
    'dark-blue': 'text-blue-100',
    'light': 'text-gray-700',
    'dark-gray': 'text-gray-200',
    'green': 'text-green-900',
    'yellow': 'text-yellow-900',
};

export default function InfoBox({
    variant = 'light',
    title,
    children,
    className = ''
}: InfoBoxProps) {
    return (
        <div className={`${variantStyles[variant]} p-6 rounded-lg my-8 ${className}`}>
            {title && (
                <h3 className={`text-lg font-semibold ${titleStyles[variant]} mb-2`}>
                    {title}
                </h3>
            )}
            <div className={contentStyles[variant]}>
                {children}
            </div>
        </div>
    );
}
