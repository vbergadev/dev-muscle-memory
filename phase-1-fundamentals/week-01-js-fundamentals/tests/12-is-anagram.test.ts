import { describe, it, expect } from 'vitest';
import { isAnagram } from '../src/12-is-anagram';

describe('isAnagram', () => {
  it('detects an anagram', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  it('rejects non-anagrams', () => {
    expect(isAnagram('abc', 'abd')).toBe(false);
  });

  it('ignores case and spaces', () => {
    expect(isAnagram('Dormitory', 'Dirty room')).toBe(true);
  });

  it('different lengths are not anagrams', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });
});
