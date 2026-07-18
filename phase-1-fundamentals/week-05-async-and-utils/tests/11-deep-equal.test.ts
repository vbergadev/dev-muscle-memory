import { describe, it, expect } from 'vitest';
import { deepEqual } from '../src/11-deep-equal';

describe('11-deep-equal', () => {
  it('equal nested structures', () => {
    expect(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
  });

  it('different values', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  it('different shapes', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });
});
