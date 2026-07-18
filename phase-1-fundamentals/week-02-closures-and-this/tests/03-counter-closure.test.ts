import { describe, it, expect } from 'vitest';
import { makeCounter } from '../src/03-counter-closure';

describe('03-counter-closure', () => {
  it('counts up on each call', () => {
    const c = makeCounter();
    expect(c()).toBe(0);
    expect(c()).toBe(1);
    expect(c()).toBe(2);
  });

  it('respects a custom start', () => {
    const c = makeCounter(10);
    expect(c()).toBe(10);
    expect(c()).toBe(11);
  });

  it('keeps independent state per counter', () => {
    const a = makeCounter();
    const b = makeCounter();
    a(); a();
    expect(b()).toBe(0);
  });
});
