import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxznxvtqeqncqcusahld.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94em54dnRxZXFuY3FjdXNhaGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MTczNjUsImV4cCI6MjAxMjQ5MzM2NX0.KNKnar4q7VKMS9RW6aXXKaarIqqlFET7COtPgg7FARk';
export const supabase = createClient(supabaseUrl, supabaseKey);
