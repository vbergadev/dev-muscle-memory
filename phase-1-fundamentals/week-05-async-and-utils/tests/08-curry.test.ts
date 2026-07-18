import { describe, it, expect } from 'vitest';
import { curry } from '../src/08-curry';

describe('08-curry', () => {
  it('supports one-arg-at-a-time', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(add);
    expect(curried(1)(2)(3)).toBe(6);
  });

  it('supports mixed grouping', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(add);
    expect(curried(1, 2)(3)).toBe(6);
  });
});
