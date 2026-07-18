import { describe, it, expect } from 'vitest';
import { bubbleSort, quickSort } from '../src/01-sorting';

describe('01-sorting', () => {
  it('bubbleSort sorts', () => {
    expect(bubbleSort([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('quickSort sorts', () => {
    expect(quickSort([5, 3, 8, 1, 9, 2])).toEqual([1, 2, 3, 5, 8, 9]);
  });

  it('handles empty and single', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(quickSort([7])).toEqual([7]);
  });
});
