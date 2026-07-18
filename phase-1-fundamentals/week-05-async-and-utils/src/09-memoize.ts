/**
 * Exercise: memoize
 *
 * Goal: Return a memoized version of fn that caches results by a string key derived from the arguments (JSON.stringify is fine), so repeated calls with equal args do not re-run fn.
 *
 * Prerequisites:
 *   - a Map cache
 *   - deriving a cache key from arguments
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Memoization
 *
 * Time budget: ~15 minutes.
 */

export function memoize<A extends any[], R>(fn: (...args: A) => R): (...args: A) => R {
  throw new Error('not implemented');
}
