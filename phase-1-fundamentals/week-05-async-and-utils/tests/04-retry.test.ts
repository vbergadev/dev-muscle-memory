import { describe, it, expect } from 'vitest';
import { retry } from '../src/04-retry';

describe('04-retry', () => {
  it('resolves once fn succeeds', async () => {
    let n = 0;
    const fn = () => { n++; return n < 3 ? Promise.reject(new Error('no')) : Promise.resolve('ok'); };
    expect(await retry(fn, 5)).toBe('ok');;
  });

  it('rejects after exhausting attempts', async () => {
    const fn = () => Promise.reject(new Error('always'));
    await expect(retry(fn, 2)).rejects.toThrow('always');;
  });
});
