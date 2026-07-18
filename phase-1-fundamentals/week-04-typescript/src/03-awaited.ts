/**
 * Exercise: MyAwaited
 *
 * Goal: Extract the type a Promise resolves to. MyAwaited<Promise<number>> should be number, and it should unwrap nested promises.
 *
 * Prerequisites:
 *   - conditional types with `infer`
 *   - recursive conditional types
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 *
 * Time budget: ~20 minutes.
 */

export type MyAwaited<T> = T;
