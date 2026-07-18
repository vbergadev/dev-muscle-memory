import { describe, it, expect } from 'vitest';
import { manualIndexOf } from '../src/19-manual-index-of';

describe('manualIndexOf', () => {
  it('returns the index', () => {
    expect(manualIndexOf([1, 2, 3], 3)).toBe(2);
  });

  it('returns -1 when absent', () => {
    expect(manualIndexOf([1, 2, 3], 9)).toBe(-1);
  });

  it('returns first match', () => {
    expect(manualIndexOf([1, 2, 2], 2)).toBe(1);
  });
});
