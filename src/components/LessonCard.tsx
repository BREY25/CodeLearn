import { Clock, ExternalLink, BookOpen } from 'lucide-react';
import { Lesson } from '../lib/supabase';

interface LessonCardProps {
  lesson: Lesson;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-yellow-100 text-yellow-700',
  advanced: 'bg-red-100 text-red-700',
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              difficultyColors[lesson.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner
            }`}
          >
            {lesson.difficulty}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{lesson.duration}m</span>
        </div>
      </div>

      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {lesson.title}
      </h4>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{lesson.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <a
          href={lesson.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-blue-600 transition-colors flex items-center space-x-1"
        >
          <span>Source: {lesson.source_name}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View Lesson →
        </button>
      </div>
    </div>
  );
}
