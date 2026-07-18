import { describe, it, expect } from 'vitest';
import { deepClone } from '../src/10-deep-clone';

describe('10-deep-clone', () => {
  it('clones nested structures', () => {
    const src = { a: 1, b: { c: [1, 2] } };
    const copy = deepClone(src);
    expect(copy).toEqual(src);
    expect(copy.b).not.toBe(src.b);
  });

  it('mutating the clone does not touch the original', () => {
    const src = { list: [1, 2, 3] };
    const copy = deepClone(src);
    copy.list.push(4);
    expect(src.list).toEqual([1, 2, 3]);
  });
});
