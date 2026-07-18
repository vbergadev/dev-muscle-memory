/**
 * Exercise: compose & pipe (FP)
 *
 * Goal: Implement compose(...fns) (right-to-left) and pipe(...fns) (left-to-right). compose(f, g)(x) === f(g(x)); pipe(f, g)(x) === g(f(x)).
 *
 * Prerequisites:
 *   - function composition
 *   - reduce/reduceRight over the fns array
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Function_composition_(computer_science)
 *
 * Time budget: ~18 minutes.
 */

export function compose(...fns: Array<(arg: any) => any>): (input: any) => any {
  throw new Error('not implemented');
}

export function pipe(...fns: Array<(arg: any) => any>): (input: any) => any {
  throw new Error('not implemented');
}
