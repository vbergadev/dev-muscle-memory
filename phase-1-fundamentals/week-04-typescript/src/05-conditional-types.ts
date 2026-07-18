/**
 * Exercise: conditional types (If / MyExclude / MyExtract / MyNonNullable)
 *
 * Goal: Use the `T extends U ? X : Y` conditional, and see how it distributes
 * over unions.
 *   - If<C, T, F>       -> T when C is true, F when C is false
 *   - MyExclude<T, U>   -> remove from union T the members assignable to U
 *   - MyExtract<T, U>   -> keep from union T only the members assignable to U
 *   - MyNonNullable<T>  -> remove null and undefined from T
 *
 * Prerequisites:
 *   - conditional types
 *   - distributive conditional types over unions
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 *
 * Time budget: ~15 minutes.
 */

export type If<C extends boolean, T, F> = T;

export type MyExclude<T, U> = T;

export type MyExtract<T, U> = T;

export type MyNonNullable<T> = T;
