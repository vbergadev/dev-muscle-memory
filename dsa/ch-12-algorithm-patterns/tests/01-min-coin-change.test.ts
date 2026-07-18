import { describe, it, expect } from 'vitest';
import { minCoinChange } from '../src/01-min-coin-change';

describe('01-min-coin-change', () => {
  it('classic denominations', () => {
    expect(minCoinChange([1, 5, 10, 25], 36)).toBe(3);
  });

  it('where greedy would fail', () => {
    expect(minCoinChange([1, 3, 4], 6)).toBe(2);
  });

  it('zero amount', () => {
    expect(minCoinChange([1, 2], 0)).toBe(0);
  });

  it('impossible', () => {
    expect(minCoinChange([2], 3)).toBe(-1);
  });
});
