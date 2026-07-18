/**
 * Exercise: countBytes
 *
 * Goal: Consume a Readable stream to completion and resolve with the total number of bytes seen across all chunks.
 *
 * Prerequisites:
 *   - async iteration over a stream (for await...of) or data/end events
 *   - Buffer.byteLength
 *   - resolving a Promise when the stream ends
 *
 * References:
 *   - https://nodejs.org/api/stream.html#readable-streams
 *
 * Time budget: ~18 minutes.
 */

import type { Readable } from 'node:stream';

export function countBytes(readable: Readable): Promise<number> {
  throw new Error('not implemented');
}
