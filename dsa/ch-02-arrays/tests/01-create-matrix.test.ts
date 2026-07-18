import { describe, it, expect } from 'vitest';
import { createMatrix } from '../src/01-create-matrix';

describe('createMatrix', () => {
  it('builds a matrix of the right shape', () => {
    expect(createMatrix(2, 3, 0)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('fills with the given value', () => {
    expect(createMatrix(1, 2, 7)).toEqual([[7, 7]]);
  });

  it('gives each row an independent array', () => {
    const m = createMatrix(2, 2, 0);
    m[0]![0] = 9;
    expect(m[1]![0]).toBe(0);
  });
});
