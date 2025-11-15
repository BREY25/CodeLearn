import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  created_at: string;
}

export interface Lesson {
  id: string;
  category_id: string;
  title: string;
  description: string;
  content: string;
  difficulty: string;
  duration: number;
  source_url: string;
  source_name: string;
  order_num: number;
  created_at: string;
}

export interface Project {
  id: string;
  category_id: string;
  title: string;
  description: string;
  difficulty: string;
  steps: string[];
  code_snippets: { language: string; code: string }[];
  source_url: string;
  source_name: string;
  created_at: string;
}

export interface CommonBug {
  id: string;
  category_id: string;
  title: string;
  description: string;
  error_message: string;
  solution: string;
  code_example: string;
  created_at: string;
}
