import { describe, it, expect } from 'vitest';
import { mostFrequent } from '../src/23-most-frequent';

describe('mostFrequent', () => {
  it('finds the most frequent', () => {
    expect(mostFrequent([1, 2, 2, 3, 2])).toBe(2);
  });

  it('returns undefined for empty', () => {
    expect(mostFrequent([])).toBeUndefined();
  });

  it('works with strings', () => {
    expect(mostFrequent(['a', 'b', 'b', 'a', 'a'])).toBe('a');
  });
});
