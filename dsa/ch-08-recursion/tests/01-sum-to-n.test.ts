import { describe, it, expect } from 'vitest';
import { sumToN } from '../src/01-sum-to-n';

describe('01-sum-to-n', () => {
  it('sums 1..n', () => {
    expect(sumToN(5)).toBe(15);
  });

  it('base case', () => {
    expect(sumToN(0)).toBe(0);
  });

  it('single', () => {
    expect(sumToN(1)).toBe(1);
  });
});
