import { describe, it, expect } from 'vitest';
import { maxSubArray } from '../src/02-max-subarray';

describe('02-max-subarray', () => {
  it('mixed values', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('all negative', () => {
    expect(maxSubArray([-3, -1, -2])).toBe(-1);
  });

  it('single', () => {
    expect(maxSubArray([5])).toBe(5);
  });
});
