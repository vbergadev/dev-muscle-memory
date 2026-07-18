import { describe, it, expect } from 'vitest';
import { MySet } from '../src/01-my-set';

describe('01-my-set', () => {
  it('adds unique items only', () => {
    const s = new MySet<number>();
    s.add(1); s.add(1); s.add(2);
    expect(s.size()).toBe(2);
    expect(s.has(1)).toBe(true);
  });

  it('deletes items', () => {
    const s = new MySet<number>();
    s.add(1);
    expect(s.delete(1)).toBe(true);
    expect(s.has(1)).toBe(false);
  });

  it('union combines both', () => {
    const a = new MySet<number>(); a.add(1); a.add(2);
    const b = new MySet<number>(); b.add(2); b.add(3);
    expect(a.union(b).values().sort()).toEqual([1, 2, 3]);
  });

  it('intersection and difference', () => {
    const a = new MySet<number>(); a.add(1); a.add(2);
    const b = new MySet<number>(); b.add(2); b.add(3);
    expect(a.intersection(b).values()).toEqual([2]);
    expect(a.difference(b).values()).toEqual([1]);
  });
});
