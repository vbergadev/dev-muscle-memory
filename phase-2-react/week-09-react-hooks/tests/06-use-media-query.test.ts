import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useMediaQuery } from '../src/exercises/06-use-media-query';

afterEach(() => vi.unstubAllGlobals());

describe('useMediaQuery', () => {
  it('returns whether the query matches', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }));
    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(result.current).toBe(true);
  });
});
