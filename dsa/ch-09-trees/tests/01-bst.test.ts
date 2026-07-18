import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from '../src/01-bst';

describe('01-bst', () => {
  it('inserts and searches', () => {
    const t = new BinarySearchTree();
    [5, 3, 8, 1, 4].forEach((n) => t.insert(n));
    expect(t.has(4)).toBe(true);
    expect(t.has(9)).toBe(false);
  });

  it('min and max', () => {
    const t = new BinarySearchTree();
    [5, 3, 8, 1, 4].forEach((n) => t.insert(n));
    expect(t.min()).toBe(1);
    expect(t.max()).toBe(8);
  });

  it('in-order traversal is sorted', () => {
    const t = new BinarySearchTree();
    [5, 3, 8, 1, 4].forEach((n) => t.insert(n));
    expect(t.inOrder()).toEqual([1, 3, 4, 5, 8]);
  });
});
