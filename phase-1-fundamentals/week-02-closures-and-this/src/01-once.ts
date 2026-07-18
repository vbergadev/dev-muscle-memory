/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Exercise: once
 *
 * Goal: Return a wrapped version of fn that only runs the first time it is called; subsequent calls return the first result without invoking fn again.
 *
 * Prerequisites:
 *   - closures capturing a flag and a cached value
 *   - higher-order functions
 *
 * References:
 *   - https://javascript.info/closure
 *
 * Time budget: ~12 minutes.
 */

export function once<T extends (...args: any[]) => any>(fn: T): T {
  throw new Error('not implemented');
}
