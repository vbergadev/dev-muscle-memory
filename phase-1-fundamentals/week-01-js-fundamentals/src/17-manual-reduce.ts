/**
 * Exercise: manualReduce
 *
 * Goal: Reimplement Array.prototype.reduce with a required initial value.
 *
 * Prerequisites:
 *   - accumulator pattern
 *   - generics
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * Rules:
 *   - Do not call the built-in `.reduce()`
 *
 * Time budget: ~10 minutes. If you spend more, review the prerequisites first.
 */

export function manualReduce<T, U>(arr: T[], fn: (acc: U, x: T) => U, initial: U): U {
  throw new Error('not implemented');
}
