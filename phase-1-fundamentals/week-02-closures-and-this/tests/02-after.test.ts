import { describe, it, expect } from 'vitest';
import { after } from '../src/02-after';

describe('02-after', () => {
  it('does not call fn before the nth call', () => {
    let calls = 0;
    const f = after(3, () => { calls++; });
    f(); f();
    expect(calls).toBe(0);
  });

  it('calls fn from the nth call onward', () => {
    let calls = 0;
    const f = after(3, () => { calls++; });
    f(); f(); f(); f();
    expect(calls).toBe(2);
  });
});
