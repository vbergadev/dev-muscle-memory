# Week 1 — JS fundamentals revisited

## Goal of the week
Rebuild the basic feel of JS. No advanced array methods, no AI, no auto-snippets. Type `for` loops, `if/else`, functions, and recursion until it becomes reflex.

## Concepts you should own by the end
- Primitive types and coercion (`==` vs `===`)
- `let`, `const`, `var` and scope differences
- Functions: declaration, expression, arrow
- Loops `for`, `while`, `for...of`, `for...in`
- Simple recursion and base case
- Basic string/array manipulation **without** `.filter`, `.map`, `.reduce`

## Required reading
- https://javascript.info/first-steps
- https://javascript.info/data-types
- https://javascript.info/logical-operators

## Parallel track (DSA)
Chapters 1 and 2 of Loiane's book (JS overview + arrays). Implement in `dsa/ch-01-js-overview/` and `ch-02-arrays/`.

## Exercises this week
1. `01-fizzbuzz.ts` — classic FizzBuzz
2. `02-reverse-string.ts` — reverse a string without `.reverse()`
3. `03-palindrome.ts` — palindrome check
4. `04-fibonacci-iterative.ts`
5. `05-fibonacci-recursive.ts`
6. `06-factorial-iterative.ts`
7. `07-factorial-recursive.ts`
8. `08-sum-array.ts` — sum without `.reduce`
9. `09-max-in-array.ts` — max without `Math.max(...arr)`
10. `10-min-in-array.ts`
11. `11-count-vowels.ts`
12. `12-is-anagram.ts`
13. `13-remove-duplicates.ts` — without `Set`
14. `14-flatten-array.ts` — 1 level, without `.flat()`
15. `15-manual-filter.ts`
16. `16-manual-map.ts`
17. `17-manual-reduce.ts`
18. `18-manual-includes.ts`
19. `19-manual-index-of.ts`
20. `20-capitalize.ts`
21. `21-title-case.ts`
22. `22-count-occurrences.ts`
23. `23-most-frequent.ts`
24. `24-is-power-of-two.ts`
25. `25-gcd.ts`
26. `26-lcm.ts`
27. `27-is-prime.ts`
28. `28-primes-up-to-n.ts`
29. `29-range.ts`
30. `30-zip-arrays.ts`

## How to run
```bash
pnpm install          # (at the root, once)
pnpm test             # run this week's tests (failing on purpose)
pnpm test:watch       # watch mode while you implement
```

## Deliverable by end of week
30/30 tests passing. Final commit: `feat(week-01): complete js fundamentals`.

## Checkpoint
If after 5 days you still hesitate to write a classic `for` loop, review the required reading before moving on.
