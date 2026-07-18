/**
 * Exercise: createRateLimiter
 *
 * Goal: A middleware factory createRateLimiter({ max, windowMs }). Allow up to `max` requests within a rolling `windowMs`; further requests get 429. Track counts in memory (keyed by client IP is fine).
 *
 * Prerequisites:
 *   - in-memory counters with timestamps/windows
 *   - responding 429 Too Many Requests
 *   - middleware factories
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 *
 * Time budget: ~25 minutes.
 */

import type { RequestHandler } from 'express';

export function createRateLimiter(opts: { max: number; windowMs: number }): RequestHandler {
  throw new Error('not implemented');
}
