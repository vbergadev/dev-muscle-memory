// SETUP (provided) — Drizzle schema. Study it, but this week's focus is the
// repository and the queries (exercises 01 and 02). Tweak it if you want to experiment.
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
});
