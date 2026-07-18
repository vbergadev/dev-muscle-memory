import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { IntervalCounter } from '../src/exercises/03-interval-counter';

// Contract: the current count must be rendered as the text content of an
// element with data-testid="count" (e.g. <span data-testid="count">{count}</span>).

describe('IntervalCounter', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('starts at 0', () => {
    render(<IntervalCounter />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  it('increments by 1 every second', () => {
    render(<IntervalCounter />);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  it('respects the step prop', () => {
    render(<IntervalCounter step={5} />);
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  it('clears the interval on unmount (no more ticks after)', () => {
    const { unmount } = render(<IntervalCounter />);
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    unmount();
    // If the interval was not cleared, advancing timers would throw about
    // updating an unmounted component. This must stay silent.
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(vi.getTimerCount()).toBe(0);
  });
});
