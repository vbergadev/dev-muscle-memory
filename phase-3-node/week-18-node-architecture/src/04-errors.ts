/**
 * Exercise: Typed errors + httpStatusFor
 *
 * Goal: Define an error hierarchy (DomainError base; NotFoundError and ValidationError extend it) and a function httpStatusFor(error) mapping: NotFoundError -> 404, ValidationError -> 400, anything else -> 500.
 *
 * Prerequisites:
 *   - extending Error correctly (name, prototype)
 *   - discriminating error types (instanceof)
 *   - centralized error -> HTTP mapping
 *
 * References:
 *   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 * Time budget: ~20 minutes.
 */

export class DomainError extends Error {}
export class NotFoundError extends DomainError {}
export class ValidationError extends DomainError {}

export function httpStatusFor(_error: unknown): number {
  throw new Error('not implemented');
}
