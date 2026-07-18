import { describe, it, expect } from 'vitest';
import { myCall } from '../src/07-my-call';

describe('07-my-call', () => {
  it('invokes with the given this', () => {
    const obj = { x: 7 };
    function getX(this: { x: number }) { return this.x; }
    expect(myCall(getX, obj)).toBe(7);
  });

  it('passes arguments through', () => {
    function sum(this: unknown, a: number, b: number) { return a + b; }
    expect(myCall(sum, null, 2, 3)).toBe(5);
  });
});
