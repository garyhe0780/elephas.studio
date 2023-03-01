import type { User } from "supabase";
import { supabase } from "../db/supabase.ts";

export type Team = {
  tid: string;
  name: string;
  logo: string;
  uid: string;
  slug: string;
};

export async function getTeamByUser(user: User): Promise<Team | null> {
  const { data, error } = await supabase
    .from<"teams", Team>("teams")
    .select("tid, name, logo, uid, slug")
    .eq("uid", user.id)
    .maybeSingle();

  if (error) {
    console.error(`getTeamByUser# error: ${error.message}`);

    return null;
  }

  return data as Team;
}

export async function getTeamBySlug(slug: Team["slug"]): Promise<Team | null> {
  const { data, error } = await supabase
    .from<"teams", Team>("teams")
    .select("tid, name, logo, uid, slug")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error(`getTeamById# error: ${error.message}`);

    return null;
  }

  return data as Team;
}
