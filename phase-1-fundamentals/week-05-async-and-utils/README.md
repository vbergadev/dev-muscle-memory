# Week 5 — Async, Promises, classic utilities

## Goal of the week
Reimplement Promise combinators from scratch and a small utilities library (debounce, throttle, memoize, deepClone...).

## Concepts you should own by the end
- Promises: the constructor, microtask queue
- async/await
- Combinators: all, allSettled, race
- Debounce vs throttle, memoization

## Required reading
- https://javascript.info/async
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

## Parallel track (DSA)
Chapter 6 (sets). Implement in `dsa/ch-06-sets/`.

## Exercises this week
1. `01-promise-all.ts`
2. `02-promise-all-settled.ts`
3. `03-promise-race.ts`
4. `04-retry.ts`
5. `05-with-timeout.ts`
6. `06-debounce.ts`
7. `07-throttle.ts`
8. `08-curry.ts`
9. `09-memoize.ts`
10. `10-deep-clone.ts`
11. `11-deep-equal.ts`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
Your utilities library, each function with tests.

## Checkpoint
If you can't explain why `Promise.all` rejects on the first error, review.
