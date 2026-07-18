/**
 * Exercise: parsing strings at the type level (TrimLeft / Trim / Split)
 *
 * Goal: Consume characters off a string literal type, recursively.
 *   - TrimLeft<S>   -> remove leading whitespace (space, tab, newline)
 *   - Trim<S>       -> remove leading AND trailing whitespace
 *   - Split<S, D>   -> split S on delimiter D into a tuple of pieces
 *
 * Prerequisites:
 *   - template literal inference (`` `${infer L}${D}${infer R}` ``)
 *   - recursion in conditional types
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 *
 * Time budget: ~20 minutes.
 */

export type TrimLeft<S extends string> = S;

export type Trim<S extends string> = S;

export type Split<S extends string, D extends string> = [S];
