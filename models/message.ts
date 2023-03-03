import { supabase } from "../db/supabase.ts";

export interface Message {
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export async function getMessages(): Promise<Message[]> {
  const { data, error } = await supabase
    .from<"messages", Message>("messages")
    .select("*")
    .limit(10);

  if (error) {
    console.error(`getMessages# error: ${error.message}`);

    return [];
  }

  return data as Message[];
}

export async function createMessage(
  message: Omit<Message, "created_at">
): Promise<boolean> {
  const { error } = await supabase.from("messages").insert({
    ...message,
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error(`createMessage# error: ${error.message}`);

    return false;
  }

  return true;
}
