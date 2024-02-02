import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://kktqerjtjyxhysrtocbc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrdHFlcmp0anl4aHlzcnRvY2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMjM0NTUsImV4cCI6MjAyMTY5OTQ1NX0.9KouSB5NsuxFd-Sy32RxPlaqMdO686td7CwxbuIaHOI';
export const supabase = createClient(supabaseUrl, supabaseKey);
