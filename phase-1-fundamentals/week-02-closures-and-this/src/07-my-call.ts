/**
 * Exercise: myCall
 *
 * Goal: Reimplement Function.prototype.call: invoke fn immediately with `thisArg` as its `this` and the given args.
 *
 * Prerequisites:
 *   - setting `this` by assigning fn as a temporary property of an object
 *   - deleting the temp property afterward
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 *
 * Rules:
 *   - Do not use the built-in `.call()`, `.apply()`, or `.bind()`
 *
 * Time budget: ~15 minutes.
 */

export function myCall(fn: (...args: any[]) => any, thisArg: any, ...args: any[]): any {
  throw new Error('not implemented');
}
