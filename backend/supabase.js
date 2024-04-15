import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_DB_URL;
const supabaseKey = process.env.SUPABASE_DB_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is not provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getBooks() {
  const { data, error } = await supabase.from("Books").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function storeEmbedding(id, embedding) {
  const result = await supabase
    .from("Books")
    .update({ embedding: embedding })
    .eq("id", id);

  // if (error) {
  //   throw error;
  // }

  console.log("result -->", result);

  // return status;
}
