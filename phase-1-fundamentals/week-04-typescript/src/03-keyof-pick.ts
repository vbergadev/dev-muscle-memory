/**
 * Exercise: keyof & Pick (MyKeys / MyValues / MyPick)
 *
 * Goal: Read the keys and values of an object type, then rebuild a subset.
 *   - MyKeys<T>      -> the union of T's keys
 *   - MyValues<T>    -> the union of T's value types
 *   - MyPick<T, K>   -> an object type with only the keys K of T
 *
 * Prerequisites:
 *   - `keyof T`
 *   - indexed access with a union key (`T[keyof T]`)
 *   - mapped types over a union of keys
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 *
 * Time budget: ~15 minutes.
 */

export type MyKeys<T> = T;

export type MyValues<T> = T;

export type MyPick<T, K extends keyof T> = T;
