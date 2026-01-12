interface NumberedBadgeProps {
    number: number | string;
}

export default function NumberedBadge({ number }: NumberedBadgeProps) {
    return (
        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
            {number}
        </div>
    );
}
