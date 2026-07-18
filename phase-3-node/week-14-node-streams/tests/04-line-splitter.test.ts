import { describe, it, expect } from 'vitest';
import { Readable } from 'node:stream';
import { createLineSplitter } from '../src/04-line-splitter';

describe('createLineSplitter', () => {
  it('emits complete lines even when split across chunks', async () => {
    const t = createLineSplitter();
    const lines: string[] = [];
    t.on('data', (l: string) => lines.push(l));
    Readable.from(['a\nb', '\nc\n']).pipe(t);
    await new Promise((resolve) => t.on('end', resolve));
    expect(lines).toEqual(['a', 'b', 'c']);
  });

  it('flushes a trailing line without newline', async () => {
    const t = createLineSplitter();
    const lines: string[] = [];
    t.on('data', (l: string) => lines.push(l));
    Readable.from(['x\ny']).pipe(t);
    await new Promise((resolve) => t.on('end', resolve));
    expect(lines).toEqual(['x', 'y']);
  });
});
