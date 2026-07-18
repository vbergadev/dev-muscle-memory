/**
 * Exercise: recursive infer on tuples (FlattenArray / LastOf / Pop)
 *
 * Goal: Walk a tuple with `infer` in different positions.
 *   - FlattenArray<T>  -> flatten one level of nested tuples: [1, [2, 3], 4] -> [1, 2, 3, 4]
 *   - LastOf<T>        -> the last element type (never if empty)
 *   - Pop<T>           -> T without its last element
 *
 * Prerequisites:
 *   - `infer` at the head (`[infer H, ...infer R]`) and tail (`[...infer R, infer L]`)
 *   - recursion in conditional types
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 *
 * Time budget: ~20 minutes.
 */

export type FlattenArray<T extends unknown[]> = T;

export type LastOf<T extends unknown[]> = never;

export type Pop<T extends unknown[]> = T;
