/**
 * Exercise: createUserHandler (infrastructure)
 *
 * Goal: An Express handler factory makeCreateUserHandler(useCase). It reads req.body.name, calls useCase.execute(name), and responds 201 with the created user as JSON. The handler is the infrastructure adapter — it must not contain business rules.
 *
 * Prerequisites:
 *   - infrastructure adapts framework <-> use case
 *   - keeping controllers thin
 *   - async handlers
 *
 * References:
 *   - https://expressjs.com/en/guide/routing.html
 *
 * Time budget: ~20 minutes.
 */

import type { RequestHandler } from 'express';

export interface CreateUserUseCase {
  execute(name: string): Promise<{ id: string; name: string }>;
}

export function makeCreateUserHandler(useCase: CreateUserUseCase): RequestHandler {
  throw new Error('not implemented');
}
