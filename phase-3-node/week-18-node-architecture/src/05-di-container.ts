/**
 * Exercise: Tiny DI container
 *
 * Goal: A minimal dependency-injection container. createContainer() returns { register(key, factory), resolve(key) }. resolve runs the factory lazily and caches the result (singleton) — the factory must run at most once per key.
 *
 * Prerequisites:
 *   - manual dependency injection
 *   - lazy singletons (memoized factories)
 *   - a Map registry
 *
 * References:
 *   - https://en.wikipedia.org/wiki/Dependency_injection
 *
 * Time budget: ~22 minutes.
 */

export interface Container {
  register<T>(key: string, factory: () => T): void;
  resolve<T>(key: string): T;
}

export function createContainer(): Container {
  throw new Error('not implemented');
}
