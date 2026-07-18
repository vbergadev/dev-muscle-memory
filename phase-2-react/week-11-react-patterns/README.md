# Week 11 — Advanced patterns

## Goal of the week
Implement compound components, headless components, the slot pattern, and the state reducer pattern.

## Concepts you should own by the end
- Compound components
- Headless (logic without UI)
- Slot pattern with function children
- State reducer pattern

## Required reading
- https://github.com/krasimir/react-in-patterns
- https://kentcdodds.com/blog (Advanced React Patterns)

## Parallel track (DSA)
Chapter 12 (algorithm patterns). Implement in `dsa/ch-12-algorithm-patterns/`.

## Exercises this week
1. `01-compound-tabs.tsx` — `<Tabs><Tabs.Tab/></Tabs>`
2. `02-headless-toggle.tsx` — render props
3. `03-slot-pattern.tsx`
4. `04-state-reducer.tsx`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
pnpm dev              # open the exercises in the browser (one per route)
```

## Deliverable by end of week
A mini library of your own headless components.

## Checkpoint
If you don't know the difference between compound and headless, review.
