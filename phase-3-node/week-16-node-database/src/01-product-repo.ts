/**
 * Exercise: ProductRepository
 *
 * Goal: Implement a repository over the `products` table using the injected Drizzle db: create({ name, price }) -> the created row (with id); findAll() -> all rows; findById(id) -> row or null; deleteById(id) -> void.
 *
 * Prerequisites:
 *   - Drizzle insert().values().returning()
 *   - select().from() and where(eq(...))
 *   - delete().where()
 *   - dependency injection (db passed in)
 *
 * References:
 *   - https://orm.drizzle.team/docs/overview
 *
 * Time budget: ~30 minutes.
 */

import type { Db } from './db';

export type Product = { id: number; name: string; price: number };
export type NewProduct = { name: string; price: number };

export class ProductRepository {
  constructor(private db: Db) {}

  create(_input: NewProduct): Promise<Product> {
    throw new Error('not implemented');
  }
  findAll(): Promise<Product[]> {
    throw new Error('not implemented');
  }
  findById(_id: number): Promise<Product | null> {
    throw new Error('not implemented');
  }
  deleteById(_id: number): Promise<void> {
    throw new Error('not implemented');
  }
}
