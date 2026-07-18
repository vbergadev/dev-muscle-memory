/**
 * Exercise: keys meet strings (Getters / CamelCase / AppendPrefix)
 *
 * Goal: Combine key remapping with template literal types.
 *   - Getters<T>          -> for each key K of T, a `get<Key>` method returning T[K]
 *   - CamelCase<S>        -> turn a kebab-case string type into camelCase
 *   - AppendPrefix<T, P>  -> prefix every key of T with the string P
 *
 * Prerequisites:
 *   - key remapping with `as` and template literals in the key position
 *   - the intrinsic `Capitalize` helper
 *   - recursion for CamelCase
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 *
 * Time budget: ~22 minutes.
 */

export type Getters<T> = T;

export type CamelCase<S extends string> = S;

export type AppendPrefix<T, P extends string> = T;
