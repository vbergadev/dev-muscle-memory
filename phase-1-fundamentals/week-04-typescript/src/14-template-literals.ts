/**
 * Exercise: template literal types (MyCapitalize / Replace / ReplaceAll)
 *
 * Goal: Manipulate string literal types with template literals and `infer`.
 *   - MyCapitalize<S>          -> uppercase the first character
 *   - Replace<S, From, To>     -> replace the FIRST occurrence of From with To
 *   - ReplaceAll<S, From, To>  -> replace EVERY occurrence of From with To
 *
 * Prerequisites:
 *   - template literal types (`` `${infer A}${infer B}` ``)
 *   - the intrinsic `Uppercase` helper
 *   - recursion for "replace all"
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 *
 * Time budget: ~20 minutes.
 */

export type MyCapitalize<S extends string> = S;

export type Replace<S extends string, From extends string, To extends string> = S;

export type ReplaceAll<S extends string, From extends string, To extends string> = S;
