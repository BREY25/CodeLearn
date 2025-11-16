export interface Resource {
  id: string;
  title: string;
  url: string;
  source: string;
  type: 'lesson' | 'documentation' | 'tutorial' | 'guide';
  categories: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const knowledgeBase: Resource[] = [
  {
    id: 'mdn-js-basics',
    title: 'JavaScript Basics',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
    source: 'MDN Web Docs',
    type: 'documentation',
    categories: ['javascript', 'web-basics'],
    difficulty: 'beginner',
  },
  {
    id: 'python-org-tutorial',
    title: 'Python Tutorial',
    url: 'https://docs.python.org/3/tutorial/',
    source: 'Python.org',
    type: 'documentation',
    categories: ['python'],
    difficulty: 'beginner',
  },
  {
    id: 'aws-getting-started',
    title: 'AWS Getting Started',
    url: 'https://docs.aws.amazon.com/getting-started/',
    source: 'AWS Documentation',
    type: 'guide',
    categories: ['aws'],
    difficulty: 'beginner',
  },
  {
    id: 'azure-learn-path',
    title: 'Microsoft Learn - Azure Fundamentals',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/',
    source: 'Microsoft Learn',
    type: 'guide',
    categories: ['azure', 'cloud'],
    difficulty: 'beginner',
  },
  {
    id: 'gcp-getting-started',
    title: 'Google Cloud Getting Started',
    url: 'https://cloud.google.com/docs/get-started',
    source: 'Google Cloud Docs',
    type: 'guide',
    categories: ['google-cloud', 'cloud'],
    difficulty: 'beginner',
  },
  {
    id: 'powerbi-docs',
    title: 'Power BI Documentation',
    url: 'https://learn.microsoft.com/en-us/power-bi/',
    source: 'Microsoft Learn',
    type: 'documentation',
    categories: ['powerbi', 'data-visualization'],
    difficulty: 'beginner',
  },
  {
    id: 'freecodecamp-responsive',
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
    source: 'freeCodeCamp',
    type: 'tutorial',
    categories: ['web-basics', 'html', 'css'],
    difficulty: 'beginner',
  },
  {
    id: 'mdn-css-guide',
    title: 'CSS: Cascading Style Sheets',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    source: 'MDN Web Docs',
    type: 'documentation',
    categories: ['css', 'web-basics'],
    difficulty: 'beginner',
  },
  {
    id: 'python-errors',
    title: 'Python Errors and Exceptions',
    url: 'https://docs.python.org/3/tutorial/errors.html',
    source: 'Python.org',
    type: 'documentation',
    categories: ['python', 'debugging'],
    difficulty: 'intermediate',
  },
  {
    id: 'js-async',
    title: 'Async JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
    source: 'MDN Web Docs',
    type: 'tutorial',
    categories: ['javascript'],
    difficulty: 'intermediate',
  },
  {
    id: 'react-official',
    title: 'React Documentation',
    url: 'https://react.dev',
    source: 'React',
    type: 'documentation',
    categories: ['javascript', 'react', 'web-frameworks'],
    difficulty: 'intermediate',
  },
  {
    id: 'rest-api-guide',
    title: 'RESTful API Design',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview',
    source: 'MDN Web Docs',
    type: 'guide',
    categories: ['apis', 'backend'],
    difficulty: 'intermediate',
  },
];

export function searchResources(
  query: string,
  category?: string,
  difficulty?: string
): Resource[] {
  return knowledgeBase.filter((resource) => {
    const matchesQuery = resource.title.toLowerCase().includes(query.toLowerCase()) ||
      resource.categories.some((cat) => cat.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory = !category || resource.categories.includes(category.toLowerCase());
    const matchesDifficulty = !difficulty || resource.difficulty === difficulty;

    return matchesQuery && matchesCategory && matchesDifficulty;
  });
}

export function getResourcesByCategory(category: string): Resource[] {
  return knowledgeBase.filter((resource) =>
    resource.categories.includes(category.toLowerCase())
  );
}

export function getResourcesByDifficulty(difficulty: string): Resource[] {
  return knowledgeBase.filter((resource) => resource.difficulty === difficulty);
}
