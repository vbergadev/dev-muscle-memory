/**
 * Exercise: mapped types & modifiers (MyPartial / MyRequired / MyReadonly / Mutable)
 *
 * Goal: Reimplement the four "shallow" modifier utilities with a mapped type and
 * the `?` / `readonly` modifiers (and their `-` removals).
 *   - MyPartial<T>  -> every property optional
 *   - MyRequired<T> -> every property required (remove `?`)
 *   - MyReadonly<T> -> every property readonly
 *   - Mutable<T>    -> every property writable (remove `readonly`)
 *
 * Prerequisites:
 *   - mapped types `{ [K in keyof T]: ... }`
 *   - the `?` and `readonly` modifiers, and the `-?` / `-readonly` removals
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * Time budget: ~15 minutes.
 */

export type MyPartial<T> = T;

export type MyRequired<T> = T;

export type MyReadonly<T> = T;

export type Mutable<T> = T;
