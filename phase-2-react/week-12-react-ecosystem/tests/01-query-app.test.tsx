import { describe, it, expect, vi, afterEach } from 'vitest';
import type { ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryApp } from '../src/exercises/01-query-app';

afterEach(() => vi.unstubAllGlobals());

function withClient(children: ReactNode) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

describe('QueryApp', () => {
  it('renders the fetched name', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ name: 'Ada' }) }));
    render(withClient(<QueryApp />));
    await waitFor(() => expect(screen.getByText('Ada')).toBeInTheDocument());
  });
});
