import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from '../src/07-throttle';

describe('07-throttle', () => {
  it('runs immediately then throttles', () => {
    vi.useFakeTimers();
    let calls = 0;
    const t = throttle(() => { calls++; }, 100);
    t(); t(); t();
    expect(calls).toBe(1);
    vi.advanceTimersByTime(100);
    t();
    expect(calls).toBe(2);
    vi.useRealTimers();
  });
});
