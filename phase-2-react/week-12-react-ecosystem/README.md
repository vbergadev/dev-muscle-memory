# Week 12 — Modern React ecosystem

## Goal of the week
Build a small but complete app with TanStack Query, TanStack Router, and Zustand.

## Concepts you should own by the end
- Server state with TanStack Query (cache, invalidation, mutations, optimistic)
- Type-safe routing (TanStack Router)
- Global state with Zustand

## Required reading
- https://tanstack.com/query/latest
- https://tanstack.com/router/latest
- https://github.com/pmndrs/zustand

## Parallel track (DSA)
Chapters 13–15 (advanced, FP, Big-O). Closes the track in `dsa/ch-13-15-advanced/`.

## Exercises this week
1. `01-query-app.tsx` — fetch a public API with TanStack Query
2. `02-typed-router.tsx` — TanStack Router + type-safe params (browser-only, no automated test)
3. `03-zustand-store.ts` — Zustand store

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
pnpm dev              # runs the router exercise (02) in the browser
```

## Deliverable by end of week
A small but complete app with this stack.

## Checkpoint
If you don't know the difference between server state and client state, review.
