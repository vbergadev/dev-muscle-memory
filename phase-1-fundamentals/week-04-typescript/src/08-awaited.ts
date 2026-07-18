/**
 * Exercise: unwrapping Promises (MyAwaited / Unwrap / IsPromise)
 *
 * Goal: Reimplement the Awaited helper and two smaller Promise utilities.
 *   - MyAwaited<T>  -> the value a (possibly nested) Promise resolves to
 *   - Unwrap<T>     -> unwrap a single Promise level (leave non-Promises as-is)
 *   - IsPromise<T>  -> true if T is a Promise, false otherwise
 *
 * Prerequisites:
 *   - `infer` inside a conditional type
 *   - recursion in conditional types (for the nested case)
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
 *
 * Time budget: ~18 minutes.
 */

export type MyAwaited<T> = T;

export type Unwrap<T> = T;

export type IsPromise<T> = false;
