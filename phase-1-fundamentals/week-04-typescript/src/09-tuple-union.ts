/**
 * Exercise: tuples <-> unions (TupleToUnion / TupleToObject / Includes)
 *
 * Goal: Move between tuple types and unions/objects.
 *   - TupleToUnion<T>   -> a union of the tuple's element types
 *   - TupleToObject<T>  -> an object whose keys AND values are the tuple's elements
 *   - Includes<T, U>    -> true if U is one of the tuple's element types, else false
 *
 * Prerequisites:
 *   - indexed access with `number` (`T[number]`)
 *   - mapped types over `T[number]`
 *   - a conditional to test membership
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 *
 * Time budget: ~15 minutes.
 */

export type TupleToUnion<T extends readonly unknown[]> = T;

export type TupleToObject<T extends readonly (keyof any)[]> = T;

export type Includes<T extends readonly unknown[], U> = false;
