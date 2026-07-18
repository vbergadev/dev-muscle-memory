import { describe, it, expect } from 'vitest';
import { multiplyMatrices } from '../src/02-multiply-matrices';

describe('multiplyMatrices', () => {
  it('multiplies 2x2 matrices', () => {
    expect(
      multiplyMatrices(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ),
    ).toEqual([
      [19, 22],
      [43, 50],
    ]);
  });

  it('multiplies with the identity matrix', () => {
    expect(
      multiplyMatrices(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('handles non-square compatible shapes (2x3 · 3x2)', () => {
    expect(
      multiplyMatrices(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [7, 8],
          [9, 10],
          [11, 12],
        ],
      ),
    ).toEqual([
      [58, 64],
      [139, 154],
    ]);
  });
});
