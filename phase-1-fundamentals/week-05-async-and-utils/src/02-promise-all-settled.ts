/**
 * Exercise: promiseAllSettled
 *
 * Goal: Reimplement Promise.allSettled: resolve to an array describing each promise as fulfilled (with value) or rejected (with reason). Never rejects.
 *
 * Prerequisites:
 *   - handling both resolution and rejection per promise
 *   - discriminated unions
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
 *
 * Time budget: ~20 minutes.
 */

export function promiseAllSettled<T>(promises: Promise<T>[]): Promise<Array<{ status: 'fulfilled'; value: T } | { status: 'rejected'; reason: unknown }>> {
  throw new Error('not implemented');
}
