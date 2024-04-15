import openai from "./openai.js";
import { getBooks, storeEmbedding } from "./supabase.js";

async function createEmbeddings() {
  const books = await getBooks();

  // for (const book of books) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: [books[0].summary],
  });

  const [{ embedding }] = embeddingResponse.data;

  console.log("embedding -->", embedding);

  await storeEmbedding(books[0].id, embedding);

  // console.log("status -->", status);
  // }
}

createEmbeddings();
