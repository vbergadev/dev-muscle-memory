/**
 * Exercise: MyOmit
 *
 * Goal: Reimplement the built-in Omit<T, K>: build an object type with all keys of T except those in K.
 *
 * Prerequisites:
 *   - mapped types
 *   - key remapping with `as` / `Exclude`
 *   - `keyof`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~20 minutes.
 */

export type MyOmit<T, K extends keyof T> = T;
