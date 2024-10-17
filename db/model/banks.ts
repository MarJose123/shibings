import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamps } from "@/db/helper/column.helper";

export const banks = sqliteTable("banks", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  preferred_name: text(),
  category: text().notNull(),
  account_type: text().notNull(),
  ...timestamps,
});
