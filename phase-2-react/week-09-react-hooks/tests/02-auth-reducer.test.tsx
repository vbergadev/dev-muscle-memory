import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuth } from '../src/exercises/02-auth-reducer';

describe('useAuth', () => {
  it('logs in and out', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.user).toBeNull();
    act(() => result.current.login('ada'));
    expect(result.current.user).toBe('ada');
    act(() => result.current.logout());
    expect(result.current.user).toBeNull();
  });
});
