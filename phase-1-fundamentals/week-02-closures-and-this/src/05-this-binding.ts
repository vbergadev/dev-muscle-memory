/**
 * Exercise: this binding with class fields
 *
 * Goal: Implement `Toggle.toggle` so it flips `on`, and works even when the method is detached from the instance (destructured / passed as a callback). This is the classic `this` binding problem — an arrow class field captures `this` lexically.
 *
 * Prerequisites:
 *   - how `this` is determined at call time
 *   - arrow functions capture `this` lexically
 *   - class fields
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * Time budget: ~12 minutes.
 */

export class Toggle {
  on = false;

  // Implement `toggle` so that `this` is correctly bound even when the method
  // is detached from the instance (e.g. passed as a callback). Then flip `on`.
  toggle = (): void => {
    throw new Error('not implemented');
  };
}
