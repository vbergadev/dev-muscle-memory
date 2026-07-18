import { describe, it, expect } from 'vitest';
import { promiseRace } from '../src/03-promise-race';

describe('03-promise-race', () => {
  it('resolves with the first to settle', async () => {
    const fast = new Promise<string>((res) => setTimeout(() => res('fast'), 5));
    const slow = new Promise<string>((res) => setTimeout(() => res('slow'), 50));
    expect(await promiseRace([fast, slow])).toBe('fast');;
  });
});
