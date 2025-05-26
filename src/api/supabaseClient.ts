import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyndcmwnkxsuxlfpdhfr.supabase.co';
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bmRjbXdua3hzdXhsZnBkaGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMzE3NjgsImV4cCI6MjA2MzgwNzc2OH0.j1ftXztlfPQ7p90Ck335ClvJ2hQDeaaOjdySg3VvUm4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
