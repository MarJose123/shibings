import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {timestamps} from "@/db/helper/column.helper";

export const users = sqliteTable("users", {
    id: int().primaryKey({ autoIncrement: true }),
    avatar: text(),
    name: text().notNull(),
    email: text().notNull().unique(),
    password: text().notNull(),
    ...timestamps
});
