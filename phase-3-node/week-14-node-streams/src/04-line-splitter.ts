/**
 * Exercise: createLineSplitter
 *
 * Goal: Return an object-mode Transform that receives text chunks (which may split lines across chunk boundaries) and emits one complete line at a time (without the trailing newline). Any leftover text after the last newline must be flushed when the stream ends.
 *
 * Prerequisites:
 *   - object-mode Transform (readableObjectMode)
 *   - buffering partial input across chunks
 *   - the _flush(cb) hook to emit the remainder
 *
 * References:
 *   - https://nodejs.org/api/stream.html#transform_flushcallback
 *
 * Time budget: ~28 minutes.
 */

import { Transform } from 'node:stream';

export function createLineSplitter(): Transform {
  throw new Error('not implemented');
}
