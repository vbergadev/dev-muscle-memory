import { describe, it, expect } from 'vitest';
import { promiseAllSettled } from '../src/02-promise-all-settled';

describe('02-promise-all-settled', () => {
  it('reports fulfilled and rejected', async () => {
    const r = await promiseAllSettled([Promise.resolve(1), Promise.reject('x')]);
    expect(r[0]).toEqual({ status: 'fulfilled', value: 1 });
    expect(r[1]).toEqual({ status: 'rejected', reason: 'x' });;
  });
});
