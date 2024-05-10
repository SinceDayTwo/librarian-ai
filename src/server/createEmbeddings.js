import openai from "./openai.js";
import { getBooks, storeEmbedding } from "./supabase.js";

async function createEmbeddings() {
  const books = await getBooks();

  for (const book of books) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: [book.summary],
  });

  const [{ embedding }] = embeddingResponse.data;

  const status = await storeEmbedding(book.id, embedding);

  console.log("status -->", status);
  }
}

