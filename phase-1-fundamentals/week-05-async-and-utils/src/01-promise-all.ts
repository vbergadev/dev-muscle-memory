/**
 * Exercise: promiseAll
 *
 * Goal: Reimplement Promise.all: resolve to an array of results in input order once all promises resolve; reject as soon as any promise rejects.
 *
 * Prerequisites:
 *   - the Promise constructor
 *   - tracking completion count
 *   - preserving index order
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 *
 * Rules:
 *   - Do not call the built-in `Promise.all`
 *
 * Time budget: ~20 minutes.
 */

export function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  throw new Error('not implemented');
}
