import { describe, it, expect } from 'vitest';
import { factorialRecursive } from '../src/07-factorial-recursive';

describe('factorialRecursive', () => {
  it('0! is 1', () => {
    expect(factorialRecursive(0)).toBe(1);
  });

  it('5! is 120', () => {
    expect(factorialRecursive(5)).toBe(120);
  });

  it('7! is 5040', () => {
    expect(factorialRecursive(7)).toBe(5040);
  });
});
