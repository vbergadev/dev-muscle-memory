import { describe, it, expect } from 'vitest';
import { Queue } from '../src/01-queue';

describe('01-queue', () => {
  it('dequeues in FIFO order', () => {
    const q = new Queue<number>();
    q.enqueue(1); q.enqueue(2);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
  });

  it('front reads without removing', () => {
    const q = new Queue<string>();
    q.enqueue('a');
    expect(q.front()).toBe('a');
    expect(q.size()).toBe(1);
  });
});
