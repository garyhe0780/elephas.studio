import { supabase } from "../db/supabase.ts";
import type { User } from "supabase";

export async function loginWithEmail(
  email: string,
  password: string
): Promise<User | null> {
  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error(`loginWithEmail# error: ${error.message}`);

    return null;
  }

  return user;
}

export async function updatePassword(password: string) {
  const {
    data: { user },
    error,
  } = await supabase.auth.updateUser({ password });

  if (error) {
    console.error(`updatePassword# error: ${error.message}`);

    return null;
  }

  return user;
}
