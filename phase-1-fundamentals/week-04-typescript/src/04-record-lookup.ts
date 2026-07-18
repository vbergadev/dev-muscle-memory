/**
 * Exercise: Record & lookup (MyRecord / PropType / MyReadonlyRecord)
 *
 * Goal: Build object types from a set of keys, and look a single property up.
 *   - MyRecord<K, V>         -> an object with each key in K set to type V
 *   - PropType<T, K>         -> the type of property K in T
 *   - MyReadonlyRecord<K, V> -> like MyRecord, but every property readonly
 *
 * Prerequisites:
 *   - mapped types over a key union (`{ [P in K]: V }`)
 *   - `keyof any` as the constraint for "any valid key"
 *   - indexed access (`T[K]`)
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 *
 * Time budget: ~12 minutes.
 */

export type MyRecord<K extends keyof any, V> = V;

export type PropType<T, K extends keyof T> = T;

export type MyReadonlyRecord<K extends keyof any, V> = V;
