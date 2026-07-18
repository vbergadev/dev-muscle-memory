/**
 * Exercise: withTimeout
 *
 * Goal: Return a promise that resolves/rejects with `promise` if it settles within `ms`, or rejects with an Error after `ms` if it does not.
 *
 * Prerequisites:
 *   - Promise.race idea
 *   - setTimeout inside a Promise
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * Time budget: ~15 minutes.
 */

export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  throw new Error('not implemented');
}
