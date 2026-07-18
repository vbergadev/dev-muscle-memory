import { describe, it, expect } from 'vitest';
import { removeDuplicates } from '../src/13-remove-duplicates';

describe('removeDuplicates', () => {
  it('removes duplicates preserving order', () => {
    expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('returns empty for empty', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('keeps an already-unique array', () => {
    expect(removeDuplicates([4, 5, 6])).toEqual([4, 5, 6]);
  });
});
