
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


if(!process.env.DATABASE_URL) throw new Error("DATABASE is required");
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);