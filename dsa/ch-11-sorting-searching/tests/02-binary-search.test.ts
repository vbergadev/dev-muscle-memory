import { describe, it, expect } from 'vitest';
import { binarySearch } from '../src/02-binary-search';

describe('02-binary-search', () => {
  it('finds an element', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
  });

  it('returns -1 when absent', () => {
    expect(binarySearch([1, 3, 5], 4)).toBe(-1);
  });

  it('finds first and last', () => {
    expect(binarySearch([1, 3, 5], 1)).toBe(0);
    expect(binarySearch([1, 3, 5], 5)).toBe(2);
  });
});
