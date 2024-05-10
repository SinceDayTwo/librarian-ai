import { createClient } from "@supabase/supabase-js";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
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
  const { status, error } = await supabase
    .from("Books")
    .update({ embedding: embedding })
    .eq("id", id);

  if (error) {
    throw error;
  }

  return status;
}

export async function similaritySearch(searchTerm) {
  const embeddings = new OpenAIEmbeddings();
  const store = new SupabaseVectorStore(embeddings, {
    client: supabase,
    tableName: "Books",
    queryName: "match_documents",
  });

  const result = await store.similaritySearchWithScore(
    searchTerm,
    1
  );
  
  return result[0][0].metadata
}