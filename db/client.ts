import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const getClient = async ({ POSTGRES_URL }: { POSTGRES_URL: string }) => {
  const database = neon(POSTGRES_URL);
  const db = drizzle(database);
  return db;
};
