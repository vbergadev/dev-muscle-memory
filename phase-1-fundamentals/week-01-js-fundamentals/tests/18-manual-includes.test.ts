import { describe, it, expect } from 'vitest';
import { manualIncludes } from '../src/18-manual-includes';

describe('manualIncludes', () => {
  it('finds a present value', () => {
    expect(manualIncludes([1, 2, 3], 2)).toBe(true);
  });

  it('returns false when absent', () => {
    expect(manualIncludes([1, 2, 3], 9)).toBe(false);
  });

  it('works with strings', () => {
    expect(manualIncludes(['a', 'b'], 'b')).toBe(true);
  });
});
