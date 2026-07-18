import { describe, it, expect } from 'vitest';
import { renderHook, act, fireEvent } from '@testing-library/react';
import { useKeyPress } from '../src/exercises/08-use-key-press';

describe('useKeyPress', () => {
  it('tracks key down and up', () => {
    const { result } = renderHook(() => useKeyPress('Enter'));
    expect(result.current).toBe(false);
    act(() => {
      fireEvent.keyDown(window, { key: 'Enter' });
    });
    expect(result.current).toBe(true);
    act(() => {
      fireEvent.keyUp(window, { key: 'Enter' });
    });
    expect(result.current).toBe(false);
  });
});
