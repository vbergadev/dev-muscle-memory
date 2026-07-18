import { describe, it, expect } from 'vitest';
import { isPrime } from '../src/27-is-prime';

describe('isPrime', () => {
  it('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('17 is prime', () => {
    expect(isPrime(17)).toBe(true);
  });

  it('1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('15 is not prime', () => {
    expect(isPrime(15)).toBe(false);
  });
});
