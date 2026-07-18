import { describe, it, expect } from 'vitest';
import { manualMap } from '../src/16-manual-map';

describe('manualMap', () => {
  it('doubles numbers', () => {
    expect(manualMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  });

  it('maps to a different type', () => {
    expect(manualMap([1, 2], (x) => `#${x}`)).toEqual(['#1', '#2']);
  });

  it('handles empty', () => {
    expect(manualMap([], (x) => x)).toEqual([]);
  });
});
