import { describe, it, expect } from 'vitest';
import { Dictionary } from '../src/01-dictionary';

describe('01-dictionary', () => {
  it('sets and gets values', () => {
    const d = new Dictionary<string, number>();
    d.set('a', 1);
    d.set('b', 2);
    expect(d.get('a')).toBe(1);
    expect(d.has('b')).toBe(true);
    expect(d.size()).toBe(2);
  });

  it('removes a key', () => {
    const d = new Dictionary<string, number>();
    d.set('a', 1);
    expect(d.remove('a')).toBe(true);
    expect(d.has('a')).toBe(false);
    expect(d.get('a')).toBeUndefined();
  });
});
