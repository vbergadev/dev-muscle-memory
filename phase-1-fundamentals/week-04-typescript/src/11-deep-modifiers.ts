/**
 * Exercise: recursive modifiers (DeepPartial / DeepReadonly / DeepMutable)
 *
 * Goal: Apply a modifier all the way down a nested object type, recursively.
 *   - DeepPartial<T>   -> every property optional, at every depth
 *   - DeepReadonly<T>  -> every property readonly, at every depth
 *   - DeepMutable<T>   -> remove readonly at every depth
 *
 * Prerequisites:
 *   - recursive mapped types
 *   - a conditional to decide "recurse or stop" (`T[K] extends object ? ... : T[K]`)
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~20 minutes.
 */

export type DeepPartial<T> = T;

export type DeepReadonly<T> = T;

export type DeepMutable<T> = T;
