/**
 * Exercise: variadic tuples (Push / Unshift / Concat / MyReverse)
 *
 * Goal: Build new tuple types by spreading existing ones.
 *   - Push<T, V>     -> T with V appended
 *   - Unshift<T, V>  -> T with V prepended
 *   - Concat<A, B>   -> A followed by B
 *   - MyReverse<T>   -> T reversed
 *
 * Prerequisites:
 *   - variadic tuple spreads (`[...T, V]`)
 *   - recursion with `[infer H, ...infer R]`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 *
 * Time budget: ~18 minutes.
 */

export type Push<T extends unknown[], V> = T;

export type Unshift<T extends unknown[], V> = T;

export type Concat<A extends unknown[], B extends unknown[]> = A;

export type MyReverse<T extends unknown[]> = T;
