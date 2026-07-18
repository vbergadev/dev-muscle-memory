import { describe, it, expect } from 'vitest';
import { minInArray } from '../src/10-min-in-array';

describe('minInArray', () => {
  it('finds the min', () => {
    expect(minInArray([3, 7, 2, 9, 4])).toBe(2);
  });

  it('works with a single element', () => {
    expect(minInArray([42])).toBe(42);
  });

  it('handles negatives', () => {
    expect(minInArray([-5, -2, -9])).toBe(-9);
  });
});
