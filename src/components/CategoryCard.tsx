import {
  Code2,
  Braces,
  Cloud,
  Server,
  BarChart3,
  Globe,
  ChevronRight,
  Clock
} from 'lucide-react';
import { Category } from '../lib/supabase';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'code-2': Code2,
  'braces': Braces,
  'cloud': Cloud,
  'server': Server,
  'bar-chart-3': BarChart3,
  'globe': Globe,
};

interface CategoryCardProps {
  category: Category;
  lessonsCount?: number;
  onClick?: () => void;
}

export function CategoryCard({ category, lessonsCount = 0, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="p-3 rounded-lg transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color: category.color }} />
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{lessonsCount} lessons</span>
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${category.color}20`,
            color: category.color,
          }}
        >
          Start Learning
        </span>
      </div>
    </div>
  );
}
