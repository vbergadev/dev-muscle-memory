import { describe, it, expect } from 'vitest';
import { fibonacciIterative } from '../src/04-fibonacci-iterative';

describe('fibonacciIterative', () => {
  it('fib(0) is 0', () => {
    expect(fibonacciIterative(0)).toBe(0);
  });

  it('fib(1) is 1', () => {
    expect(fibonacciIterative(1)).toBe(1);
  });

  it('fib(10) is 55', () => {
    expect(fibonacciIterative(10)).toBe(55);
  });

  it('fib(20) is 6765', () => {
    expect(fibonacciIterative(20)).toBe(6765);
  });
});
