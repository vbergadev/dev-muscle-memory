/**
 * Exercise: indexed access (First / Length / ElementType)
 *
 * Goal: Implement three small utilities that read into tuple/array types using
 * indexed access. No conditional types needed — just `T[...]`.
 *   - First<T>       -> the type of the first element of the tuple
 *   - Length<T>      -> the length of the tuple as a numeric literal
 *   - ElementType<T> -> the union of all element types
 *
 * Prerequisites:
 *   - indexed access types (`T[0]`, `T[number]`, `T['length']`)
 *   - tuple vs array types
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 *
 * Time budget: ~12 minutes.
 */

export type First<T extends readonly unknown[]> = T;

export type Length<T extends readonly unknown[]> = T;

export type ElementType<T extends readonly unknown[]> = T;
