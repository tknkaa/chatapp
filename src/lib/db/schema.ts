import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export * from "./auth-schema";

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});
