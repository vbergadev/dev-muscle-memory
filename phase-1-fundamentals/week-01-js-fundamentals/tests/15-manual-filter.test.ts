import { describe, it, expect } from 'vitest';
import { manualFilter } from '../src/15-manual-filter';

describe('manualFilter', () => {
  it('keeps matching elements', () => {
    expect(manualFilter([1, 2, 3, 4], (x) => x % 2 === 0)).toEqual([2, 4]);
  });

  it('returns empty when nothing matches', () => {
    expect(manualFilter([1, 3], (x) => x % 2 === 0)).toEqual([]);
  });

  it('works with strings', () => {
    expect(manualFilter(['a', 'bb', 'ccc'], (s) => s.length > 1)).toEqual(['bb', 'ccc']);
  });
});
