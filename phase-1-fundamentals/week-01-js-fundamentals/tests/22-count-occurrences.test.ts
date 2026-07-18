import { describe, it, expect } from 'vitest';
import { countOccurrences } from '../src/22-count-occurrences';

describe('countOccurrences', () => {
  it('counts occurrences', () => {
    expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
  });

  it('returns 0 when absent', () => {
    expect(countOccurrences([1, 2, 3], 9)).toBe(0);
  });

  it('works with strings', () => {
    expect(countOccurrences(['a', 'b', 'a'], 'a')).toBe(2);
  });
});
