import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wzdmoigcerowoqkgtrdw.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZG1vaWdjZXJvd29xa2d0cmR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzgwNjQsImV4cCI6MjAyNTc1NDA2NH0.s3CMb8CnFZwWVN1b-QOsQUMwJ0M4izMaS0PPYOhNE_c";


const supabaseCliet = createClient(SUPABASE_URL, ANON_KEY);


export default supabaseCliet;