import { createClient } from "supabase";

export const supabase = createClient(
  <string>Deno.env.get("SUPABASE_API_URL"),
  <string>Deno.env.get("SUPABASE_ANON_KEY"),
);
