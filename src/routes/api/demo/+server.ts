import { json } from "@sveltejs/kit";
import { SUPABASE_SERVICE_KEY } from "$env/static/private";

export async function GET({ locals: { supabase } }) {
  const countries = await supabase.from("countries").select("*");

  return json(countries);

  return new Response("Hello Cron! " + new Date());
}
