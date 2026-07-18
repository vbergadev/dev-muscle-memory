/**
 * Exercise: createRequestLogger
 *
 * Goal: A middleware factory createRequestLogger(sink) that returns an Express middleware which, for each request, calls sink(line) with a string containing at least the HTTP method and the request path, then calls next().
 *
 * Prerequisites:
 *   - Express middleware signature (req, res, next)
 *   - always calling next()
 *   - dependency injection via a factory (the sink)
 *
 * References:
 *   - https://expressjs.com/en/guide/using-middleware.html
 *
 * Time budget: ~18 minutes.
 */

import type { RequestHandler } from 'express';

export function createRequestLogger(sink: (line: string) => void): RequestHandler {
  throw new Error('not implemented');
}
