/**
 * Exercise: CreateUser use case
 *
 * Goal: An application use case CreateUser that depends on a UserRepository port (not a concrete db). execute(name): saves a new user and returns it; if a user with that name already exists, throw an Error matching /exists/.
 *
 * Prerequisites:
 *   - use cases orchestrate domain + ports
 *   - depending on an interface (port), not an implementation
 *   - dependency injection via the constructor
 *
 * References:
 *   - https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
 *
 * Time budget: ~25 minutes.
 */

export type User = { id: string; name: string };

export interface UserRepository {
  save(user: User): Promise<void>;
  findByName(name: string): Promise<User | null>;
}

export class CreateUser {
  constructor(private readonly repo: UserRepository) {}

  execute(_name: string): Promise<User> {
    throw new Error('not implemented');
  }
}
