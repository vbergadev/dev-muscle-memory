import { describe, it, expect } from 'vitest';
import { withTimeout } from '../src/05-with-timeout';

describe('05-with-timeout', () => {
  it('resolves when fast enough', async () => {
    const p = new Promise<string>((res) => setTimeout(() => res('done'), 5));
    expect(await withTimeout(p, 50)).toBe('done');;
  });

  it('rejects when too slow', async () => {
    const p = new Promise<string>((res) => setTimeout(() => res('late'), 50));
    await expect(withTimeout(p, 5)).rejects.toBeInstanceOf(Error);;
  });
});
