/**
 * Exercise: MyRecord
 *
 * Goal: Reimplement the built-in Record<K, V>: build an object type whose keys are K and whose values are all V.
 *
 * Prerequisites:
 *   - mapped types over `K in ...`
 *   - `keyof any`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~20 minutes.
 */

export type MyRecord<K extends keyof any, V> = object;
