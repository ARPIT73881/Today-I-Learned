import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ynpaenrbxqrhexebrixm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucGFlbnJieHFyaGV4ZWJyaXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwOTM4MDIsImV4cCI6MjAzNzY2OTgwMn0.sXlt02RYR3zxPZNkCT4OK_DovTUmt61imKaaLrLYpos";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
