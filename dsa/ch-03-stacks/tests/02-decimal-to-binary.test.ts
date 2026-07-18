import { describe, it, expect } from 'vitest';
import { decimalToBinary } from '../src/02-decimal-to-binary';

describe('02-decimal-to-binary', () => {
  it('converts small numbers', () => {
    expect(decimalToBinary(10)).toBe('1010');
  });

  it('handles zero', () => {
    expect(decimalToBinary(0)).toBe('0');
  });

  it('converts a power of two', () => {
    expect(decimalToBinary(8)).toBe('1000');
  });
});
