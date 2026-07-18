import { describe, it, expect } from 'vitest';
import { manualReduce } from '../src/17-manual-reduce';

describe('manualReduce', () => {
  it('sums numbers', () => {
    expect(manualReduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6);
  });

  it('builds a string', () => {
    expect(manualReduce(['a', 'b'], (acc, x) => acc + x, '')).toBe('ab');
  });

  it('returns initial for empty', () => {
    expect(manualReduce([], (acc, x) => acc + x, 42)).toBe(42);
  });
});
