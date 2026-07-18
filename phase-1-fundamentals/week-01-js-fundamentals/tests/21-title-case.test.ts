import { describe, it, expect } from 'vitest';
import { titleCase } from '../src/21-title-case';

describe('titleCase', () => {
  it('title-cases a sentence', () => {
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });

  it('handles a single word', () => {
    expect(titleCase('hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(titleCase('')).toBe('');
  });
});
