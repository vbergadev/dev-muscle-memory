import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../src/exercises/04-use-debounce';

describe('useDebounce', () => {
  it('delays updates until the value settles', () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ v }) => useDebounce(v, 100), {
      initialProps: { v: 'a' },
    });
    expect(result.current).toBe('a');
    rerender({ v: 'b' });
    expect(result.current).toBe('a');
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('b');
    vi.useRealTimers();
  });
});
