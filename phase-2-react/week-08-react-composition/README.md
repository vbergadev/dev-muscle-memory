# Week 8 — Composition, lifting state, controlled/uncontrolled

## Goal of the week
Compose components with `children`, lift state up, and master controlled vs uncontrolled forms.

## Concepts you should own by the end
- Composition with typed `children`
- Lifting state up
- Controlled vs uncontrolled
- Preserving/resetting state

## Required reading
- https://react.dev/learn/sharing-state-between-components
- https://react.dev/learn/preserving-and-resetting-state

## Parallel track (DSA)
Chapter 9 (trees). Implement in `dsa/ch-09-trees/`.

## Exercises this week
1. `01-card-children.tsx` — Panel with a header slot + children
2. `02-modal-compound.tsx` — compound Modal (Header/Body/Footer)
3. `03-controlled-form.tsx` — controlled form + validation
4. `04-uncontrolled-form.tsx` — with refs
5. `05-lifting-state.tsx` — two inputs that mirror each other

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
pnpm dev              # open the exercises in the browser (one per route)
```

## Deliverable by end of week
All components with tests.

## Checkpoint
If you don't know when to use controlled vs uncontrolled, review.
