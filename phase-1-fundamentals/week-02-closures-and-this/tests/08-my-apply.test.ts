import { describe, it, expect } from 'vitest';
import { myApply } from '../src/08-my-apply';

describe('08-my-apply', () => {
  it('invokes with this and an args array', () => {
    const obj = { factor: 3 };
    function scale(this: { factor: number }, n: number) { return n * this.factor; }
    expect(myApply(scale, obj, [4])).toBe(12);
  });

  it('works with no args array', () => {
    function hello(this: unknown) { return 'hi'; }
    expect(myApply(hello, null)).toBe('hi');
  });
});
