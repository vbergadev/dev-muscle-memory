import { describe, it, expect } from 'vitest';
import { lcm } from '../src/26-lcm';

describe('lcm', () => {
  it('lcm(4, 6) is 12', () => {
    expect(lcm(4, 6)).toBe(12);
  });

  it('lcm(3, 5) is 15', () => {
    expect(lcm(3, 5)).toBe(15);
  });

  it('lcm(6, 6) is 6', () => {
    expect(lcm(6, 6)).toBe(6);
  });
});
