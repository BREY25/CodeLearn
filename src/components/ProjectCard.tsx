import { Hammer, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../lib/supabase';

interface ProjectCardProps {
  project: Project;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-700 border-green-200',
  intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  advanced: 'bg-red-100 text-red-700 border-red-200',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const steps = Array.isArray(project.steps) ? project.steps : [];

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex items-start space-x-4 mb-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
          <Hammer className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${
                difficultyColors[project.difficulty as keyof typeof difficultyColors] || difficultyColors.beginner
              }`}
            >
              {project.difficulty}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>

      {steps.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h5 className="text-sm font-semibold text-gray-900 mb-2">Project Steps:</h5>
          <ul className="space-y-2">
            {steps.slice(0, 3).map((step, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
            {steps.length > 3 && (
              <li className="text-sm text-gray-500 ml-6">
                +{steps.length - 3} more steps...
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <a
          href={project.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-blue-600 transition-colors flex items-center space-x-1"
        >
          <span>Source: {project.source_name}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Start Project
        </button>
      </div>
    </div>
  );
}
