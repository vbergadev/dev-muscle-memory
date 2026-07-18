import { describe, it, expect } from 'vitest';
import { flattenArray } from '../src/14-flatten-array';

describe('flattenArray', () => {
  it('flattens one level', () => {
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it('handles no nesting', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles empty', () => {
    expect(flattenArray([])).toEqual([]);
  });
});
