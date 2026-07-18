import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../src/exercises/05-use-fetch';

afterEach(() => vi.unstubAllGlobals());

describe('useFetch', () => {
  it('loads then resolves data', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 1 }) }));
    const { result } = renderHook(() => useFetch<{ id: number }>('/api/x'));
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data).toEqual({ id: 1 });
    expect(result.current.error).toBeNull();
  });
});
