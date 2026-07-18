import { describe, it, expect } from 'vitest';
import { reverseString } from '../src/02-reverse-string';

describe('reverseString', () => {
  it('reverses a simple word', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  it('returns empty string for empty input', () => {
    expect(reverseString('')).toBe('');
  });

  it('handles a single character', () => {
    expect(reverseString('x')).toBe('x');
  });

  it('reverses a sentence with spaces', () => {
    expect(reverseString('a b c')).toBe('c b a');
  });
});
