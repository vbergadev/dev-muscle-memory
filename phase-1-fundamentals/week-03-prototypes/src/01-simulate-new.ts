/**
 * Exercise: simulateNew
 *
 * Goal: Do what the `new` operator does, without using `new`: create an object whose prototype is `Ctor.prototype`, run `Ctor` with `this` set to that object, and return the constructor result if it is an object, otherwise the created object.
 *
 * Prerequisites:
 *   - `Object.create`
 *   - the prototype chain (`Ctor.prototype`)
 *   - how `new` binds `this` and handles a returned object
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 *
 * Rules:
 *   - Do not use the `new` keyword
 *
 * Time budget: ~20 minutes.
 */

export function simulateNew(Ctor: Function, ...args: unknown[]): any {
  throw new Error('not implemented');
}
