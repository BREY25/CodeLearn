import { Lightbulb } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function ConceptCard({ title, description, icon, color }: ConceptCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100 hover:border-blue-200 group cursor-pointer">
      <div className="flex items-start space-x-4">
        <div
          className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h4>
            <Lightbulb className="w-4 h-4 text-yellow-500" />
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
