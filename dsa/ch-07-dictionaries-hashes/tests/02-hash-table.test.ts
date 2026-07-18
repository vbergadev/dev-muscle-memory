import { describe, it, expect } from 'vitest';
import { HashTable } from '../src/02-hash-table';

describe('02-hash-table', () => {
  it('puts and gets', () => {
    const h = new HashTable<number>();
    h.put('name', 1);
    h.put('age', 2);
    expect(h.get('name')).toBe(1);
    expect(h.get('age')).toBe(2);
  });

  it('overwrites an existing key', () => {
    const h = new HashTable<number>();
    h.put('x', 1);
    h.put('x', 9);
    expect(h.get('x')).toBe(9);
  });

  it('removes and returns undefined after', () => {
    const h = new HashTable<number>();
    h.put('x', 1);
    expect(h.remove('x')).toBe(true);
    expect(h.get('x')).toBeUndefined();
  });
});
