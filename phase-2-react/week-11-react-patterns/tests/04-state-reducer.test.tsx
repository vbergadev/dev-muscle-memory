import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../src/exercises/04-state-reducer';

describe('useToggle (state reducer)', () => {
  it('toggles by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.on).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.on).toBe(true);
  });

  it('lets a custom reducer veto the change', () => {
    const keepOff = (state: { on: boolean }) => state;
    const { result } = renderHook(() => useToggle(keepOff));
    act(() => result.current.toggle());
    expect(result.current.on).toBe(false);
  });
});
