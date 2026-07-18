import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../src/exercises/03-use-local-storage';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('reads the initial value and persists updates as JSON', () => {
    const { result } = renderHook(() => useLocalStorage('k', 'init'));
    expect(result.current[0]).toBe('init');
    act(() => result.current[1]('next'));
    expect(result.current[0]).toBe('next');
    expect(JSON.parse(localStorage.getItem('k')!)).toBe('next');
  });
});
