/**
 * Exercise: key remapping (MyOmit / PickByType / OmitByType)
 *
 * Goal: Filter an object type's properties using `as` key remapping combined
 * with a conditional.
 *   - MyOmit<T, K>       -> T without the keys in K
 *   - PickByType<T, U>   -> only the properties of T whose value is assignable to U
 *   - OmitByType<T, U>   -> only the properties of T whose value is NOT assignable to U
 *
 * Prerequisites:
 *   - key remapping with `as` in a mapped type
 *   - filtering keys by mapping them to `never`
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 *
 * Time budget: ~18 minutes.
 */

export type MyOmit<T, K extends keyof T> = T;

export type PickByType<T, U> = T;

export type OmitByType<T, U> = T;
