# Week 4 — Essential TypeScript

## Goal of the week
Type everything you did in weeks 1–3 and master generics + utility types, writing your own. This week is **type-level**: you solve it in the type system, not at runtime.

## Concepts you should own by the end
- Everyday types, narrowing
- Generics
- Mapped types (`[K in keyof T]`) and the `?` / `readonly` modifiers
- Conditional types with `infer`
- `Pick`, `Omit`, `Partial`, `Required`, `Record`, `ReturnType`

## Required reading
- https://www.typescriptlang.org/docs/handbook/intro.html
- https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
- https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
- https://github.com/type-challenges/type-challenges (solve the 15 `easy` ones)

## Parallel track (DSA)
Chapter 5 (linked lists). Implement in `dsa/ch-05-linked-lists/`.

## Exercises this week
1. `01-deep-partial.ts` — `DeepPartial<T>`
2. `02-deep-readonly.ts` — `DeepReadonly<T>`
3. `03-awaited.ts` — `MyAwaited<T>`
4. `04-my-pick.ts` — reimplement `Pick`
5. `05-my-omit.ts` — reimplement `Omit`
6. `06-my-record.ts` — reimplement `Record`
7. **Extra:** the 15 `easy` type-challenges (solve on their site/repo)

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
# note: tests here run in Vitest typecheck mode (they check types, not runtime)
```

## Deliverable by end of week
`pnpm test` green + the 15 easy type-challenges solved.

## Checkpoint
If you can't read a nested mapped type without freezing, review the handbook (Mapped + Conditional Types).
