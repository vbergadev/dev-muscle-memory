/**
 * Exercise: validateBody
 *
 * Goal: A middleware factory validateBody(schema) that parses req.body with a Zod schema. On failure, respond 400 with JSON { errors: ... }. On success, call next(). (Optionally assign the parsed value back to req.body.)
 *
 * Prerequisites:
 *   - Zod schema.safeParse
 *   - short-circuiting a request with res.status(400)
 *   - typed validation as middleware
 *
 * References:
 *   - https://zod.dev/
 *   - https://expressjs.com/en/guide/using-middleware.html
 *
 * Time budget: ~22 minutes.
 */

import type { RequestHandler } from 'express';
import type { ZodTypeAny } from 'zod';

export function validateBody(schema: ZodTypeAny): RequestHandler {
  throw new Error('not implemented');
}
