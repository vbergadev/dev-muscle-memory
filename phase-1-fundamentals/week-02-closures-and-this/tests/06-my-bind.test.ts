import { describe, it, expect } from 'vitest';
import { myBind } from '../src/06-my-bind';

describe('06-my-bind', () => {
  it('binds the this value', () => {
    const obj = { x: 10 };
    function getX(this: { x: number }) { return this.x; }
    const bound = myBind(getX, obj);
    expect(bound()).toBe(10);
  });

  it('prepends bound arguments', () => {
    function add(a: number, b: number) { return a + b; }
    const add5 = myBind(add, null, 5);
    expect(add5(3)).toBe(8);
  });
});
