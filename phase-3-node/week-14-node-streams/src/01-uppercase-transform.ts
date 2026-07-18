/**
 * Exercise: createUppercaseTransform
 *
 * Goal: Return a Transform stream that uppercases every chunk of text that flows through it.
 *
 * Prerequisites:
 *   - the Transform stream and its _transform(chunk, enc, cb)
 *   - chunks arrive as Buffer/string
 *   - pushing transformed output
 *
 * References:
 *   - https://nodejs.org/api/stream.html#implementing-a-transform-stream
 *
 * Time budget: ~20 minutes.
 */

import { Transform } from 'node:stream';

export function createUppercaseTransform(): Transform {
  throw new Error('not implemented');
}
