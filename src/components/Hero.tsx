import { Code2, Sparkles, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Your friendly learning companion</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
          Master <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Coding</span> & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Cloud</span>
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
          Learn programming, cloud development, and data visualization through
          step-by-step lessons, real projects, and practical solutions to common bugs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up-delay-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Start Learning
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-200">
            Browse Resources
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step Lessons</h3>
            <p className="text-sm text-gray-600">Clear, structured lessons from official sources like MDN, Python.org, and Microsoft Learn</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real Projects</h3>
            <p className="text-sm text-gray-600">Build hands-on projects that teach practical skills and best practices</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Bug Solutions</h3>
            <p className="text-sm text-gray-600">Learn from common mistakes and discover solutions to frequent coding challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
}
