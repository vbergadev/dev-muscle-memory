import { describe, it, expect } from 'vitest';
import { memoize } from '../src/09-memoize';

describe('09-memoize', () => {
  it('caches by arguments', () => {
    let calls = 0;
    const slow = (n: number) => { calls++; return n * 2; };
    const fast = memoize(slow);
    expect(fast(5)).toBe(10);
    expect(fast(5)).toBe(10);
    expect(calls).toBe(1);
  });

  it('distinguishes different args', () => {
    let calls = 0;
    const f = memoize((n: number) => { calls++; return n; });
    f(1); f(2);
    expect(calls).toBe(2);
  });
});
