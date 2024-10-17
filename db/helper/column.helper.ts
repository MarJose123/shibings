import {sql} from "drizzle-orm";
import {text} from "drizzle-orm/sqlite-core";

export const timestamps = {
    created_at: text('timestamp')
    .notNull()
    .default(sql`(current_timestamp)`),
    updated_at: text(),
}
