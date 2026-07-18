/**
 * Exercise: infer on functions (MyReturnType / MyParameters / FirstParameter)
 *
 * Goal: Pull types out of a function type with `infer` inside a conditional.
 *   - MyReturnType<T>    -> the return type of the function
 *   - MyParameters<T>    -> the parameters of the function, as a tuple
 *   - FirstParameter<T>  -> the type of the first parameter (never if none)
 *
 * Prerequisites:
 *   - `infer` in a conditional type
 *   - function types and rest parameters in tuples
 *
 * References:
 *   - https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 *
 * Time budget: ~18 minutes.
 */

export type MyReturnType<T extends (...args: any[]) => any> = never;

export type MyParameters<T extends (...args: any[]) => any> = never;

export type FirstParameter<T extends (...args: any[]) => any> = never;
