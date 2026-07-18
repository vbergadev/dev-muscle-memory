/**
 * Exercise: retry
 *
 * Goal: Call fn; if it rejects, retry up to `times` total attempts. Resolve with the first success; reject with the last error if all attempts fail.
 *
 * Prerequisites:
 *   - async/await in a loop
 *   - try/catch
 *   - counting attempts
 *
 * References:
 *   - https://javascript.info/async-await
 *
 * Time budget: ~18 minutes.
 */

export function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  throw new Error('not implemented');
}
