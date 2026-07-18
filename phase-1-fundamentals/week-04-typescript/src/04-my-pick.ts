/**
 * Exercise: MyPick
 *
 * Goal: Reimplement the built-in Pick<T, K>: build an object type with only the keys K of T.
 *
 * Prerequisites:
 *   - mapped types over a union of keys
 *   - `keyof`
 *   - indexed access `T[K]`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~20 minutes.
 */

export type MyPick<T, K extends keyof T> = T;
