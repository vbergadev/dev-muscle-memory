import { describe, it, expect } from 'vitest';
import { gcd } from '../src/25-gcd';

describe('gcd', () => {
  it('gcd(12, 8) is 4', () => {
    expect(gcd(12, 8)).toBe(4);
  });

  it('gcd(17, 5) is 1', () => {
    expect(gcd(17, 5)).toBe(1);
  });

  it('gcd(0, 5) is 5', () => {
    expect(gcd(0, 5)).toBe(5);
  });
});
