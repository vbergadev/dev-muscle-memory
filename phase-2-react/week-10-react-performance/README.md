# Week 10 — Performance

## Goal of the week
Measure re-renders with the Profiler and apply `memo`, `useMemo`, `useCallback` correctly. "Measure first."

## Concepts you should own by the end
- When (and when NOT) to memoize
- `memo`, `useMemo`, `useCallback`
- List virtualization
- React DevTools Profiler

## Required reading
- https://overreacted.io (Before You memo())
- https://kentcdodds.com/blog (profiler, re-render)

## Parallel track (DSA)
Chapter 11 (sorting and searching). Implement in `dsa/ch-11-sorting-searching/`.

## Exercises this week
1. `01-big-list.tsx` — big list + Profiler
2. `02-apply-memo.tsx` — React.memo (render-count enforced)
3. `03-apply-use-memo.tsx`
4. `04-apply-use-callback.tsx`
5. `05-virtualized-list.tsx` — from scratch, no `react-window`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
pnpm dev              # open the exercises in the browser (one per route)
```

## Deliverable by end of week
Before/after Profiler screenshots in the README.

## Checkpoint
If you memoize without measuring, review the "measure first" principle.
