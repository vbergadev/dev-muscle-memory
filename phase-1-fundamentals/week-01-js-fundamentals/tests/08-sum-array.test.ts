import { describe, it, expect } from 'vitest';
import { sumArray } from '../src/08-sum-array';

describe('sumArray', () => {
  it('sums a list of numbers', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  it('returns 0 for empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('handles negatives', () => {
    expect(sumArray([-1, -2, 3])).toBe(0);
  });
});
