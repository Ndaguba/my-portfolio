import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Only create the client when both credentials are present. When they are
// missing (e.g. local dev without a .env), export null so consumers can skip
// Supabase-dependent features instead of crashing at import time.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

if (!supabase) {
  console.warn('Supabase credentials missing — realtime features disabled.');
}
