import { AlertCircle, CheckCircle, Code } from 'lucide-react';
import { CommonBug } from '../lib/supabase';
import { useState } from 'react';

interface BugCardProps {
  bug: CommonBug;
}

export function BugCard({ bug }: BugCardProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100">
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-red-100 p-2 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{bug.title}</h4>
          <p className="text-gray-600 text-sm mb-3">{bug.description}</p>
        </div>
      </div>

      <div className="bg-red-50 rounded-lg p-4 mb-4 border border-red-100">
        <div className="flex items-center space-x-2 mb-2">
          <Code className="w-4 h-4 text-red-600" />
          <span className="text-xs font-semibold text-red-700 uppercase">Error Message</span>
        </div>
        <pre className="text-xs text-red-800 overflow-x-auto whitespace-pre-wrap font-mono bg-white p-3 rounded border border-red-200">
          {bug.error_message}
        </pre>
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mb-3"
      >
        <CheckCircle className="w-4 h-4" />
        <span>{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
      </button>

      {showSolution && (
        <div className="bg-green-50 rounded-lg p-4 border border-green-200 animate-slide-down">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase">Solution</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{bug.solution}</p>
          {bug.code_example && (
            <pre className="text-xs text-gray-800 overflow-x-auto whitespace-pre-wrap font-mono bg-white p-3 rounded border border-green-200">
              {bug.code_example}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
