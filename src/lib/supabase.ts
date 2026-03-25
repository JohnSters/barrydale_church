import { createClient } from "@supabase/supabase-js";

export type Sermon = {
  id: number;
  created_at: string;
  sermon_date: string | null;
  sermon_mp3_url: string | null;
  preacher: string | null;
  file_size: number | null;
};

export type Database = {
  public: {
    Tables: {
      bcf_sermon: {
        Row: Sermon;
        Insert: Omit<Sermon, "id" | "created_at">;
        Update: Partial<Omit<Sermon, "id" | "created_at">>;
      };
    };
  };
};

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
