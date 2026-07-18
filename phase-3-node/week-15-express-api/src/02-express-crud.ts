/**
 * Exercise: createApp — products CRUD (in memory)
 *
 * Goal: Return an Express app with an in-memory CRUD for "products": POST /products (201, returns the created product with a generated id), GET /products (list), GET /products/:id (single or 404), DELETE /products/:id (204). Use express.json() for the body.
 *
 * Prerequisites:
 *   - route params and req.body
 *   - status codes (201/204/404)
 *   - in-memory storage + id generation
 *
 * References:
 *   - https://expressjs.com/en/guide/routing.html
 *
 * Time budget: ~30 minutes.
 */

import type { Express } from 'express';

export function createApp(): Express {
  throw new Error('not implemented');
}
