import { describe, it, expect } from 'vitest';
import { LinkedList } from '../src/01-linked-list';

describe('01-linked-list', () => {
  it('pushes and serializes', () => {
    const l = new LinkedList<number>();
    l.push(1); l.push(2);
    expect(l.toArray()).toEqual([1, 2]);
  });

  it('inserts at an index', () => {
    const l = new LinkedList<number>();
    l.push(1); l.push(3);
    expect(l.insertAt(2, 1)).toBe(true);
    expect(l.toArray()).toEqual([1, 2, 3]);
  });

  it('removes at an index', () => {
    const l = new LinkedList<number>();
    l.push(1); l.push(2); l.push(3);
    expect(l.removeAt(1)).toBe(2);
    expect(l.toArray()).toEqual([1, 3]);
  });

  it('reports index and size', () => {
    const l = new LinkedList<string>();
    l.push('a'); l.push('b');
    expect(l.indexOf('b')).toBe(1);
    expect(l.indexOf('z')).toBe(-1);
    expect(l.size()).toBe(2);
  });
});
