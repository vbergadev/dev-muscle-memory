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
16 exercises, each bundling several related type puzzles. Solve them in order —
they climb from indexed access to recursive template-literal types.

**Basics** — indexed access, mapped types, `keyof`, modifiers
1. `01-indexed-access.ts` — `First`, `Length`, `ElementType`
2. `02-mapped-modifiers.ts` — `MyPartial`, `MyRequired`, `MyReadonly`, `Mutable`
3. `03-keyof-pick.ts` — `MyKeys`, `MyValues`, `MyPick`
4. `04-record-lookup.ts` — `MyRecord`, `PropType`, `MyReadonlyRecord`

**Intermediate** — conditional types, key remapping, `infer`
5. `05-conditional-types.ts` — `If`, `MyExclude`, `MyExtract`, `MyNonNullable`
6. `06-omit-and-filter.ts` — `MyOmit`, `PickByType`, `OmitByType`
7. `07-function-types.ts` — `MyReturnType`, `MyParameters`, `FirstParameter`
8. `08-awaited.ts` — `MyAwaited`, `Unwrap`, `IsPromise`
9. `09-tuple-union.ts` — `TupleToUnion`, `TupleToObject`, `Includes`
10. `10-by-keys.ts` — `Merge`, `PartialByKeys`, `RequiredByKeys`

**Advanced** — recursion, variadic tuples, template-literal types
11. `11-deep-modifiers.ts` — `DeepPartial`, `DeepReadonly`, `DeepMutable`
12. `12-variadic-tuples.ts` — `Push`, `Unshift`, `Concat`, `MyReverse`
13. `13-recursive-infer.ts` — `FlattenArray`, `LastOf`, `Pop`
14. `14-template-literals.ts` — `MyCapitalize`, `Replace`, `ReplaceAll`
15. `15-string-parsing.ts` — `TrimLeft`, `Trim`, `Split`
16. `16-object-string-magic.ts` — `Getters`, `CamelCase`, `AppendPrefix`

> **Extra:** the 15 `easy` [type-challenges](https://github.com/type-challenges/type-challenges) are great follow-up practice.

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
