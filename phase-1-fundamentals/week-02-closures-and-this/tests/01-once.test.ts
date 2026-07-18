import { describe, it, expect } from 'vitest';
import { once } from '../src/01-once';

describe('01-once', () => {
  it('invokes the underlying fn only once', () => {
    let calls = 0;
    const f = once(() => { calls++; return calls; });
    f(); f(); f();
    expect(calls).toBe(1);
  });

  it('returns the cached first result', () => {
    const f = once((x: number) => x * 2);
    expect(f(5)).toBe(10);
    expect(f(99)).toBe(10);
  });
});
