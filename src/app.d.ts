import { Session, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "$lib/db/types";

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {};
