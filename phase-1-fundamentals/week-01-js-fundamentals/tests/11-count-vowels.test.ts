import { describe, it, expect } from 'vitest';
import { countVowels } from '../src/11-count-vowels';

describe('countVowels', () => {
  it('counts vowels in a word', () => {
    expect(countVowels('hello')).toBe(2);
  });

  it('is case-insensitive', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  it('returns 0 when none', () => {
    expect(countVowels('rhythm')).toBe(0);
  });
});
