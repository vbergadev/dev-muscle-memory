import { describe, it, expect } from 'vitest';
import { DomainError, NotFoundError, ValidationError, httpStatusFor } from '../src/04-errors';

describe('errors', () => {
  it('keeps the hierarchy', () => {
    expect(new NotFoundError('x') instanceof DomainError).toBe(true);
    expect(new ValidationError('x') instanceof DomainError).toBe(true);
  });

  it('maps error types to HTTP status', () => {
    expect(httpStatusFor(new NotFoundError('x'))).toBe(404);
    expect(httpStatusFor(new ValidationError('x'))).toBe(400);
    expect(httpStatusFor(new Error('x'))).toBe(500);
  });
});
