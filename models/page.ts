import type { User } from "supabase";
import { supabase } from "../db/supabase.ts";

export type Page = {
  pid: string;
  title: string;
  label: string;
  slug: string;
};

export async function getPageByUser(user: User): Promise<Page | null> {
  const { data, error } = await supabase
    .from<"pages", Page>("pages")
    .select("pid, title, label, slug")
    .eq("uid", user.id)
    .maybeSingle();

  if (error) {
    console.error(`getTeamByUser# error: ${error.message}`);

    return null;
  }

  return data as Page;
}

export async function getPageBySlug(slug: Page["slug"]): Promise<Page | null> {
  const { data, error } = await supabase
    .from<"pages", Page>("pages")
    .select("pid, title, label, slug")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`getTeamById# error: ${error.message}`);

    return null;
  }

  return data as Page;
}
