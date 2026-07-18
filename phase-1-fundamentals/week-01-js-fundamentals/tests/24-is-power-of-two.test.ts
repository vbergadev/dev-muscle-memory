import { describe, it, expect } from 'vitest';
import { isPowerOfTwo } from '../src/24-is-power-of-two';

describe('isPowerOfTwo', () => {
  it('1 is a power of two', () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });

  it('16 is a power of two', () => {
    expect(isPowerOfTwo(16)).toBe(true);
  });

  it('6 is not', () => {
    expect(isPowerOfTwo(6)).toBe(false);
  });

  it('0 and negatives are false', () => {
    expect(isPowerOfTwo(0)).toBe(false);
    expect(isPowerOfTwo(-2)).toBe(false);
  });
});
