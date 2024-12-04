import { Hono } from "hono";
import { env } from "hono/adapter";
import { getClient } from "../db/client";
import { media } from "../db/schema";

const app = new Hono();

app.get("/media", async (c) => {
  const { POSTGRES_URL } = env<{ POSTGRES_URL: string }>(c);
  const client = await getClient({ POSTGRES_URL });
  const result = await client.select().from(media);
  return c.json({ result });
});

app.get("/", (c) => {
  const { NAME } = env<{ NAME: string }>(c);
  return c.json({
    message: "Hello, Hono!",
    environment: NAME,
  });
});

export default app;
