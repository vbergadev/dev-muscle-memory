/**
 * Exercise: requireAuth
 *
 * Goal: A middleware factory requireAuth(secret). It reads the "Authorization: Bearer <token>" header, verifies the JWT, and on success attaches the payload to req.user and calls next(). On a missing/invalid token, respond 401.
 *
 * Prerequisites:
 *   - reading request headers
 *   - verifying a JWT (reuse exercise 02 or jsonwebtoken)
 *   - short-circuiting with 401
 *
 * References:
 *   - https://expressjs.com/en/guide/using-middleware.html
 *
 * Time budget: ~22 minutes.
 */

import type { RequestHandler } from 'express';

export function requireAuth(secret: string): RequestHandler {
  throw new Error('not implemented');
}
