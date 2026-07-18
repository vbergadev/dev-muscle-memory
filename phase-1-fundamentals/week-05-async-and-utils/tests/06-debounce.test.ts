import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from '../src/06-debounce';

describe('06-debounce', () => {
  it('fires once after the delay', () => {
    vi.useFakeTimers();
    let calls = 0;
    const d = debounce(() => { calls++; }, 100);
    d(); d(); d();
    vi.advanceTimersByTime(100);
    expect(calls).toBe(1);
    vi.useRealTimers();
  });

  it('does not fire before the delay', () => {
    vi.useFakeTimers();
    let calls = 0;
    const d = debounce(() => { calls++; }, 100);
    d();
    vi.advanceTimersByTime(50);
    expect(calls).toBe(0);
    vi.useRealTimers();
  });
});
