import { Bug } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
              <Bug className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Bug Busters
              </h1>
              <p className="text-xs text-gray-500">Learn. Code. Build.</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#lessons" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Lessons
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Projects
            </a>
            <a href="#bugs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Common Bugs
            </a>
            <a href="#concepts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Tech Concepts
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
