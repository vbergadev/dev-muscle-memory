import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { sql } from 'drizzle-orm';
import { createDb, type Db } from '../src/db';
import { ProductRepository } from '../src/01-product-repo';

const url = process.env.DATABASE_URL;

// Integration: requires Postgres. Start it with `pnpm db:up` and export DATABASE_URL.
// Without DATABASE_URL, this block is skipped.
describe.skipIf(!url)('ProductRepository (integration)', () => {
  let db: Db;
  let close: () => Promise<void>;
  let repo: ProductRepository;

  beforeAll(async () => {
    ({ db, close } = createDb(url!));
    await db.execute(sql`DROP TABLE IF EXISTS products CASCADE`);
    await db.execute(
      sql`CREATE TABLE products (id serial PRIMARY KEY, name text NOT NULL, price integer NOT NULL)`,
    );
    repo = new ProductRepository(db);
  });

  afterAll(async () => {
    await db.execute(sql`DROP TABLE IF EXISTS products CASCADE`);
    await close();
  });

  it('creates and reads back a product', async () => {
    const created = await repo.create({ name: 'Book', price: 10 });
    expect(created.id).toBeGreaterThan(0);
    const found = await repo.findById(created.id);
    expect(found).toMatchObject({ name: 'Book', price: 10 });
  });

  it('lists and deletes', async () => {
    await repo.create({ name: 'Pen', price: 2 });
    const all = await repo.findAll();
    expect(all.length).toBeGreaterThanOrEqual(1);
    await repo.deleteById(all[0]!.id);
    expect(await repo.findById(all[0]!.id)).toBeNull();
  });
});
