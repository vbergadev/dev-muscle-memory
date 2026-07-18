/**
 * Exercise: deepClone
 *
 * Goal: Deep-clone a value made of plain objects, arrays and primitives, so that mutating the clone never affects the original (and vice versa).
 *
 * Prerequisites:
 *   - recursion over objects and arrays
 *   - distinguishing arrays vs plain objects vs primitives
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/structuredClone
 *
 * Rules:
 *   - Do not use `structuredClone` or `JSON.parse(JSON.stringify(...))`
 *
 * Time budget: ~20 minutes.
 */

export function deepClone<T>(value: T): T {
  throw new Error('not implemented');
}
