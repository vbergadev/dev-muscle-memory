import { describe, it, expect } from 'vitest';
import { Readable } from 'node:stream';
import { countBytes } from '../src/02-count-bytes';

describe('countBytes', () => {
  it('counts total bytes across chunks', async () => {
    expect(await countBytes(Readable.from(['hello', ' world']))).toBe(11);
  });

  it('returns 0 for an empty stream', async () => {
    expect(await countBytes(Readable.from([]))).toBe(0);
  });
});
