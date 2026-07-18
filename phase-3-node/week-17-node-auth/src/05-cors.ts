/**
 * Exercise: createCors
 *
 * Goal: A middleware factory createCors(origin) that sets the Access-Control-Allow-Origin response header to `origin` on every response, then calls next().
 *
 * Prerequisites:
 *   - what CORS is and the Access-Control-Allow-Origin header
 *   - setting response headers in middleware
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 *
 * Time budget: ~15 minutes.
 */

import type { RequestHandler } from 'express';

export function createCors(origin: string): RequestHandler {
  throw new Error('not implemented');
}
