import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/02-fibonacci-bigo';

describe('02-fibonacci-bigo', () => {
  it('base cases', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it('known value', () => {
    expect(fibonacci(10)).toBe(55);
  });

  it('large n is fast (O(n))', () => {
    expect(fibonacci(50)).toBe(12586269025);
  });
});
