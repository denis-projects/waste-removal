import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QuoteRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  debris_type: string;
  estimated_volume: string;
  project_type: string;
  preferred_date?: string;
  additional_info?: string;
  status?: string;
  created_at?: string;
}
