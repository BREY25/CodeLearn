/*
  # Bug Busters Learning Platform Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text) - e.g., "Python", "JavaScript", "Azure"
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Brief category description
      - `icon` (text) - Icon identifier for UI
      - `color` (text) - Accent color for category
      - `created_at` (timestamptz)
    
    - `lessons`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `title` (text) - Lesson title
      - `description` (text) - Brief description
      - `content` (text) - Full lesson content
      - `difficulty` (text) - beginner, intermediate, advanced
      - `duration` (int) - Estimated minutes
      - `source_url` (text) - Official resource URL
      - `source_name` (text) - Source attribution
      - `order` (int) - Display order within category
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `difficulty` (text)
      - `steps` (jsonb) - Array of project steps
      - `code_snippets` (jsonb) - Code examples
      - `source_url` (text)
      - `source_name` (text)
      - `created_at` (timestamptz)
    
    - `common_bugs`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `title` (text) - Bug title
      - `description` (text) - Bug description
      - `error_message` (text) - Example error
      - `solution` (text) - How to fix
      - `code_example` (text) - Code snippet
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (educational content)
    - Restrict write access to authenticated users only

  3. Notes
    - All content is publicly readable for learning
    - Future admin panel will manage content creation
    - JSONB fields allow flexible structured data
    - Source attribution ensures credibility
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  color text NOT NULL DEFAULT '#3B82F6',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  difficulty text NOT NULL DEFAULT 'beginner',
  duration int NOT NULL DEFAULT 15,
  source_url text NOT NULL,
  source_name text NOT NULL,
  order_num int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL DEFAULT 'beginner',
  steps jsonb NOT NULL DEFAULT '[]',
  code_snippets jsonb NOT NULL DEFAULT '[]',
  source_url text NOT NULL,
  source_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS common_bugs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  error_message text NOT NULL,
  solution text NOT NULL,
  code_example text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE common_bugs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Lessons are publicly readable"
  ON lessons FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Projects are publicly readable"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Bugs are publicly readable"
  ON common_bugs FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_lessons_category ON lessons(category_id);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category_id);
CREATE INDEX IF NOT EXISTS idx_bugs_category ON common_bugs(category_id);

INSERT INTO categories (name, slug, description, icon, color) VALUES
  ('Python', 'python', 'Learn Python programming from basics to advanced', 'code-2', '#3776AB'),
  ('JavaScript', 'javascript', 'Master JavaScript for web development', 'braces', '#F7DF1E'),
  ('Azure Cloud', 'azure', 'Build and deploy on Microsoft Azure', 'cloud', '#0078D4'),
  ('AWS', 'aws', 'Amazon Web Services essentials', 'server', '#FF9900'),
  ('Power BI', 'powerbi', 'Data visualization and analytics', 'bar-chart-3', '#F2C811'),
  ('Web Basics', 'web-basics', 'HTML, CSS, and web fundamentals', 'globe', '#3B82F6');