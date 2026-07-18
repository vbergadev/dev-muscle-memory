/**
 * Exercise: combine utilities (Merge / PartialByKeys / RequiredByKeys)
 *
 * Goal: Build richer object transforms by composing Pick/Omit/Partial/Required.
 *   - Merge<A, B>            -> all keys of A and B; on overlap, B wins
 *   - PartialByKeys<T, K>    -> make only the keys K optional, leave the rest
 *   - RequiredByKeys<T, K>   -> make only the keys K required, leave the rest
 *
 * Prerequisites:
 *   - intersection types and re-mapping to flatten them
 *   - `Pick`, `Omit`, `Partial`, `Required`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/utility-types.html
 *
 * Time budget: ~20 minutes.
 */

export type Merge<A, B> = A;

export type PartialByKeys<T, K extends keyof T> = T;

export type RequiredByKeys<T, K extends keyof T> = T;
