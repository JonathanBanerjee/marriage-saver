import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabaseUrl = "https://fewsapbzakgywfflrqqh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZld3NhcGJ6YWtneXdmZmxycXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjg1NjIsImV4cCI6MjAzNzY0NDU2Mn0.HqY7qE8sIR3m5gJeqclcMAUykWZa8WnHr5bGGEM_Grw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
