import { describe, it, expect } from 'vitest';
import { createContainer } from '../src/05-di-container';

describe('createContainer', () => {
  it('resolves a registered factory', () => {
    const c = createContainer();
    c.register('greeter', () => ({ hi: () => 'hello' }));
    expect(c.resolve<{ hi: () => string }>('greeter').hi()).toBe('hello');
  });

  it('caches the instance (singleton)', () => {
    const c = createContainer();
    let calls = 0;
    c.register('svc', () => {
      calls += 1;
      return { n: calls };
    });
    c.resolve('svc');
    c.resolve('svc');
    expect(calls).toBe(1);
  });
});
