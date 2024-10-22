import * as SQLite from 'expo-sqlite';
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as schemaUser from "../model/users"
import * as schemaBank from "../model/banks"

const expo = SQLite.openDatabaseSync("db.db");

export const db = drizzle(expo);
export const dbModel = drizzle(expo, {schema: {...schemaUser, ...schemaBank}});
