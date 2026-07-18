# Week 2 — Closures, scope, `this`, event loop

## Goal of the week
Understand closures, lexical scope, the event loop, and the 5 forms of `this`. Reimplement language utilities by hand.

## Concepts you should own by the end
- Closures and lexical scope
- Event loop (macro/microtasks)
- `this` in a function, method, arrow, bind, class
- Private state via closure

## Required reading
- https://javascript.info (ch. 6–7)
- Video "What the heck is the event loop?" (Philip Roberts)
- Video "In The Loop" (Jake Archibald)

## Parallel track (DSA)
Chapter 3 (stacks). Implement in `dsa/ch-03-stacks/`.

## Exercises this week
1. `01-once.ts`
2. `02-after.ts`
3. `03-counter-closure.ts`
4. `04-private-module.ts`
5. `05-this-binding.ts`
6. `06-my-bind.ts`
7. `07-my-call.ts`
8. `08-my-apply.ts`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
All exercises passing, with Vitest tests.

## Checkpoint
If you still confuse when `this` is the object vs the global, review before moving on.
