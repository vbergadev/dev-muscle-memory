import { describe, it, expect } from 'vitest';
import { sum } from '../src/01-warmup';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('handles negatives', () => {
    expect(sum(-4, 1)).toBe(-3);
  });

  it('handles zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
