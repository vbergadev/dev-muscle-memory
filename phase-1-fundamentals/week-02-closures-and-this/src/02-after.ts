/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Exercise: after
 *
 * Goal: Return a function that does nothing for the first n-1 calls and invokes fn from the nth call onward (returning its result).
 *
 * Prerequisites:
 *   - closures counting invocations
 *   - rest/spread parameters
 *
 * References:
 *   - https://javascript.info/closure
 *
 * Time budget: ~12 minutes.
 */

export function after<T extends (...args: any[]) => any>(
  n: number,
  fn: T,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  throw new Error('not implemented');
}
