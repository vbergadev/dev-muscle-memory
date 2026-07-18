import { describe, it, expect } from 'vitest';
import { range } from '../src/29-range';

describe('range', () => {
  it('builds an inclusive range', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('single value when equal', () => {
    expect(range(3, 3)).toEqual([3]);
  });

  it('empty when start > end', () => {
    expect(range(5, 1)).toEqual([]);
  });
});
