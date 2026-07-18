/**
 * Exercise: promiseRace
 *
 * Goal: Reimplement Promise.race: settle with the same outcome as the first promise to settle (resolve or reject).
 *
 * Prerequisites:
 *   - the Promise constructor
 *   - first-settle-wins
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 *
 * Time budget: ~15 minutes.
 */

export function promiseRace<T>(promises: Promise<T>[]): Promise<T> {
  throw new Error('not implemented');
}
