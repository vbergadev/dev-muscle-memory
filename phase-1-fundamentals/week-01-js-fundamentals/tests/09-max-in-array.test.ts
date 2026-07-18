import { describe, it, expect } from 'vitest';
import { maxInArray } from '../src/09-max-in-array';

describe('maxInArray', () => {
  it('finds the max', () => {
    expect(maxInArray([3, 7, 2, 9, 4])).toBe(9);
  });

  it('works with a single element', () => {
    expect(maxInArray([42])).toBe(42);
  });

  it('handles negatives', () => {
    expect(maxInArray([-5, -2, -9])).toBe(-2);
  });
});
