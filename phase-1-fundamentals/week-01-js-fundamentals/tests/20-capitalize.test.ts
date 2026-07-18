import { describe, it, expect } from 'vitest';
import { capitalize } from '../src/20-capitalize';

describe('capitalize', () => {
  it('capitalizes a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('leaves already-capitalized untouched', () => {
    expect(capitalize('World')).toBe('World');
  });
});
