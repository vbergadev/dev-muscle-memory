import { describe, it, expect } from 'vitest';
import { Stack } from '../src/01-stack';

describe('01-stack', () => {
  it('pushes and pops in LIFO order', () => {
    const s = new Stack<number>();
    s.push(1); s.push(2);
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
  });

  it('peek reads without removing', () => {
    const s = new Stack<number>();
    s.push(9);
    expect(s.peek()).toBe(9);
    expect(s.size()).toBe(1);
  });

  it('reports empty state', () => {
    const s = new Stack<number>();
    expect(s.isEmpty()).toBe(true);
    s.push(1);
    expect(s.isEmpty()).toBe(false);
  });
});
