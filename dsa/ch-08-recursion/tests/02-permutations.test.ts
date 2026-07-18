import { describe, it, expect } from 'vitest';
import { permutations } from '../src/02-permutations';

describe('02-permutations', () => {
  it('permutes two chars', () => {
    expect(permutations('ab').sort()).toEqual(['ab', 'ba']);
  });

  it('count is n!', () => {
    expect(permutations('abc')).toHaveLength(6);
  });

  it('single char', () => {
    expect(permutations('a')).toEqual(['a']);
  });
});
