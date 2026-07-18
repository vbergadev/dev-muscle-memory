# Week 9 — Context, useReducer, custom hooks

## Goal of the week
Master Context and `useReducer`, and build a small library of custom hooks.

## Concepts you should own by the end
- Context API and when to use it
- `useReducer` vs `useState`
- Custom hooks and the rules of hooks

## Required reading
- https://react.dev/learn/managing-state

## Parallel track (DSA)
Chapter 10 (graphs). Implement in `dsa/ch-10-graphs/`.

## Exercises this week
1. `01-theme-provider.tsx` — Context + `useTheme`
2. `02-auth-reducer.tsx` — `useAuth` with `useReducer`
3. `03-use-local-storage.ts`
4. `04-use-debounce.ts`
5. `05-use-fetch.ts`
6. `06-use-media-query.ts`
7. `07-use-on-click-outside.ts`
8. `08-use-key-press.ts`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
# (test-only week: hooks are exercised via Vitest, no browser shell)
```

## Deliverable by end of week
Your custom hooks library, with tests.

## Checkpoint
If you can't explain why `useReducer` exists, review.
