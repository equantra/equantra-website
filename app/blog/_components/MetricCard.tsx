interface MetricCardProps {
    value: string;
    label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
    return (
        <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
            <div className="text-gray-700">{label}</div>
        </div>
    );
}
