import { createClient } from "@supabase/supabase-js";

export type Sermon = {
  id: number;
  created_at: string;
  sermon_date: string | null;
  sermon_mp3_url: string | null;
  preacher: string | null;
  file_size: number | null;
  duration: string | null;
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

const supabaseUrl =
  (
    (import.meta.env.PUBLIC_SUPABASE_URL as string | undefined) ??
    (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  )?.trim() ?? "";
const supabaseAnonKey =
  (
    (import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined) ??
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)
  )?.trim() ?? "";

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  supabaseUrl.includes("your-project-id.supabase.co") ||
  supabaseAnonKey === "your-public-anon-key"
) {
  throw new Error(
    `Invalid Supabase env configuration. URL: ${supabaseUrl || "(empty)"}; key length: ${supabaseAnonKey.length}. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in .env and restart the dev server.`
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
