import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { config } from '../config/env';

// Lazy initialization to avoid crash on startup
let supabaseClient: SupabaseClient | null = null;

/**
 * Get Supabase client instance
 */
export function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    const { url, serviceKey } = config.supabase;
    
    if (!url || !serviceKey) {
      throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY are required');
    }
    
    supabaseClient = createClient(url, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return supabaseClient;
}
