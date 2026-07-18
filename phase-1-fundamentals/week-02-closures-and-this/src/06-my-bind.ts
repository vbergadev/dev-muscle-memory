/**
 * Exercise: myBind
 *
 * Goal: Reimplement Function.prototype.bind: return a new function that calls fn with `thisArg` as its `this` and with `bound` args prepended to the args it is later called with.
 *
 * Prerequisites:
 *   - how `this` works
 *   - `Function.prototype.apply`/`call` (you may use `apply`)
 *   - partial application
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 *
 * Rules:
 *   - Do not use the built-in `.bind()`
 *
 * Time budget: ~15 minutes.
 */

export function myBind(
  fn: (...args: any[]) => any,
  thisArg: any,
  ...bound: any[]
): (...args: any[]) => any {
  throw new Error('not implemented');
}
