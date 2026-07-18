import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterApp } from './exercises/02-typed-router';

// Browser entry for the router exercise. `pnpm dev` renders it (it throws until
// you implement it). QueryApp and the Zustand store are exercised via Vitest.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
);
