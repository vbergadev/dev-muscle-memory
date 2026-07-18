/**
 * Exercise: throttle
 *
 * Goal: Return a throttled function: fn runs immediately on the first call, then at most once every `ms` no matter how often the wrapper is called.
 *
 * Prerequisites:
 *   - tracking the last-run timestamp or a cooldown flag
 *   - fake timers
 *
 * References:
 *   - https://css-tricks.com/debouncing-throttling-explained-examples/
 *
 * Time budget: ~20 minutes.
 */

export function throttle<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  throw new Error('not implemented');
}
