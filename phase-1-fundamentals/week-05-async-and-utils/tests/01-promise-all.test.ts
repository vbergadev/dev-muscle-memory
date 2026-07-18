import { describe, it, expect } from 'vitest';
import { promiseAll } from '../src/01-promise-all';

describe('01-promise-all', () => {
  it('resolves in order', async () => {
    expect(await promiseAll([Promise.resolve(1), Promise.resolve(2)])).toEqual([1, 2]);;
  });

  it('rejects if any rejects', async () => {
    await expect(promiseAll([Promise.resolve(1), Promise.reject(new Error('boom'))])).rejects.toThrow('boom');;
  });

  it('resolves empty to empty array', async () => {
    expect(await promiseAll([])).toEqual([]);;
  });
});
