import { describe, it, expect } from 'vitest';
import { compose, pipe } from '../src/01-compose-pipe';

describe('01-compose-pipe', () => {
  it('compose is right-to-left', () => {
    const f = compose((x: number) => x + 1, (x: number) => x * 2);
    expect(f(3)).toBe(7);
  });

  it('pipe is left-to-right', () => {
    const f = pipe((x: number) => x + 1, (x: number) => x * 2);
    expect(f(3)).toBe(8);
  });
});
