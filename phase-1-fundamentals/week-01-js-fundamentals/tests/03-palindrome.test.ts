import { describe, it, expect } from 'vitest';
import { isPalindrome } from '../src/03-palindrome';

describe('isPalindrome', () => {
  it('detects a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('rejects a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('ignores case and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('treats empty string as palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
