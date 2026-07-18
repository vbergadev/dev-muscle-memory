import { describe, it, expect } from 'vitest';
import { Readable } from 'node:stream';
import { createUppercaseTransform } from '../src/01-uppercase-transform';

describe('createUppercaseTransform', () => {
  it('uppercases streamed text', async () => {
    const t = createUppercaseTransform();
    const out: string[] = [];
    t.on('data', (c) => out.push(c.toString()));
    Readable.from(['foo', 'bar']).pipe(t);
    await new Promise((resolve) => t.on('end', resolve));
    expect(out.join('')).toBe('FOOBAR');
  });
});
