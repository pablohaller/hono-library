import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
});
