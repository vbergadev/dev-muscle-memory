import { describe, it, expect } from 'vitest';
import { Deque } from '../src/02-deque';

describe('02-deque', () => {
  it('adds and removes at both ends', () => {
    const d = new Deque<number>();
    d.addBack(1); d.addFront(0);
    expect(d.removeFront()).toBe(0);
    expect(d.removeBack()).toBe(1);
  });

  it('tracks size', () => {
    const d = new Deque<number>();
    d.addBack(1); d.addBack(2);
    expect(d.size()).toBe(2);
  });
});
