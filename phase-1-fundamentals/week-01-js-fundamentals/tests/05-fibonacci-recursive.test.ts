import { describe, it, expect } from 'vitest';
import { fibonacciRecursive } from '../src/05-fibonacci-recursive';

describe('fibonacciRecursive', () => {
  it('fib(0) is 0', () => {
    expect(fibonacciRecursive(0)).toBe(0);
  });

  it('fib(1) is 1', () => {
    expect(fibonacciRecursive(1)).toBe(1);
  });

  it('fib(10) is 55', () => {
    expect(fibonacciRecursive(10)).toBe(55);
  });

  it('fib(15) is 610', () => {
    expect(fibonacciRecursive(15)).toBe(610);
  });
});
