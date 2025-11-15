import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { ProjectCard } from './components/ProjectCard';
import { BugCard } from './components/BugCard';
import { ConceptCard } from './components/ConceptCard';
import { supabase, Category, Project, CommonBug } from './lib/supabase';
import { Workflow, Globe, Server, Rocket } from 'lucide-react';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [bugs, setBugs] = useState<CommonBug[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [categoriesRes, projectsRes, bugsRes] = await Promise.all([
        supabase.from('categories').select('*').order('name'),
        supabase.from('projects').select('*').limit(6),
        supabase.from('common_bugs').select('*').limit(6),
      ]);

      if (categoriesRes.data) setCategories(categoriesRes.data);
      if (projectsRes.data) setProjects(projectsRes.data);
      if (bugsRes.data) setBugs(bugsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <section id="lessons" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore categories curated from official documentation and trusted sources
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-48 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  lessonsCount={Math.floor(Math.random() * 20) + 5}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Build Real Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn by doing with step-by-step project guides and hands-on exercises
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse" />
              ))}
            </div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-blue-50 rounded-xl">
              <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Projects coming soon! Check back later.</p>
            </div>
          )}
        </div>
      </section>

      <section id="bugs" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Bugs & Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from mistakes and discover solutions to frequent coding challenges
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-56 animate-pulse" />
              ))}
            </div>
          ) : bugs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bugs.map((bug) => (
                <BugCard key={bug.id} bug={bug} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <p className="text-gray-600">Bug solutions coming soon!</p>
            </div>
          )}
        </div>
      </section>

      <section id="concepts" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Tech Concepts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understand key technology concepts in simple, practical terms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard
              title="What are Workflows?"
              description="Learn how automated workflows can streamline your development process and save time with tools like n8n"
              icon={<Workflow className="w-6 h-6 text-purple-600" />}
              color="#9333EA"
            />
            <ConceptCard
              title="Domain Names Explained"
              description="Understand how domain names work, how to register them, and connect them to your applications"
              icon={<Globe className="w-6 h-6 text-green-600" />}
              color="#16A34A"
            />
            <ConceptCard
              title="Web Hosting Basics"
              description="Discover different types of hosting, from shared hosting to cloud platforms, and when to use each"
              icon={<Server className="w-6 h-6 text-orange-600" />}
              color="#EA580C"
            />
            <ConceptCard
              title="APIs & Integration"
              description="Learn how applications communicate with each other through APIs and how to integrate third-party services"
              icon={<Rocket className="w-6 h-6 text-blue-600" />}
              color="#2563EB"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Bug Busters</h3>
          <p className="text-gray-400 mb-6">
            Your trusted companion for learning coding, cloud, and tech literacy
          </p>
          <div className="text-sm text-gray-500">
            <p>Content sourced from official documentation and trusted resources</p>
            <p className="mt-2">MDN Web Docs • Python.org • Microsoft Learn • AWS • Google Cloud • freeCodeCamp</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
