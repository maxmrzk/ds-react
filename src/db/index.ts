import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)