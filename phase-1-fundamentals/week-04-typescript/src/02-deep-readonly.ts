/**
 * Exercise: DeepReadonly
 *
 * Goal: Make every property of T readonly, recursively (nested objects too).
 *
 * Prerequisites:
 *   - mapped types
 *   - the `readonly` modifier
 *   - recursive types
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~20 minutes.
 */

export type DeepReadonly<T> = T;
