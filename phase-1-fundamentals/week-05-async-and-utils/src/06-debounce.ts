/**
 * Exercise: debounce
 *
 * Goal: Return a debounced function: it delays calling fn until `ms` have passed since the last call. Rapid calls reset the timer; only the last one fires.
 *
 * Prerequisites:
 *   - setTimeout/clearTimeout
 *   - closures over a timer handle
 *   - fake timers in tests
 *
 * References:
 *   - https://css-tricks.com/debouncing-throttling-explained-examples/
 *
 * Time budget: ~18 minutes.
 */

export function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  throw new Error('not implemented');
}
