// SETUP (provided) — Drizzle + Postgres connection factory.
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

export type Db = NodePgDatabase<typeof schema>;

export function createDb(connectionString: string): { db: Db; close: () => Promise<void> } {
  const pool = new Pool({ connectionString });
  return { db: drizzle(pool, { schema }), close: () => pool.end() };
}
