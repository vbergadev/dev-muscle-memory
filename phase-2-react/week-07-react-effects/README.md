# Week 7 — Effects, refs, mental lifecycle

## Goal of the week
Really understand `useEffect`: synchronization, cleanup, race conditions, and when NOT to use an effect. Refs for focusing the DOM and for values that shouldn't trigger re-renders.

## Concepts you should own by the end
- `useEffect`: dependencies and the cleanup function
- Fetch race conditions and how to avoid them (AbortController / `ignore` flag)
- `useRef` for DOM nodes and mutable values
- The classic setInterval closure bug and functional updates
- When you **don't** need an effect

## Required reading
- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/you-might-not-need-an-effect
- https://react.dev/reference/react/useRef
- https://overreacted.io/making-setinterval-declarative-with-react-hooks/

## Parallel track (DSA)
Chapter 8 (recursion). Implement in `dsa/ch-08-recursion/`.

## Exercises this week
1. `01-fetch-with-cleanup.tsx` — fetch with `useEffect` + cleanup (no race)
2. `02-focus-input.tsx` — focus an input with `useRef`
3. `03-interval-counter.tsx` — counter with `setInterval` + cleanup
4. `04-localstorage-sync.tsx` — sync state with localStorage
5. `05-intersection-observer.tsx` — reveal an element with IntersectionObserver

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
pnpm dev              # test the exercises manually in the browser
```

## Deliverable by end of week
Tests passing + a short README documenting **when not to use an effect**. Exercises 01 and 05 have no automated test — verify them in the browser with `pnpm dev`.

## Checkpoint
If you still use `useEffect` to derive state that could be computed during render, re-read "You Might Not Need an Effect".
