/**
 * Exercise: ordersForUser (join)
 *
 * Goal: Given the injected db and a userId, return that user's orders joined with product info: an array of { orderId, productName, price }. Use a SQL join across orders -> products (filtered by orders.userId).
 *
 * Prerequisites:
 *   - Drizzle joins (innerJoin)
 *   - select with specific columns
 *   - filtering with eq
 *
 * References:
 *   - https://orm.drizzle.team/docs/joins
 *
 * Time budget: ~25 minutes.
 */

import type { Db } from './db';

export type OrderLine = { orderId: number; productName: string; price: number };

export function ordersForUser(_db: Db, _userId: number): Promise<OrderLine[]> {
  throw new Error('not implemented');
}
