import { describe, it, expect } from 'vitest';
import { factorialIterative } from '../src/06-factorial-iterative';

describe('factorialIterative', () => {
  it('0! is 1', () => {
    expect(factorialIterative(0)).toBe(1);
  });

  it('1! is 1', () => {
    expect(factorialIterative(1)).toBe(1);
  });

  it('5! is 120', () => {
    expect(factorialIterative(5)).toBe(120);
  });

  it('10! is 3628800', () => {
    expect(factorialIterative(10)).toBe(3628800);
  });
});
