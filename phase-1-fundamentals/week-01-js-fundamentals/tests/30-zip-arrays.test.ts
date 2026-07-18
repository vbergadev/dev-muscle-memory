import { describe, it, expect } from 'vitest';
import { zipArrays } from '../src/30-zip-arrays';

describe('zipArrays', () => {
  it('zips equal-length arrays', () => {
    expect(zipArrays([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);
  });

  it('stops at the shorter array', () => {
    expect(zipArrays([1, 2, 3], ['a'])).toEqual([[1, 'a']]);
  });

  it('empty when one is empty', () => {
    expect(zipArrays([], [1, 2])).toEqual([]);
  });
});
