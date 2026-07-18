import { describe, it, expect } from 'vitest';
import { primesUpToN } from '../src/28-primes-up-to-n';

describe('primesUpToN', () => {
  it('primes up to 10', () => {
    expect(primesUpToN(10)).toEqual([2, 3, 5, 7]);
  });

  it('primes up to 2', () => {
    expect(primesUpToN(2)).toEqual([2]);
  });

  it('empty below 2', () => {
    expect(primesUpToN(1)).toEqual([]);
  });
});
