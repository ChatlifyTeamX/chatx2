import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Supabase Proje Bilgileri
const supabaseUrl = 'https://rkbpllkkrlemfdsgpfux.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrYnBsbGtrcmxlbWZkc2dwZnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjM4NjAsImV4cCI6MjA2NjkzOTg2MH0.nqGQwHYadQP22isvwFfLv51IDppjmuraLalI_diRSDc'

// Supabase istemcisini oluştur ve dışa aktar
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 